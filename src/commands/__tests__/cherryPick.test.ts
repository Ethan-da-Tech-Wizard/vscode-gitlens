import * as assert from 'assert';
import * as sinon from 'sinon';
import { createReference } from '@gitlens/git/utils/reference.utils.js';
import { SubscriptionState } from '../../constants.subscription.js';
import type { Container } from '../../container.js';
import type { GlRepository } from '../../git/models/repository.js';
import type { QuickPickItemOfT } from '../../quickpicks/items/common.js';
import { Directive } from '../../quickpicks/items/directive.js';
import { CherryPickGitCommand } from '../git/cherry-pick.js';
import type { QuickPickStep } from '../quick-wizard/models/steps.quickpick.js';

suite('CherryPickGitCommand mainline', () => {
	let command: CherryPickGitCommand;
	let cherryPick: sinon.SinonStub;
	let detectConflicts: sinon.SinonStub;
	let getCommit: sinon.SinonStub;
	const repoPath = '/repo';
	const firstParent = 'a'.repeat(40);
	const secondParent = 'b'.repeat(40);
	const merge = 'c'.repeat(40);
	const normal = 'd'.repeat(40);

	function createCommand(refs: string[], mainline?: number): CherryPickGitCommand {
		cherryPick = sinon.stub().resolves({ conflicted: false });
		detectConflicts = sinon.stub().resolves({ status: 'clean' });
		getCommit = sinon.stub();
		for (const [ref, parents, summary] of [
			[firstParent, [], 'First parent'],
			[secondParent, [], 'Second parent'],
			[merge, [firstParent, secondParent], 'Merge feature'],
			[normal, [merge], 'Follow-up'],
		] as const) {
			getCommit.withArgs(ref).resolves({ ref: ref, sha: ref, parents: parents, summary: summary });
		}
		const repo = {
			id: repoPath,
			path: repoPath,
			git: {
				branches: {
					getBranch: sinon
						.stub()
						.resolves(
							createReference('main', repoPath, { refType: 'branch', name: 'main', remote: false }),
						),
					getBranchesWithCommits: sinon.stub().resolves([]),
					getPotentialApplyConflicts: detectConflicts,
				},
				commits: { getCommit: getCommit },
				ops: { cherryPick: cherryPick },
			},
		} as unknown as GlRepository;
		const container = {
			git: { openRepositories: [repo] },
			views: { commits: {} },
			subscription: { getSubscription: sinon.stub().resolves({ state: SubscriptionState.Paid }) },
			telemetry: { sendEvent: sinon.stub() },
		} as unknown as Container;
		command = new CherryPickGitCommand(container, {
			command: 'cherry-pick',
			state: {
				repo: repo,
				references: refs.map(ref => createReference(ref, repoPath, { refType: 'revision' })),
				mainline: mainline,
			},
		});
		command.startedFrom = 'command';
		return command;
	}

	async function nextPick(selection?: QuickPickItemOfT[] | Directive): Promise<QuickPickStep> {
		const result = await command.next(selection);
		assert.ok(result.value?.type === 'pick');
		return result.value as QuickPickStep;
	}

	async function chooseParent(parent: number): Promise<QuickPickStep> {
		const step = await nextPick();
		const items = (await step.items) as QuickPickItemOfT<number>[];
		const item = items.find(item => item.item === parent);
		assert.ok(item, `Expected parent ${parent} to be offered`);
		return nextPick([item]);
	}

	teardown(() => command?.terminate());

	[1, 2].forEach(mainline => {
		test(`uses parent ${mainline} for both conflict preview and execution`, async () => {
			createCommand([merge]);
			const confirm = await chooseParent(mainline);
			assert.strictEqual(confirm.isConfirmationStep, true);
			sinon.assert.calledWith(detectConflicts, 'main', [merge], {
				mainline: mainline,
				stopOnFirstConflict: true,
			});
			const items = (await confirm.items) as QuickPickItemOfT<string[]>[];
			const item = items.find(item => Array.isArray(item.item) && item.item.length === 0);
			assert.ok(item);
			const result = await command.next([item]);
			assert.strictEqual(result.done, true);
			sinon.assert.calledOnceWithExactly(cherryPick, [merge], {
				edit: false,
				mainline: mainline,
				noCommit: false,
			});
		});
	});

	test('shows parent commit summaries and one-based numbers', async () => {
		createCommand([merge]);
		const step = await nextPick();
		const items = (await step.items) as QuickPickItemOfT<number>[];
		assert.deepStrictEqual(
			items.map(item => item.item),
			[1, 2],
		);
		assert.deepStrictEqual(
			items.map(item => item.detail),
			['First parent', 'Second parent'],
		);
	});

	test('does not ask for a parent for ordinary commits or retain a stale mainline', async () => {
		createCommand([normal], 2);
		const confirm = await nextPick();
		assert.strictEqual(confirm.isConfirmationStep, true);
		const items = (await confirm.items) as QuickPickItemOfT<string[]>[];
		const item = items.find(item => Array.isArray(item.item) && item.item.length === 0);
		assert.ok(item);
		await command.next([item]);
		sinon.assert.calledOnceWithExactly(cherryPick, [normal], {
			edit: false,
			mainline: undefined,
			noCommit: false,
		});
	});

	test('offers only parent 1 when a batch also contains ordinary commits', async () => {
		createCommand([normal, merge]);
		const step = await nextPick();
		assert.deepStrictEqual(
			(await step.items).map(item => (item as QuickPickItemOfT<number>).item),
			[1],
		);
	});

	test('preserves back navigation to the menu when no parent selection is needed', async () => {
		createCommand([normal]);
		command.startedFrom = 'menu';
		const confirm = await nextPick();
		assert.strictEqual(confirm.isConfirmationStep, true);
		assert.strictEqual(command.stepsNavigation?.canGoBack, true);
		const result = await command.next(Directive.Back);
		assert.strictEqual(result.done, true);
		sinon.assert.notCalled(cherryPick);
	});

	test('offers only parent numbers shared by all selected merges', async () => {
		createCommand([normal, merge]);
		getCommit.withArgs(normal).resolves({ parents: [firstParent, secondParent, merge] });
		const step = await nextPick();
		assert.deepStrictEqual(
			(await step.items).map(item => (item as QuickPickItemOfT<number>).item),
			[1, 2],
		);
	});

	test('offers every parent of an octopus merge', async () => {
		createCommand([merge]);
		getCommit.withArgs(merge).resolves({ parents: [firstParent, secondParent, normal] });
		const step = await nextPick();
		assert.deepStrictEqual(
			(await step.items).map(item => (item as QuickPickItemOfT<number>).item),
			[1, 2, 3],
		);
	});

	test('can go back from confirmation and choose a different parent', async () => {
		createCommand([merge]);
		await chooseParent(1);
		const parents = await nextPick(Directive.Back);
		assert.ok(!parents.isConfirmationStep);
		const items = (await parents.items) as QuickPickItemOfT<number>[];
		await nextPick([items[1]]);
		sinon.assert.calledWith(detectConflicts, 'main', [merge], { mainline: 2, stopOnFirstConflict: true });
		sinon.assert.notCalled(cherryPick);
	});

	test('leaves the repository untouched when the parent selection is cancelled', async () => {
		createCommand([merge]);
		await nextPick();
		const result = await command.next(Directive.Cancel);
		assert.strictEqual(result.done, true);
		sinon.assert.notCalled(cherryPick);
	});

	test('preserves the edit and no-commit confirmation choices', async () => {
		for (const flag of ['--edit', '--no-commit']) {
			createCommand([merge]);
			const confirm = await chooseParent(2);
			const items = (await confirm.items) as QuickPickItemOfT<string[]>[];
			const item = items.find(item => Array.isArray(item.item) && item.item.includes(flag));
			assert.ok(item);
			await command.next([item]);
			sinon.assert.calledOnceWithExactly(cherryPick, [merge], {
				edit: flag === '--edit',
				mainline: 2,
				noCommit: flag === '--no-commit',
			});
		}
	});
});

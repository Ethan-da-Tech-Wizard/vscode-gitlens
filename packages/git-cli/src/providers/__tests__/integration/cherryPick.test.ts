import * as assert from 'assert';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { CherryPickError } from '@gitlens/git/errors.js';
import type { TestRepo } from './helpers.js';
import { addCommit, createBranch, createTestRepo, getHeadSha } from './helpers.js';

suite('OperationsGitSubProvider.cherryPick mainline', () => {
	let repo: TestRepo;
	let base: string;
	let merge: string;

	setup(() => {
		repo = createTestRepo();
		base = getHeadSha(repo.path);
		createBranch(repo.path, 'feature');
		addCommit(repo.path, 'main.txt', 'main\n', 'Main change');
		execFileSync('git', ['checkout', 'feature'], { cwd: repo.path, stdio: 'pipe' });
		addCommit(repo.path, 'feature.txt', 'feature\n', 'Feature change');
		execFileSync('git', ['checkout', 'main'], { cwd: repo.path, stdio: 'pipe' });
		execFileSync('git', ['merge', '--no-ff', '-m', 'Merge feature', 'feature'], {
			cwd: repo.path,
			stdio: 'pipe',
		});
		merge = getHeadSha(repo.path);
		execFileSync('git', ['checkout', '-b', 'target', base], { cwd: repo.path, stdio: 'pipe' });
	});

	teardown(() => repo?.cleanup());

	[1, 2].forEach(mainline => {
		test(`applies only the changes relative to parent ${mainline}`, async () => {
			const result = await repo.provider.ops.cherryPick(repo.path, [merge], { mainline: mainline });
			assert.strictEqual(result.conflicted, false);
			const applied = mainline === 1 ? 'feature.txt' : 'main.txt';
			const excluded = mainline === 1 ? 'main.txt' : 'feature.txt';
			assert.ok(existsSync(join(repo.path, applied)));
			assert.ok(!existsSync(join(repo.path, excluded)));
			assert.strictEqual(
				execFileSync('git', ['diff-tree', '--no-commit-id', '--name-only', '-r', 'HEAD'], {
					cwd: repo.path,
					encoding: 'utf8',
				}).trim(),
				applied,
			);
		});
	});

	test('preserves no-commit when selecting the second parent', async () => {
		const result = await repo.provider.ops.cherryPick(repo.path, [merge], { mainline: 2, noCommit: true });
		assert.strictEqual(result.conflicted, false);
		assert.strictEqual(getHeadSha(repo.path), base);
		assert.strictEqual(readFileSync(join(repo.path, 'main.txt'), 'utf8'), 'main\n');
		assert.strictEqual(
			execFileSync('git', ['diff', '--cached', '--name-only'], { cwd: repo.path, encoding: 'utf8' }).trim(),
			'main.txt',
		);
	});

	test('continues to apply ordinary commits without a mainline', async () => {
		const result = await repo.provider.ops.cherryPick(repo.path, ['feature']);
		assert.strictEqual(result.conflicted, false);
		assert.strictEqual(readFileSync(join(repo.path, 'feature.txt'), 'utf8'), 'feature\n');
	});

	test('applies mixed merge and ordinary commits in order with the first parent', async () => {
		execFileSync('git', ['checkout', 'main'], { cwd: repo.path, stdio: 'pipe' });
		addCommit(repo.path, 'feature.txt', 'feature\nfollow-up\n', 'Follow-up');
		const afterMerge = getHeadSha(repo.path);
		execFileSync('git', ['checkout', 'target'], { cwd: repo.path, stdio: 'pipe' });

		const result = await repo.provider.ops.cherryPick(repo.path, [afterMerge, merge], { mainline: 1 });
		assert.strictEqual(result.conflicted, false);
		assert.strictEqual(readFileSync(join(repo.path, 'feature.txt'), 'utf8'), 'feature\nfollow-up\n');
		assert.ok(!existsSync(join(repo.path, 'main.txt')));
	});

	test('surfaces an invalid parent as a cherry-pick error', async () => {
		await assert.rejects(repo.provider.ops.cherryPick(repo.path, [merge], { mainline: 3 }), (ex: unknown) =>
			CherryPickError.is(ex),
		);
		assert.strictEqual(getHeadSha(repo.path), base);
	});

	test('previews conflicts against the chosen parent and keeps parent choices separate in the cache', async () => {
		addCommit(repo.path, 'main.txt', 'target\n', 'Conflicting target change');
		const target = getHeadSha(repo.path);
		const first = await repo.provider.branches.getPotentialApplyConflicts(repo.path, target, [merge], {
			mainline: 1,
			stopOnFirstConflict: true,
		});
		const second = await repo.provider.branches.getPotentialApplyConflicts(repo.path, target, [merge], {
			mainline: 2,
			stopOnFirstConflict: true,
		});
		assert.strictEqual(first.status, 'clean');
		assert.strictEqual(second.status, 'conflicts');
		if (second.status === 'conflicts') {
			assert.deepStrictEqual(
				second.conflict.files.map(file => file.path),
				['main.txt'],
			);
		}
		assert.strictEqual(getHeadSha(repo.path), target, 'The preview must not change the repository');

		const result = await repo.provider.ops.cherryPick(repo.path, [merge], { mainline: 2 });
		assert.strictEqual(result.conflicted, true);
		assert.deepStrictEqual(
			result.conflicts?.map(file => file.path),
			['main.txt'],
		);
	});
});

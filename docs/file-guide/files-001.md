# Files 1 of 16 — GitLens — Upstream Fork

[All pages](../FILE_GUIDE.md) · [Project guide](../PROJECT_GUIDE.md)

| File | Role and useful details |
| --- | --- |
| [.agents/resume](../../.agents/resume) | Command-line automation for resume; review prerequisites and side effects before executing. |
| [.agents/setup](../../.agents/setup) | Command-line automation for setup; review prerequisites and side effects before executing. |
| [.augment/settings.json](../../.augment/settings.json) | Structured settings data; top-level fields: `mcpServers`. |
| [.augment/skills](../../.augment/skills) | Symbolic-link entry; points to a separate path rather than containing the target’s files. |
| [.browserslistrc](../../.browserslistrc) | Tracked .browserslistrc resource in .; 361 bytes. |
| [.claude/agents/inspector-driver.md](../../.claude/agents/inspector-driver.md) | Documentation: Read-only contract. Covers Loading tools; Driving discipline (token-frugal by default); GitLens webview reference (root elements). |
| [.claude/evals/inspector-model-driver/driver-prompt.md](../../.claude/evals/inspector-model-driver/driver-prompt.md) | Documentation: Driver prompt templates. Covers Template W — whole-sweep (C1 Sonnet, C2 Haiku); Template D — driver split (C3 Sonnet driver, C4 Haiku driver); Capturing metrics. |
| [.claude/evals/inspector-model-driver/eval.workflow.mjs](../../.claude/evals/inspector-model-driver/eval.workflow.mjs) | Source module for eval.workflow; defines `driverPrompt`. |
| [.claude/evals/inspector-model-driver/scorecard.md](../../.claude/evals/inspector-model-driver/scorecard.md) | Documentation: Scorecard. Covers Ground truth (record before scoring); Results; T1 — read-only. |
| [.claude/evals/inspector-model-driver/tasks.md](../../.claude/evals/inspector-model-driver/tasks.md) | Documentation: Task suite. Covers T1 — Read-only state inspection · type: `read-only`; T2 — Click → state-correct verification · type: `L1-verify`; T3 — Visual / layout check · type: `visual`. |
| [.claude/hooks/css-template-guard.mts](../../.claude/hooks/css-template-guard.mts) | Tracked css template guard resource in .claude/hooks; 4,958 bytes. |
| [.claude/hooks/worktree.mts](../../.claude/hooks/worktree.mts) | Tracked worktree resource in .claude/hooks; 3,062 bytes. |
| [.claude/settings.json](../../.claude/settings.json) | Structured settings data; top-level fields: `enabledPlugins`, `hooks`. |
| [.claude/skills/a11y-audit/REFRESH.md](../../.claude/skills/a11y-audit/REFRESH.md) | Documentation: Refresh checklist. Covers Sources; Process; References currently tracked. |
| [.claude/skills/a11y-audit/SKILL.md](../../.claude/skills/a11y-audit/SKILL.md) | Documentation: A11y Audit. Covers How to use this skill; Detection spine; Step 1 — Framework. |
| [.claude/skills/a11y-audit/references/aria-patterns.md](../../.claude/skills/a11y-audit/references/aria-patterns.md) | Documentation: ARIA Patterns — Completeness Table and Authoring Notes. Covers Pattern completeness table; Plain-language blurbs (for the human reading the audit); Grid. |
| [.claude/skills/a11y-audit/references/framework-specific.md](../../.claude/skills/a11y-audit/references/framework-specific.md) | Documentation: Framework-Specific Audit Notes. Covers React; Common anti-patterns; React-bootstrap specifics. |
| [.claude/skills/a11y-audit/references/output-format.md](../../.claude/skills/a11y-audit/references/output-format.md) | Documentation: Output Format — Layer 1 / 2 / 3 Templates. Covers Layer 1 — Summary; Template; A11y Audit — [target path]. |
| [.claude/skills/a11y-audit/references/safety-rules.md](../../.claude/skills/a11y-audit/references/safety-rules.md) | Documentation: Safety Rules — Fixes the Skill Must Never Emit. Covers Rule 1 — Pattern completeness: no orphan ARIA roles; Rule 2 — No `tabIndex` without keyboard handlers; Rule 3 — No container role without child roles. |
| [.claude/skills/a11y-audit/references/shared-component-rules.md](../../.claude/skills/a11y-audit/references/shared-component-rules.md) | Documentation: Shared-Component Rules — Rules 8 and 9 in Full. Covers Rule 8 — Semantic-element swaps in shared components must address visual regression; The Fix must do one of:; Banned. |
| [.claude/skills/a11y-audit/references/shared-discipline.md](../../.claude/skills/a11y-audit/references/shared-discipline.md) | Documentation: Shared audit discipline. Covers Pre-finalize scan — Unverified symbols inside code the dev would copy; Pre-finalize scan — Editing artifacts; Pre-finalize scan — Fix Confidence / Design Decision coherence. |
| [.claude/skills/a11y-audit/references/verification.md](../../.claude/skills/a11y-audit/references/verification.md) | Documentation: Verification Playbook — How to Test a11y Fixes. Covers Primary screen reader + browser pair — pick based on product type; Keyboard-only checklist (no mouse — anyone can run this); Automated sanity check. |
| [.claude/skills/a11y-audit/references/wcag-criteria.md](../../.claude/skills/a11y-audit/references/wcag-criteria.md) | Documentation: WCAG 2.1 AA Criteria — URL Map and Plain-English Impact. Covers Criteria commonly seen in audits; 1.1.1 Non-text Content; 1.3.1 Info and Relationships. |
| [.claude/skills/a11y-flow-audit/REFRESH.md](../../.claude/skills/a11y-flow-audit/REFRESH.md) | Documentation: Refresh checklist. Covers Sources; Process; References currently tracked. |
| [.claude/skills/a11y-flow-audit/SKILL.md](../../.claude/skills/a11y-flow-audit/SKILL.md) | Documentation: A11y Flow Audit. Covers How to use this skill; Detection spine; Step 1 — View boundary. |
| [.claude/skills/a11y-flow-audit/references/focus-flow.md](../../.claude/skills/a11y-flow-audit/references/focus-flow.md) | Documentation: Focus Flow — Tab Order, Modal Focus, Live Regions. Covers Tab order rules; Rule: Tab order matches visual reading order; Why `tabindex > 0` is banned. |
| [.claude/skills/a11y-flow-audit/references/headings.md](../../.claude/skills/a11y-flow-audit/references/headings.md) | Documentation: Headings — Hierarchy Rules and Skip-Link Patterns. Covers Heading hierarchy rules; One `` per view (strong default); Descending levels only (no skips). |
| [.claude/skills/a11y-flow-audit/references/landmarks.md](../../.claude/skills/a11y-flow-audit/references/landmarks.md) | Documentation: Landmarks — Roles, Labels, and Composition Rules. Covers Landmark roles and their HTML elements; The HTML-element shortcut; Labeling rules. |
| [.claude/skills/a11y-flow-audit/references/output-format.md](../../.claude/skills/a11y-flow-audit/references/output-format.md) | Documentation: Flow-Audit Output Format — Layer 1 / 2 / 3 Templates. Covers Layer 1 — Summary; Template; A11y Flow Audit — [view path]. |
| [.claude/skills/a11y-flow-audit/references/safety-rules.md](../../.claude/skills/a11y-flow-audit/references/safety-rules.md) | Documentation: Safety Rules — Flow-Level Fixes the Skill Must Never Emit. Covers Rule 1 — Single `` per view; Rule 2 — Heading hierarchy unbroken (no h1 → h3 skips); Rule 3 — Every repeated landmark labeled. |
| [.claude/skills/a11y-remediate/REFRESH.md](../../.claude/skills/a11y-remediate/REFRESH.md) | Documentation: Refresh checklist. Covers Process; References currently tracked. |
| [.claude/skills/a11y-remediate/SKILL.md](../../.claude/skills/a11y-remediate/SKILL.md) | Documentation: A11y Remediate. Covers How to use this skill; Detection spine; Step 1 — Audits in scope. |
| [.claude/skills/a11y-remediate/references/compliance-rollup.md](../../.claude/skills/a11y-remediate/references/compliance-rollup.md) | Documentation: Compliance Rollup — WCAG State Across Multiple Audits. Covers The three honest statements the proposal can make; Statement 1 — Per-file compliance after fixes (confident); Statement 2 — Cross-audit rollup (when multiple audits exist). |
| [.claude/skills/a11y-remediate/references/critical-path.md](../../.claude/skills/a11y-remediate/references/critical-path.md) | Documentation: Critical Path — Design Decisions as Serial Blockers. Covers What a critical path looks like for remediation; How to extract the critical path from audit output; The critical path template. |
| [.claude/skills/a11y-remediate/references/customer-framing.md](../../.claude/skills/a11y-remediate/references/customer-framing.md) | Documentation: Customer-Framing — Bounded, Honest, No-Jargon. Covers Three templates, picked based on current state; Template 1 — "We have a partial audit and known work"; Template 2 — "We are not yet able to make a Q3 commitment". |
| [.claude/skills/a11y-remediate/references/deferral-risk.md](../../.claude/skills/a11y-remediate/references/deferral-risk.md) | Documentation: Deferral Risk — What Happens If We Don't Fix This. Covers The two categories; User-harm risk; Contract / legal / commercial risk. |
| [.claude/skills/a11y-remediate/references/output-format.md](../../.claude/skills/a11y-remediate/references/output-format.md) | Documentation: Output Format — Remediation Proposal Structure. Covers Section 0 — Executive Summary (REQUIRED, one page, up top); Executive Summary; Section 1 — Header block. |
| [.claude/skills/a11y-remediate/references/staffing-translation.md](../../.claude/skills/a11y-remediate/references/staffing-translation.md) | Documentation: Staffing Translation — Engineer-Days to a Team's Real Calendar. Covers What the skill needs from the user; The translation formula (when context is available); Parallelization rules. |
| [.claude/skills/add-command/SKILL.md](../../.claude/skills/add-command/SKILL.md) | Documentation: /add-command - Create New Command. Covers Usage; Information Needed; Files to Create/Modify. |
| [.claude/skills/add-icon/SKILL.md](../../.claude/skills/add-icon/SKILL.md) | Documentation: /add-icon - Add GL Icon. Covers Usage; Workflow; 1. Add SVG File. |
| [.claude/skills/add-test/SKILL.md](../../.claude/skills/add-test/SKILL.md) | Documentation: /add-test - Generate Tests. Covers Usage; Unit Test Template; E2E Test Template. |
| [.claude/skills/add-webview/SKILL.md](../../.claude/skills/add-webview/SKILL.md) | Documentation: /add-webview - Create New Webview. Covers Usage; Information Needed; Files to Create. |
| [.claude/skills/audit-commits/SKILL.md](../../.claude/skills/audit-commits/SKILL.md) | Documentation: /audit-commits - Audit Commits. Covers Usage; Workflow; CHANGELOG Management. |
| [.claude/skills/challenge-plan/SKILL.md](../../.claude/skills/challenge-plan/SKILL.md) | Documentation: /challenge-plan - Challenge Plan. Covers Overview; Usage; Checklist. |
| [.claude/skills/changelog-story/SKILL.md](../../.claude/skills/changelog-story/SKILL.md) | Documentation: Changelog Story. Covers Inputs; Step 0 — Establish the pillars; Working rules (learned the hard way). |
| [.claude/skills/commit/SKILL.md](../../.claude/skills/commit/SKILL.md) | Documentation: /commit - Create Git Commit. Covers Usage; Commit Message Format; Workflow. |
| [.claude/skills/consolidate-commits/SKILL.md](../../.claude/skills/consolidate-commits/SKILL.md) | Documentation: Consolidate Branch Commits. Covers What makes a commit worth keeping separate; Step 1 — Inventory and audit; lines later work removes from files C touched — non-empty output = churn. |
| [.claude/skills/create-issue/SKILL.md](../../.claude/skills/create-issue/SKILL.md) | Documentation: /create-issue - Create GitHub Issue. Covers Usage; Workflow; Duplicate Detection. |
| [.claude/skills/deep-planning/SKILL.md](../../.claude/skills/deep-planning/SKILL.md) | Documentation: /deep-planning - Deep Planning. Covers Overview; Usage; Related Skills. |
| [.claude/skills/deep-review/SKILL.md](../../.claude/skills/deep-review/SKILL.md) | Documentation: /deep-review - Merge Gate Review. Covers Usage; Positioning; Step 1 — Delegate the bug hunt. |
| [.claude/skills/dev-scope/SKILL.md](../../.claude/skills/dev-scope/SKILL.md) | Documentation: /dev-scope - Scope Work into Goals. Covers Usage; Design Principle; Instructions. |
| [.claude/skills/investigate/SKILL.md](../../.claude/skills/investigate/SKILL.md) | Documentation: /investigate - Bug Investigation. Covers Pair with `/live-exercise` when the trace alone won't close the case; Usage; Mode Selection. |
| [.claude/skills/live-exercise/SKILL.md](../../.claude/skills/live-exercise/SKILL.md) | Documentation: /live-exercise — Live functionality, intent, and quality loop. Covers When to use vs other skills; Prerequisites; Lenses — applied every sweep. |
| [.claude/skills/live-inspect/SKILL.md](../../.claude/skills/live-inspect/SKILL.md) | Documentation: /live-inspect — Live Extension Inspection. Covers MCP Server (Preferred for Iterative Inspection); Reading host logs (gotchas); Typical Workflow. |
| [.claude/skills/live-pair/SKILL.md](../../.claude/skills/live-pair/SKILL.md) | Documentation: /live-pair — Interactive pair-programming with a live instance. Covers When to use vs other skills; Prerequisites; Interaction model. |
| [.claude/skills/live-perf/SKILL.md](../../.claude/skills/live-perf/SKILL.md) | Documentation: /live-perf — Live performance measurement and improvement. Covers When to use vs other skills; Prerequisites; Scope / Exercise / Baseline — derive from the invocation. |
| [.claude/skills/modern-css/REFRESH.md](../../.claude/skills/modern-css/REFRESH.md) | Documentation: Refresh checklist. Covers Sources; Process; Features currently tracked. |
| [.claude/skills/modern-css/SKILL.md](../../.claude/skills/modern-css/SKILL.md) | Documentation: Modern CSS. Covers How to use this skill; Detection spine; Step 1 — Browser target. |
| [.claude/skills/modern-css/references/animation.md](../../.claude/skills/modern-css/references/animation.md) | Documentation: Animation & Interaction. Covers Discipline rules; Features; Scroll-driven animations. |
| [.claude/skills/modern-css/references/cascade.md](../../.claude/skills/modern-css/references/cascade.md) | Documentation: Cascade & Specificity Control. Covers Discipline rules; Features; @layer. |
| [.claude/skills/modern-css/references/layout.md](../../.claude/skills/modern-css/references/layout.md) | Documentation: Layout & Sizing. Covers Discipline rules; Features; Container queries (basics). |
| [.claude/skills/modern-css/references/performance.md](../../.claude/skills/modern-css/references/performance.md) | Documentation: Performance & Rendering. Covers Discipline rules; Features; contain. |
| [.claude/skills/modern-css/references/responsive.md](../../.claude/skills/modern-css/references/responsive.md) | Documentation: Responsive Strategy. Covers Discipline rules; Features; @container (size queries). |
| [.claude/skills/modern-css/references/selectors.md](../../.claude/skills/modern-css/references/selectors.md) | Documentation: Selectors & State. Covers Discipline rules; Features; :has(). |
| [.claude/skills/modern-css/references/theming.md](../../.claude/skills/modern-css/references/theming.md) | Documentation: Theming & Color. Covers Discipline rules; Features; Custom properties (basics). |
| [.claude/skills/prioritize/SKILL.md](../../.claude/skills/prioritize/SKILL.md) | Documentation: /prioritize - Issue Prioritization & Resolution. Covers Usage; Instructions; Stage 0 — Gather Data. |
| [.claude/skills/review/SKILL.md](../../.claude/skills/review/SKILL.md) | Documentation: /review - Code Review & Impact Audit. Covers Usage; Review Priorities; Known Non-Issues (Do Not Flag). |
| [.claude/skills/triage/SKILL.md](../../.claude/skills/triage/SKILL.md) | Documentation: /triage - Issue Triage Toolkit. Covers Usage; Instructions; Stage 0 — Prepare Evidence Pack. |
| [.claude/skills/update-issues/SKILL.md](../../.claude/skills/update-issues/SKILL.md) | Documentation: /update-issues - Update GitHub Issues from Reports. Covers Usage; Instructions; Stage 0 — Load Report. |
| [.claude/skills/ux-review/SKILL.md](../../.claude/skills/ux-review/SKILL.md) | Documentation: /ux-review - User Experience Review. Covers Usage; When to Use /ux-review vs /deep-review; When to Skip. |
| [.claude/skills/worktree/SKILL.md](../../.claude/skills/worktree/SKILL.md) | Documentation: GitLens Worktree Creation. Covers Directory Convention; Branch Naming; Creating and Entering a Worktree. |
| [.devcontainer/devcontainer.json](../../.devcontainer/devcontainer.json) | Structured devcontainer data or evidence; inspect its schema before changing consumers. |
| [.fantasticonrc.js](../../.fantasticonrc.js) | Source module for .fantasticonrc. |
| [.git-blame-ignore-revs](../../.git-blame-ignore-revs) | Tracked .git blame ignore revs resource in .; 656 bytes. |
| [.gitattributes](../../.gitattributes) | Sets Git text/binary handling and repository-specific attributes. |
| [.github/CODEOWNERS](../../.github/CODEOWNERS) | Tracked CODEOWNERS resource in .github; 8 bytes. |
| [.github/ISSUE_TEMPLATE/bug_report.yml](../../.github/ISSUE_TEMPLATE/bug_report.yml) | Configuration or build metadata for bug report; read alongside the application or tool that loads it. |
| [.github/ISSUE_TEMPLATE/config.yml](../../.github/ISSUE_TEMPLATE/config.yml) | Configuration or build metadata for config; read alongside the application or tool that loads it. |
| [.github/ISSUE_TEMPLATE/feature_request.yml](../../.github/ISSUE_TEMPLATE/feature_request.yml) | Configuration or build metadata for feature request; read alongside the application or tool that loads it. |
| [.github/PULL_REQUEST_TEMPLATE.md](../../.github/PULL_REQUEST_TEMPLATE.md) | Documentation: ❤ Thank you for contributing to GitLens! ❤. Covers 🚨 IMPORTANT 🚨; ↑👆 DELETE above _before_ submitting 👆↑; Description. |
| [.github/agents/audit-commits.agent.md](../../.github/agents/audit-commits.agent.md) | Documentation: Commit Audit Agent. Covers Workflow; Issue Creation; Duplicate Detection. |
| [.github/agents/create-issue.agent.md](../../.github/agents/create-issue.agent.md) | Documentation: Issue Creator Agent. Covers Purpose; Workflow; Issue Creation. |
| [.github/agents/deep-review-orchestrator.agent.md](../../.github/agents/deep-review-orchestrator.agent.md) | Documentation: deep-review-orchestrator instructions. |
| [.github/workflows/cd-core.yml](../../.github/workflows/cd-core.yml) | GitHub Actions workflow for cd core; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/cd-pre.yml](../../.github/workflows/cd-pre.yml) | GitHub Actions workflow for cd pre; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/cd-stable.yml](../../.github/workflows/cd-stable.yml) | GitHub Actions workflow for cd stable; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/ci.yml](../../.github/workflows/ci.yml) | GitHub Actions workflow for ci; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/codeql.yml](../../.github/workflows/codeql.yml) | GitHub Actions workflow for codeql; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/issues-completed.yml](../../.github/workflows/issues-completed.yml) | GitHub Actions workflow for issues completed; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/issues-lock.yml](../../.github/workflows/issues-lock.yml) | GitHub Actions workflow for issues lock; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/issues-stale.yml](../../.github/workflows/issues-stale.yml) | GitHub Actions workflow for issues stale; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/merge-mate-review.yml](../../.github/workflows/merge-mate-review.yml) | GitHub Actions workflow for merge mate review; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/merge-mate.yml](../../.github/workflows/merge-mate.yml) | GitHub Actions workflow for merge mate; defines automation triggers, jobs, and build/check steps. |
| [.github/workflows/unit-tests.yml](../../.github/workflows/unit-tests.yml) | GitHub Actions workflow for unit tests; defines automation triggers, jobs, and build/check steps. |
| [.gitignore](../../.gitignore) | Defines local data, credentials, dependencies, and generated outputs that Git should leave untracked. |
| [.husky/pre-commit](../../.husky/pre-commit) | Tracked pre commit resource in .husky; 12 bytes. |
| [.mailmap](../../.mailmap) | Tracked .mailmap resource in .; 1,007 bytes. |
| [.mcp.json](../../.mcp.json) | Structured .mcp data; top-level fields: `mcpServers`. |
| [.oxfmtrc.json](../../.oxfmtrc.json) | Structured .oxfmtrc data; top-level fields: `arrowParens`, `endOfLine`, `trailingComma`, `printWidth`, `singleQuote`, `tabWidth`, `useTabs`, `sortPackageJson`, `overrides`. |
| [.oxlintrc.ci.json](../../.oxlintrc.ci.json) | Structured .oxlintrc.ci data or evidence; inspect its schema before changing consumers. |
| [.oxlintrc.json](../../.oxlintrc.json) | Structured .oxlintrc data or evidence; inspect its schema before changing consumers. |
| [.stylelintignore](../../.stylelintignore) | Tracked .stylelintignore resource in .; 695 bytes. |
| [.vscode-agent.json](../../.vscode-agent.json) | Structured .vscode agent data; top-level fields: `extensionId`, `buildCommand`, `activationWait`, `settings`. |
| [.vscode-test.mjs](../../.vscode-test.mjs) | Source module for .vscode test; defines `ensureXvfb`. |
| [.vscode/extensions.json](../../.vscode/extensions.json) | Structured extensions data or evidence; inspect its schema before changing consumers. |
| [.vscode/issues.github-issues](../../.vscode/issues.github-issues) | Tracked issues resource in .vscode; 2,008 bytes. |
| [.vscode/launch.json](../../.vscode/launch.json) | Structured launch data or evidence; inspect its schema before changing consumers. |
| [.vscode/queries.github-graphql-nb](../../.vscode/queries.github-graphql-nb) | Tracked queries resource in .vscode; 22,756 bytes. |
| [.vscode/settings.json](../../.vscode/settings.json) | Structured settings data; top-level fields: `chat.useAgentsMdFile`, `editor.codeActionsOnSave`, `files.insertFinalNewline`, `files.trimTrailingWhitespace`, `githubIssues.queries`, `[html][javascript][json][jsonc][markdown][scss][svg][typescript]`, `js/ts.preferences.importModuleSpecifier`, `oxc.enable.oxlint`, `oxc.enable.oxfmt`. |
| [.vscode/tasks.json](../../.vscode/tasks.json) | Structured tasks data or evidence; inspect its schema before changing consumers. |
| [.vscodeignore](../../.vscodeignore) | Tracked .vscodeignore resource in .; 924 bytes. |
| [AGENTS.md](../../AGENTS.md) | Repository-specific development instructions and continuity rules for coding assistants. |
| [BACKERS.md](../../BACKERS.md) | Documentation: Previous Sponsors. Covers Corporate Sponsors; User Sponsors. |
| [CHANGELOG.md](../../CHANGELOG.md) | Documentation: Change Log. Covers [Unreleased]; Added; Changed. |
| [CLAUDE.md](../../CLAUDE.md) | Reference notes for CLAUDE: @AGENTS.md. |
| [CODE_OF_CONDUCT.md](../../CODE_OF_CONDUCT.md) | Documentation: Contributor Covenant Code of Conduct. Covers Our Pledge; Our Standards; Our Responsibilities. |
| [CONTRIBUTING.md](../../CONTRIBUTING.md) | Documentation: Contributing. Covers Your First Code Contribution; Getting the code; Dependencies. |
| [LICENSE](../../LICENSE) | Preserved license, copyright, or attribution terms; read the full text before reusing the covered component. |
| [LICENSE.plus](../../LICENSE.plus) | Tracked LICENSE resource in .; 2,448 bytes. |
| [PROJECT_NOTES.md](../../PROJECT_NOTES.md) | Preserved detailed setup, usage, architecture, and development notes from the earlier README. |
| [README.md](../../README.md) | Project overview, current status, entry points, setup navigation, and documentation links. |
| [README.pre.md](../../README.pre.md) | Empty marker or reserved file; contains no executable behavior or data. |
| [ThirdPartyNotices.txt](../../ThirdPartyNotices.txt) | Preserved license, copyright, or attribution terms; read the full text before reusing the covered component. |
| [contributions.json](../../contributions.json) | Structured contributions data or evidence; inspect its schema before changing consumers. |
| [contributions.schema.json](../../contributions.schema.json) | Structured contributions.schema data; top-level fields: `$schema`, `type`, `properties`, `$defs`. |
| [custom-elements-manifest.config.mjs](../../custom-elements-manifest.config.mjs) | Source module for custom elements manifest.config; defines `rewriteSourceExtToJs`. |
| [docs/DEPENDENCIES.csv](../../docs/DEPENDENCIES.csv) | Machine-readable inventory of declared and locked dependencies, versions, reported licenses, and evidence URLs. |
| [docs/FILE_GUIDE.md](../../docs/FILE_GUIDE.md) | Index of the complete tracked-file guide, with one entry for every file and links to the paginated descriptions. |
| [docs/LICENSE_REVIEW.md](../../docs/LICENSE_REVIEW.md) | Original-code license, preserved component notices, dependency-license evidence, and unresolved distribution questions. |
| [docs/PROJECT_GUIDE.md](../../docs/PROJECT_GUIDE.md) | Maintainer orientation: purpose, important entry points, source layout, commands, and project-specific boundaries. |
| [docs/accessibility.md](../../docs/accessibility.md) | Documentation: Webview Accessibility Requirements. |
| [docs/agent-sessions.md](../../docs/agent-sessions.md) | Documentation: Agent Sessions. Covers The problem; Topology; Hook installation. |
| [docs/architecture.md](../../docs/architecture.md) | Documentation: GitLens Architecture Reference. Covers Testing Structure; Core Architectural Patterns; 1. Service Locator (Container). |
| [docs/coding-standards.md](../../docs/coding-standards.md) | Documentation: GitLens Coding Standards Reference. Covers Code Structure Principles; Error Handling; Implementation Quality Rules. |
| [docs/file-guide/files-001.md](../../docs/file-guide/files-001.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-002.md](../../docs/file-guide/files-002.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-003.md](../../docs/file-guide/files-003.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-004.md](../../docs/file-guide/files-004.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-005.md](../../docs/file-guide/files-005.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-006.md](../../docs/file-guide/files-006.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-007.md](../../docs/file-guide/files-007.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-008.md](../../docs/file-guide/files-008.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-009.md](../../docs/file-guide/files-009.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-010.md](../../docs/file-guide/files-010.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-011.md](../../docs/file-guide/files-011.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-012.md](../../docs/file-guide/files-012.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-013.md](../../docs/file-guide/files-013.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-014.md](../../docs/file-guide/files-014.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-015.md](../../docs/file-guide/files-015.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/file-guide/files-016.md](../../docs/file-guide/files-016.md) | One page of the tracked-file catalog; links each listed path to its role and source-derived details. |
| [docs/graph-details-panel-dataflow.md](../../docs/graph-details-panel-dataflow.md) | Documentation: Commit Graph Details Panel — Data Flow. Covers Conventions; Selection types and lenses; 1. WIP — normal. |
| [docs/graph-extensibility.md](../../docs/graph-extensibility.md) | Documentation: Commit Graph componentization. Covers Recommendation; Package boundaries; Composition model. |
| [docs/graph-keyboard.md](../../docs/graph-keyboard.md) | Documentation: Commit Graph Keyboard Architecture. Covers Resolution model; The chord vocabulary; Why Alt for the chrome toggles. |
| [docs/graph-update-pipeline.md](../../docs/graph-update-pipeline.md) | Documentation: Commit Graph Update Pipeline. Covers Why rows ship as deltas; Host-side rows ledger and splice; The rows channel: transport owns ordering, the domain owns recovery. |
| [docs/library-architecture.md](../../docs/library-architecture.md) | Documentation: Library Package Architecture — Creation, Data & Coupling Flow. Covers 1. Extension Entry Point and Provider Registration; 2. Standalone Service Creation (CLI path); 3. Consumer Data Flow (per-repository). |
| [docs/links.md](../../docs/links.md) | Documentation: Supported Links into GitLens. Covers Contents; Repository Items; GitKraken Cloud Items. |
| [docs/localization.md](../../docs/localization.md) | Documentation: Localization. Covers Authoring messages; Error messages; Catalogs and checks. |
| [docs/telemetry-events.md](../../docs/telemetry-events.md) | Documentation: GitLens Telemetry. Covers Global Attributes; Events; account/validation/failed. |
| [docs/testing.md](../../docs/testing.md) | Documentation: Testing Guide. Covers Testing Structure; Running Tests (for AI Assistants without VS Code API access); Run all unit tests. |
| [docs/triage-dev-skills.md](../../docs/triage-dev-skills.md) | Documentation: Issue Workflow Skills — Usage Guide. Covers Skills Overview; Triage Pipeline — Evaluate and categorize issues; Dev Pipeline — Scope, plan, and review implementation. |
| [docs/webview-accessibility-patterns.md](../../docs/webview-accessibility-patterns.md) | Documentation: Webview Keyboard Navigation & Focus Patterns. Covers 1. Roving tabindex groups (one tab stop for N controls); 2. Virtualized tree = single tab stop + an intra-row "dive"; 3. aria-activedescendant menus (keep real focus on the controller). |
| [docs/webview-architecture.md](../../docs/webview-architecture.md) | Documentation: Webview Architecture. Covers One stack; The RPC handshake; Shared-core pushes ride RPC. |
| [docs/webview-styling.md](../../docs/webview-styling.md) | Documentation: Webview Styling. Covers Foundations; `1rem = 10px`; Custom-property prefixes. |
| [images/dark/icon-activity.svg](../../images/dark/icon-activity.svg) | Image or interface asset for icon activity. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-azdo.svg](../../images/dark/icon-azdo.svg) | Image or interface asset for icon azdo. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-bitbucket.svg](../../images/dark/icon-bitbucket.svg) | Image or interface asset for icon bitbucket. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-branch-ahead.svg](../../images/dark/icon-branch-ahead.svg) | Image or interface asset for icon branch ahead. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-branch-behind.svg](../../images/dark/icon-branch-behind.svg) | Image or interface asset for icon branch behind. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-branch-diverged.svg](../../images/dark/icon-branch-diverged.svg) | Image or interface asset for icon branch diverged. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-branch-synced.svg](../../images/dark/icon-branch-synced.svg) | Image or interface asset for icon branch synced. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-branch.svg](../../images/dark/icon-branch.svg) | Image or interface asset for icon branch. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-check.svg](../../images/dark/icon-check.svg) | Image or interface asset for icon check. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-checkout.svg](../../images/dark/icon-checkout.svg) | Image or interface asset for icon checkout. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-commit-horizontal.svg](../../images/dark/icon-commit-horizontal.svg) | Image or interface asset for icon commit horizontal. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-compare-ref-working.svg](../../images/dark/icon-compare-ref-working.svg) | Image or interface asset for icon compare ref working. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-diff.svg](../../images/dark/icon-diff.svg) | Image or interface asset for icon diff. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-gerrit.svg](../../images/dark/icon-gerrit.svg) | Image or interface asset for icon gerrit. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-gitea.svg](../../images/dark/icon-gitea.svg) | Image or interface asset for icon gitea. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-github.svg](../../images/dark/icon-github.svg) | Image or interface asset for icon github. Source/asset rights remain separate from software-license terms. |
| [images/dark/icon-gitlab.svg](../../images/dark/icon-gitlab.svg) | Image or interface asset for icon gitlab. Source/asset rights remain separate from software-license terms. |

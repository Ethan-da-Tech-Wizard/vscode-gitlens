# Files 9 of 16 — GitLens — Upstream Fork

[All pages](../FILE_GUIDE.md) · [Project guide](../PROJECT_GUIDE.md)

| File | Role and useful details |
| --- | --- |
| [src/commands/createPullRequestOnRemote.ts](../../src/commands/createPullRequestOnRemote.ts) | Source module for createPullRequestOnRemote; defines `CreatePullRequestOnRemoteCommandArgs`, `CreatePullRequestOnRemoteCommand`. |
| [src/commands/diffFolderWithRevision.ts](../../src/commands/diffFolderWithRevision.ts) | Source module for diffFolderWithRevision; defines `DiffFolderWithRevisionCommandArgs`, `DiffFolderWithRevisionCommand`. |
| [src/commands/diffFolderWithRevisionFrom.ts](../../src/commands/diffFolderWithRevisionFrom.ts) | Source module for diffFolderWithRevisionFrom; defines `DiffFolderWithRevisionFromCommandArgs`, `DiffFolderWithRevisionFromCommand`. |
| [src/commands/diffLineWithPrevious.ts](../../src/commands/diffLineWithPrevious.ts) | Source module for diffLineWithPrevious; defines `DiffLineWithPreviousCommandArgs`, `DiffLineWithPreviousCommand`. |
| [src/commands/diffLineWithWorking.ts](../../src/commands/diffLineWithWorking.ts) | Source module for diffLineWithWorking; defines `DiffLineWithWorkingCommandArgs`, `DiffLineWithWorkingCommand`. |
| [src/commands/diffWith.ts](../../src/commands/diffWith.ts) | Source module for diffWith; defines `DiffWithCommandArgsRevision`, `DiffWithCommandArgs`, `DiffWithCommand`. |
| [src/commands/diffWithNext.ts](../../src/commands/diffWithNext.ts) | Source module for diffWithNext; defines `DiffWithNextCommandArgs`, `DiffWithNextCommand`. |
| [src/commands/diffWithPrevious.ts](../../src/commands/diffWithPrevious.ts) | Source module for diffWithPrevious; defines `DiffWithPreviousCommandArgs`, `DiffWithPreviousCommand`. |
| [src/commands/diffWithRevision.ts](../../src/commands/diffWithRevision.ts) | Source module for diffWithRevision; defines `DiffWithRevisionCommandArgs`, `DiffWithRevisionCommand`. |
| [src/commands/diffWithRevisionFrom.ts](../../src/commands/diffWithRevisionFrom.ts) | Source module for diffWithRevisionFrom; defines `DiffWithRevisionFromCommandArgs`, `DiffWithRevisionFromCommand`. |
| [src/commands/diffWithWorking.ts](../../src/commands/diffWithWorking.ts) | Source module for diffWithWorking; defines `DiffWithWorkingCommandArgs`, `DiffWithWorkingCommand`. |
| [src/commands/explainBase.ts](../../src/commands/explainBase.ts) | Source module for explainBase; defines `ExplainBaseArgs`, `ExplainCommandBase`, `openExplainDocument`. |
| [src/commands/explainBranch.ts](../../src/commands/explainBranch.ts) | Source module for explainBranch; defines `ExplainBranchCommandArgs`, `ExplainBranchCommand`. |
| [src/commands/explainCommit.ts](../../src/commands/explainCommit.ts) | Source module for explainCommit; defines `ExplainCommitCommandArgs`, `ExplainCommitCommand`. |
| [src/commands/explainStash.ts](../../src/commands/explainStash.ts) | Source module for explainStash; defines `ExplainStashCommandArgs`, `ExplainStashCommand`. |
| [src/commands/explainWip.ts](../../src/commands/explainWip.ts) | Source module for explainWip; defines `ExplainWipCommandArgs`, `ExplainWipCommand`. |
| [src/commands/externalDiff.ts](../../src/commands/externalDiff.ts) | Source module for externalDiff; defines `ExternalDiffFile`, `ExternalDiffCommandArgs`, `ExternalDiffCommand`. |
| [src/commands/generateChangelog.ts](../../src/commands/generateChangelog.ts) | Source module for generateChangelog; defines `GenerateChangelogCommandArgs`, `GenerateChangelogCommand`, `generateChangelogAndOpenMarkdownDocument`. |
| [src/commands/generateCommitMessage.ts](../../src/commands/generateCommitMessage.ts) | Source module for generateCommitMessage; defines `GenerateCommitMessageCommandArgs`, `GenerateCommitMessageCommand`. |
| [src/commands/ghpr/openOrCreateWorktree.ts](../../src/commands/ghpr/openOrCreateWorktree.ts) | Source module for openOrCreateWorktree; defines `GHPRPullRequestNode`, `GHPRPullRequest`, `OpenOrCreateWorktreeCommand`. |
| [src/commands/git/branch.ts](../../src/commands/git/branch.ts) | Source module for branch; defines `BranchContext`, `BranchGitCommandArgs`, `BranchGitCommand`. |
| [src/commands/git/branch/create.ts](../../src/commands/git/branch/create.ts) | Source module for create; defines `State`, `BranchCreateGitCommandArgs`, `BranchCreateGitCommand`, `to`. |
| [src/commands/git/branch/delete.ts](../../src/commands/git/branch/delete.ts) | Source module for delete; defines `State`, `BranchDeleteGitCommandArgs`, `BranchPruneGitCommandArgs`, `BranchDeleteGitCommand`. |
| [src/commands/git/branch/mergeTarget.ts](../../src/commands/git/branch/mergeTarget.ts) | Source module for mergeTarget; defines `State`, `BranchMergeTargetGitCommandArgs`, `BranchMergeTargetGitCommand`. |
| [src/commands/git/branch/rename.ts](../../src/commands/git/branch/rename.ts) | Source module for rename; defines `State`, `BranchRenameGitCommandArgs`, `BranchRenameGitCommand`. |
| [src/commands/git/branch/upstream.ts](../../src/commands/git/branch/upstream.ts) | Source module for upstream; defines `State`, `BranchUpstreamGitCommandArgs`, `BranchUpstreamGitCommand`. |
| [src/commands/git/cherry-pick.ts](../../src/commands/git/cherry-pick.ts) | Source module for cherry pick; defines `Context`, `State`, `CherryPickGitCommandArgs`, `CherryPickGitCommand`. |
| [src/commands/git/coauthors.ts](../../src/commands/git/coauthors.ts) | Source module for coauthors; defines `Context`, `State`, `CoAuthorsGitCommandArgs`, `CoAuthorsGitCommand`. |
| [src/commands/git/fetch.ts](../../src/commands/git/fetch.ts) | Source module for fetch; defines `Context`, `State`, `FetchGitCommandArgs`, `FetchGitCommand`. |
| [src/commands/git/log.ts](../../src/commands/git/log.ts) | Source module for log; defines `Context`, `State`, `LogGitCommandArgs`, `LogGitCommand`. |
| [src/commands/git/merge.ts](../../src/commands/git/merge.ts) | Source module for merge; defines `Context`, `State`, `MergeGitCommandArgs`, `MergeGitCommand`, `Toggles`. |
| [src/commands/git/pull.ts](../../src/commands/git/pull.ts) | Source module for pull; defines `Context`, `State`, `PullGitCommandArgs`, `PullGitCommand`. |
| [src/commands/git/push.ts](../../src/commands/git/push.ts) | Source module for push; defines `sortRemotesForPublish`, `remotePublishRank`, `getForcePushMode`, `getForcePushLabel`, `getForcePushDescription`, `getForcePushReposDetail`, `getForcePushBehindDetail` and 8 more symbols. |
| [src/commands/git/rebase.ts](../../src/commands/git/rebase.ts) | Source module for rebase; defines `Context`, `State`, `RebaseGitCommandArgs`, `RebaseGitCommand`, `Toggles`. |
| [src/commands/git/remote.ts](../../src/commands/git/remote.ts) | Source module for remote; defines `RemoteContext`, `RemoteGitCommandArgs`, `RemoteGitCommand`. |
| [src/commands/git/remote/add.ts](../../src/commands/git/remote/add.ts) | Source module for add; defines `State`, `RemoteAddGitCommandArgs`, `RemoteAddGitCommand`. |
| [src/commands/git/remote/prune.ts](../../src/commands/git/remote/prune.ts) | Source module for prune; defines `State`, `RemotePruneGitCommandArgs`, `RemotePruneGitCommand`. |
| [src/commands/git/remote/remove.ts](../../src/commands/git/remote/remove.ts) | Source module for remove; defines `State`, `RemoteRemoveGitCommandArgs`, `RemoteRemoveGitCommand`. |
| [src/commands/git/reset.ts](../../src/commands/git/reset.ts) | Source module for reset; defines `Context`, `State`, `ResetGitCommandArgs`, `ResetGitCommand`. |
| [src/commands/git/revert.ts](../../src/commands/git/revert.ts) | Source module for revert; defines `Context`, `State`, `RevertGitCommandArgs`, `RevertGitCommand`. |
| [src/commands/git/search.ts](../../src/commands/git/search.ts) | Source module for search; defines `Context`, `State`, `SearchGitCommandArgs`, `SearchGitCommand`, `updateSearchQuery`. |
| [src/commands/git/show.ts](../../src/commands/git/show.ts) | Source module for show; defines `Context`, `State`, `ShowGitCommandArgs`, `ShowGitCommand`. |
| [src/commands/git/stash.ts](../../src/commands/git/stash.ts) | Source module for stash; defines `StashContext`, `StashGitCommandArgs`, `StashGitCommand`. |
| [src/commands/git/stash/applyOrPop.ts](../../src/commands/git/stash/applyOrPop.ts) | Source module for applyOrPop; defines `State`, `StashApplyOrPopGitCommandArgs`, `StashApplyOrPopGitCommand`. |
| [src/commands/git/stash/drop.ts](../../src/commands/git/stash/drop.ts) | Source module for drop; defines `State`, `StashDropGitCommandArgs`, `StashDropGitCommand`. |
| [src/commands/git/stash/list.ts](../../src/commands/git/stash/list.ts) | Source module for list; defines `State`, `StashListGitCommandArgs`, `StashListGitCommand`. |
| [src/commands/git/stash/push.ts](../../src/commands/git/stash/push.ts) | Source module for push; defines `State`, `StashPushGitCommandArgs`, `StashPushGitCommand`. |
| [src/commands/git/stash/rename.ts](../../src/commands/git/stash/rename.ts) | Source module for rename; defines `State`, `StashRenameGitCommandArgs`, `StashRenameGitCommand`. |
| [src/commands/git/status.ts](../../src/commands/git/status.ts) | Source module for status; defines `Context`, `State`, `StatusGitCommandArgs`, `StatusGitCommand`. |
| [src/commands/git/switch.ts](../../src/commands/git/switch.ts) | Source module for switch; defines `Context`, `State`, `SwitchGitCommandArgs`, `SwitchGitCommand`, `Mode`. |
| [src/commands/git/tag.ts](../../src/commands/git/tag.ts) | Source module for tag; defines `TagContext`, `TagGitCommandArgs`, `TagGitCommand`. |
| [src/commands/git/tag/create.ts](../../src/commands/git/tag/create.ts) | Source module for create; defines `State`, `TagCreateGitCommandArgs`, `TagCreateGitCommand`. |
| [src/commands/git/tag/delete.ts](../../src/commands/git/tag/delete.ts) | Source module for delete; defines `State`, `TagDeleteGitCommandArgs`, `TagDeleteGitCommand`. |
| [src/commands/git/tag/push.ts](../../src/commands/git/tag/push.ts) | Source module for push; defines `State`, `TagPushGitCommandArgs`, `TagPushGitCommand`. |
| [src/commands/git/worktree.ts](../../src/commands/git/worktree.ts) | Source module for worktree; defines `WorktreeContext`, `WorktreeGitCommandArgs`, `WorktreeGitCommand`. |
| [src/commands/git/worktree/copyChanges.ts](../../src/commands/git/worktree/copyChanges.ts) | Source module for copyChanges; defines `State`, `WorktreeCopyChangesGitCommandArgs`, `getConfirmTitle`, `getConfirmTitleWithTarget`, `WorktreeCopyChangesGitCommand`, `getDetail`. |
| [src/commands/git/worktree/create.ts](../../src/commands/git/worktree/create.ts) | Source module for create; defines `getConfiguredOpenChoice`, `State`, `WorktreeCreateGitCommandArgs`, `WorktreeCreateGitCommand`, `Rows`. |
| [src/commands/git/worktree/delete.ts](../../src/commands/git/worktree/delete.ts) | Source module for delete; defines `State`, `WorktreeDeleteGitCommandArgs`, `WorktreeDeleteGitCommand`, `Toggles`. |
| [src/commands/git/worktree/open.ts](../../src/commands/git/worktree/open.ts) | Source module for open; defines `State`, `WorktreeOpenGitCommandArgs`, `WorktreeOpenGitCommand`. |
| [src/commands/gitWizard.ts](../../src/commands/gitWizard.ts) | Source module for gitWizard; defines `GitWizardCommand`, `getSubcommandArgs`. |
| [src/commands/help.ts](../../src/commands/help.ts) | Source module for help; defines `WhatsNewCommand`, `HelpCenterCommand`, `ReportIssueCommand`, `ShareFeedbackCommand`. |
| [src/commands/inspect.ts](../../src/commands/inspect.ts) | Source module for inspect; defines `InspectCommandArgs`, `InspectCommand`. |
| [src/commands/inviteToLiveShare.ts](../../src/commands/inviteToLiveShare.ts) | Source module for inviteToLiveShare; defines `InviteToLiveShareCommandArgs`, `InviteToLiveShareCommand`. |
| [src/commands/kepler.ts](../../src/commands/kepler.ts) | Source module for kepler; defines `KeplerOpenProductPageCommand`, `KeplerCommandArgs`, `KeplerCommand`, `toKeplerTaskPullRequest`. |
| [src/commands/logging.ts](../../src/commands/logging.ts) | Source module for logging; defines `values`, `VSCodeLogLevel`, `setOutputLogLevel`, `EnableDebugLoggingCommand`, `DisableDebugLoggingCommand`. |
| [src/commands/openAssociatedPullRequestOnRemote.ts](../../src/commands/openAssociatedPullRequestOnRemote.ts) | Source module for openAssociatedPullRequestOnRemote; defines `OpenAssociatedPullRequestOnRemoteCommand`. |
| [src/commands/openBranchOnRemote.ts](../../src/commands/openBranchOnRemote.ts) | Source module for openBranchOnRemote; defines `OpenBranchOnRemoteCommandArgs`, `OpenBranchOnRemoteCommand`. |
| [src/commands/openBranchesOnRemote.ts](../../src/commands/openBranchesOnRemote.ts) | Source module for openBranchesOnRemote; defines `OpenBranchesOnRemoteCommandArgs`, `OpenBranchesOnRemoteCommand`. |
| [src/commands/openChangedFiles.ts](../../src/commands/openChangedFiles.ts) | Source module for openChangedFiles; defines `OpenChangedFilesCommandArgs`, `OpenChangedFilesCommand`. |
| [src/commands/openChatAction.ts](../../src/commands/openChatAction.ts) | Source module for openChatAction; defines `OpenChatActionCommandArgs`, `OpenChatActionCommand`. |
| [src/commands/openCommitOnRemote.ts](../../src/commands/openCommitOnRemote.ts) | Source module for openCommitOnRemote; defines `OpenCommitOnRemoteCommandArgs`, `OpenCommitOnRemoteCommand`. |
| [src/commands/openComparisonOnRemote.ts](../../src/commands/openComparisonOnRemote.ts) | Source module for openComparisonOnRemote; defines `OpenComparisonOnRemoteCommandArgs`, `OpenComparisonOnRemoteCommand`. |
| [src/commands/openCurrentBranchOnRemote.ts](../../src/commands/openCurrentBranchOnRemote.ts) | Source module for openCurrentBranchOnRemote; defines `OpenCurrentBranchOnRemoteCommand`. |
| [src/commands/openDirectoryCompare.ts](../../src/commands/openDirectoryCompare.ts) | Source module for openDirectoryCompare; defines `OpenDirectoryCompareCommandArgs`, `OpenDirectoryCompareCommand`. |
| [src/commands/openFileAtRevision.ts](../../src/commands/openFileAtRevision.ts) | Source module for openFileAtRevision; defines `OpenFileAtRevisionCommandArgs`, `OpenFileAtRevisionCommand`. |
| [src/commands/openFileAtRevisionFrom.ts](../../src/commands/openFileAtRevisionFrom.ts) | Source module for openFileAtRevisionFrom; defines `OpenFileAtRevisionFromCommandArgs`, `OpenFileAtRevisionFromCommand`. |
| [src/commands/openFileFromRemote.ts](../../src/commands/openFileFromRemote.ts) | Source module for openFileFromRemote; defines `OpenFileFromRemoteCommand`, `OpenRevisionFromRemoteCommand`, `openFileOreRevisionFromRemote`. |
| [src/commands/openFileOnRemote.ts](../../src/commands/openFileOnRemote.ts) | Source module for openFileOnRemote; defines `OpenFileOnRemoteCommandArgs`, `OpenFileOnRemoteCommand`. |
| [src/commands/openIssueOnRemote.ts](../../src/commands/openIssueOnRemote.ts) | Source module for openIssueOnRemote; defines `OpenIssueOnRemoteCommandArgs`, `OpenIssueOnRemoteCommand`. |
| [src/commands/openOnRemote.ts](../../src/commands/openOnRemote.ts) | Source module for openOnRemote; defines `OpenOnRemoteCommand`, `processResource`. |
| [src/commands/openOnlyChangedFiles.ts](../../src/commands/openOnlyChangedFiles.ts) | Source module for openOnlyChangedFiles; defines `OpenOnlyChangedFilesCommandArgs`, `OpenOnlyChangedFilesCommand`, `matchingUri`. |
| [src/commands/openPullRequestOnRemote.ts](../../src/commands/openPullRequestOnRemote.ts) | Source module for openPullRequestOnRemote; defines `OpenPullRequestOnRemoteCommandArgs`, `OpenPullRequestOnRemoteCommand`. |
| [src/commands/openRepoOnRemote.ts](../../src/commands/openRepoOnRemote.ts) | Source module for openRepoOnRemote; defines `OpenRepoOnRemoteCommandArgs`, `OpenRepoOnRemoteCommand`. |
| [src/commands/openRevisionFile.ts](../../src/commands/openRevisionFile.ts) | Source module for openRevisionFile; defines `OpenRevisionFileCommandArgs`, `OpenRevisionFileCommand`. |
| [src/commands/openWorkingFile.ts](../../src/commands/openWorkingFile.ts) | Source module for openWorkingFile; defines `OpenWorkingFileCommandArgs`, `OpenWorkingFileCommand`. |
| [src/commands/patches.ts](../../src/commands/patches.ts) | Source module for patches; defines `CreatePatchCommandArgs`, `ApplyPatchFromClipboardCommandArgs`, `getCreatePatchArgsForScmStates`, `CreatePatchCommandBase`, `CreatePatchCommand`, `CopyPatchToClipboardCommand`, `ApplyPatchFromClipboardCommand` and 4 more symbols. |
| [src/commands/quick-wizard/models/quickWizard.ts](../../src/commands/quick-wizard/models/quickWizard.ts) | Source module for quickWizard; defines `CrossCommandReference`. |
| [src/commands/quick-wizard/models/steps.custom.ts](../../src/commands/quick-wizard/models/steps.custom.ts) | Source module for steps.custom; defines `CustomStep`. |
| [src/commands/quick-wizard/models/steps.quickinput.ts](../../src/commands/quick-wizard/models/steps.quickinput.ts) | Source module for steps.quickinput; defines `QuickInputStep`. |
| [src/commands/quick-wizard/models/steps.quickpick.ts](../../src/commands/quick-wizard/models/steps.quickpick.ts) | Source module for steps.quickpick; defines `QuickPickStep`. |
| [src/commands/quick-wizard/models/steps.ts](../../src/commands/quick-wizard/models/steps.ts) | Source module for steps. |
| [src/commands/quick-wizard/quickButtons.ts](../../src/commands/quick-wizard/quickButtons.ts) | Source module for quickButtons; defines `flipToggle`, `getQuickInputButtonLocation`, `isToggleChecked`, `createToggleButton`, `ToggleQuickInputButton`, `SelectableQuickInputButton`, `extends` and 5 more symbols. |
| [src/commands/quick-wizard/quickCommand.ts](../../src/commands/quick-wizard/quickCommand.ts) | Source module for quickCommand; defines `QuickCommand`, `should`. |
| [src/commands/quick-wizard/quickCommandWithSubcommands.ts](../../src/commands/quick-wizard/quickCommandWithSubcommands.ts) | Source module for quickCommandWithSubcommands; defines `QuickCommandWithSubcommands`. |
| [src/commands/quick-wizard/quickWizardCommandBase.ts](../../src/commands/quick-wizard/quickWizardCommandBase.ts) | Source module for quickWizardCommandBase; defines `QuickWizardCommandBase`, `goBack`, `loadMore`, `getValidatedItem`, `validation`. |
| [src/commands/quick-wizard/quickWizardRootStep.ts](../../src/commands/quick-wizard/quickWizardRootStep.ts) | Source module for quickWizardRootStep; defines `QuickWizardRootStep`. |
| [src/commands/quick-wizard/steps/access.ts](../../src/commands/quick-wizard/steps/access.ts) | Source module for access; defines `getAccessGateErrorMessage`. |
| [src/commands/quick-wizard/steps/branches.ts](../../src/commands/quick-wizard/steps/branches.ts) | Source module for branches; defines `getBranches`. |
| [src/commands/quick-wizard/steps/commits.ts](../../src/commands/quick-wizard/steps/commits.ts) | Source module for commits; defines `getItems`, `getShowCommitOrStashStepItems`, `getShowCommitOrStashFileStepItems`. |
| [src/commands/quick-wizard/steps/contributors.ts](../../src/commands/quick-wizard/steps/contributors.ts) | Source module for contributors; defines `getItems`. |
| [src/commands/quick-wizard/steps/references.ts](../../src/commands/quick-wizard/steps/references.ts) | Source module for references; defines `createBranchQuickPickItems`, `getBranchesAndOrTags`, `getPlaceholder`, `getEmptyPlaceholder`, `getNoReferencesPlaceholder`, `getBranchesAndOrTagsFn`. |
| [src/commands/quick-wizard/steps/remotes.ts](../../src/commands/quick-wizard/steps/remotes.ts) | Source module for remotes; defines `getRemotes`. |
| [src/commands/quick-wizard/steps/repositories.ts](../../src/commands/quick-wizard/steps/repositories.ts) | Source module for repositories; defines `canSkipRepositoryPick`, `canSkipRepositoriesPick`, `getShowRepositoryStatusStepItems`. |
| [src/commands/quick-wizard/steps/stashes.ts](../../src/commands/quick-wizard/steps/stashes.ts) | Source module for stashes. |
| [src/commands/quick-wizard/steps/tags.ts](../../src/commands/quick-wizard/steps/tags.ts) | Source module for tags; defines `getTags`. |
| [src/commands/quick-wizard/steps/worktrees.ts](../../src/commands/quick-wizard/steps/worktrees.ts) | Source module for worktrees; defines `getWorktrees`. |
| [src/commands/quick-wizard/stepsController.ts](../../src/commands/quick-wizard/stepsController.ts) | Source module for stepsController; defines `StepController`, `StepsController`. |
| [src/commands/quick-wizard/utils/quickWizard.utils.ts](../../src/commands/quick-wizard/utils/quickWizard.utils.ts) | Source module for quickWizard.utils; defines `createCrossCommandReference`, `isCrossCommandReference`. |
| [src/commands/quick-wizard/utils/steps.utils.ts](../../src/commands/quick-wizard/utils/steps.utils.ts) | Source module for steps.utils; defines `canInputStepContinue`, `canPickStepContinue`, `canStepContinue`, `createConfirmStep`, `refreshConfirmStepItems`, `rerenderConfirmStepItems`, `createCustomStep` and 9 more symbols. |
| [src/commands/quickWizard.ts](../../src/commands/quickWizard.ts) | Source module for quickWizard; defines `QuickWizardCommand`. |
| [src/commands/rebaseEditor.ts](../../src/commands/rebaseEditor.ts) | Source module for rebaseEditor; defines `DisableRebaseEditorCommand`, `EnableRebaseEditorCommand`, `RebaseAbort`, `RebaseContinue`, `RebaseRefresh`, `ReopenRebaseAsInteractiveEditor`, `ReopenRebaseAsTextEditor`. |
| [src/commands/rebaseStack.ts](../../src/commands/rebaseStack.ts) | Source module for rebaseStack; defines `RebaseStackCommandArgs`, `rebaseStack`, `RebaseStackCommand`, `AutoRebaseStackCommand`, `ForcePushStackCommandArgs`, `ForcePushStackCommand`. |
| [src/commands/recompose.utils.ts](../../src/commands/recompose.utils.ts) | Source module for recompose.utils; defines `resolveRecomposeAnchor`. |
| [src/commands/recomposeBranch.ts](../../src/commands/recomposeBranch.ts) | Source module for recomposeBranch; defines `RecomposeBranchCommandArgs`, `RecomposeBranchCommand`. |
| [src/commands/recomposeFromCommit.ts](../../src/commands/recomposeFromCommit.ts) | Source module for recomposeFromCommit; defines `RecomposeFromCommitCommandArgs`, `RecomposeFromCommitCommand`. |
| [src/commands/refreshHover.ts](../../src/commands/refreshHover.ts) | Source module for refreshHover; defines `RefreshHoverCommand`. |
| [src/commands/regenerateMarkdownDocument.ts](../../src/commands/regenerateMarkdownDocument.ts) | Source module for regenerateMarkdownDocument; defines `RegenerateMarkdownDocumentCommand`. |
| [src/commands/remoteProviders.ts](../../src/commands/remoteProviders.ts) | Source module for remoteProviders; defines `ConnectRemoteProviderCommandArgs`, `ConnectRemoteProviderCommand`, `DisconnectRemoteProviderCommandArgs`, `DisconnectRemoteProviderCommand`. |
| [src/commands/repositories.ts](../../src/commands/repositories.ts) | Source module for repositories; defines `FetchRepositoriesCommand`, `PullRepositoriesCommand`, `PushRepositoriesCommand`. |
| [src/commands/resetViewsLayout.ts](../../src/commands/resetViewsLayout.ts) | Source module for resetViewsLayout; defines `ResetViewsLayoutCommand`. |
| [src/commands/resets.ts](../../src/commands/resets.ts) | Source module for resets; defines `ResetCommand`. |
| [src/commands/resolveConflicts.ts](../../src/commands/resolveConflicts.ts) | Source module for resolveConflicts; defines `ResolveConflictsCommandArgs`, `ResolveConflictsCommand`. |
| [src/commands/runPromptInAgent.ts](../../src/commands/runPromptInAgent.ts) | Source module for runPromptInAgent; defines `RunPromptInAgentCommandArgs`, `RunPromptInAgentCommand`. |
| [src/commands/runTaskOnWorktree.ts](../../src/commands/runTaskOnWorktree.ts) | Source module for runTaskOnWorktree; defines `RunTaskOnWorktreeCommandArgs`, `TaskQuickPickItem`, `defaultButton`, `RunTaskOnWorktreeCommand`, `refreshButtons`. |
| [src/commands/searchCommits.ts](../../src/commands/searchCommits.ts) | Source module for searchCommits; defines `SearchCommitsCommandArgs`, `SearchCommitsCommand`. |
| [src/commands/sendToChat.ts](../../src/commands/sendToChat.ts) | Source module for sendToChat; defines `SendToChatCommandArgs`, `SendToChatCommand`. |
| [src/commands/showCommitsInView.ts](../../src/commands/showCommitsInView.ts) | Source module for showCommitsInView; defines `ShowCommitsInViewCommandArgs`, `ShowCommitsInViewCommand`. |
| [src/commands/showLastQuickPick.ts](../../src/commands/showLastQuickPick.ts) | Source module for showLastQuickPick; defines `ShowLastQuickPickCommand`. |
| [src/commands/showQuickBranchHistory.ts](../../src/commands/showQuickBranchHistory.ts) | Source module for showQuickBranchHistory; defines `ShowQuickBranchHistoryCommandArgs`, `ShowQuickBranchHistoryCommand`. |
| [src/commands/showQuickCommit.ts](../../src/commands/showQuickCommit.ts) | Source module for showQuickCommit; defines `ShowQuickCommitCommandArgs`, `ShowQuickCommitCommand`. |
| [src/commands/showQuickCommitFile.ts](../../src/commands/showQuickCommitFile.ts) | Source module for showQuickCommitFile; defines `ShowQuickCommitFileCommandArgs`, `ShowQuickCommitFileCommand`, `ShowQuickCommitRevisionCommand`. |
| [src/commands/showQuickFileHistory.ts](../../src/commands/showQuickFileHistory.ts) | Source module for showQuickFileHistory; defines `ShowQuickFileHistoryCommandArgs`, `ShowQuickFileHistoryCommand`. |
| [src/commands/showQuickRepoStatus.ts](../../src/commands/showQuickRepoStatus.ts) | Source module for showQuickRepoStatus; defines `ShowQuickRepoStatusCommandArgs`, `ShowQuickRepoStatusCommand`. |
| [src/commands/showQuickStashList.ts](../../src/commands/showQuickStashList.ts) | Source module for showQuickStashList; defines `ShowQuickStashListCommandArgs`, `ShowQuickStashListCommand`. |
| [src/commands/showView.ts](../../src/commands/showView.ts) | Source module for showView; defines `ShowViewCommand`. |
| [src/commands/signing/setup.ts](../../src/commands/signing/setup.ts) | Source module for setup; defines `SetupSigningWizardCommandArgs`, `SetupSigningWizardCommand`. |
| [src/commands/startAgentSession.ts](../../src/commands/startAgentSession.ts) | Source module for startAgentSession; defines `StartAgentSessionCommandArgs`, `StartAgentSessionCommand`, `describeAgentId`. |
| [src/commands/stashApply.ts](../../src/commands/stashApply.ts) | Source module for stashApply; defines `StashApplyCommandArgs`, `StashApplyCommand`. |
| [src/commands/stashSave.ts](../../src/commands/stashSave.ts) | Source module for stashSave; defines `StashSaveCommandArgs`, `StashSaveCommand`, `getStashSaveArgsForScmStates`, `getStashSaveArgsForScmGroups`, `getStashSaveArgsForStagedScmGroup`, `getStashSaveArgsForUnstagedScmGroup`. |
| [src/commands/switchMode.ts](../../src/commands/switchMode.ts) | Source module for switchMode; defines `SwitchModeCommand`, `ToggleReviewModeCommand`, `ToggleZenModeCommand`. |
| [src/commands/toggleCodeLens.ts](../../src/commands/toggleCodeLens.ts) | Source module for toggleCodeLens; defines `ToggleCodeLensCommand`. |
| [src/commands/toggleFileAnnotations.ts](../../src/commands/toggleFileAnnotations.ts) | Source module for toggleFileAnnotations; defines `ClearFileAnnotationsCommand`, `ToggleFileBlameAnnotationCommandArgs`, `ToggleFileChangesAnnotationCommandArgs`, `ToggleFileHeatmapAnnotationCommandArgs`, `ToggleFileBlameCommand`, `ToggleFileChangesCommand`, `ToggleFileHeatmapCommand` and 2 more symbols. |
| [src/commands/toggleLineBlame.ts](../../src/commands/toggleLineBlame.ts) | Source module for toggleLineBlame; defines `ToggleLineBlameCommand`. |
| [src/commands/walkthroughs.ts](../../src/commands/walkthroughs.ts) | Source module for walkthroughs; defines `GetStartedCommand`, `OpenWalkthroughCommandArgs`, `OpenWalkthroughCommand`, `openWalkthrough`, `WalkthroughOpenWelcomeCommand`. |
| [src/commands/welcome.ts](../../src/commands/welcome.ts) | Source module for welcome; defines `WelcomePlusUpgradeCommand`, `WelcomeOpenHelpCenterCommand`, `WelcomeOpenKeplerCommand`, `WelcomePlusSignUpCommand`, `WelcomePlusLoginCommand`, `WelcomePlusReactivateCommand`, `WelcomeOpenCommunityVsProCommand` and 4 more symbols. |
| [src/config.ts](../../src/config.ts) | Source module for config; defines `Config`, `AdvancedConfig`, `AgentsConfig`, `AIConfig`, `AutolinkConfig`, `BlameConfig`, `ChangesConfig` and 54 more symbols. |
| [src/constants.colors.ts](../../src/constants.colors.ts) | Source module for constants.colors. |
| [src/constants.commands.generated.ts](../../src/constants.commands.generated.ts) | Source module for constants.commands.generated. |
| [src/constants.commands.ts](../../src/constants.commands.ts) | Source module for constants.commands. |
| [src/constants.context.ts](../../src/constants.context.ts) | Source module for constants.context; defines `CompareSelectedInfo`, `CompareSelectedFileInfo`. |
| [src/constants.onboarding.ts](../../src/constants.onboarding.ts) | Source module for constants.onboarding. |
| [src/constants.storage.ts](../../src/constants.storage.ts) | Source module for constants.storage; defines `SyncedStorageKeys`, `GlobalStorageCore`, `GlobalScopedStorage`, `StoredGkCLIInstallInfo`, `StoredProductConfig`, `StoredPromo`, `WorkspaceStorageCore` and 28 more symbols. |
| [src/constants.subscription.ts](../../src/constants.subscription.ts) | Source module for constants.subscription; defines `SubscriptionState`. |
| [src/constants.telemetry.ts](../../src/constants.telemetry.ts) | Source module for constants.telemetry; defines `TelemetryGlobalContext`, `TelemetryEvents`, `AccountValidationFailedEvent`, `AgentProviderEvent`, `AgentHooksSetupCompletedEvent`, `AgentPermissionResolvedEvent`, `AgentSessionResumedEvent` and 256 more symbols. |
| [src/constants.ts](../../src/constants.ts) | Source module for constants; defines `GlyphChars`, `Schemes`. |
| [src/constants.views.ts](../../src/constants.views.ts) | Source module for constants.views. |
| [src/constants.walkthroughs.ts](../../src/constants.walkthroughs.ts) | Source module for constants.walkthroughs; defines `WalkthroughProgress`, `GraphWalkthroughProgress`. |
| [src/container.ts](../../src/container.ts) | Source module for container; defines `Container`, `isContainer`. |
| [src/documents/markdown.ts](../../src/documents/markdown.ts) | Source module for markdown; defines `MarkdownContentMetadata`, `MarkdownContentProvider`, `getContentFromMarkdownUri`, `getMarkdownHeaderContent`. |
| [src/emojis.generated.ts](../../src/emojis.generated.ts) | Source module for emojis.generated. |
| [src/emojis.ts](../../src/emojis.ts) | Source module for emojis; defines `emojify`. |
| [src/env/browser/agents/agentHooks.ts](../../src/env/browser/agents/agentHooks.ts) | Source module for agentHooks; defines `installAgentHook`, `uninstallAgentHook`. |
| [src/env/browser/agents/claudeSessionFile.ts](../../src/env/browser/agents/claudeSessionFile.ts) | Source module for claudeSessionFile; defines `classifyClaudeSessionHost`, `LiveClaudeSession`, `getLiveClaudeSessions`. |
| [src/env/browser/compression.ts](../../src/env/browser/compression.ts) | Source module for compression; defines `deflateRaw`. |
| [src/env/browser/coretools/composer.ts](../../src/env/browser/coretools/composer.ts) | Source module for composer; defines `createGraphComposeIntegration`. |
| [src/env/browser/coretools/conflict.ts](../../src/env/browser/coretools/conflict.ts) | Source module for conflict; defines `createConflictToolsIntegration`. |
| [src/env/browser/fetch.ts](../../src/env/browser/fetch.ts) | Source module for fetch; defines `wrapForForcedInsecureSSL`. |
| [src/env/browser/focusWindow.ts](../../src/env/browser/focusWindow.ts) | Source module for focusWindow; defines `focusProcessWindow`, `getProcessParentPid`, `getProcessParentPidMap`, `isDescendantOfThisExtensionHost`. |
| [src/env/browser/git/messageEditor.ts](../../src/env/browser/git/messageEditor.ts) | Source module for messageEditor; defines `getAutoRebaseMessageEditor`. |
| [src/env/browser/git/squashEditor.ts](../../src/env/browser/git/squashEditor.ts) | Source module for squashEditor; defines `getSquashSequenceEditor`, `getAcceptSequenceEditor`. |
| [src/env/browser/gk/agentFetcher.ts](../../src/env/browser/gk/agentFetcher.ts) | Source module for agentFetcher; defines `isCliExecutableAvailable`, `fetchAgents`. |
| [src/env/browser/ipc/ipcService.ts](../../src/env/browser/ipc/ipcService.ts) | Source module for ipcService; defines `IpcService`, `getCliPublishInfo`. |
| [src/env/browser/json.ts](../../src/env/browser/json.ts) | Source module for json; defines `loggingJsonReplacer`, `serializeJsonReplacer`, `serializeWireJsonReplacer`, `deserializeWireJsonReviver`. |
| [src/env/browser/kepler/keplerInstall.ts](../../src/env/browser/kepler/keplerInstall.ts) | Source module for keplerInstall; defines `isKeplerInstalled`. |
| [src/env/browser/platform.ts](../../src/env/browser/platform.ts) | Source module for platform; defines `getIsOffline`, `getPlatform`, `getTempFile`, `getHomeDir`, `getAltKeySymbol`, `getCmdKeySymbol`, `getShiftKeySymbol` and 1 more symbols. |
| [src/env/browser/providers.ts](../../src/env/browser/providers.ts) | Source module for providers; defines `git`, `getSupportedGitProviders`, `getSharedGKStorageLocationProvider`, `getSupportedRepositoryLocationProvider`, `getSupportedWorkspacesStorageProvider`, `getGkCliService`, `getGkMcpService` and 3 more symbols. |
| [src/env/browser/resolver.ts](../../src/env/browser/resolver.ts) | Source module for resolver; defines `defaultResolver`. |
| [src/env/node/agents/__tests__/claudeSessionFile.test.ts](../../src/env/node/agents/__tests__/claudeSessionFile.test.ts) | Test implementation for claudeSessionFile.test; defines `writeFixture`. |
| [src/env/node/agents/agentHooks.ts](../../src/env/node/agents/agentHooks.ts) | Source module for agentHooks; defines `installAgentHook`, `uninstallAgentHook`. |
| [src/env/node/agents/claudeSessionFile.ts](../../src/env/node/agents/claudeSessionFile.ts) | Source module for claudeSessionFile; defines `ClaudeSessionFile`, `defaultSessionsDir`, `readClaudeSessionFile`, `classifyClaudeSessionHost`, `ClaudeAgentsListEntry`, `LiveClaudeSession`, `getLiveClaudeSessions` and 1 more symbols. |

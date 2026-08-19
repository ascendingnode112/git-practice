# The local ↔ remote model is established

Chris understands GitHub as a hosting service holding a full copy of the repository, with `push` sending local commits, `fetch` downloading without touching files, and `pull` = fetch + merge. He can read the tracking-branch compass line in `git status` ("ahead by 1" → push → "up to date").

**Evidence**: Lesson 2 drill completed end-to-end — committed the workspace (`f89d8f9`), predicted the ahead-by-1 state, fetched safely, pushed, and verified sync (`add-notes...origin/add-notes`, no divergence). Quiz: 4/5, with remote / GitHub-vs-Git / fetch-vs-pull / pull-request all correct.

**Implications**: Ready for branches-as-pointers (Lesson 3), which can now use `origin/add-notes` as a concrete example of a remote-tracking pointer.

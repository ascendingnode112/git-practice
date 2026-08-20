# Teaching Notes

## User preferences
- Beginner in Git specifically, but deeply technical otherwise (Director of Engineering, aerospace). Talk engineer-to-engineer; never condescend, but don't assume Git knowledge.
- Wants *confidence*, not coverage — the win condition is "I can predict what this command will do."
- Practice happens live in this repo (`~/git-practice`). Every lesson should end with real commands run here, using `git status` / `git log` as the feedback loop.
- Keep lessons short. One concept per lesson.
- Chris often dictates via speech-to-text; expect typos in his replies, translate silently.

## Working notes
- 2026-08-19 (night, later): Post-drill retake 5/5 (record 0005) — drill-first/quiz-after CONFIRMED as the lesson shape. Pointer model + origin now in glossary. Lesson 4 (PR merge add-notes → main) unlocked. Second commit-typo specimen for the amend lesson: `72ab878 "Add glossage..."` alongside `46a43e2 "Practive..."`.
- 2026-08-19 (night): Lesson 3 quiz 1/5 pre-drill (record 0004). Recalibration: (1) cap lessons at ~2 new concepts; (2) order lessons drill-first, quiz-after — reading alone isn't encoding for Chris, hands-on is; (3) `origin` missed twice, needs its own micro-moment, not another passing mention; (4) gate Lesson 4 on a pointer-model re-test.
- 2026-08-19: Workspace created. Repo state at start: branch `add-notes`, two commits (`Initial commit`, `Add a note to the README`), clean tree. He has already made commits by following steps — the fuzzy part is the model underneath.
- Lesson 0001 targets the snapshot + three-areas model. Do NOT add glossary terms until he demonstrates understanding (quiz + practice), per glossary rules. Candidate first terms: commit, staging area, working directory, repository.
- Planned arc (revise per learning records): 0001 commits & three areas → 0002 GitHub concepts (remotes, push/fetch/pull, PR concept) → 0003 branches are pointers / HEAD → 0004 merging via a real PR (add-notes → main, + first conflict) → 0005 undoing things (restore, revert, amend).
- 2026-08-19 (evening): Both drills DONE — commits `46a43e2` (lesson 1 practice) and `f89d8f9` (workspace), pushed, in sync. Quiz 4/5 on lesson 2; sole miss = origin-as-first-commit (learning record 0003). Lesson 3 requirements: re-test `origin` by retrieval, and explicitly teach `origin/main` (remote-tracking pointer) vs `main` (local branch) — the misconception predicts trouble exactly there. Glossary seeded with 8 demonstrated terms; `origin` held out pending re-test.
- Hook for the undoing-things lesson: commit `46a43e2` has a typo in its message ("Practive") — perfect real example for `git commit --amend` and why amending already-pushed commits differs. Don't fix it before that lesson.
- 2026-08-19 (later): Chris requested "github concepts" before doing Lesson 1's practice — repo still had 2 commits. Mission expanded (PR mechanism in scope; team workflow conventions still out). Discovered the repo already has `origin` → github.com/ascendingnode112/git-practice, `add-notes` tracks `origin/add-notes`, and `gh` CLI is authenticated as ascendingnode112. Lesson 0002 written to interleave Lesson 1's stage/commit skill (workspace files were untracked) with push/fetch/status-compass practice. No learning records yet — no demonstrated understanding to record; write 0001 once he reports quiz/drill results from either lesson.

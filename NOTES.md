# Teaching Notes

## User preferences
- Beginner in Git specifically, but deeply technical otherwise (Director of Engineering, aerospace). Talk engineer-to-engineer; never condescend, but don't assume Git knowledge.
- Wants *confidence*, not coverage — the win condition is "I can predict what this command will do."
- Practice happens live in this repo (`~/git-practice`). Every lesson should end with real commands run here, using `git status` / `git log` as the feedback loop.
- Keep lessons short. One concept per lesson.
- Chris often dictates via speech-to-text; expect typos in his replies, translate silently.

## Working notes
- 2026-08-19: Workspace created. Repo state at start: branch `add-notes`, two commits (`Initial commit`, `Add a note to the README`), clean tree. He has already made commits by following steps — the fuzzy part is the model underneath.
- Lesson 0001 targets the snapshot + three-areas model. Do NOT add glossary terms until he demonstrates understanding (quiz + practice), per glossary rules. Candidate first terms: commit, staging area, working directory, repository.
- Planned arc (revise per learning records): 0001 commits & three areas → 0002 GitHub concepts (remotes, push/fetch/pull, PR concept) → 0003 branches are pointers / HEAD → 0004 merging via a real PR (add-notes → main, + first conflict) → 0005 undoing things (restore, revert, amend).
- 2026-08-19 (later): Chris requested "github concepts" before doing Lesson 1's practice — repo still had 2 commits. Mission expanded (PR mechanism in scope; team workflow conventions still out). Discovered the repo already has `origin` → github.com/ascendingnode112/git-practice, `add-notes` tracks `origin/add-notes`, and `gh` CLI is authenticated as ascendingnode112. Lesson 0002 written to interleave Lesson 1's stage/commit skill (workspace files were untracked) with push/fetch/status-compass practice. No learning records yet — no demonstrated understanding to record; write 0001 once he reports quiz/drill results from either lesson.

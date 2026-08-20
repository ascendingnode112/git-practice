# Pointer model acquired; origin misconception resolved

Post-drill quiz retake: 5/5. Chris can now use the full pointer model — branch as movable pointer, HEAD as current-branch marker, `origin` as remote nickname (third exposure, finally durable), `origin/main` as a last-synced record rather than a live view, and commit-moves-only-the-current-branch. Supersedes the open concerns in [0003](0003-misconception-origin-as-first-commit.md) and [0004](0004-pointer-model-not-yet-acquired.md).

**Evidence**: Drill artifacts in the repo (commit `72ab878` pushed and synced; `scratch` branch created and deleted; `main` untouched at `7934de5`) plus 5/5 on the reloaded quiz, 2026-08-19.

**Implications**:
- **Drill-first, quiz-after is confirmed as Chris's encoding pattern** — reading alone scored 1/5, the same material after hands-on practice scored 5/5. All future lessons use this ordering.
- Lesson 4 (merge `add-notes` → `main` via a real pull request) is unlocked.
- Glossary can take: branch, HEAD, origin, remote-tracking branch.

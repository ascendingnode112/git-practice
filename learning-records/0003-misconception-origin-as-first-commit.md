---
status: superseded by 0005
---

# Misconception corrected: "origin" read as the first commit

On the Lesson 2 quiz Chris answered that `origin` is "the first commit in a repository" — reading it as origin-of-history (a moment in time) rather than a remote nickname (a place). Corrected in-lesson and in-chat: origin = where the repo originated *from*, i.e. the remote you cloned from; the actual first commit is called the root commit.

**Implications**: Re-test `origin` by retrieval in Lesson 3's quiz (spaced practice) before adding it to the glossary. Watch for the sibling conflation when branches arrive: `origin/main` (remote-tracking pointer) vs `main` (local branch) — this misconception predicts trouble there, so Lesson 3 should hit that distinction explicitly.

**Evidence**: Quiz screenshot reported by Chris, 2026-08-19.

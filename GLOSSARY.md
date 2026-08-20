# Git Fundamentals Glossary

Canonical terms for this workspace. A term is added only once Chris has demonstrated he can use it correctly.

## The local model

**Commit**:
One full snapshot of every tracked file, plus a pointer to the snapshot before it. Identified by a content hash.
_Avoid_: Diff, changeset, save

**Working directory**:
The actual files on disk that you edit. Changes here are invisible to history until staged and committed.
_Avoid_: Workspace, checkout copy

**Staging area**:
The loading dock where the next commit is assembled; `git add` copies a file's current state into it.
_Avoid_: Index, cache (Git's own older names for the same thing)

**Repository**:
The `.git` directory holding every commit ever made. In this workspace, "repository" always means this permanent store, not the project folder loosely.
_Avoid_: Repo folder, project

## The remote model

**Remote**:
A full copy of the repository stored elsewhere (e.g. on GitHub). Neither copy is inherently primary.
_Avoid_: Server, upstream (a specific term reserved for later), the cloud

**Push**:
Upload local commits the remote doesn't have, on the current branch. Sends commits only — never uncommitted edits.

**Fetch**:
Download new remote commits without changing any local files. Always safe.

**Pull**:
Fetch, then merge the result into the current branch. Changes your files.

## Pointers

**Branch**:
A movable pointer to one commit — a 41-byte file containing a hash. Committing while on it moves it forward; nothing else does.
_Avoid_: Copy, fork (reserved for GitHub server-side copies), version

**HEAD**:
The "you are here" marker: a pointer to the current branch. Switching branches repoints HEAD and rewrites the working directory to match.

**Origin**:
The conventional nickname for the remote you cloned from or wired up first. A place, not a moment — the history's first commit is the *root commit*.
_Avoid_: Source, master copy

**Remote-tracking branch** (`origin/main`):
Your local, read-only record of where a branch was on the remote at last contact (fetch/push/pull). Not a live view.
_Avoid_: Remote branch (ambiguous — could mean the branch on the server itself)

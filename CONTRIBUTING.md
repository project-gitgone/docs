# Contributing

Thanks for helping with the GitGone documentation.

## Setup

Node 22 or newer and pnpm (`corepack enable`).

```bash
pnpm install
pnpm dev
```

## Before opening a pull request

```bash
pnpm lint
pnpm typecheck
pnpm build
```

CI runs the same commands, plus CodeQL, Gitleaks, Plumber, actionlint and typos.

## Changesets

A change that ships to users needs a changeset: run `pnpm changeset`, pick the bump (patch, minor, major) and
describe the change for the CHANGELOG. Docs, tests and refactors without user impact do not need one.

On every push to `main`, the Release workflow opens or updates a **chore: version packages** pull request that
bumps the version and the CHANGELOG. Merging it tags the release and publishes the Docker image to `ghcr.io`.

## Conventions

- TypeScript strict, no comments in the code.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).
- `main` is protected: every change goes through a pull request with a green CI.

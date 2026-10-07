# @project-gitgone/docs

## 26.2.9

### Patch Changes

- [`9961874`](https://github.com/project-gitgone/docs/commit/9961874faa20ece2507837dae94bf168422bdf57) Thanks [@Asuniia](https://github.com/Asuniia)! - Reorganize the CLI documentation: introduction with a quickstart, key concepts, ten step-by-step guides (set up a project, onboard or remove a teammate, protect production, create a custom role, restore a version, run without a .env, rotate keys, use GitGone in CI with GitHub Actions and GitLab CI, script the CLI), a commands overview with global options and environment variables, one page per command group with usage, options and examples, troubleshooting and a migration guide from the old command names.
  
  New home page with the GitGone logo and brand colors: what GitGone does, a section on GitGone Cloud next to self-hosting, and entry points to the CLI, the server and every guide. The brand green is also used in dark mode.
  
  New quickstart covering GitGone Cloud and self-hosting, from the server to the first shared secret. The server documentation now covers installation, domain and HTTPS, every configuration variable, administration, upgrades and backups, and the current access model. The welcome, daily workflow and architecture pages were rewritten or corrected to match how GitGone works today.

- [`0418e0c`](https://github.com/project-gitgone/docs/commit/0418e0cb6709ca16c08aaf8c4e38718f20f0e379) Thanks [@Asuniia](https://github.com/Asuniia)! - Document the unified `gitgone login`, which creates the first administrator on a new self-hosted server and signs in with the cloud account on a GitGone Cloud instance; `gitgone admin setup` is no longer documented.

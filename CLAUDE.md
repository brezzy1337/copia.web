# Copia Web — create-t3-turbo monorepo

Marketing site + waitlist for **Copia**, a budget-first grocery-planning mobile app (iOS + Android,
not yet in stores). This repo is the web front: a Next.js marketing site with an email waitlist.
The mobile app itself is separate.

**Copy guardrails (keep the site honest — these mirror what the app actually does):**
- Prices are **estimates you confirm at checkout** — never "live prices" or guaranteed totals.
- Nutrition is **"at a glance," AI-estimated — not medical/clinical advice**.
- Checkout is **"shop on Instacart in one tap"** — never "we deliver it for you".

## Stack

- **Turborepo + pnpm** (workspaces: `apps/*`, `packages/*`, `tooling/*`). Package manager pinned to
  `pnpm@10.19.0`; node `^22.21.0` (this environment runs node 24 — works, but match 22 in CI).
- **Web:** `apps/nextjs` — Next.js 16, React 19, App Router.
- **API:** `packages/api` — tRPC v11 (consumed by the web app via TanStack Query).
- **DB:** `packages/db` — Drizzle ORM (target Postgres / Neon for the waitlist).
- **Auth:** `packages/auth` — better-auth (not needed for the public waitlist; leave unless asked).
- **Validation:** `packages/validators` — zod v4 schemas shared across API and web.
- **UI:** `packages/ui` — shared components. **Tooling:** `tooling/{eslint,prettier,tailwind,typescript}`.
- The template's `apps/expo` and `apps/tanstack-start` were **removed** — the website only needs
  `apps/nextjs`. (Re-add from the t3-oss template if a native app is ever needed.)

---

## Orchestration

The central thread (this session) owns all git state and routing. **Sub-agents cannot spawn
sub-agents.** Route a change to the domain(s) it touches, brief each implementer fully, and drive
any cross-domain chain yourself. Use `/claude-t3-devkit:code-todo` to implement and
`/claude-t3-devkit:ship` to open a PR → multi-lens review → merge.

### Domain boundaries (non-overlapping globs — the parallel-split lines)

| Domain | Globs | Notes |
|---|---|---|
| **db** | `packages/db/**` | Drizzle schema, client, migrations. `src/schema.ts` is app tables; `src/auth-schema.ts` is auth-owned. |
| **validators** | `packages/validators/**` | zod schemas shared by api + web. |
| **api** | `packages/api/**` | tRPC routers (`src/router/*`), `root.ts`, `trpc.ts`. |
| **auth** | `packages/auth/**`, `packages/db/src/auth-schema.ts` | better-auth config. Touch only on auth work. |
| **web** | `apps/nextjs/**` | Marketing site + waitlist UI, route handlers, tRPC client. |
| **ui** | `packages/ui/**` | Shared component library. |
| **tooling** | `tooling/**`, root configs (`turbo.json`, `tsconfig`, eslint/prettier) | Config/build only. |

Two changes whose globs don't overlap → run implementers **in parallel**. Overlapping or dependent
globs → **sequential**, central thread hands each step's output to the next. When unsure, sequential.

### Dependency chains (what must exist before what)

```
validators (zod)  ─┐
                   ├─►  api (tRPC router)  ─►  web (apps/nextjs consumes via TanStack Query)
db (Drizzle schema)┘
```

- A new feature that stores data (e.g. **the waitlist**) flows: **db schema + validators → api
  router → web form/UI**. Never let the web implementer assume a router or column that the api/db
  step hasn't created yet — sequence it.
- `auth-schema.ts` lives in `db` but is owned by the **auth** domain; changing it is an auth chain.

### Background defaults

- Long, independent, non-interactive work (full `pnpm install`, `turbo build`, `db push`) → run in
  the **background** and report back; don't block the chain on it.
- Anything that mutates shared git state (commits, branch switches, merges) → **central thread only**,
  in the foreground.

### Invocation protocol (every sub-agent brief has four parts)

1. **Objective & scope** — the one slice to implement, and explicitly what's out of scope.
2. **Domain & file globs** — the exact paths it may edit (from the table above); it edits nothing else.
3. **Context** — relevant files to read, repo conventions (catalog deps, `@acme/*` workspace imports,
   zod v4, tRPC v11 patterns), and where this slice sits in the dependency chain.
4. **Done-criteria** — what "verified" means: `pnpm -F <pkg> typecheck`, `pnpm lint`, and the
   specific behavior to confirm. Implementers verify before returning; only the central thread commits.

### Guardrails

- Implementers **edit only inside their assigned globs**, and never commit/push/open PRs.
- Preserve workspace conventions: import across packages via `@acme/*`, add shared types to the right
  package (validators/db), keep web-only code in `apps/nextjs`.
- Honor the copy guardrails above for any user-facing marketing/waitlist copy.

### Dependency safety

- **Lockfile:** `pnpm-lock.yaml` is committed — install with `--frozen-lockfile` in CI; never delete it.
- **Versions are pinned via the pnpm catalog** (`catalog:` / `catalogs.react19` in
  `pnpm-workspace.yaml`). Add or bump a dependency **in the catalog**, then reference `catalog:` from
  the package — don't hard-code divergent versions. `better-auth` is intentionally pinned to a beta.
- **Any new or upgraded dependency goes through the `dependency-auditor` agent (GO/NO-GO) BEFORE
  install.** Prefer mature releases; apply a release-age cooldown for brand-new versions.
- Build scripts are allow-listed via `onlyBuiltDependencies` — adding a package that needs a postinstall
  build requires adding it there deliberately.

### Notifications (Slack)

Ship/code-todo status posts go to the existing Slack channel **`proj-wholesum`** via the
`slack-notifier` agent (Slack MCP). **Every message must be prefixed with the tag `[Copia-website]`**
so Copia-site updates are distinguishable in the shared channel — e.g.
`[Copia-website] PR opened: <title> — <link>`. Keep messages to one or two lines; never paste diffs
or secrets. (The optional `notify-slack.sh` webhook backstop is unused — no `SLACK_WEBHOOK_URL` set.)

---

## Workflows

- **Implement:** `/claude-t3-devkit:code-todo <change>` — routes to the right domain(s), dispatches
  `implementer` agent(s), gates on a Slack diff review, then hands the branch to ship.
- **Ship:** `/claude-t3-devkit:ship <summary>` — `pr-author` drafts the PR (gate 1), the review panel
  (`factual-`, `architecture-`, `security-`, `consistency-`, `redundancy-`, and for UI
  `design-`/`design-foundations-reviewer`) runs, `slack-notifier` posts to `proj-wholesum`, gate 2
  before merge.
- New dependency in a diff → `dependency-auditor` first.

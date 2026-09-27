# Releasing the static site

The repository builds a static Astro site into `dist/`. GitHub Actions runs
`npm ci` and `npm run build` for pull requests and `main`; it does not publish.
Wrangler uses the owner's authenticated session for the manual steps below.
Never put credentials, production snapshots, or archive paths in this repository.

## Record the candidate

Use a clean checkout of the exact commit whose Build check succeeded. Record
the commit SHA, Git tree, CI run URL, and the asset manifest digest in the
private release record. Build once with Node 22:

```sh
git status --porcelain
git rev-parse HEAD
git rev-parse HEAD^{tree}
npm ci
npm run build
find dist -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum
```

Stop if the checkout is dirty, the Build check failed, or `dist` contains
private material. Recompute the manifest digest after every Preview/upload;
if the files or commit changed, rebuild and review the new candidate.

## Preview a pull request

After authorization for an external Preview, build the PR head SHA as above.
The Preview can be created before the first production deployment:

```sh
npm exec -- wrangler preview --name pr-NUMBER --json
```

Record the PR SHA, manifest digest, Preview URL and unique deployment URL.
Inspect the actual pages and links there. The named Preview URL advances when
that Preview is updated, so identify the reviewed deployment precisely. A PR
Preview does not identify the eventual production Worker version.

## First Worker deployment

After A1 and the site changes are merged, start from the exact green `main`
SHA and rebuild once. Create a **release Preview from this final `dist`** and
review it; an older PR Preview does not stand in for it. Obtain separate
approval for the initial public Worker deployment. Check that `wrangler.jsonc`
still has no `routes` or custom domains, then run:

```sh
npm exec -- wrangler deploy
npm exec -- wrangler versions list --json
npm exec -- wrangler deployments status --json
```

The first `versions upload` cannot create a new Worker. This initial deploy
publishes only to `workers.dev`; it does not switch `temrjan.com`. Record the
active Version ID/URL and inspect that version. Do not use `wrangler deploy`
for later releases: it immediately deploys the new version.

## Later Worker versions

From the exact green `main` SHA, build and record the candidate once. Upload
without changing production traffic:

```sh
npm exec -- wrangler versions upload
npm exec -- wrangler versions list --json
```

Record the new Version ID and immutable Version URL. Check the root and all
nine language pages, navigation, contacts, and absence of old generated pages
at that URL. Give the Captain the SHA, manifest digest, CI run, Version ID,
Version URL, and smoke results. Only after approval of **that Version ID**:

```sh
npm exec -- wrangler versions deploy VERSION_ID@100% -y
npm exec -- wrangler deployments status --json
```

Confirm the active ID and run the same smoke on the public hostnames. To undo
a later release, deploy the previously recorded good Version ID at 100% and
verify the active ID and pages again.

## Before attaching the domain

Domain cutover is a separate approved operation. Read the actual apex and
`www` DNS records, Tunnel routes, and zone rules with sufficient read access.
The current OAuth session has not been able to read DNS/rules (HTTP 403), so
do not infer the record types from public DNS. Check for a CNAME/custom-domain
conflict and plan both hostnames without an added migration redirect. If the
read-only preflight cannot be completed, stop and report the obstacle.

Before changing production, save a **private archive outside the web root** of
the files actually being served and the complete production checkout,
including `.git`, dirty changes, untracked source and assets. Include Git
HEAD/status/diff and the actual compose, nginx, Tunnel, DNS and rule settings.
Protect any credentials in those snapshots; never commit them. Generate a
SHA-256 manifest, extract into a separate directory, compare hashes, and serve
the restored old `dist` temporarily to prove recovery. Keep the home origin
running until the new site is live and verified.

Only after the archive and restoration check, a reviewed Worker Version URL,
and specific cutover approval, attach both hostnames using the preflighted
Cloudflare settings. Check `/`, all nine language pages, links, contact paths,
mobile layout, and `www`. If first cutover fails, restore the recorded
DNS/Tunnel/rule configuration and verify the still-running old site. Do not
delete the origin or the archive as part of cutover.

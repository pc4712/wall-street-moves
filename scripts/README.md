# scripts/ — future collector tooling (placeholder)

This directory is reserved for the future AI news-gathering collector
described in `PIPELINE.md`. It currently contains no code.

## Planned collector (not built yet)

- **Purpose:** gather candidate facts and source links from public sources
  (company press releases, SEC filings, Federal Reserve and Bureau of
  Labor Statistics releases, established financial news outlets) and save
  them as structured drafts in `content/drafts/` for human review.
- **Free-first constraint:** the collector must use only free, public
  sources and free-tier services. It must not call any paid API, and it
  must not require a paid subscription to run.
- **What it will never do:** write publishable copy, decide what is true,
  or publish anything. Every collected fact must carry its source URL and
  publication date. Publishing stays a human-approved merge to `main`
  (see `PIPELINE.md` — auto-publish is OFF).

## Before building the collector

- Confirm the source list and the output format with the publication owner.
- Keep the collector read-only against external sites: no logins, no
  form submissions, no paywall bypass.
- Respect robots.txt and rate limits of every source.

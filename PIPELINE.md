# Wall Street Moves — Content Pipeline

How an article goes from an idea to a published page on
https://wall-street-moves.pages.dev/.

## Status: AUTO-PUBLISH IS OFF

Nothing on this site publishes automatically. Every article is published only
by merging to the `main` branch after a human has reviewed and approved it.
No scheduled job, script, or integration may publish on its own. Turning
auto-publish on requires an explicit decision by the publication owner.

## The four stages

### 1. AI news gathering (collect)

- Sources: company press releases and earnings releases, SEC filings,
  Federal Reserve and Bureau of Labor Statistics releases, and reporting
  from established financial news outlets.
- The collector gathers candidate facts and links only. It does not write
  publishable copy and it does not decide what is true.
- Every candidate fact must carry its source URL and publication date.
  A fact without a source is dropped at this stage.

### 2. Original English writing (draft)

- A draft is written in original English from the collected facts.
- Drafts live in `content/drafts/` and are never linked from the live site.
- Draft rules:
  - Every factual claim must trace to a source collected in stage 1.
  - Prices, index levels, percentages, and dates come from the source
    itself, never from memory or from another draft.
  - Analyst views name the analyst, the firm, and the date of the view.
  - Use absolute dates (for example "Nov. 23, 2026") and Arabic numerals.
  - No relative time words ("yesterday", "last week") in published copy.
  - Byline is "Wall Street Moves" (the organization). No invented
    author names.
  - No investment advice, no buy/sell recommendation, no price target
    presented as our own view.
  - Each draft gets a Sources section with real links and dates, a
    "Last updated" line, a short fact-check note, and at least 2
    internal "Related coverage" links.

### 3. Human review (review)

- The reviewer moves the draft to `content/review/` and checks it
  against this list before approving:
  - [ ] Every number in the draft matches its cited source.
  - [ ] Every quote is verbatim and attributed with a date.
  - [ ] No invented prices, quotes, analyst views, authors, or dates.
  - [ ] Sources section links are real, reachable, and dated.
  - [ ] Headline, title tag (max ~60 characters), and meta description
        (max ~160 characters) are accurate and unique.
  - [ ] Canonical URL, Open Graph tags, and JSON-LD (NewsArticle)
        are present and consistent with the page.
  - [ ] The article is filed under the correct section and appears in
        that section's index and the homepage where appropriate.
  - [ ] The disclaimer "This article is for informational purposes
        only and does not constitute investment advice." is present.
  - [ ] Sitemap entry added with the publication date.
- The reviewer may edit, send back for rework, or reject. Only the
  reviewer approves.

### 4. Publish (merge to main)

- Approved articles are built as static HTML pages under `articles/`,
  linked from their section page and the homepage, and added to
  `sitemap.xml`.
- Publishing is a merge to `main`. The Cloudflare Pages project
  `wall-street-moves` deploys `main` automatically.
- After deployment, the reviewer opens the live URL and confirms the
  page renders, the links work, and the metadata is correct.
- Corrections: fix the source file, update the "Last updated" line,
  and note the correction in the article's fact-check note.

## Directory map

| Path | Purpose |
| --- | --- |
| `content/drafts/` | Work in progress. Never linked from the site. |
| `content/review/` | Drafts awaiting human review. Never linked from the site. |
| `scripts/` | Future collector tooling. See `scripts/README.md`. |
| `articles/` | Published article pages (HTML). |
| `sitemap.xml` | Updated on every publish. |

## What the pipeline never does

- Never publishes without human approval.
- Never calls a paid API or paid service.
- Never invents a price, a quote, an analyst view, an author, or a date.
- Never republishes another outlet's article. All writing is original;
  sources are cited, not copied.

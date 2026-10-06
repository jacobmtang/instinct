# Instinct — concept site

A redesign mockup of [instinct.com](https://instinct.com) by Jacob Tang, to pitch taking over Instinct's site, SEO/AEO and design presence. Plain HTML/CSS/JS, no build step. Not affiliated with Instinct.

## Pages

| path | what |
|---|---|
| `index.html` | home: hero + chat mock, no-new-interface, what it does, how it works, instinct-to-instinct, trust, integrations, FAQ, CTA |
| `security/` | Vault, one-time cards, permissions, training, agent-to-agent |
| `privacy/`, `terms/` | proposed legal layout: sticky TOC, "In short" summaries, placeholders where the live text drops in |
| `404.html` | not-found page |

## SEO / AEO already in place

- Unique title, description, canonical and Open Graph tags per page
- JSON-LD: `Organization`, `WebSite`, `SoftwareApplication`, `FAQPage` (home); `BreadcrumbList` (inner pages)
- FAQ written as direct question/answer pairs, so answer engines can quote them
- `sitemap.xml` and `llms.txt`
- Semantic headings, skip link, reduced-motion support

**Kept out of search on purpose:** every page has `noindex` and `robots.txt` blocks everything, so the mockup never competes with the real site. Remove both at handover.

## Styling

Same rules as Jacob's portfolio: Apple HIG type scale and a 4pt spacing grid, all as tokens at the top of `assets/css/base.css`. Colours sampled from instinct.com on 2026-10-05: page `#f4efec`, raised `#fbfaf9`, ink `#121212`, brush-stroke sage `#73a89a`.

Fonts are free stand-ins (Instrument Sans, Newsreader) for Instinct's licensed Melange / GT America / Season Mix; swap the `--font-*` tokens and add their woff2 files at handover. The wordmark is text; drop the real stickman mark into `assets/img/`.

## Facts to confirm with the founder

Product details come from instinct.com, its privacy policy and terms (Aug 26, 2026), and press coverage (Sept 2026): iMessage/WhatsApp/Mac app, the Vault, Stripe Link one-time cards, instinct-to-instinct, Google Workspace and Shopify. The chat thread and task examples are illustrative, not real users. There are no testimonials or metrics on purpose.

## Preview

```
python3 -m http.server 8000
```
then open http://localhost:8000.

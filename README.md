# Instinct — concept site

A redesign mockup of [instinct.com](https://instinct.com) by Jacob Tang, to pitch taking over Instinct's site, SEO/AEO and design presence. Plain HTML/CSS/JS, no build step. Not affiliated with Instinct.

## Pages

| path | what |
|---|---|
| `index.html` | one-screen home: hand mockup playing the closet demo, wordmark, "Text Instinct" |
| `workspace/` | redesign of app.instinct.com/workspace: grouped cards, blur-fade top + full-screen menu on phones, sidebar on desktop |

## SEO / AEO

- In place: title and description on each page, `sitemap.xml`, `llms.txt`.
- To add back as the home page grows: Open Graph tags, JSON-LD (`Organization`, `SoftwareApplication`, `FAQPage`) and a question-and-answer FAQ. The first draft had these; it is in `_archive/applications/instinct/site-2026-10-05/`.
- **Kept out of search on purpose:** every page has `noindex` and `robots.txt` blocks everything, so the mockup never competes with the real site. Remove both at handover.

## Styling

Same rules as Jacob's portfolio ([`docs/reference/portfolio-styles.md`](../../../docs/reference/portfolio-styles.md)), on every page:

1. **Type comes from the Apple HIG scale** (`--text-*` / `--leading-*` in `assets/css/base.css`). Never a raw font-size or line-height.
2. **Everything sits on the 4pt grid.** Spacing uses the `--space-*` tokens (4, 8, 12 … 128px); any other size (icons, buttons, bars, columns) is a multiple of 4. Never a raw margin, padding or gap.

Allowed exceptions: 1px / 1.5px hairlines, corner radii, and positions measured on artwork (the hand mockup's screen, the menu icon's two lines).

Colours sampled from instinct.com on 2026-10-05: page `#f4efec`, raised `#fbfaf9`, ink `#121212`, brush-stroke sage `#73a89a`. The app redesign (`workspace/`) stays neutral: no sage, no invented icons; its icons are copied from app.instinct.com (Lucide for UI, their own contact tiles and connector logos).

Fonts are free stand-ins (Fraunces, Instrument Sans) for Instinct's licensed Season Mix / GT America. The Season Mix trial loads from `assets/fonts/` on Jacob's Mac only; that folder is git-ignored because the trial licence allows one computer and no distribution.

## Facts to confirm with the founder

Product details come from instinct.com, its privacy policy and terms (Aug 26, 2026), and press coverage (Sept 2026): iMessage/WhatsApp/Mac app, the Vault, Stripe Link one-time cards, instinct-to-instinct, Google Workspace and Shopify. The chat thread and task examples are illustrative, not real users. There are no testimonials or metrics on purpose.

## Preview

```
python3 -m http.server 8000
```
then open http://localhost:8000.

# Item Rank – Top 10 Lists

Static, auto-year Top 10 product category site for GitHub Pages.

## Features
- Single `index.html` lists categories.
- Live filter to quickly find categories.
- Dynamic year (JS) updates titles every January without edits.
- `category.html?cat=...` template renders each category from `assets/data.js`.
- Amazon affiliate links with your tag (configure once or override via `?tag=yourtag-20`).
- Minimal, mobile‑friendly CSS.
- SEO ItemList JSON-LD for categories and items.
- Affiliate disclosure injected automatically.
- SVG favicon and OG/Twitter social preview image.
- Per-item badges (e.g., "Best Overall") and microcopy lines.

## Getting Started
1. Set your Amazon Associates tracking ID in `assets/data.js` (`associateTag`).
2. Optionally set a site name brand via `TOP10_CONFIG.siteName` (default: "Item Rank").
3. Optionally link directly with `https://<username>.github.io/top10/categories/category.html?cat=coffee-cups&tag=yourtag-20`.
4. Commit & push. Enable GitHub Pages (if this repo): Settings → Pages → select branch `main` → root.

## Adding a Category
1. Open `assets/data.js`.
2. Append a new object to `window.TOP10_DATA.categories`:
```js
{
  id: "wireless-headphones", // lowercase, hyphen separated
  name: "Wireless Headphones",
  description: "Comfortable, great-sounding picks.",
  items: [
    { title: "Wireless Over-Ear ANC", url: "https://www.amazon.com/s?k=wireless+anc+headphones", badge: "Best Overall", note: "Great ANC and battery." },
    // 9 more...
  ]
}
```
3. Provide 10 items. Each item: `title`, and either `asin` (recommended) or `url` (fallback search/product link). Optional: `note`, `badge`, `img`, `tag`.
4. Optional: add `badge` to feature an item (e.g., `"Best Budget"`).
5. Save, commit, push. The new category appears automatically on `index.html`.

## Item Fields
| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Short product name/label. |
| `asin` or `url` | Yes | Prefer ASIN (exact product) over search URL for clean tracking. |
| `note` | No | Brief supportive description. |
| `img` | No | Absolute or relative image URL (placeholder hidden if fails). |

## Affiliate Tag Handling
- Script adds `?tag=<yourtag>` to links missing a tag.
- If a URL already has a tag param, it is preserved.
- Runtime override: append `&tag=othertag-20` in page URL.
- Per-item tracking: links also include `ascsubtag` like `itemrank:category:position:item-slug` for granular attribution (configurable in `TOP10_CONFIG.tracking`).

### Short links (amzn.to)
- If you paste an `amzn.to/<code>` short link, the site will not append `tag` or `ascsubtag` to avoid breaking the redirect.
- Short links typically already include your tracking; however, granular per-item `ascsubtag` is not guaranteed to carry through. For best analytics, use full product URLs or `asin:` entries.

### Use product pages (ASIN) for best results
- Prefer direct product links (ASIN) over search results. In `data.js`, specify `asin: "B000000000"` instead of a search URL and the site will generate `https://www.amazon.com/dp/<ASIN>?tag=...&ascsubtag=...`.
- You can also set a per-item tag by adding `tag: "your-other-tag-20"` to an item. The page-level `tag` query string still overrides everything for testing.

## SEO & Performance
- JSON-LD `ItemList` injected for categories and items.
- Lightweight (no frameworks) for fast load.

## Compliance
Include clear disclosure: "As an Amazon Associate I earn from qualifying purchases." Already injected. Ensure overall site meets Amazon Associates Program Policies (accurate pricing, no claims of guaranteed prices, etc.).

## Extending
- Add more categories in `data.js`.
- Adjust the filter placeholder text in `index.html` if you change branding.
- Add analytics by creating `assets/analytics.js` and loading it.
- Add images: store in `assets/img/` then reference via `img: './assets/img/<file>.webp'`.

## Deploy
After pushing to `main`, GitHub Pages will serve at: `https://<your-username>.github.io/top10/` (assuming repository name or folder structure under a root pages setup). If this is part of a larger repo using root pages, folder path is appended.

## Disclaimer
Product links are examples (search queries). Replace with specific product URLs/ASINs after vetting. Verify each product remains available and relevant annually.

---
Happy listing! Add more categories and commit.

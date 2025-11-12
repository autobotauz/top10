#!/usr/bin/env python3
"""
Generate sitemap.xml from top10.json for the static Top 10 site.

Usage (Windows PowerShell):
  python .\tools\generate_sitemap.py

Environment variables:
  BASE_URL - The absolute base URL where the site is hosted (required for absolute locs).
             Example: https://item-rank.com/top10/

This script reads ../top10.json and writes ../sitemap.xml
"""
import json
import os
import sys
from datetime import datetime
from urllib.parse import quote

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(ROOT, 'top10.json')
OUT_PATH = os.path.join(ROOT, 'sitemap.xml')

BASE_URL = os.environ.get('BASE_URL', '').strip()
if not BASE_URL:
    # Fallback assumption; adjust if your deployment differs
    BASE_URL = 'https://item-rank.com/top10/'

# Normalize base URL
if not BASE_URL.endswith('/'):
    BASE_URL += '/'

now = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')

try:
    with open(DATA_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
except FileNotFoundError:
    print(f"ERROR: top10.json not found at {DATA_PATH}", file=sys.stderr)
    sys.exit(1)
except Exception as e:
    print(f"ERROR: Failed to read top10.json: {e}", file=sys.stderr)
    sys.exit(2)

# Collect category ids
cats = []
for entry in data:
    cat = entry.get('category')
    if isinstance(cat, str) and cat:
        cats.append(cat)

# Deduplicate while preserving order
seen = set()
unique_cats = []
for c in cats:
    if c not in seen:
        seen.add(c)
        unique_cats.append(c)

# Build XML
lines = []
lines.append('<?xml version="1.0" encoding="UTF-8"?>')
lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

# Index page
lines.append('  <url>')
lines.append(f'    <loc>{BASE_URL}</loc>')
lines.append(f'    <changefreq>daily</changefreq>')
lines.append(f'    <priority>0.8</priority>')
lines.append(f'    <lastmod>{now}</lastmod>')
lines.append('  </url>')

# Category pages
for c in unique_cats:
    loc = f"{BASE_URL}categories/category.html?cat={quote(c)}"
    lines.append('  <url>')
    lines.append(f'    <loc>{loc}</loc>')
    lines.append(f'    <changefreq>weekly</changefreq>')
    lines.append(f'    <priority>0.6</priority>')
    lines.append(f'    <lastmod>{now}</lastmod>')
    lines.append('  </url>')

lines.append('</urlset>')

with open(OUT_PATH, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines) + '\n')

print(f"Wrote sitemap to {OUT_PATH} with {1 + len(unique_cats)} URLs.")

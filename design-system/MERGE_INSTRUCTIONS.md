# Merging the Layer 10 design system into the `layer10security.io` repo

This bundle is a **standalone design-system package** — it lives alongside the existing Vite/React marketing site rather than replacing anything. The production site keeps its Tailwind tokens; this folder is the portable version (plain CSS + JSX) that designers, skills, and throwaway prototypes can consume.

## What's in the zip

```
README.md                  ← brand fundamentals (content, visual, iconography)
SKILL.md                   ← Agent Skills / Claude Code manifest
colors_and_type.css        ← portable tokens (HSL vars, .glass, .text-gradient, .btn-hero)
assets/                    ← logo-website.png, favicon.svg, favicon.ico
preview/                   ← Design System specimen cards
ui_kits/website/           ← high-fidelity HTML/JSX recreation of every section
.manifest.json             ← internal review metadata (safe to keep or delete)
```

No files here collide with paths in `l10sec/layer10security.io` — the repo has no `README.md` conflict because this one is scoped to `design-system/README.md`, no `SKILL.md`, no top-level `colors_and_type.css`, no `assets/` or `ui_kits/` folder.

## Recommended layout in the repo

Drop the whole bundle under `design-system/` at the repo root:

```
layer10security.io/
├── src/                    (untouched — your existing Vite app)
├── public/                 (untouched)
├── design-system/          ← NEW — everything from this zip goes here
│   ├── README.md
│   ├── SKILL.md
│   ├── colors_and_type.css
│   ├── assets/
│   ├── preview/
│   └── ui_kits/
├── package.json
└── …
```

## Merge commands

Assuming you've cloned the repo and the zip is downloaded to `~/Downloads/layer10-design-system.zip`:

```bash
# 1. Clone (skip if you already have it)
git clone https://github.com/l10sec/layer10security.io.git
cd layer10security.io

# 2. Create a branch
git checkout -b design-system

# 3. Make the target folder
mkdir -p design-system

# 4. Unzip the bundle into it
unzip ~/Downloads/layer10-design-system.zip -d design-system

# 5. (Optional) drop the internal manifest — it's only used by the authoring tool
rm -f design-system/.manifest.json

# 6. Verify nothing clobbered existing files
git status

# 7. Commit
git add design-system
git commit -m "Add portable design system (brand fundamentals, tokens, UI kit)"

# 8. Push and open a PR
git push -u origin design-system
gh pr create --fill   # or open the URL GitHub prints
```

## Verifying the UI kit works

After unzipping, open `design-system/ui_kits/website/index.html` directly in a browser (double-click or `open` / `xdg-open`). Everything is CDN-loaded React + Babel — no build step, no `npm install`, no server required. You should see a full marketing-site recreation (Hero → Footer) rendering identically to production.

## If you want to wire it into the Vite app later

The tokens in `colors_and_type.css` mirror the HSL values already in `src/index.css` — they're intentionally the same palette, just exported as CSS custom properties so non-Tailwind consumers can use them. If you want a single source of truth, you can:

1. Replace the HSL vars in `src/index.css` with an `@import '../design-system/colors_and_type.css'` (they'll survive Tailwind's layer processing).
2. Or leave both files side by side — they won't conflict.

The JSX components in `ui_kits/website/` are **intentionally plain React** (no Tailwind, no shadcn, no Framer Motion) so they're readable as a reference. The production `src/components/` versions stay canonical for the live site.

## Rollback

```bash
git checkout main
git branch -D design-system
rm -rf design-system
```

No side effects outside the new folder.

---
name: layer10-design
description: Use this skill to generate well-branded interfaces and assets for Layer 10 Security, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Company.** Layer 10 Security — AI-powered security-posture management. Turns compliance gaps into verified remediation using AI agents that read from and act on a customer's security stack (EDR, email security, IAM, threat intel, XDR).
- **Voice.** Declarative, technical, CISO-fluent. Short sentences, rhetorical parallelism, numeric specifics over adjectives. No emoji.
- **Colors.** Dark `#0D0D12` ground, Indigo `#6366F1` primary, Violet `#8B5CF6` secondary, Teal `#2DD4BF` accent (gradient-text only). Traffic-light status red/amber/green.
- **Type.** Space Grotesk (sans, 400/500/600/700) + JetBrains Mono (numbers, code, step badges). Both loaded from Google Fonts in `colors_and_type.css`.
- **Icons.** Lucide, stroke 1.8, often wrapped in a 40–48 px rounded-xl tile with a primary→secondary gradient fill.
- **Signature surface.** `.glass` cards — `bg: card/0.6`, `backdrop-blur: 20px`, `border: 1px solid border/0.5`, `border-radius: 16–24px`, hover adds a 1px gradient underline.

## Files

- `README.md` — full brand fundamentals (content, visual, iconography).
- `colors_and_type.css` — import first, everything else assumes it's loaded.
- `assets/` — `logo-website.png`, `favicon.svg` (the three-diamond mark), `favicon.ico`.
- `ui_kits/website/` — drop-in JSX components for every section of the site.
- `preview/` — small design-system specimen cards (not for production).

## Building something new

1. Link `colors_and_type.css`. Use the tokens (`--indigo-500`, `--fg2`, `--radius-lg`, `.glass`, `.text-gradient`, `.grid-pattern`).
2. For sections: dark bg → eyebrow (`<div class="eyebrow">Capabilities</div>`) → H2 with a trailing gradient phrase → sub copy → grid of `.glass` cards.
3. For icons: use Lucide. In plain HTML, use `lucide-static` SVGs or the Lucide runtime. In the UI kit, use `<Icon name="brain"/>` from `ui_kits/website/Icon.jsx`.
4. For copy: mirror the manifesto rhythm. Aim for something like *"X does Y. We do Z."* Avoid hedging ("helps you", "is designed to"). Lean on concrete numbers.

## What to avoid

- Light backgrounds. Everything lives on dark.
- Emoji, system fonts, hand-rolled icons, repeating illustrations.
- Drop shadows on cards (use glow or the gradient underline instead).
- Pastel gradients outside the indigo→violet→teal family.
- The word "help".

# Layer 10 Security — Design System

**Layer 10 Security** is an AI‑powered security‑posture management platform for enterprise security leaders. Their pitch, in their own words: *"From Compliance Gap to Verified Remediation."* Where legacy GRC platforms are compliance **reporters** (they produce audit artifacts), Layer 10 positions itself as compliance **engineers** — the AI agents don't just document the gap, they remediate it through the customer's existing security stack (EDR, email security, IAM, threat intel, XDR, etc.).

Their headline numbers: **30 compliance frameworks** (HIPAA, SOC 2, ISO 27001, CMMC, PCI‑DSS, …), **3,400+ control mappings**, **72+ supported security tools**, across **5 security domains**. The core user is a CISO / security‑team lead evaluating how to close a gap.

## Source material

| Source | Location |
|---|---|
| Marketing site repo | `github.com/l10sec/layer10security.io` @ main |
| Tech stack | Vite + React + Tailwind + shadcn/ui + Radix + Framer Motion + lucide-react |
| Key components read | `HeroSection`, `Navigation`, `Logo`, `FeaturesSection`, `ChallengeSection`, `ArchitectureSection`, `ArchitectureDiagram`, `SecuritySection`, `IntegrationsSection`, `UseCasesSection`, `CTASection`, `StatsBar`, `Footer`, `ui/button`, `ui/badge`, `ui/card`, `ui/input` |
| Token source | `src/index.css` (HSL vars), `tailwind.config.ts` (font + radius + animation) |

No other products (app, docs, mobile) were provided — the design system is scoped to the **marketing website** surface. The "Layer 10 app" shown in the hero Architecture Diagram is a stylised illustration, not a real product surface in the repo.

## What's in this folder

```
README.md                  ← you are here
SKILL.md                   ← portable version for Agent Skills / Claude Code
colors_and_type.css        ← single source of truth for tokens
assets/                    ← logos, favicon, hero graphic
preview/                   ← small Design System tab cards
ui_kits/website/           ← high-fidelity HTML/JSX recreation of the site
```

---

## Content fundamentals

Layer 10's copy is **declarative, confident, and technical** — written for CISOs who are tired of dashboards and want operators, not narrators. It's short sentences separated by em‑dashes, with a strong rhythmic / rhetorical contrast structure.

**Voice & tone**
- Second‑person ("your controls", "your stack") when talking about the customer.
- First‑person plural ("we find", "we remediate") when talking about the product.
- Present tense, active voice. No "is designed to" / "helps you to" hedging.
- Zero emoji. Zero cutesy language. No exclamation points.
- Title Case on buttons and section eyebrows (`FEATURES`, `ARCHITECTURE`). Sentence case on body H2s with a trailing gradient phrase (e.g. "Purpose‑Built for **Security Leaders**").
- Comfortable with rhetorical parallelism: *"They prove you're compliant. We make you compliant."* / *"GRC platforms are compliance reporters. We are compliance engineers."*

**Diction patterns**
- Numeric specifics beat adjectives: "30 Frameworks", "3,400+ Control Mappings", "72+ Security Tools", "150+ built-in detectors".
- Security domain terminology is used freely and never explained (EDR, XDR, IAM, IGA, CTI, IOC, CMMC, FedRAMP, SDP).
- Three‑word taglines as recurring motifs: *"Find, Prove, Remediate"*, *"Evidence, Not Assumptions"*, *"One Fix, All Satisfied"*.

**Copy examples (verbatim from the site)**
- Hero eyebrow: `AI Security Engineering`
- Hero H1: *From Compliance Gap to Verified Remediation*
- Hero subhead: *AI agents that identify missing controls, detect misconfigurations, and remediate them through your security stack.*
- Section eyebrow pattern: all-caps, indigo, tracked `0.08em` — `CAPABILITIES` / `DATA PROTECTION` / `ARCHITECTURE` / `INTEGRATIONS` / `USE CASES`.
- Feature titles: noun phrases — "AI Security Agents", "Compliance Mapping", "Roadmap Simulator", "Live Control Intelligence".
- Manifesto beat (ChallengeSection): *"Automated evidence collection was the last decade's innovation. Automated remediation is this decade's."*
- Closer: *"They prove you're compliant. **We make you compliant.**"*

---

## Visual foundations

**Mood.** Dark, premium, "security ops after midnight". Deep blue‑violet near‑black backgrounds (`240 15% 6%`) with indigo → violet → teal energy. Glowing glass panels, dashed connection lines, subtle grid patterns, soft radial "blobs" of primary/secondary colour behind hero sections.

**Color.**
- Primary — Indigo `#6366F1` (hsl `239 84% 67%`) → interactive, eyebrow tags, link colour.
- Secondary — Violet `#8B5CF6` (hsl `263 70% 58%`) → gradient counterpart.
- Accent — Teal `#2DD4BF` (hsl `172 66% 50%`) → gradient text, "highlighted phrase" role.
- Status — Red `#EF4444` (identify), Amber `#F59E0B` (prove), Green `#22C55E` (remediate). Used literally in the Identify → Prove → Remediate status bar and in the architecture diagram traffic lights.
- Surfaces step `bg0 → bg1 → bg2 → bg3` from background to border.

**Typography.** Space Grotesk (400/500/600/700) for everything, JetBrains Mono (400/500/600) for numbers, code, control IDs, step numbers, badge labels. Headlines are tight (`line-height: 1.1`, letter‑spacing `-0.02em`), hero scales up to **~60px**. Body copy sits at 16–18px with `line-height: 1.625` ("relaxed"). Gradient‑text treatment (`.text-gradient`, teal → light teal) is reserved for the **last phrase** of a H2.

**Spacing & rhythm.** 4px grid. Sections are `py-24` (96px vertical). Container is `max-w-1400px` with `px-6` (24px) gutter. Cards are `p-6` (24px) or `p-8` (32px). Gaps inside grids are typically `gap-6` (24px).

**Corner radii.** Default token `--radius: 12px`. Buttons `rounded-lg` (12px). Glass panels / cards `rounded-2xl` (16–24px). Big hero containers `rounded-3xl` (32px). Pills / dot indicators are `rounded-full`.

**Cards.** The signature treatment is `.glass` — `bg: hsl(240 12% 10% / 0.6)` + `backdrop-blur: 20px` + `border: 1px solid hsl(240 10% 18% / 0.5)` + `rounded-2xl`. No drop shadow on the card itself — elevation comes from blur + border, not shadow. Hover darkens border to `primary/50` and reveals a 1px gradient underline that scale‑x's from left.

**Shadows & glow.** Real drop shadows are rare; brand glow is the preferred elevation. `--glow-primary` = `0 0 40px hsl(primary / 0.3)`. Hero CTA uses `box-shadow: 0 10px 40px -10px primary/0.6`. Behind hero: two giant 320–384px radial blurs of `primary/10` and `secondary/10` — the "aurora".

**Backgrounds.**
- Page: flat `bg0`.
- Hero: `bg0` + `grid-pattern` at `opacity: 0.3` + two radial blur blobs.
- Alternating sections: flat `bg0` vs `bg-muted/20` for rhythm.
- `grid-pattern` = 60×60 px dotted cross lines at `border / 0.3`, used at low opacity (0.10–0.30) throughout.
- No full‑bleed photos, no illustrations, no repeating textures beyond the grid. The "imagery" is geometric: the logo's stacked‑diamond motif, dashed connection lines, pill badges.

**Borders.** `1px solid hsl(240 10% 18%)` everywhere. Branded border variants: `primary/30` on feature headers, `secondary/30` on the engine box, `primary/20` on integration badges. Dashed borders (`border-dashed`) mark connection lines inside the Architecture Diagram.

**Transparency & blur.** Used pervasively but consistently: any "panel on top of the page" is `surface / 0.6 – 0.8` with `backdrop-filter: blur(20px)`. Decorative blurred blobs sit at `color/5 – color/10` with `blur-3xl` (64px). Scrolled nav transitions from transparent to `.glass`.

**Animation.** Framer Motion, conservative, purposeful:
- Entry: `opacity 0 → 1` + `y: 20/30 → 0` or `x: -50/50 → 0`, duration ~0.8s, staggered by `index * 0.08–0.1`.
- Ambient: `pulse-glow` (2s, opacity 1 ↔ 0.5) on live status dots; `float` (6s, y 0 ↔ -10px) reserved but rarely used; `scan-line` on the architecture diagram (3s).
- Easing is default ease‑out; no bouncy springs.
- `scroll-behavior: smooth` is relied on for in‑page nav.

**Hover & press states.**
- Buttons (hero): `hover:scale(1.05)` + shadow deepens. No colour change.
- Buttons (outline): background fills to `bg2`, border tints to `primary/50`.
- Cards: border tints to `primary/50`, bottom 1px gradient underline `scale-x: 0 → 1` from left.
- Nav links: `muted-foreground → foreground` colour fade.
- Icons: sit inside a gradient tile (`from-primary/20 to-secondary/20`); on card hover the parent card lifts border colour — the icon itself doesn't change.
- No press‑down shrink. No click ripple.

**Layout rules.** Fixed navigation (`z-50`) that switches from transparent to glass on scroll. Container centred, max 1400px. Hero uses a `grid-cols-2` split (copy left, ArchitectureDiagram right). Feature grids are `md:grid-cols-2 lg:grid-cols-3`. Use‑case rows alternate `x: -50 / +50` entry direction. Footer is 5‑column (2 for brand + 3 for link groups).

---

## Iconography

**System.** [Lucide](https://lucide.dev/) via `lucide-react@0.462.0` is the *only* icon system. Everything you see on the site — `Shield`, `Brain`, `Activity`, `Network`, `Map`, `FileCheck`, `ShieldOff`, `ArrowRight`, `Menu`, `X`, `Github`, `Linkedin`, `Twitter` — is a Lucide glyph. No icon font is bundled. No SVG sprites. No emoji. No unicode glyphs used as icons.

**Usage patterns.**
- Default size `w-4 h-4` (16px) inline with text, `w-5 h-5` for feature highlights, `w-6 h-6` in a gradient tile.
- Stroke weight left at Lucide default (`1.5`). Icons tint with `text-primary`, `text-secondary`, `text-accent`, or `text-green-500` depending on row meaning (status in the architecture diagram).
- Icons are commonly wrapped in a 40 – 48 px rounded‑xl tile with `bg-gradient-to-br from-primary/20 to-secondary/20` — this is the "feature tile" pattern repeated across Features / Security / Integrations sections.
- Numeric step badges use **text**, not icons, set in JetBrains Mono (`1`, `2`, `01`, `02` …).

**In this design system.**
- Local: the site's logo (`assets/logo-website.png`) + the three‑diamond SVG (`assets/favicon.svg`). Lift the SVG directly for brand marks.
- For icons in generated HTML: load Lucide from CDN via `https://unpkg.com/lucide-static@0.462.0/icons/<name>.svg` or embed the Lucide icons font via `<script src="https://unpkg.com/lucide@0.462.0"></script>` and `lucide.createIcons()` — matches the site exactly, no substitution needed.

---

## Font availability

**Space Grotesk** and **JetBrains Mono** are both loaded from Google Fonts in the production site (`src/index.css`). We keep the same Google Fonts import in `colors_and_type.css` rather than bundling TTFs — these are officially Google‑hosted open fonts, so there is *no* substitution and no missing‑font flag.

---

## Index

- [`colors_and_type.css`](./colors_and_type.css) — tokens + semantic base styles. Import this first.
- [`assets/`](./assets/) — `logo-website.png` (320×119 transparent PNG), `favicon.svg` (three‑diamond isometric mark, gradient), `favicon.ico`.
- [`preview/`](./preview/) — Design System tab cards (colours, type, spacing, components, brand).
- [`ui_kits/website/`](./ui_kits/website/) — high‑fidelity recreation of the marketing site in static HTML + JSX. Start at `ui_kits/website/index.html`.
- [`SKILL.md`](./SKILL.md) — portable skill manifest so this folder can be dropped into Claude Code / Agent Skills.

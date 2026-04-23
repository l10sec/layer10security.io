# Layer 10 Security — Marketing Site UI Kit

High-fidelity recreation of the `layer10security.io` marketing site. Components mirror the real React source (shadcn/ui + Radix + Framer Motion + Lucide). Shapes/colors/copy are lifted verbatim; the implementation is simplified to vanilla JSX so anyone can drop a component in without wiring up Tailwind.

## Usage

Open `index.html` — it composes every component into the full single-page site, exactly as the production `App.tsx` does: `Navigation → Hero → StatsBar → Challenge → Features → Security → Architecture → Integrations → UseCases → CTA → Footer`.

## Components

| File | Purpose |
|---|---|
| `Navigation.jsx`      | Fixed top nav. Transparent → glass on scroll. |
| `Logo.jsx`            | Stacked-diamond mark + LAYER10 / SECURITY wordmark. |
| `Hero.jsx`            | Hero with eyebrow pill, gradient H1, CTAs, feature badges, architecture diagram panel. |
| `StatsBar.jsx`        | 30 / 3,400+ / 72+ / 5 row with icons. |
| `Challenge.jsx`       | The "reporters vs engineers" manifesto section. |
| `Features.jsx`        | 3-column glass card grid with gradient-tile icons. |
| `Security.jsx`        | Data-protection flow (1 → SDP → 2) + trust points grid. |
| `Architecture.jsx`    | CISO → Engine → Integration Layer → Tools stack. |
| `Integrations.jsx`    | 4-column integration-category grid. |
| `UseCases.jsx`        | 4 large rows with alternating entry motion. |
| `CTA.jsx`             | Demo-request email form. |
| `Footer.jsx`          | 5-column footer + social + badge. |
| `ArchitectureDiagram.jsx` | The three-column "coverage / engine / stack" panel used in the hero. |
| `Icon.jsx`            | Lightweight Lucide wrapper (inline SVG paths for the icons this kit uses). |

## What's faithful, what's cut
- **Faithful**: color tokens, radii, typography, spacing, the gradient on H2 trailing phrases, glass card treatment, Lucide icon choices per section, exact section copy, pill / badge patterns, nav scroll-state transition.
- **Cut for simplicity**: Framer Motion (replaced with CSS keyframes on the ambient effects — entry animations are static on load), Radix primitives (plain buttons/inputs), react-router.

This is a **reference recreation** — use it to grab a component, adapt the markup, and keep your colors on-brand.

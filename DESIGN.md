# Design Brief

## Direction

Bahasa Holdings — Industrial-brutalist B2B showcase for Configuration Management and plant labelling, photography-first proof-of-work landing.

## Tone

Dark, authoritative, technical precision — industrial machinery aesthetic serving procurement and engineering teams at power stations.

## Differentiation

Full-width field photography gallery (12 images) embedded into every section as authentic proof-of-work; minimal text hierarchy and heavy contrast rhythms.

## Color Palette

| Token                    | OKLCH             | Role                          |
|--------------------------|-------------------|-------------------------------|
| background               | 0.08 0 0          | Jet black structural base      |
| foreground               | 0.96 0.01 270     | Cool off-white readable text  |
| card                     | 0.13 0 0          | Slightly elevated dark surface |
| primary (accent green)   | 0.52 0.14 142     | Industrial green CTAs         |
| secondary (steel grey)   | 0.32 0.01 270     | Neutral support elements      |
| muted                    | 0.22 0.005 270    | Subtle dark grey dividers     |
| destructive              | 0.55 0.22 25      | Error states (red tones)      |

## Typography

- Display: Bricolage Grotesque (weights 400–900) — bold headlines, all-caps section labels, industrial weight
- Body: General Sans (weights 400–700) — readable technical copy, 16px base, 1.5 line height
- Scale: hero 3xl bold, h2 2xl bold, labels sm all-caps, body base regular

## Elevation & Depth

Minimal shadows; elevation via lightness contrast and dark card surfaces. No glow effects. Borders use muted token for subtle definition.

## Structural Zones

| Zone    | Background             | Border                    | Notes                                   |
|---------|------------------------|---------------------------|-----------------------------------------|
| Header  | 0.08 (black)           | —                         | Sticky nav, minimal, uses accent CTA   |
| Hero    | full-width photo+dark  | —                         | Dark overlay on field image             |
| Section | alternates: 0.08, 0.16 | 0.20 muted (dark grey)    | Service cards on light grey; gallery    |
| Footer  | 0.08 (black)           | 0.20 muted (top border)   | Logo, registration, tagline             |

## Spacing & Rhythm

Section gaps 4rem; content max-width 1200px; card grids use gap-6; micro-spacing 8px/12px/16px. Generous top/bottom padding per section (3rem).

## Component Patterns

- Buttons: Primary green (0.52 0.14 142) on black, hover +0.05 L, 12px rounded, bold text
- Service cards: 0.16 background, 0.20 border, 4px corner radius, fade-in on scroll
- Photo gallery: masonry grid, lightbox modal on click, captions in italic body text
- Contact form: dark background, white labels, green submit button

## Motion

- Entrance: 0.3s fade-in and subtle upward slide (20px) on scroll, 100ms stagger per element
- Hover: 0.2s smooth color/shadow transition on buttons and cards
- Decorative: animated scroll indicator at hero bottom (breathing pulse)

## Constraints

- No red accents (previous brand iteration) — use only green and greys
- WCAG AA contrast (4.5:1 minimum text:background)
- No parallax; mobile-first responsive only
- All photographs 1–12 must be prominently displayed; image 13 (competitor flyer) must NOT appear

## Signature Detail

Authentic field photography (Eskom power station installations) replaces generic stock imagery — vessels, labels, walkdowns — proving technical credibility without marketing jargon.

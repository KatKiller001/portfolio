# Design brief

Source: the interview, without Stitch
Mood: organized, warm, precise. Minimal and structured, like a well-crafted developer toolkit: clean sector cards, crisp typography, and disciplined spacing.

## Style

- Style: Modern, with a Playful touch: sectors and structured content boxes.
- Feel: organized, warm, precise.
- Personal detail: a subtle piano-key divider pattern with clean geometric rhythm separating key areas.
- Motion: subtle and short, 150 to 300 ms: elements settle smoothly into place, nothing bounces. When the visitor prefers reduced motion, nothing moves.

## Colours

| Token | Light | Dark | Used for |
|---|---|---|---|
| background | #fafaf9 | #111211 | page background: soft white |
| surface | #f1f3f1 | #181c19 | sector boxes, cards, tags |
| text | #1b1b1a | #ececea | headings and body text |
| muted | #58605b | #9faaa2 | secondary text, dates, section metadata, subtle borders |
| accent | #18392b | #42b58f | links on hover, focus ring, primary buttons: deep forest green |
| on-accent | #ffffff | #111211 | text on an accent-coloured button |

## Type

| Role | Font | Size | Weight |
|---|---|---|---|
| headings | "Geist", system-ui, sans-serif | name 1.75rem, section 1.125rem, card 1rem | 600 |
| body | "Geist", system-ui, sans-serif | 1rem, line height 1.6 | 400 |
| details | "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace | dates, badges and labels 0.875rem | 400 |

## Shapes

| Part | Shape |
|---|---|
| Corner radius | 0.5rem on sector boxes, cards, and interactive buttons; 0.25rem on tags and badges. |
| Borders | 1px solid border on sector boxes in muted with reduced opacity, crisp square corners for inner elements. |
| Shadows | none; solid surfaces and clean lines only. |

## Layout

- One column, at most 44rem wide, centred, text flush left, with 1.25rem space at the sides on phones.
- 3rem between sector blocks, 1rem between items inside sectors.
- Distinct sector cards for highlights, competitive awards, and education.

## Components

- Links: text colour, underlined in muted; accent on hover, and keyboard focus shows a 2px accent ring.
- Cards: solid surface background, 1px subtle border, 1.25rem inner padding.
- Skills: compact pill badges with solid surface background and muted border.
- Section headings: crisp sans-serif with a small monospace sector index.
- Dates: in the details font, in the muted colour.

## Signature

- Move: Staggered entrance on load
- Guide: guides/ui-behaviors/dynamic-sibling-animations.md
- Where: the sectors and highlight items settle into place one after the other when the page opens.

## Sections

1. `bio`: the name, headline, pitch, availability, and languages.
2. `cv`: education and competitive technical skills.
3. `links`: contact options (email and phone).

# GAEA GOLD Design System and UI Handoff

## Brand Tokens
- Primary: #1B5E3F
- Accent Gold: #D4AF37
- Light Gold: #F4E4C1
- Off White: #F8F7F5
- Light Gray: #F2F1F0
- Text Dark: #1A1A1A
- Text Gray: #6B6B6B
- Success: #27AE60
- Alert: #E67E22
- Error: #E74C3C

## Typography
- Heading: Playfair Display
- Body: Inter
- Mono: JetBrains Mono
- Scale follows desktop/mobile variants from specification.

## Spacing and Radius
- 8px grid system
- Radius: 6px inputs/buttons, 8px cards, 12px modals, 16px large sections

## Shadows
- Subtle: 0 2px 8px rgba(0,0,0,0.08)
- Medium: 0 4px 12px rgba(0,0,0,0.12)
- Elevated: 0 8px 24px rgba(0,0,0,0.15)

## Implemented Routes
### Public
- /
- /products
- /products/[slug]
- /about
- /contact

### Auth
- /login (Admin login style)

### Admin
- /admin (dashboard overview)
- /admin/analytics
- /admin/products
- /admin/inquiries
- /admin/settings

## Components and Patterns
- Global header with desktop nav, mobile drawer, search overlay, mini cart drawer
- Footer with four-column desktop and stacked mobile layout
- Product cards, badges, pricing rows, CTA styles
- Filters sidebar and mobile filter/sort controls
- Product details desktop tabs + mobile accordion behavior
- Admin topbar, sidebar, card metrics, tables, and placeholder chart panels

## Accessibility and Performance Notes
- Touch target-friendly controls for mobile actions
- Semantic headings and label-input pairing on forms
- Color choices aligned for strong contrast against primary backgrounds
- Placeholder gradients used where product assets are not yet available

## Next Design-Handoff Step
- Use this implementation as wireframing baseline and map to Figma components for final visual QA.

Let me gather information from the Figma design to understand the component before creating a plan.Now let me check the existing project structure.# Header Madrid Block Implementation Plan

## Design Summary

The Figma design (node `3:7133`) is a **Header component for the Madrid city website** (`madrid.es`). It contains:

- **Logo**: Madrid coat of arms + "MADRID" wordmark (left-aligned)
- **Navigation pills**: Three pill-shaped nav items — "Ayuntamiento" (active, light blue background `#D7E8F5`), "Ciudad", and "Sede" — centered
- **Right section**: "Iniciar sesión" (login) button (blue `#0055A0` background, white text, rounded) + hamburger menu icon
- **Decorative border ("Greca")**: A repeating geometric pattern strip at the bottom of the header
- **Drop shadow**: `0px 4px 12px rgba(0,0,0,0.12)` on the header
- **Font**: DM Sans (semibold for active pill, medium for others), 16px
- **Primary color**: `#0055A0` (Madrid blue)
- **Active pill background**: `#D7E8F5`
- **Width**: 1280px max, 64px horizontal padding
- **Height**: ~86px (header area, excluding browser chrome)

## Existing Project State

- The project has a **default EDS header block** at `blocks/header/` with standard nav fragment loading
- Global styles use Roboto font family and standard EDS CSS variables
- The `--nav-height` is currently `64px`

## Implementation Approach

This will be implemented as a **new custom block called `header-madrid`** to avoid breaking the existing default header. The block will follow EDS patterns (JS decoration + CSS styling) and use the nav fragment pattern.

---

## Checklist

### 1. Design Token Extraction
- [ ] Extract and define Madrid-specific CSS custom properties (colors, fonts, spacing)
- [ ] Add `DM Sans` font to `styles/fonts.css`
- [ ] Update `:root` variables or scope Madrid tokens under `.header-madrid`

### 2. Content Model Definition
- [ ] Define the nav fragment structure for the header-madrid block
- [ ] Create `content/nav.html` with the Madrid header content (logo, nav items, login button)
- [ ] Ensure the content model supports: brand/logo, nav pill items (with active state), login CTA, and hamburger

### 3. Block JavaScript (`blocks/header-madrid/header-madrid.js`)
- [ ] Load nav fragment (reuse existing fragment pattern)
- [ ] Decorate brand section with logo
- [ ] Create pill-style navigation items from nav sections (with active state class)
- [ ] Build right-side tools section (login button + hamburger)
- [ ] Add the decorative "Greca" border element at the bottom
- [ ] Implement mobile hamburger toggle behavior
- [ ] Handle responsive behavior (desktop vs. mobile)

### 4. Block CSS (`blocks/header-madrid/header-madrid.css`)
- [ ] Layout: flexbox with `justify-content: space-between`, max-width 1280px, 64px padding
- [ ] Logo: 177px width, vertically centered
- [ ] Nav pills: rounded `border-radius: 16px`, 12px padding, 8px gap between items
- [ ] Active pill: `background: #D7E8F5`, `border: 3px solid #D7E8F5`, semibold text
- [ ] Inactive pills: transparent background, medium weight text
- [ ] Login button: `background: #0055A0`, white text, `border-radius: 8px`, 8px/6px padding
- [ ] Hamburger icon: 32x32px
- [ ] Greca border: repeating pattern, 20px height, centered, 1px gap
- [ ] Drop shadow: `box-shadow: 0px 4px 12px rgba(0,0,0,0.12)`
- [ ] Responsive styles for mobile (< 900px)

### 5. Assets
- [ ] Download/reference the Madrid logo SVG
- [ ] Create or reference the Greca decorative pattern (SVG or CSS-based)
- [ ] User icon for login button

### 6. Verification
- [ ] Preview the block in the local dev server
- [ ] Compare rendering against the Figma screenshot
- [ ] Validate responsive behavior (desktop and mobile)
- [ ] Ensure accessibility (ARIA attributes, keyboard navigation)

---

## Key Design Specs

| Property | Value |
|----------|-------|
| Max width | 1280px |
| Horizontal padding | 64px |
| Header padding-top | 12px |
| Header padding-bottom | 8px |
| Background | `#FFFFFF` |
| Box shadow | `0 4px 12px rgba(0,0,0,0.12)` |
| Primary blue | `#0055A0` |
| Active pill bg | `#D7E8F5` |
| Font family | DM Sans |
| Nav text size | 16px / 21px line-height |
| Pill border-radius | 16px |
| Login button radius | 8px |
| Logo width | 177px |
| Greca height | 20px |

---

> **Note:** Execution requires exiting Plan mode. The implementation will use the `excat-figma:excat-figma-migration` skill for Figma-to-EDS block conversion.

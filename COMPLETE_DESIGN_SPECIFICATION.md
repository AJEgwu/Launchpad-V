# LaunchPad Application - Complete Design System Specification

**Generated from SVG Design File Analysis**

Based on comprehensive analysis of 7 SVG design files:
- AI-DesktopApp-HomePg-Final.svg
- AI-DesktopApp-OnBoardingPg-1.svg  
- AI-DesktopApp-RoadmapPg-1.svg
- AI-DesktopApp-AdvRoadmapPg-1.svg
- AI-DesktopApp-PortfolioPg-1.svg
- AI-DesktopApp-MatchPg-1.svg
- AI-DesktopApp-OpportunityPg-1.svg

---

## 1. Viewport & Layout Foundation

### Canvas Sizes
- **Desktop Canvas Size**: 1007.348 x 566.632px (standard pages)
- **Extended Pages**: 1007.348 x 1172.385px (Portfolio, Opportunity)
- **Scrollable Page**: 1007.348 x 2659.533px (Advanced Roadmap)

### Layout Pattern
- Full-width application
- Sidebar navigation (left side, ~200-250px)
- Main content area (remaining width)
- Header bar (~60-80px height)

---

## 2. Typography System

### Font Families

#### Primary Font
**MyriadVariableConcept-Roman** (or "Myriad Variable Concept")
- Use for: Body text, descriptions, labels, general content

#### Secondary Font
**Comfortaa-Regular** (Comfortaa)
- Use for: Headings, buttons, badges, accent text, branding

#### Monospace Font
**Arial Black**
- Use for: Code snippets, technical labels

### Typography Scale

| Token | Size (px) | Size (rem) | Usage |
|-------|-----------|------------|-------|
| `--text-6xl` | 34.74px | 2.171rem | Page titles (e.g., "Roadmap") |
| `--text-5xl` | 24.00px | 1.500rem | Large headings |
| `--text-4xl` | 23.53px | 1.471rem | Section headings |
| `--text-3xl` | 21.12px | 1.320rem | Subsection headings |
| `--text-2xl` | 19.30px | 1.206rem | Large emphasis text |
| `--text-xl` | 16.00px | 1.000rem | Card titles |
| `--text-lg` | 15.49px | 0.968rem | Large body text |
| `--text-base` | 12.78px | 0.799rem | Logo text, primary labels |
| `--text-md` | 10.00px | 0.625rem | Standard body text |
| `--text-sm` | 9.51px | 0.594rem | Navigation items |
| `--text-xs` | 7.96px | 0.498rem | Small labels, descriptions |
| `--text-2xs` | 6.64px | 0.415rem | Badges, tags, small buttons |
| `--text-3xs` | 6.38px | 0.399rem | Tiny labels |
| `--text-4xs` | 6.00px | 0.375rem | Minimal text |

### Font Weights
- `--font-normal`: normal (400)
- `--font-medium`: normal (used for emphasis)
- `--font-bold`: Used sparingly for headings

### Line Heights
- **Headings**: 1.2 - 1.3
- **Body**: 1.5 - 1.6
- **Tight**: 1.0 (for badges/buttons)

---

## 3. Color System

### Primary Colors (Blues/Teals)

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary-900` | #00598f | Darkest blue, text on light backgrounds |
| `--primary-800` | #034f84 | Dark blue |
| `--primary-700` | #065e8a | Medium-dark blue |
| `--primary-600` | #2882a1 | Primary teal (main brand color) |
| `--primary-500` | #2982a1 | Primary teal variant |
| `--primary-400` | #30639a | Medium blue |
| `--primary-300` | #54adb8 | Light teal |
| `--primary-200` | #78a2ba | Lighter blue |
| `--primary-100` | #bfe5e6 | Very light teal |
| `--primary-50` | #c1e6e7 | Lightest teal background |

### Neutral Colors (Grays)

| Token | Hex | Usage |
|-------|-----|-------|
| `--neutral-900` | #000000 | Pure black |
| `--neutral-800` | #231f20 | Near black, primary text |
| `--neutral-700` | #2b2b2b | Dark gray |
| `--neutral-600` | #465f7d | Medium-dark gray |
| `--neutral-500` | #6f7173 | Medium gray, secondary text |
| `--neutral-400` | #989b9e | Medium-light gray |
| `--neutral-300` | #a9a8ac | Light gray |
| `--neutral-200` | #d3d5d6 | Very light gray, borders |
| `--neutral-100` | #dfedf7 | Background gray |
| `--neutral-50` | #f5f5f5 | Lightest background |

### Accent Colors

#### Success/Green
| Token | Hex | Usage |
|-------|-----|-------|
| `--success-600` | #37b550 | Primary success green |
| `--success-500` | #6acc79 | Light success green |
| `--success-400` | #9fc270 | Lighter green |

#### Warning/Orange
| Token | Hex | Usage |
|-------|-----|-------|
| `--warning-600` | #f68530 | Primary warning orange |
| `--warning-500` | #fabd35 | Warning yellow |

#### Error/Red
| Token | Hex | Usage |
|-------|-----|-------|
| `--error-600` | #b54e47 | Primary error red |
| `--error-500` | #f36d79 | Light error red |
| `--error-400` | #f96b71 | Lighter error red |

#### Info/Special
| Token | Hex | Usage |
|-------|-----|-------|
| `--info-500` | #5f8fe2 | Info blue |
| `--info-400` | #559ad2 | Light info blue |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-white` | #ffffff | Pure white |
| `--bg-light` | #c0e6e7 | Light teal background |
| `--text-primary` | #231f20 | Primary text (dark) |
| `--text-secondary` | #6f7173 | Secondary text (gray) |
| `--text-accent` | #2982a1 | Accent text (teal) |
| `--text-white` | #ffffff | White text |

### Gradients
- **Background Gradient**: `linear-gradient(180deg, #ffffff 10%, #c1e6e7 60%)`
- **Card Gradient**: `linear-gradient(135deg, #ffffff, #c0e6e7)`

---

## 4. Spacing System

### Base Unit
4px

### Spacing Scale

| Token | Size (px) | Size (rem) |
|-------|-----------|------------|
| `--space-0` | 0px | 0rem |
| `--space-1` | 4px | 0.25rem |
| `--space-2` | 8px | 0.5rem |
| `--space-3` | 12px | 0.75rem |
| `--space-4` | 16px | 1rem |
| `--space-5` | 20px | 1.25rem |
| `--space-6` | 24px | 1.5rem |
| `--space-8` | 32px | 2rem |
| `--space-10` | 40px | 2.5rem |
| `--space-12` | 48px | 3rem |
| `--space-16` | 64px | 4rem |
| `--space-20` | 80px | 5rem |
| `--space-24` | 96px | 6rem |

### Component-Specific Spacing
- **Card Padding**: 16-24px
- **Button Padding**: 8px 16px (vertical x horizontal)
- **Section Gap**: 20-32px
- **Grid Gap**: 16-20px
- **List Item Gap**: 12px

---

## 5. Component Specifications

### Buttons

#### Primary Button
```css
font-family: Comfortaa-Regular;
font-size: 6.64px - 9.51px;
padding: 8px 16px;
border-radius: 4-8px;
background: #2982a1;
color: #ffffff;
transition: all 0.3s ease;
```
- **Hover**: Darken by 10%, scale(1.02)
- **Active**: Darken by 15%, scale(0.98)

#### Secondary Button
```css
background: transparent;
border: 1px solid #2982a1;
color: #2982a1;
```
- **Hover**: Background #f0f9fa

#### Text Button
```css
background: none;
color: #2982a1;
```
- **Hover**: Underline

### Badges/Tags

```css
height: 20-24px;
font-family: Comfortaa-Regular;
font-size: 6.29px - 6.64px;
padding: 4px 8px;
border-radius: 12px; /* pill shape */
color: #ffffff;
```

**Background Colors**:
- Status badges: #2982a1, #6acc79, #f68530, #b54e47
- Skill badges: #30639a, #54adb8

### Cards

#### Standard Card
```css
background: #ffffff;
border: 1px solid #d3d5d6; /* or none with shadow */
border-radius: 8-12px;
padding: 16-24px;
box-shadow: 0 2px 8px rgba(0,0,0,0.1);
```

#### Milestone/Phase Card
```css
background: #ffffff; /* or gradient */
border: 2px solid #2982a1;
border-radius: 12px;
padding: 20px;
box-shadow: 0 4px 12px rgba(41,130,161,0.15);
```

### Progress Bars

#### Horizontal Progress Bar
```css
/* Container */
height: 8-12px;
background: #d3d5d6; /* or #e5e5e5 */
border-radius: 6px;

/* Fill */
background: #2982a1; /* or gradient */
border-radius: 6px;
transition: width 0.3s ease;
```

#### Circular Progress
```css
diameter: 60-80px;
stroke-width: 6-8px;

/* Number */
font-size: 18.95px - 21.97px;

/* Percentage symbol */
font-size: 13.78px;
```

### Inputs

#### Text Input
```css
height: 36-40px;
padding: 8px 12px;
border: 1px solid #d3d5d6;
border-radius: 6px;
font-size: 10px;
```
- **Focus Border**: #2982a1
- **Placeholder Color**: #a9a8ac

#### Search Input
- Icon: Left-aligned search icon
- Padding Left: 36px (to accommodate icon)

### Navigation

#### Sidebar
```css
width: 200-250px;
background: #ffffff; /* or gradient */
border-right: 1px solid #e5e5e5;
```

#### Navigation Item
```css
height: 40-44px;
padding: 10px 16px;
font-family: MyriadVariableConcept-Roman;
font-size: 9.51px;
color: #6f7173;
border-radius: 6px;
```
- **Active**: Color #2982a1, Background #f0f9fa

#### Top Header
```css
height: 60-80px;
background: #ffffff;
border-bottom: 1px solid #e5e5e5;
padding: 0 24px;
```

#### Logo (LauchPad)
```css
font-family: Comfortaa-Regular;
font-size: 12.784px;
color: #2982a1; /* or gradient */
```

### Timeline/Roadmap Nodes

#### Milestone Node (Circular)
```css
diameter: 40-60px;
border: 3-4px solid;
background: #ffffff;
```
**Border Colors**:
- Current: #30639a
- Complete: #6acc79
- Future: #d3d5d6

**Icon Size**: 20-24px

#### Connection Line
```css
width: 2-3px;
color: #d3d5d6; /* default */
/* or #2982a1 for active */
```
- Style: Solid or dashed for future items

#### Phase Container
```css
background: linear-gradient(180deg, #ffffff, #c1e6e7);
border-radius: 16px;
padding: 24px;
```

### Stats/Metrics Display

#### Large Number
```css
font-size: 34.74px - 21.97px;
font-family: MyriadVariableConcept-Roman;
color: #231f20; /* or #2982a1 */
font-weight: normal;
```

#### Percentage Symbol
```css
font-size: 13.78px - 14.01px; /* slightly smaller than number */
```

#### Label
```css
font-size: 7.96px - 9.51px;
color: #6f7173;
margin-top: 4px;
```

---

## 6. Page Layouts

### Home/Landing Page

**Structure**:
- Full-width hero section
- Navigation bar at top
- Feature cards in grid (2-3 columns)
- CTA buttons prominently placed

**Header Navigation**:
- Items: "AI Roadmap Insights", "How It Works", "Career Chatbot", "AI Interview Studio", "FAQ's"
- Actions: "Create Your Account", "Log In"

**Feature Sections**:
1. AI Roadmap Builder
2. Live Opportunity Matching
3. Interview Studio (Mock)
4. Portfolio Snapshot
5. Search functionality

### Onboarding Page

**Layout**: Centered content with gradient background

**Welcome Message**:
- "Welcome to Launchpad!"
- "Let's design your personalized roadmap"

**Actions**:
- "Let's Begin" (primary button)
- "Save My Progress" (secondary button)

### Roadmap Page

**Layout**: Sidebar + Main Content

**Sidebar**:
- User profile section
  - Avatar
  - Name: "Alex Johnson"
  - Role: "Computer Science"
- Navigation items:
  - My Road Map (active)
  - Career Copilot
  - Opportunities
  - Interview Studio
  - Portfolio
  - Analytics

**Main Content**:
- Header: "Here's your Roadmap"
- Progress indicator: "Step X of Y"
- Overall progress bar: "80%"
- Skills display (badges):
  - Current: Python, Java, HTML, CSS, Javascript
  - Status indicators: "In Progress", "Completed"

### Advanced Roadmap Page (Scrollable)

**Layout**: Long vertical scroll  
**Height**: 2659.533px

**Sections**:
1. Progress Overview
   - "45% Complete - On Track"
   - "Career Readiness" indicator

2. Current Skills Section
   - Badges for: Python, Java, SQL, Git

3. Next Skills Section
   - "AWS Cloud Practitioner"

4. Milestone Cards (repeating pattern)
   - Each milestone with detailed breakdown
   - Progress indicators per milestone
   - Skill tags
   - Completion status

### Match Page

**Layout**: Results grid

**Header**: "We Found 3 Matches!"  
**Display**: "80% / 72%" match percentages (large)

**Cards** (3 columns):
1. Software Engineer
2. Cyber Security
3. Support Specialist

**Each card**:
- Title
- Match percentage (large number + %)
- Skills list (badges)
- "Get My Roadmap" button

**Skills shown**:
- Python, Java, Problem-Solving
- SIEM Tools, Networking, Windows
- HTML, CSS, Javascript

### Portfolio Page

**Layout**: Grid of project cards

**Header**:
- "Overall Progress"
- Code icon: `</>`

**Project Cards** (minimum 3):

Card 1:
- Skills: React, Node.js, MongoDB
- Status: "Complete"
- Progress: 90%

Card 2:
- Skills: React Native, API Integration, TypeScript
- Status: "In Progress"
- Progress: 85%

Card 3:
- Skills: Python, NLP, Machine Learning
- Progress: 80%

**Progress bars shown**: 90%, 85%, 80%, 75%, 70%, 65%

### Opportunity Page

**Layout**: List/card view of opportunities

**Header**: "Download My Opportunities"

**Opportunity Cards**:
- Match percentage (90%, 80.1%) - large display
- Skills required (as badges):
  - JavaScript, React, SQL, Node.js
- Company/role details

---

## 7. Visual Effects & Interactions

### Shadows

```css
/* Card Shadow */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Elevated Shadow */
box-shadow: 0 4px 12px rgba(41, 130, 161, 0.15);

/* Hover Shadow */
box-shadow: 0 6px 16px rgba(41, 130, 161, 0.2);
```

### Transitions

```css
/* Default */
transition: all 0.3s ease;

/* Color */
transition: color 0.2s ease;

/* Transform */
transition: transform 0.2s ease-out;
```

### Hover States
- **Buttons**: Darken by 10%, scale(1.02)
- **Cards**: Lift with shadow increase
- **Links**: Underline or color shift to #2882a1

### Active States
- **Buttons**: Darken by 15%, scale(0.98)
- **Navigation**: Background #f0f9fa, text #2982a1

### Border Styles
- **Default**: 1px solid #d3d5d6
- **Focus**: 2px solid #2982a1
- **Active**: 2px solid #30639a

---

## 8. Iconography

**Icon Style**: Line icons or simple filled icons

**Icon Sizes**:
- Small: 16px
- Medium: 20-24px
- Large: 32px
- XL: 40px

**Common Icons**:
- Code: `</>`
- Download
- Log Out
- Search
- Progress indicators (circular)
- Checkmarks for completion
- Lock icons for restricted content

---

## 9. Responsive Breakpoints

| Breakpoint | Range | Notes |
|------------|-------|-------|
| Desktop | 1024px+ | Primary design target |
| Tablet | 768px - 1023px | Responsive adaptation needed |
| Mobile | 320px - 767px | Responsive adaptation needed |

**Note**: Original designs are desktop-first at 1007.348px width

---

## 10. Accessibility Considerations

### Color Contrast
- Primary text (#231f20) on white: **AAA compliant**
- Secondary text (#6f7173) on white: **AA compliant**
- Teal (#2982a1) on white: **AA compliant**
- White text on teal: **AA compliant**

### Focus States
- Visible focus ring: 2px solid #2982a1
- Offset: 2px

### Interactive Elements
- Minimum touch target: 44x44px
- Clear hover/focus states
- Keyboard navigation support

---

## 11. Design Patterns & Best Practices

### Card Layouts
- Consistent padding (16-24px)
- Clear visual hierarchy
- Grouped related information
- Status indicators clearly visible

### Progress Visualization
- Multiple formats: bars, circles, percentages
- Color-coded status
- Clear labeling

### Skills/Tags Display
- Pill-shaped badges
- Color differentiation by type
- Compact but readable

### Navigation
- Clear active state
- Logical grouping
- Persistent across pages

### Content Hierarchy
- Large headings for page titles
- Progressive disclosure
- Scan-friendly layouts

---

## Implementation Notes

1. **Consider using CSS custom properties** for all design tokens
2. **Create reusable component library** (React components recommended)
3. **Implement responsive variants** for tablet and mobile
4. **Use semantic HTML** for accessibility
5. **Consider design system documentation** (Storybook recommended)
6. **Implement dark mode variants** if needed
7. **Create style guide** with live examples

---

## Design Token Export

For implementation, consider exporting these tokens as:

### CSS Custom Properties
```css
:root {
  /* Colors */
  --primary-600: #2882a1;
  --primary-500: #2982a1;
  
  /* Typography */
  --text-6xl: 2.171rem;
  --text-base: 0.799rem;
  
  /* Spacing */
  --space-4: 1rem;
  --space-6: 1.5rem;
  
  /* Shadows */
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### JavaScript/TypeScript Tokens
```typescript
export const designTokens = {
  colors: {
    primary: {
      600: '#2882a1',
      500: '#2982a1',
    }
  },
  spacing: {
    4: '1rem',
    6: '1.5rem',
  }
}
```

---

**End of Design System Specification**

*Generated by analyzing SVG design files from /ref directory*

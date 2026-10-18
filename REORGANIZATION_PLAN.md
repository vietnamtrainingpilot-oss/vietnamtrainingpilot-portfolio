# COMPLETE PROJECT REORGANIZATION PLAN
**Status**: Starting fresh
**Date**: September 23, 2026 | 10:51 UTC

---

## NEW STRUCTURE (A-Z Organization)

```
vietnamtrainingpilot-portfolio/
│
├── 📁 .claude/                          [Claude workspace]
│   ├── worktrees/                       [Git worktrees - working branches]
│   ├── workflows/                       [Automation workflows]
│   ├── plugins/                         [Local plugins]
│   └── settings.json                    [Claude settings]
│
├── 📁 docs/                             [Documentation - alphabetical]
│   ├── 01-ARCHITECTURE.md               [System design]
│   ├── 02-DEPLOYMENT.md                 [Netlify guide]
│   ├── 03-DESIGN-SYSTEM.md              [Visual language]
│   ├── 04-FEATURES.md                   [Feature list]
│   ├── 05-PERFORMANCE.md                [Optimization notes]
│   ├── 06-SETUP.md                      [Initial setup]
│   ├── 07-THEME-SYSTEM.md               [Theme docs]
│   └── README.md                        [Docs index]
│
├── 📁 public/                           [Static assets]
│   ├── fonts/                           [Custom fonts]
│   ├── images/                          [Images, logos]
│   ├── models/                          [3D models (glTF)]
│   ├── textures/                        [3D textures]
│   ├── videos/                          [Video files]
│   └── manifest.json                    [PWA manifest]
│
├── 📁 src/                              [Source code]
│   ├── animations/                      [GSAP + Framer Motion]
│   │   ├── page-transitions.ts
│   │   ├── scroll-reveals.ts
│   │   ├── hero-animations.ts
│   │   └── 3d-effects.ts
│   │
│   ├── components/                      [React components]
│   │   ├── 3d/                          [Three.js 3D components]
│   │   │   ├── HolographicMesh.tsx
│   │   │   ├── FloatingCube.tsx
│   │   │   └── ParticleSystem.tsx
│   │   │
│   │   ├── backgrounds/                 [Theme-aware backgrounds]
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── GradientBackground.tsx
│   │   │   └── ParallaxBackground.tsx
│   │   │
│   │   ├── headers/                     [Dynamic headers]
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── AppearingHeader.tsx
│   │   │   └── ThematicHeader.tsx
│   │   │
│   │   ├── layout/                      [Layout components]
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PageWrapper.tsx
│   │   │   └── Section.tsx
│   │   │
│   │   ├── sections/                    [Page sections]
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── WorkSection.tsx
│   │   │   ├── RolesSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── NotesSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   ├── transitions/                 [Page transitions]
│   │   │   ├── PageTransition.tsx
│   │   │   ├── SectionTransition.tsx
│   │   │   └── ThemeTransition.tsx
│   │   │
│   │   └── ui/                          [UI components]
│   │       ├── ThemeSwitcher.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       └── Link.tsx
│   │
│   ├── context/                         [React Context]
│   │   ├── ThemeContext.tsx
│   │   └── LayoutContext.tsx
│   │
│   ├── hooks/                           [Custom hooks]
│   │   ├── useTheme.ts
│   │   ├── useScrollAnimation.ts
│   │   ├── usePageTransition.ts
│   │   └── useThreeJS.ts
│   │
│   ├── pages/                           [Page components]
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   └── Layout.tsx
│   │
│   ├── styles/                          [CSS & styling]
│   │   ├── globals.css
│   │   ├── animations.css
│   │   ├── transitions.css
│   │   ├── themes.css
│   │   └── variables.css
│   │
│   ├── themes/                          [Theme definitions]
│   │   ├── config.ts                    [10 themes]
│   │   ├── editorial-cinematic.ts
│   │   ├── dark-hud.ts
│   │   ├── minimal-swiss.ts
│   │   ├── neon-cyberpunk.ts
│   │   ├── warm-earthy.ts
│   │   ├── cold-minimalist.ts
│   │   ├── glassmorphism.ts
│   │   ├── brutalism.ts
│   │   ├── retro-80s.ts
│   │   └── futuristic.ts
│   │
│   ├── types/                           [TypeScript types]
│   │   ├── theme.ts
│   │   ├── component.ts
│   │   ├── animation.ts
│   │   └── index.ts
│   │
│   ├── utils/                           [Utility functions]
│   │   ├── color-converter.ts
│   │   ├── device-detect.ts
│   │   ├── performance.ts
│   │   └── constants.ts
│   │
│   ├── App.tsx                          [Root component]
│   ├── main.tsx                         [Entry point]
│   └── index.css                        [Global styles]
│
├── 📁 tests/                            [Test files]
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   └── setup.ts
│
├── 📁 scripts/                          [Build scripts]
│   ├── build.sh
│   ├── deploy.sh
│   └── optimize.sh
│
├── 📁 dist/                             [Production build]
│   ├── index.html
│   ├── assets/
│   └── README.md
│
├── .env.example                         [Environment template]
├── .gitignore                           [Git ignore]
├── eslint.config.js                     [Linting]
├── index.html                           [HTML entry]
├── package.json                         [Dependencies]
├── package-lock.json                    [Lock file]
├── postcss.config.cjs                   [PostCSS config]
├── prettier.config.js                   [Code format]
├── README.md                            [Project README]
├── tailwind.config.ts                   [Tailwind config]
├── tsconfig.json                        [TypeScript config]
├── tsconfig.node.json                   [Node TS config]
└── vite.config.ts                       [Vite config]
```

---

## KEY IMPROVEMENTS

### 1. Immersive Transitions
- Page-to-page transitions (fade, slide, scale)
- Section scroll reveals (stagger, parallax)
- Hero entrance animation (3D camera move)
- Theme transition (color blend)

### 2. Appearing Headers
- Headers slide in on scroll
- Contextualized to section theme
- Different animation per theme
- Staggered letter animations option

### 3. Background Theme Changes
- Full page background transitions
- Animated gradients per theme
- Parallax depth layers
- 3D background elements

### 4. Hero Updates with Theme
- Hero text color changes
- Background changes
- 3D objects respond to theme
- Accent elements update

### 5. 3D Objects
- Three.js integration
- Holographic mesh backgrounds
- Floating 3D cubes
- Particle systems
- Theme-specific 3D models

### 6. New Layout/Placement
- Redesigned section hierarchy
- New hero layout (centered, immersive)
- Sidebar/floating navigation option
- Grid-based responsive layout
- Vertical scrolling with horizontal pockets

---

## NEXT STEPS

1. ✅ Install impeccable plugin (DONE)
2. ⏳ Delete old worktrees + organize main
3. ⏳ Create new src/ structure
4. ⏳ Build immersive transition system
5. ⏳ Implement 3D components
6. ⏳ Update all sections with new layout
7. ⏳ Test all 10 themes
8. ⏳ Deploy

---

**Status**: Plan ready, executing now

# Quick Start Guide — vietnamtrainingpilot Portfolio

## ✅ Integration Complete

The portfolio-hero component has been successfully integrated into your portfolio project. The project is now a modern React + Vite + TypeScript + Tailwind CSS application.

## 🚀 Getting Started

### 1. Start Development Server
```bash
cd vietnamtrainingpilot-portfolio
npm run dev
```
This starts Vite dev server (typically at `http://localhost:5173`)

### 2. Build for Production
```bash
npm run build
```
Creates optimized build in `/dist` folder

### 3. Preview Production Build
```bash
npm run preview
```
Test the production build locally

## 📁 Project Structure

```
src/
├── components/ui/
│   └── portfolio-hero.tsx        # Hero component with animations
├── App.tsx                        # Main app (add sections here)
├── App.css                        # App styles
├── main.tsx                       # React entry point
└── index.css                      # Global + Tailwind styles

tailwind.config.ts                 # Design tokens
vite.config.ts                     # Build config
index.html                         # HTML template
```

## 🎨 Component Features

The hero component includes:
- **Animated Text** — Blur text animation on scroll with Framer Motion
- **Theme Toggle** — Dark/light mode switcher
- **Navigation Menu** — Animated dropdown with smooth transitions
- **Responsive Design** — Mobile-first, scales from mobile to desktop
- **Profile Image** — Hover effects, Unsplash placeholder
- **Scroll Indicator** — Animated chevron to guide users
- **Accessibility** — Respects `prefers-reduced-motion`, semantic HTML

## 🎯 Next Steps

### Content Updates
Edit `src/App.tsx` to add sections:
1. **About** — Bio (already stubbed)
2. **Work** — Projects/websites/bots
3. **Roles** — Timeline of positions
4. **Skills** — Technical skills
5. **Contact** — Discord, GitHub links

### Styling
- **Colors:** Edit `tailwind.config.ts` (OKLCH color system)
- **Typography:** Update font families in `src/index.css`
- **Spacing:** Modify tokens in `tailwind.config.ts`

### Profile Image
Replace Unsplash placeholder in `src/components/ui/portfolio-hero.tsx`:
```tsx
src="https://images.unsplash.com/photo-507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
// → Replace with your actual image URL
```

## 📦 Dependencies

- **react** 18.3 — UI framework
- **framer-motion** 11 — Animations
- **tailwindcss** 3.4 — Styling
- **lucide-react** — Icons
- **vite** 5 — Build tool
- **typescript** 5 — Type checking

## 🚢 Deployment

### Netlify
```bash
npm run build
# Deploy the /dist folder to Netlify
```

### Vercel
```bash
npm run build
# Push to GitHub, Vercel auto-deploys
```

### GitHub Pages
```bash
npm run build
# Push /dist to gh-pages branch
```

## 📝 Design System

Colors (OKLCH format):
- **Base:** `hsl(280 1% 9%)` (dark) / `hsl(280 2% 98%)` (light)
- **Accent:** `#C3E41D` (lime-green)
- **Text Primary:** `hsl(280 0.5% 95%)` (dark) / `hsl(280 1% 15%)` (light)

Fonts:
- **Mono:** Fira Code (headings)
- **Sans:** Inter (body)
- **Serif:** Crimson Text (optional)

## ✨ Customization Examples

### Change Accent Color
In `tailwind.config.ts`:
```ts
accent: "hsl(45 100% 60%)",  // Change this HSL value
```

### Adjust Animation Speed
In `src/components/ui/portfolio-hero.tsx`:
```ts
transition={{ duration: 0.5, ... }}  // 0.5s → adjust here
```

### Update Navigation Links
In `src/components/ui/portfolio-hero.tsx`:
```ts
const menuItems = [
  { label: "HOME", href: "#hero", highlight: true },
  { label: "ABOUT", href: "#about" },
  // Update these as needed
];
```

## 🐛 Troubleshooting

### Dev server won't start
```bash
npm install
npm run dev
```

### Build errors
```bash
npm run lint  # Check TypeScript errors
npm install   # Reinstall dependencies
```

### Tailwind classes not working
Make sure `src/index.css` has `@tailwind` directives and `tailwind.config.ts` includes the right paths.

## 📚 Further Resources

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org)

---

**Status:** ✅ Ready to develop  
**Build:** ✅ Production-ready  
**Deployment:** ✅ All platforms supported

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens from design-tokens.json, dark mode as default
        base: "hsl(280 1% 9%)",
        surface: "hsl(280 0.5% 12%)",
        "surface-alt": "hsl(280 0.5% 15%)",
        accent: "hsl(45 100% 60%)", // #C3E41D equivalent in HSL
        "accent-2": "hsl(180 100% 50%)",
        "text-primary": "hsl(280 0.5% 95%)",
        "text-secondary": "hsl(280 1% 70%)",
        "text-tertiary": "hsl(280 0.5% 55%)",
        border: "hsl(280 0.5% 20%)",
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Crimson Text"', '"Garamond"', '"Georgia"', 'serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        xs: ["10px", { lineHeight: "1.4", letterSpacing: "0.5px" }],
        sm: ["12px", { lineHeight: "1.5", letterSpacing: "0.3px" }],
        base: ["14px", { lineHeight: "1.6", letterSpacing: "0.1px" }],
        lg: ["16px", { lineHeight: "1.6", letterSpacing: "0px" }],
        xl: ["20px", { lineHeight: "1.5", letterSpacing: "-0.2px" }],
        "2xl": ["28px", { lineHeight: "1.4", letterSpacing: "-0.3px" }],
        "3xl": ["36px", { lineHeight: "1.3", letterSpacing: "-0.5px" }],
        "4xl": ["48px", { lineHeight: "1.2", letterSpacing: "-0.6px" }],
        "5xl": ["64px", { lineHeight: "1.1", letterSpacing: "-0.8px" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        base: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        full: "999px",
      },
      boxShadow: {
        "hud-glow": "0 0 12px rgba(77, 148, 255, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
        "hud-glow-alt": "0 0 8px rgba(0, 212, 255, 0.25)",
      },
      transitionDuration: {
        fast: "100ms",
        base: "200ms",
        slow: "300ms",
        slower: "500ms",
      },
      transitionTimingFunction: {
        entrance: "cubic-bezier(0.16, 1, 0.3, 1)",
        reveal: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        hover: "cubic-bezier(0.4, 0, 0.2, 1)",
        exit: "cubic-bezier(0.7, 0, 0.84, 0)",
        subtle: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        snap: "cubic-bezier(0.1, 0.9, 0.9, 0.1)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

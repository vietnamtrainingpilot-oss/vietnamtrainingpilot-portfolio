import React, { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// Animated Blur Text component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: direction === "top" ? -20 : 20,
          }}
          animate={
            inView
              ? {
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: i * (delay / 1000),
          }}
          className="inline-block"
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </p>
  );
};

export default function PortfolioHero() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuItems = [
    { label: "HOME", href: "#hero", highlight: true },
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "ROLES", href: "#roles" },
    { label: "SKILLS", href: "#skills" },
    { label: "NOTES", href: "#notes" },
    { label: "CONTACT", href: "#contact" },
  ];

  const bgColor = isDark ? "hsl(280 1% 9%)" : "hsl(280 2% 98%)";
  const textColor = isDark ? "hsl(280 0.5% 95%)" : "hsl(280 1% 15%)";
  const accentColor = "#C3E41D";
  const secondaryTextColor = isDark ? "hsl(280 1% 70%)" : "hsl(280 1% 40%)";

  return (
    <div
      className="min-h-screen text-foreground transition-colors"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Menu Button */}
          <div className="relative">
            <motion.button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300 z-50"
              style={{ color: secondaryTextColor }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
                </motion.div>
              )}
            </motion.button>

            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-[200px] md:w-[240px] border shadow-lg mt-2 ml-4 p-4 rounded-lg z-[100]"
                style={{
                  backgroundColor: isDark ? "hsl(280 0.5% 12%)" : "hsl(280 2% 95%)",
                  borderColor: isDark ? "hsl(280 0.5% 20%)" : "hsl(280 1% 85%)",
                }}
              >
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block text-lg md:text-xl font-bold tracking-tight py-1.5 px-2 cursor-pointer transition-colors duration-300 rounded"
                    style={{
                      color: item.highlight ? accentColor : textColor,
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      x: 4,
                      color: accentColor,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </div>


          {/* Theme Toggle */}
          <motion.button
            type="button"
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: isDark ? "hsl(280 0.5% 15%)" : "hsl(280 1% 90%)",
            }}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 left-1 w-6 h-6 rounded-full"
              style={{
                backgroundColor: isDark ? "hsl(280 0.5% 95%)" : "hsl(280 1% 15%)",
              }}
              animate={{
                x: isDark ? "2rem" : "0",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col">
        {/* Centered Main Content - Perfectly Centered */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="relative text-center w-full">
            {/* Main Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <BlurText
                text="vietnamtrainingpilot"
                delay={80}
                animateBy="letters"
                direction="top"
                className="font-bold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-tight tracking-tighter uppercase justify-center"
                style={{ color: accentColor, fontFamily: "'Fira Code', monospace" }}
              />
            </motion.div>

            {/* Decorative Rotating Element - No Face Image */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] rounded-full border-2 border-accent/40 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-[70%] h-[70%] rounded-full border border-accent/30 flex items-center justify-center"
                >
                  <div className="w-[60%] h-[60%] rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Tagline - Below Hero */}
            <motion.div
              className="mt-32 sm:mt-40 md:mt-48 lg:mt-56"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <BlurText
                text="Building communities in code."
                delay={100}
                animateBy="words"
                direction="top"
                className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center transition-colors duration-300"
                style={{
                  color: secondaryTextColor,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          type="button"
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300"
          style={{ color: secondaryTextColor }}
          aria-label="Scroll down"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          whileHover={{ scale: 1.2 }}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </motion.div>
        </motion.button>
      </main>
    </div>
  );
}

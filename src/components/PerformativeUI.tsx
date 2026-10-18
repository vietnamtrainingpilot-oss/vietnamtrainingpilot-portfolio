import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// 1. CUSTOM SCROLL BAR
export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent via-accent-2 to-accent z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 30 }}
    />
  )
}

// 2. ANIMATED CARD
export const AnimatedCard = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ y: -8, boxShadow: '0 0 20px rgba(195, 228, 29, 0.3)' }}
    transition={{ duration: 0.5, delay }}
    className="rounded-lg border border-border/20 hover:border-accent/50 transition-colors p-6"
  >
    {children}
  </motion.div>
)

// 3. FLOATING ELEMENTS
export const FloatingElement = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, delay, repeat: Infinity }}
  >
    {children}
  </motion.div>
)

// 4. GRADIENT TEXT
export const GradientText = ({ text }: { text: string }) => (
  <motion.span
    className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent font-bold"
    initial={{ backgroundPosition: '0% 50%' }}
    animate={{ backgroundPosition: '100% 50%' }}
    transition={{ duration: 3, repeat: Infinity }}
  >
    {text}
  </motion.span>
)

// 5. COUNTER ANIMATION
export const CounterText = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let start = 0
    const increment = end / (duration * 60)
    const interval = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(interval)
  }, [end, duration])

  return <span>{count}</span>
}

// 6. PARALLAX SECTION
export const ParallaxSection = ({ children, offset = 50 }: { children: ReactNode; offset?: number }) => {
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div style={{ y: scrollY * (offset / 100) }}>
      {children}
    </motion.div>
  )
}

// 7. STAGGERED LIST
export const StaggeredList = ({ items }: { items: ReactNode[] }) => (
  <motion.div initial="hidden" whileInView="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
    {items.map((item, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        }}
      >
        {item}
      </motion.div>
    ))}
  </motion.div>
)

// 8. ROTATING BOX
export const RotatingBox = ({ children }: { children: ReactNode }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    className="p-6 border border-accent/30 rounded-lg"
  >
    {children}
  </motion.div>
)

// 9. PULSE BORDER
export const PulseBorder = ({ children }: { children: ReactNode }) => (
  <motion.div
    className="relative p-6 rounded-lg"
    animate={{ boxShadow: ['0 0 0 0 rgba(195, 228, 29, 0.7)', '0 0 0 10px rgba(195, 228, 29, 0)'] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <div className="relative z-10">{children}</div>
  </motion.div>
)

// 10. SLIDE IN TEXT
export const SlideInText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = text.split('')

  return (
    <div className="flex flex-wrap">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.05 }}
        >
          {letter === ' ' ? ' ' : letter}
        </motion.span>
      ))}
    </div>
  )
}

// 11. HOVER SCALE BUTTON
export const HoverScaleButton = ({ text, onClick }: { text: string; onClick?: () => void }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(195, 228, 29, 0.4)' }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 rounded-lg bg-accent text-base font-bold border border-accent hover:bg-accent/90 transition-colors"
  >
    {text}
  </motion.button>
)

// 12. PROGRESS BAR
export const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full h-2 bg-surface-alt rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-accent to-accent-2"
      initial={{ width: 0 }}
      animate={{ width: `${Math.min(progress, 100)}%` }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    />
  </div>
)

// Import React at top
import React from 'react'

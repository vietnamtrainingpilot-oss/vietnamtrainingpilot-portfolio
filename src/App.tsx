import { motion } from 'framer-motion'
import PortfolioHero from './components/ui/portfolio-hero'
import {
  ScrollProgressBar,
  AnimatedCard,
  FloatingElement,
  GradientText,
  CounterText,
  StaggeredList,
  PulseBorder,
  SlideInText,
  HoverScaleButton,
  ProgressBar,
} from './components/PerformativeUI'
import './App.css'

function App() {

  const websites = [
    { name: 'Turkish Airlines', url: 'https://turkishairlinesptc.netlify.app/', community: 'Turkish Airlines PTFS' },
    { name: 'Malaysia Airlines', url: 'https://malaysiaairlinesptfs.netlify.app/', community: 'Malaysia Airlines PTFS' },
    { name: 'Vietnam Airlines', url: 'https://vietnamairlinesptc.netlify.app/', community: 'Vietnam Airlines PTFS' },
    { name: 'China Airlines', url: 'https://chinaairlinesptfs.netlify.app/', community: 'China Airlines PTFS' },
    { name: 'Air Canada', url: 'https://aircanadaptfs.netlify.app/', community: 'Air Canada PTFS' },
    { name: 'Garuda Indonesia', url: 'https://garudaindonesiaptfs.netlify.app/', community: 'Garuda Indonesia PTFS' },
    { name: 'Spirit Airlines', url: 'https://spiritairlinesptfs.netlify.app/', community: 'Spirit Airlines PTFS' },
  ]

  const bots = [
    { name: 'KLM Academy Bot', description: 'Training & academy operations management', community: 'KLM PTFS' },
    { name: 'Wizz Air Bot', description: 'Community operations automation', community: 'Wizz Air PTFS' },
    { name: 'Vietnam Airlines Bot', description: 'Community operations & member management', community: 'Vietnam Airlines PTFS' },
  ]

  const inProgress = [
    { name: 'imits', description: 'Browser-based photo editor — cleaner than Paint.NET/GIMP', url: '#' },
    { name: 'PTC Training Repo', description: 'Training system for one of the largest airlines in PTC', url: 'https://github.com/vietnamtrainingpilot-oss/ptc-training' },
  ]

  const currentRoles = [
    { title: 'Co-Chairman', org: 'Vietnam Airlines PTFS', members: '~250 members' },
    { title: 'Multimedia Specialist', org: 'PTFS Roleplay Group', members: '~39,000 members', desc: 'Graphic design, video/photo, news reporting' },
    { title: 'Deputy Director of Learning & Development', org: 'KLM PTFS', members: '~950 members' },
    { title: 'CEO', org: 'Wizz Air PTFS', members: '~50 members' },
  ]

  const pastRoles = [
    'VP of Customer Service — United PTFS (~2k members)',
    'HR Officer — Qatar Airways PTFS & Delta Airlines PTFS',
    'HR Intern — KLM PTFS',
    'Host / Senior Flight Staff / Flight Staff — PTFS Roleplay Group',
    'HR Trainee — Air France PTFS',
    'Chairman — Vietnam Airlines PTFS (~370 members)',
    'Trainer — Porter Airlines PTFS',
    'Head Trainer & SVP — Swiss Air PTFS',
  ]

  const skills = [
    { category: 'Frontend', items: ['JavaScript', 'CSS', 'Tailwind CSS', 'React', 'TypeScript'] },
    { category: 'Tools', items: ['Claude Code', 'Claude Desktop', 'Omniroute', 'Ollama'] },
    { category: 'Operations', items: ['Community Management', 'Growth', 'Training', 'Event Hosting', 'Staff Operations (FD/GC/CC)'] },
    { category: 'AI', items: ['Applied AI', 'AI Tools & Integration'] },
  ]

  const mantras = [
    '"Failure isn\'t the end — it\'s the time to look at yourself."',
    '"Believe in yourself and ignore the haters."',
    '"You must take control of AI, not AI controlling you."',
  ]

  return (
    <div className="w-full">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Parallax background */}
      <div className="parallax-bg" />

      {/* Hero Section */}
      <PortfolioHero />

      {/* About Section */}
      <section id="about" className="min-h-screen bg-surface p-8 sm:p-12 flex items-center border-t border-border/20">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-8 uppercase tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SlideInText text="About Me" />
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PulseBorder>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-light">
                Student in Vietnam. Building since April 2026.
              </p>
            </PulseBorder>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-light">
              <GradientText text="Website & bot vibe-coder" /> — and the person keeping PTFS communities running.
            </p>

            <p className="text-base sm:text-lg text-text-tertiary leading-relaxed mt-8">
              I help communities get their own website and run operations faster and more automated — from staff training pipelines to full Discord bot suites. Right now I'm running training for one of the largest airlines in PTC. AI is a tool I use, not something that uses me — I'd rather stay hands-on and understand what I ship.
            </p>

            {/* Stats with Counters and Progress Bars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border/20">
              <AnimatedCard delay={0}>
                <div className="text-3xl font-bold" style={{ color: '#C3E41D' }}>
                  <CounterText end={2} />
                </div>
                <div className="text-sm text-text-tertiary mt-2">communities built</div>
                <ProgressBar progress={50} />
              </AnimatedCard>

              <AnimatedCard delay={0.1}>
                <div className="text-3xl font-bold" style={{ color: '#C3E41D' }}>5<span className="text-lg">+</span></div>
                <div className="text-sm text-text-tertiary mt-2">sites vibe-coded</div>
                <ProgressBar progress={83} />
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="text-3xl font-bold" style={{ color: '#C3E41D' }}>
                  <CounterText end={3} />
                </div>
                <div className="text-sm text-text-tertiary mt-2">bots shipped</div>
                <ProgressBar progress={75} />
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="text-3xl font-bold" style={{ color: '#C3E41D' }}>
                  <CounterText end={100} />
                  <span className="text-lg">+</span>
                </div>
                <div className="text-sm text-text-tertiary mt-2">events hosted</div>
                <ProgressBar progress={100} />
              </AnimatedCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen bg-base p-8 sm:p-12 flex items-center border-t border-border/20">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-12 uppercase tracking-tighter"
            style={{ color: '#C3E41D' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GradientText text="Work" />
          </motion.h2>

          {/* Websites - Normal layout without parallax */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="text-2xl font-bold mb-6 text-text-primary">Websites</h3>
            <StaggeredList
              items={websites.map((site, i) => (
                <AnimatedCard key={i} delay={i * 0.05}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {site.name}
                    </div>
                    <div className="text-sm text-text-tertiary mt-1">{site.community}</div>
                  </a>
                </AnimatedCard>
              ))}
            />
          </motion.div>

          {/* Bots - Remove RotatingBox, use AnimatedCard instead */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-text-primary">Bots</h3>
            <StaggeredList
              items={bots.map((bot, i) => (
                <AnimatedCard key={i} delay={i * 0.1}>
                  <div className="font-semibold text-text-primary">{bot.name}</div>
                  <div className="text-sm text-text-tertiary mt-1">{bot.description}</div>
                  <div className="text-xs text-text-tertiary mt-2 opacity-70">{bot.community}</div>
                </AnimatedCard>
              ))}
            />
          </motion.div>

          {/* In Progress - Using FloatingElement */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="text-2xl font-bold mb-6 text-text-primary">In Progress</h3>
            <div className="space-y-4">
              {inProgress.map((project, i) => (
                <FloatingElement key={i} delay={i * 0.2}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-surface-alt rounded-lg border border-border/20 hover:border-accent/50 transition-all group block"
                  >
                    <div className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {project.name}
                    </div>
                    <div className="text-sm text-text-tertiary mt-1">{project.description}</div>
                  </a>
                </FloatingElement>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="min-h-screen bg-surface p-8 sm:p-12 flex items-center border-t border-border/20">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-12 uppercase tracking-tighter"
            style={{ color: '#C3E41D' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Roles
          </motion.h2>

          {/* Current Roles */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="text-2xl font-bold mb-6 text-text-primary">Currently</h3>
            <div className="space-y-6 mb-12">
              {currentRoles.map((role, i) => (
                <motion.div
                  key={i}
                  className="border-l-2 border-accent/50 pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="font-bold text-text-primary text-lg">{role.title}</div>
                  <div className="text-text-secondary">{role.org}</div>
                  <div className="text-sm text-text-tertiary mt-1">{role.members}</div>
                  {role.desc && <div className="text-sm text-text-tertiary mt-2">{role.desc}</div>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Roles */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-2xl font-bold mb-6 text-text-primary">Previously</h3>
            <div className="space-y-3">
              {pastRoles.map((role, i) => (
                <motion.div
                  key={i}
                  className="text-text-secondary flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <span className="text-accent mr-3">→</span>
                  <span>{role}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-base p-8 sm:p-12 flex items-center border-t border-border/20">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-12 uppercase tracking-tighter"
            style={{ color: '#C3E41D' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SlideInText text="Skills & Tools" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <PulseBorder>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    <FloatingElement delay={i * 0.1}>
                      {skillGroup.category}
                    </FloatingElement>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, j) => (
                      <motion.div
                        key={j}
                        className="px-4 py-2 bg-surface-alt rounded-full border border-accent/30 text-text-secondary text-sm font-medium"
                        whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(195, 228, 29, 0.3)', borderColor: '#C3E41D' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </PulseBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section id="notes" className="min-h-screen bg-surface p-8 sm:p-12 flex items-center border-t border-border/20">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-12 uppercase tracking-tighter"
            style={{ color: '#C3E41D' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Notes to Self
          </motion.h2>

          <div className="space-y-6">
            {mantras.map((mantra, i) => (
              <motion.div
                key={i}
                className="p-6 bg-surface-alt rounded-lg border-l-2 border-accent/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <p className="text-lg text-text-primary italic font-light">{mantra}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-base p-8 sm:p-12 flex items-center justify-center border-t border-border/20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-12 uppercase tracking-tighter"
            style={{ color: '#C3E41D' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SlideInText text="Get in Touch" />
          </motion.h2>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PulseBorder>
              <div className="text-lg text-text-secondary">
                <span className="text-text-tertiary">Discord: </span>
                <span className="font-mono text-accent font-bold">vietnamtrainingpilot</span>
              </div>
            </PulseBorder>

            <PulseBorder>
              <div className="text-lg text-text-secondary">
                <span className="text-text-tertiary">GitHub: </span>
                <a
                  href="https://github.com/vietnamtrainingpilot-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-accent hover:underline transition-colors"
                >
                  github.com/vietnamtrainingpilot-oss
                </a>
              </div>
            </PulseBorder>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HoverScaleButton
                text="Copy Discord Handle"
                onClick={() => {
                  navigator.clipboard.writeText('vietnamtrainingpilot')
                }}
              />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-text-tertiary mt-12 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Built with React, Vite, Tailwind CSS, Framer Motion & Performative UI
          </motion.p>
        </div>
      </section>
    </div>
  )
}

export default App

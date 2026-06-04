import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles, Zap, Brain, Rocket } from 'lucide-react'
import { profile } from '../data/profile'

const badges = [
  { text: 'AI Enthusiast', icon: <Brain size={11} />, color: '#8b5cf6' },
  { text: 'IT Learner', icon: <Zap size={11} />, color: '#3b82f6' },
  { text: 'Fast Learner', icon: <Sparkles size={11} />, color: '#06b6d4' },
  { text: 'Practical Mindset', icon: <Rocket size={11} />, color: '#10b981' },
]

// Floating orbit particles
const orbitItems = [
  { icon: '🐧', angle: 0, radius: 130, size: 32, speed: 22 },
  { icon: '🤖', angle: 90, radius: 110, size: 28, speed: 18 },
  { icon: '⚡', angle: 180, radius: 140, size: 26, speed: 25 },
  { icon: '🐍', angle: 270, radius: 120, size: 28, speed: 20 },
  { icon: '💡', angle: 45, radius: 155, size: 24, speed: 30 },
  { icon: '🌐', angle: 225, radius: 100, size: 26, speed: 16 },
]

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-mono font-medium"
              style={{
                background: 'rgba(139,92,246,0.12)',
                border: '1px solid rgba(139,92,246,0.3)',
                color: '#c4b5fd',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Offen für IT-Opportunitäten in Jena
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Hallo, ich bin{' '}
              <span className="gradient-text block sm:inline">Ahmed 👋</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Ich interessiere mich sehr für Computer, Technologie und künstliche Intelligenz.
              Ich liebe es, neue Dinge praktisch zu lernen, Probleme zu lösen und meine Ideen
              mit modernen Technologien umzusetzen.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start"
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: `${badge.color}15`,
                    border: `1px solid ${badge.color}30`,
                    color: badge.color,
                  }}
                >
                  {badge.icon}
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToAbout}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  boxShadow: '0 0 20px rgba(59,130,246,0.35)',
                  border: '1px solid rgba(96,165,250,0.3)',
                }}
              >
                Mehr über mich
                <ArrowRight size={15} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-blue-400 transition-all duration-300"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(59,130,246,0.35)',
                }}
              >
                Projekte ansehen
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Brain visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="relative flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Energy orb background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.5), rgba(139,92,246,0.3), transparent 70%)' }}
              />
            </div>

            {/* Energy orb decorative */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                src={profile.images.energyOrb}
                alt=""
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="w-56 h-56 sm:w-64 sm:h-64 opacity-20 mix-blend-screen"
              />
            </div>

            {/* Orbit rings */}
            {[80, 110, 140].map((r, i) => (
              <div key={r} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="rounded-full border border-blue-500/10"
                  style={{ width: r * 2, height: r * 2, transform: `rotate(${i * 30}deg)` }} />
              </div>
            ))}

            {/* Floating tech icons */}
            {orbitItems.map((item, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: item.speed, repeat: Infinity, ease: 'linear', delay: i * -2 }}
              >
                <motion.div
                  style={{ transform: `translateY(-${item.radius}px)` }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: item.speed, repeat: Infinity, ease: 'linear', delay: i * -2 }}
                >
                  <div className="rounded-xl flex items-center justify-center text-base glass-card"
                    style={{ width: item.size, height: item.size, fontSize: item.size * 0.5 }}>
                    {item.icon}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Main brain image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={profile.images.heroBrain}
                alt="AI Brain"
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.5)) drop-shadow(0 0 60px rgba(139,92,246,0.3))' }}
              />
            </motion.div>

            {/* Scan line */}
            <div className="absolute inset-0 overflow-hidden rounded-full opacity-20 pointer-events-none">
              <motion.div
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                className="w-full h-1/4"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.3), transparent)' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-slate-600 hover:text-blue-400 transition-colors"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ChevronDown size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

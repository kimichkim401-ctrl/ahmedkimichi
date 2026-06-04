import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Cpu } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Über mich' },
  { href: '#skills', label: 'Kenntnisse' },
  { href: '#projects', label: 'Projekte' },
  { href: '#ai-assistant', label: 'KI-Assistent' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Navbar({ onChatOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setActive(href)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-blue-500/10 shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('#home')}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display text-sm font-bold text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                <span className="relative z-10">AE</span>
                <div className="absolute inset-0 opacity-30"
                  style={{ background: 'radial-gradient(circle at top left, rgba(255,255,255,0.3), transparent 70%)' }} />
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-sm font-semibold text-white leading-none">Ahmed Elkmashi</div>
                <div className="text-xs text-blue-400/70 font-mono leading-none mt-0.5">AI Portfolio</div>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    active === link.href
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a
                href="/ahmed-cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                  border: '1px solid rgba(96,165,250,0.3)',
                  boxShadow: '0 0 15px rgba(59,130,246,0.25)',
                }}
              >
                <Download size={14} />
                Mein CV
              </a>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg glass-light text-slate-300"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-blue-500/10"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all duration-200 ${
                      active === link.href
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="border-t border-white/5 mt-2 pt-3">
                  <a
                    href="/ahmed-cv.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white w-full"
                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)' }}
                  >
                    <Download size={14} />
                    Mein CV herunterladen
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

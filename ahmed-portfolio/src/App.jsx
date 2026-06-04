import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import StatsCards from './components/StatsCards'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import Timeline from './components/Timeline'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AIAssistantMobile, { AIAssistantPanel, WhyITCard } from './components/AIAssistant'
import { profile } from './data/profile'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.05,
      color: Math.random() > 0.5 ? [59, 130, 246] : [139, 92, 246],
    }))

    let animId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${p.opacity})`
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} id="particle-canvas" />
}

export default function App() {
  return (
    <div className="min-h-screen relative" style={{ background: '#050a1a' }}>
      {/* Particle background */}
      <ParticleCanvas />

      {/* Neural tech background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={profile.images.neuralBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.025] mix-blend-screen"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-60" />
        {/* Radial vignette */}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,10,26,0.9) 100%)' }} />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main layout */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 pt-20">

        {/* ======== DESKTOP THREE-COLUMN LAYOUT ======== */}
        <div className="hidden xl:grid xl:grid-cols-[260px_1fr_320px] gap-6 items-start">

          {/* LEFT: Sidebar */}
          <div className="sticky top-24 self-start">
            <Sidebar />
          </div>

          {/* CENTER: Main content */}
          <main className="min-w-0">
            <Hero />
            <StatsCards />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <Timeline />
            <ContactSection />
            <Footer />
          </main>

          {/* RIGHT: AI Assistant panel */}
          <div className="sticky top-24 self-start">
            <div className="glass-card rounded-2xl overflow-hidden" style={{ height: '85vh' }}>
              <AIAssistantPanel />
            </div>
            <WhyITCard />

            {/* Mein Weg mini-card */}
            <div className="glass-card rounded-xl p-4 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">🌟</span>
                <span className="text-sm font-display font-semibold text-blue-300">Mein Weg</span>
              </div>
              <div className="space-y-2">
                {[
                  { year: '2021', text: 'Sekundarschulabschluss – Libyen' },
                  { year: '2022', text: 'Selbstständiges Lernen & Projekte' },
                  { year: '2024', text: 'Freiwilligenarbeit – BI Asyl e.V., Jena' },
                  { year: '2026', text: 'Ziel: Ausbildung als IT-Fachinformatiker' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs">
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"
                      style={{ boxShadow: '0 0 6px rgba(96,165,250,0.6)' }} />
                    <span className="text-blue-400 font-mono w-8 flex-shrink-0">{item.year}</span>
                    <span className="text-slate-400">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ======== TABLET TWO-COLUMN LAYOUT ======== */}
        <div className="hidden lg:grid xl:hidden lg:grid-cols-[260px_1fr] gap-6 items-start">
          {/* LEFT: Sidebar */}
          <div className="sticky top-24 self-start">
            <Sidebar />
          </div>

          {/* RIGHT: Main content */}
          <main className="min-w-0">
            <Hero />
            <StatsCards />
            <AboutSection />
            {/* AI assistant section visible for tablet */}
            <section id="ai-assistant" className="py-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 max-w-8"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5))' }} />
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
                  KI-Assistent
                </span>
                <div className="h-px flex-1"
                  style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.5), transparent)' }} />
              </div>
              <div className="glass-card rounded-2xl overflow-hidden" style={{ height: '500px' }}>
                <AIAssistantPanel />
              </div>
            </section>
            <SkillsSection />
            <ProjectsSection />
            <Timeline />
            <ContactSection />
            <Footer />
          </main>
        </div>

        {/* ======== MOBILE LAYOUT ======== */}
        <div className="lg:hidden">
          {/* Profile card (compact sidebar) */}
          <div className="mt-4 mb-6">
            <Sidebar />
          </div>

          <main>
            <Hero />
            <StatsCards />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <Timeline />

            {/* AI section placeholder for anchor */}
            <section id="ai-assistant" className="py-4">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-display text-base font-bold text-white mb-2">AI Career Assistant</h3>
                <p className="text-xs text-slate-400 mb-4">
                  Klicke auf den Chat-Button unten rechts, um den AI Assistant zu starten!
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-mono">Online & Bereit</span>
                </div>
              </div>
            </section>

            <ContactSection />
            <Footer />
          </main>

          {/* Mobile AI floating button */}
          <AIAssistantMobile />
        </div>
      </div>
    </div>
  )
}

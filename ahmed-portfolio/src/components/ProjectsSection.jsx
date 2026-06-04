import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code2, ChevronDown, ChevronUp } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 max-w-8"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5))' }} />
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
            Projekte
          </span>
          <div className="h-px flex-1"
            style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.5), transparent)' }} />
        </div>

        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <h2 className="font-display text-2xl font-bold text-white">Meine Projekte</h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-mono"
          >
            {showAll ? <>Weniger anzeigen <ChevronUp size={14} /></> : <>Alle anzeigen <ChevronDown size={14} /></>}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AnimatePresence>
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card rounded-xl p-5 relative overflow-hidden group cursor-default transition-all duration-300"
              >
                {/* Background glow on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-400"
                  style={{ background: project.color }} />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 30px ${project.glow} inset` }} />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{project.icon}</div>
                    <div className="flex items-center gap-2">
                      {/* Status badge */}
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}30`,
                        }}>
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: 'rgba(245,158,11,0.1)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.25)' }}>
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag}
                        className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded font-mono font-medium"
                        style={{ background: 'rgba(59,130,246,0.08)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.15)' }}>
                        <Code2 size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-slate-600 mt-6 font-mono"
        >
          // Alle Projekte sind persönliche Lernprojekte. Derzeit in der Wachstumsphase. 🌱
        </motion.p>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const badgeStyle = {
  'Intermediate': { bg: 'rgba(16,185,129,0.12)', color: '#10b981', border: 'rgba(16,185,129,0.3)' },
  'Beginner': { bg: 'rgba(59,130,246,0.12)', color: '#60a5fa', border: 'rgba(59,130,246,0.3)' },
  'Advanced': { bg: 'rgba(139,92,246,0.12)', color: '#a78bfa', border: 'rgba(139,92,246,0.3)' },
  'Basic': { bg: 'rgba(245,158,11,0.12)', color: '#fbbf24', border: 'rgba(245,158,11,0.3)' },
  'Practical': { bg: 'rgba(6,182,212,0.12)', color: '#22d3ee', border: 'rgba(6,182,212,0.3)' },
  'Strong': { bg: 'rgba(236,72,153,0.12)', color: '#f472b6', border: 'rgba(236,72,153,0.3)' },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
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
            Kenntnisse
          </span>
          <div className="h-px flex-1"
            style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.5), transparent)' }} />
        </div>

        <div className="flex items-start justify-between mb-6 flex-wrap gap-2">
          <h2 className="font-display text-2xl font-bold text-white">Meine Kenntnisse</h2>
          <div className="text-xs text-slate-500 font-mono px-3 py-1.5 rounded-lg"
            style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.1)' }}>
            // Ehrliche Einschätzung
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const bs = badgeStyle[skill.badge] || badgeStyle['Basic']
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="rounded-xl p-5 relative overflow-hidden cursor-default group transition-all duration-300"
                style={{
                  background: `${skill.color}08`,
                  border: `1px solid ${skill.color}20`,
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ boxShadow: `0 0 20px ${skill.color}25 inset, 0 0 30px ${skill.color}15` }} />
                <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: skill.color }} />

                <div className="relative z-10">
                  {/* Icon + badge row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: bs.bg, color: bs.color, border: `1px solid ${bs.border}` }}>
                      {skill.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-sm font-semibold text-white mb-1">{skill.name}</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: skill.color }}>{skill.level}</p>

                  {/* Progress */}
                  <div className="progress-bar mb-3">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                        boxShadow: `0 0 8px ${skill.color}60`,
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed">{skill.description}</p>

                  {/* Percent indicator */}
                  <div className="mt-3 text-right">
                    <span className="text-xs font-mono" style={{ color: skill.color }}>{skill.percent}%</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-slate-600 mt-6 font-mono"
        >
          ⚠️ Alle Levels sind ehrlich und selbstreflektiert eingeschätzt. Kein Senior-Entwickler.
        </motion.p>
      </motion.div>
    </section>
  )
}

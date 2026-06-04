import { motion } from 'framer-motion'
import { timeline } from '../data/timeline'

export default function Timeline() {
  return (
    <section id="timeline" className="py-16">
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
            Lebenslauf
          </span>
          <div className="h-px flex-1"
            style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.5), transparent)' }} />
        </div>

        <h2 className="font-display text-2xl font-bold text-white mb-8">Mein Weg</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(139,92,246,0.3), rgba(236,72,153,0.3))' }} />

          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-14 pb-8"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
                  className={`absolute left-0 top-0 w-10 h-10 rounded-xl flex items-center justify-center text-base z-10 ${
                    item.isGoal ? 'animate-pulse-glow' : ''
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                    border: `2px solid ${item.color}50`,
                    boxShadow: item.isGoal ? `0 0 15px ${item.color}40` : `0 0 8px ${item.color}20`,
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`rounded-xl p-4 transition-all duration-200 ${item.isGoal ? 'ring-1' : ''}`}
                  style={{
                    background: item.isGoal
                      ? `linear-gradient(135deg, ${item.color}12, ${item.color}08)`
                      : 'rgba(13,21,48,0.5)',
                    border: `1px solid ${item.color}20`,
                    ringColor: item.isGoal ? `${item.color}30` : undefined,
                  }}
                >
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded"
                      style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}25` }}>
                      {item.year}
                    </span>
                    {item.isGoal && (
                      <span className="text-xs font-medium text-amber-400 animate-pulse">🎯 Aktuelles Ziel</span>
                    )}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-white mt-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

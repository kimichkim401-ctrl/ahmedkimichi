import { motion } from 'framer-motion'
import { Heart, Cpu, BookOpen, Users, Star } from 'lucide-react'
import { softSkills } from '../data/skills'

const traits = [
  { icon: <BookOpen size={16} />, text: 'Praktischer Lerner', color: '#3b82f6' },
  { icon: <Cpu size={16} />, text: 'KI-Enthusiast', color: '#8b5cf6' },
  { icon: <Heart size={16} />, text: 'Leidenschaftlich', color: '#ec4899' },
  { icon: <Star size={16} />, text: 'Schneller Lerner', color: '#f59e0b' },
  { icon: <Users size={16} />, text: 'Teamfähig', color: '#10b981' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 max-w-8"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5))' }} />
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
            Über mich
          </span>
          <div className="h-px flex-1"
            style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.5), transparent)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Story */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-xl font-bold text-white mb-4">
              Meine Geschichte
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Seit meiner Kindheit interessiere ich mich stark für Computer, Technologie und Programmierung.
              Viele Grundlagen habe ich mir selbstständig über das Internet beigebracht. Besonders faszinieren
              mich Softwareentwicklung, künstliche Intelligenz und moderne IT-Technologien.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mt-3">
              Ich bin sehr lernmotiviert, ruhig, neugierig und arbeite gerne praktisch. Ich lerne besonders gut,
              wenn mir Dinge direkt gezeigt werden, und entwickle mich Schritt für Schritt weiter.
            </p>

            {/* Traits */}
            <div className="flex flex-wrap gap-2 mt-5">
              {traits.map((t) => (
                <div key={t.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: `${t.color}12`, border: `1px solid ${t.color}25`, color: t.color }}>
                  {t.icon}
                  {t.text}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-xl font-bold text-white mb-4">
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-300"
                  style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.1)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Why IT box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-5 rounded-xl p-4 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.08))',
                border: '1px solid rgba(139,92,246,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart size={14} className="text-violet-400" />
                <span className="text-xs font-display font-semibold text-violet-400 uppercase tracking-wider">Warum IT?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Technologie fasziniert mich, weil sie jeden Tag die Welt verändert. Ich möchte verstehen,
                wie Dinge funktionieren, Menschen helfen und meine Ideen in echte Lösungen verwandeln.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

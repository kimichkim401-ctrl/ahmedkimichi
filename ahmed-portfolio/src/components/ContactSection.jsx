import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react'
import { profile } from '../data/profile'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
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
            Kontakt
          </span>
          <div className="h-px flex-1"
            style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.5), transparent)' }} />
        </div>

        <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #3b82f6, #8b5cf6, transparent)' }} />

          <div className="relative z-10">
            <h2 className="font-display text-2xl font-bold text-white mb-2">Kontakt aufnehmen</h2>
            <p className="text-slate-400 text-sm mb-8 max-w-lg">
              Ich bin offen für Ausbildungsangebote, Praktika, Einstiegsmöglichkeiten und alle Fragen rund um IT.
              Schreib mir einfach!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <ContactCard
                icon={<Mail size={18} />}
                label="E-Mail"
                value={profile.email}
                href={`mailto:${profile.email}`}
                color="#3b82f6"
              />
              <ContactCard
                icon={<Phone size={18} />}
                label="Telefon"
                value={profile.phone}
                href={`tel:${profile.phone}`}
                color="#8b5cf6"
              />
              <ContactCard
                icon={<MapPin size={18} />}
                label="Standort"
                value={profile.location}
                color="#06b6d4"
              />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  boxShadow: '0 0 20px rgba(59,130,246,0.3)',
                  border: '1px solid rgba(96,165,250,0.3)',
                }}
              >
                <Send size={15} />
                E-Mail schreiben
              </motion.a>

              <motion.a
                href="/ahmed-cv.html"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-blue-400 transition-all duration-300"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(59,130,246,0.35)',
                }}
              >
                <Download size={15} />
                CV herunterladen
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ContactCard({ icon, label, value, href, color }) {
  const inner = (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      className="rounded-xl p-4 transition-all duration-200 h-full"
      style={{
        background: `${color}08`,
        border: `1px solid ${color}20`,
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="p-2 rounded-lg" style={{ background: `${color}15`, color }}>
          {icon}
        </div>
        <span className="text-xs font-mono text-slate-500">{label}</span>
      </div>
      <p className={`text-sm font-medium text-slate-200 truncate ${href ? 'hover:text-blue-300 transition-colors' : ''}`}>
        {value}
      </p>
    </motion.div>
  )

  return href ? <a href={href}>{inner}</a> : inner
}

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Calendar, Globe2, Github, Linkedin, Target } from 'lucide-react'
import { profile } from '../data/profile'

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      className="w-full flex flex-col gap-4"
    >
      {/* Profile Card */}
      <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden relative"
            style={{
              border: '2px solid transparent',
              background: 'linear-gradient(#0d1530, #0d1530) padding-box, linear-gradient(135deg, #3b82f6, #8b5cf6) border-box',
              boxShadow: '0 0 25px rgba(59,130,246,0.3)',
            }}>
            <div className="w-full h-full rounded-full flex items-center justify-center font-display text-3xl font-bold"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)' }}>
              <span className="gradient-text">AE</span>
            </div>
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-navy-900"
            style={{ boxShadow: '0 0 8px rgba(74,222,128,0.7)' }} />
        </div>

        <h2 className="font-display text-lg font-semibold text-white leading-tight">
          Ahmed Elkmashi
        </h2>
        <p className="text-blue-400 text-sm mt-1 font-medium">IT-Lernender & KI-Enthusiast</p>
        <p className="text-slate-500 text-xs mt-1 font-mono">{profile.tagline}</p>

        {/* Divider */}
        <div className="w-full h-px mt-4 mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }} />

        {/* Info list */}
        <div className="w-full flex flex-col gap-3 text-left">
          <InfoRow icon={<MapPin size={13} />} value={profile.location} />
          <InfoRow icon={<Phone size={13} />} value={profile.phone} href={`tel:${profile.phone}`} />
          <InfoRow icon={<Mail size={13} />} value={profile.email} href={`mailto:${profile.email}`} truncate />
          <InfoRow icon={<Calendar size={13} />} value={profile.birthday} />
          <InfoRow icon={<Globe2 size={13} />} value={`Staatsangehörigkeit: ${profile.nationality}`} />
        </div>

        {/* Divider */}
        <div className="w-full h-px mt-4 mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }} />

        {/* Languages */}
        <div className="w-full">
          <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-3">Sprachen</p>
          <div className="flex flex-col gap-3">
            {profile.languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">{lang.name}</span>
                  <span className="text-blue-400 font-mono">{lang.level}</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.percent}%` }}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mt-4 mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />

        {/* Goal */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="w-full rounded-xl p-4 text-left relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.08))',
            border: '1px solid rgba(139,92,246,0.2)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Target size={14} className="text-violet-400" />
            <span className="text-xs font-display font-semibold text-violet-400 uppercase tracking-wider">Ziel</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{profile.goal}</p>
        </motion.div>

        {/* Social */}
        <div className="flex items-center gap-3 mt-4">
          <SocialBtn href={profile.social.github} icon={<Github size={15} />} label="GitHub" />
          <SocialBtn href={profile.social.linkedin} icon={<Linkedin size={15} />} label="LinkedIn" />
        </div>
      </div>
    </motion.aside>
  )
}

function InfoRow({ icon, value, href, truncate }) {
  const content = (
    <div className={`flex items-center gap-2 group ${href ? 'cursor-pointer' : ''}`}>
      <span className="text-blue-400 flex-shrink-0">{icon}</span>
      <span className={`text-xs text-slate-300 ${truncate ? 'truncate' : ''} ${href ? 'group-hover:text-blue-300 transition-colors' : ''}`}>
        {value}
      </span>
    </div>
  )
  return href ? <a href={href}>{content}</a> : content
}

function SocialBtn({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      title={label}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors duration-200"
      style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}
    >
      {icon}
    </motion.a>
  )
}

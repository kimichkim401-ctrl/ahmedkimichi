import { motion } from 'framer-motion'
import { TrendingUp, FolderOpen, Flame, GraduationCap } from 'lucide-react'

const stats = [
  {
    icon: <TrendingUp size={20} />,
    value: '100%',
    label: 'Lernmotivation',
    sub: 'Jeden Tag besser werden',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: <FolderOpen size={20} />,
    value: '5+',
    label: 'Projekte',
    sub: 'Eigene Lernprojekte',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    icon: <Flame size={20} />,
    value: 'KI & IT',
    label: 'Leidenschaft',
    sub: 'Meine Stärken',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
  },
  {
    icon: <GraduationCap size={20} />,
    value: 'Ausbildung',
    label: 'Ziel',
    sub: 'Praktikum / Einstieg',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.03, y: -3 }}
          className="rounded-xl p-4 sm:p-5 relative overflow-hidden cursor-default transition-shadow duration-300"
          style={{
            background: stat.bg,
            border: `1px solid ${stat.border}`,
          }}
        >
          {/* Background glow */}
          <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full blur-2xl opacity-30"
            style={{ background: stat.color }} />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg" style={{ background: `${stat.color}20`, color: stat.color }}>
                {stat.icon}
              </div>
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
              <span style={{ color: stat.color }}>{stat.value}</span>
            </div>
            <div className="text-slate-300 text-xs sm:text-sm font-medium">{stat.label}</div>
            <div className="text-slate-500 text-xs mt-0.5">{stat.sub}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

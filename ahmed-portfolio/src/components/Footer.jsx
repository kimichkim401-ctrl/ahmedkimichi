import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 mt-8 border-t border-white/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-slate-500 flex items-center gap-1.5 flex-wrap justify-center"
        >
          © 2026 Ahmed Elkmashi. Built with
          <span className="flex items-center gap-1 text-pink-400">
            <Heart size={12} className="fill-current" /> passion
          </span>
          , curiosity and AI.
        </motion.p>

        <div className="flex items-center gap-3">
          <FooterLink href="https://github.com/" icon={<Github size={15} />} label="GitHub" />
          <FooterLink href="https://linkedin.com/" icon={<Linkedin size={15} />} label="LinkedIn" />
          <FooterLink href="mailto:ahmedelkmashi13@gmail.com" icon={<Mail size={15} />} label="Email" />
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -1 }}
      title={label}
      className="p-2 rounded-lg text-slate-500 hover:text-blue-400 transition-colors"
      style={{ background: 'rgba(255,255,255,0.03)' }}
    >
      {icon}
    </motion.a>
  )
}

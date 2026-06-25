import { motion } from 'framer-motion'
import { ArrowDown, Circle, Download, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/portfolio'
import { Particles } from './Particles'

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="grid-pattern" aria-hidden="true" />
      <Particles count={32} />

      <div className="hero-copy">
        <motion.span
          className="status-pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Circle size={8} />
          Disponivel para estagio e projetos
        </motion.span>

        <motion.p
          className="hero-overline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.04 }}
        >
          Portfolio profissional · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Backend Developer
          <span> in Training</span>
        </motion.h1>

        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
        >
          {profile.role}
        </motion.p>

        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24 }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32 }}
        >
          <a className="btn primary" href={profile.githubUrl} target="_blank" rel="noreferrer">
            <FaGithub size={18} />
            GitHub
          </a>
          <a className="btn secondary" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            <FaLinkedinIn size={18} />
            LinkedIn
          </a>
          <a className="btn ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            <Download size={18} />
            Curriculo
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.45 }}
        >
          <MapPin size={17} />
          {profile.location}
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
      >
        <div className="portrait-shell">
          <div className="portrait-ring" aria-hidden="true" />
          <div className="portrait-card">
            <div className="portrait-placeholder">
              <img className="portrait-photo" src={profile.photo} alt={profile.name} />
            </div>
          </div>
          <motion.div
            className="floating-badge badge-java"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {'{ '}java{' }'}
          </motion.div>
          <motion.div
            className="floating-badge badge-kafka"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            kafka.send()
          </motion.div>
          <motion.div
            className="floating-badge badge-backend"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            @backend.dev
          </motion.div>
        </div>
        <img className="hero-artwork" src={profile.heroImage} alt="" aria-hidden="true" />
      </motion.div>

      <motion.a
        className="scroll-indicator"
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  )
}

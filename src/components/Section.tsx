import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}

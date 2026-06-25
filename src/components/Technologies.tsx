import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { technologies } from '../data/portfolio'
import { Section } from './Section'

export function Technologies() {
  return (
    <Section id="tecnologias" eyebrow="Stack" title="Tecnologias com pratica progressiva e foco profissional.">
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <motion.article
            className="tech-card"
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <div className="tech-topline">
              <div>
                <h3>{tech.name}</h3>
                <span>{tech.level}%</span>
              </div>
              <div className="tooltip-trigger" tabIndex={0} aria-label={`Detalhes sobre ${tech.name}`}>
                <Info size={17} />
                <div className="tooltip" role="tooltip">
                  <strong>{tech.name}</strong>
                  <ul>
                    {tech.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="progress-track" aria-label={`${tech.name}: ${tech.level}%`}>
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 + index * 0.04 }}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

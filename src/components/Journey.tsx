import { motion } from 'framer-motion'
import { journey } from '../data/portfolio'
import { Section } from './Section'

export function Journey() {
  return (
    <Section id="jornada" eyebrow="Jornada" title="Evolucao tecnica orientada por estudo, pratica e projetos.">
      <div className="timeline">
        {journey.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -26 : 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="timeline-marker">{item.year}</div>
            <div className="timeline-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

import { Code2, GraduationCap, Network } from 'lucide-react'
import { Section } from './Section'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Base academica',
    text: 'Ciencia da Computacao com foco em fundamentos, logica, dados e engenharia de software.',
  },
  {
    icon: Code2,
    title: 'Backend primeiro',
    text: 'Interesse principal em Java, APIs REST, persistencia e organizacao de sistemas em camadas.',
  },
  {
    icon: Network,
    title: 'Arquitetura moderna',
    text: 'Estudos direcionados para microsservicos, Kafka, bancos SQL/NoSQL e software escalavel.',
  },
]

export function About() {
  return (
    <Section id="sobre" eyebrow="Sobre mim" title="Desenvolvedor em formacao com visao de produto e arquitetura.">
      <div className="about-grid">
        <div className="glass-panel about-copy">
          <p>
            Meu objetivo e crescer como desenvolvedor backend, criando APIs bem estruturadas,
            mantendo codigo limpo e entendendo como decisoes de arquitetura impactam produto,
            performance e manutencao.
          </p>
          <p>
            Tenho estudado Java, SQL, MongoDB, React e conceitos de sistemas distribuidos para
            construir projetos completos, documentados e prontos para ambientes reais.
          </p>
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <article className="highlight-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

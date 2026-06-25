import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/portfolio'
import { Section } from './Section'

const contacts = [
  {
    label: 'LinkedIn',
    value: 'henrique-srs',
    href: profile.linkedinUrl,
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    value: profile.githubUsername,
    href: profile.githubUrl,
    icon: FaGithub,
  },
  {
    label: 'E-mail',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
]

export function Contact() {
  return (
    <Section id="contato" eyebrow="Contato" title="Vamos conversar sobre tecnologia, estagio e projetos.">
      <div className="contact-grid">
        {contacts.map((contact) => {
          const Icon = contact.icon
          return (
            <a className="contact-card" href={contact.href} target="_blank" rel="noreferrer" key={contact.label}>
              <Icon size={23} />
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          )
        })}
      </div>
    </Section>
  )
}

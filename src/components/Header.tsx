import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/portfolio'

const navItems = [
  ['Sobre', '#sobre'],
  ['Tecnologias', '#tecnologias'],
  ['Jornada', '#jornada'],
  ['Projetos', '#projetos'],
  ['Contato', '#contato'],
]

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Voltar ao inicio">
        HR
      </a>

      <nav className="nav-links" aria-label="Navegacao principal">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub size={18} />
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="E-mail">
          <Mail size={18} />
        </a>
      </div>
    </header>
  )
}

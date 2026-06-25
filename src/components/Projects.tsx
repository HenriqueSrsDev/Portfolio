import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/portfolio'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projetos" eyebrow="Projetos" title="Projetos que representam minha evolução prática.">
      <div className="projects-grid single-project">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt="" loading="lazy" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub size={17} />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="projects-note">
        Novos projetos serão adicionados conforme minha evolução prática em desenvolvimento.
      </p>
    </Section>
  )
}

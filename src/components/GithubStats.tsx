import { profile } from '../data/portfolio'
import { Section } from './Section'

const theme = 'github_dark'
const base = 'https://github-readme-stats.vercel.app/api'
const streakBase = 'https://streak-stats.demolab.com'

export function GithubStats() {
  const user = profile.githubUsername

  return (
    <Section id="github" eyebrow="GitHub" title="Estatisticas conectadas ao perfil real do GitHub.">
      <div className="github-grid">
        <img
          src={`${base}?username=${user}&show_icons=true&theme=${theme}&hide_border=true&bg_color=0F172A&title_color=60A5FA&text_color=FFFFFF&icon_color=3B82F6`}
          alt={`Estatisticas do GitHub de ${profile.name}`}
          loading="lazy"
        />
        <img
          src={`${base}/top-langs/?username=${user}&layout=compact&theme=${theme}&hide_border=true&bg_color=0F172A&title_color=60A5FA&text_color=FFFFFF`}
          alt={`Linguagens mais usadas por ${profile.name}`}
          loading="lazy"
        />
        <img
          className="github-wide"
          src={`${streakBase}?user=${user}&theme=dark&hide_border=true&background=0F172A&ring=3B82F6&fire=60A5FA&currStreakLabel=FFFFFF`}
          alt={`Sequencia de commits de ${profile.name}`}
          loading="lazy"
        />
      </div>
    </Section>
  )
}

import heroArtwork from '../assets/Portifolio.png'
import profilePhoto from '../assets/Foto-Portifolio.png'

export const profile = {
  name: 'Henrique Reis',
  role: 'Backend Developer in Training',
  location: 'Brasil',
  email: 'henrique.reis.contato01@gmail.com',
  githubUsername: 'HenriqueSrsDev',
  githubUrl: 'https://github.com/HenriqueSrsDev',
  linkedinUrl: 'https://www.linkedin.com/in/henrique-srs/',
  resumeUrl: '/curriculo-henrique-reis.pdf',
  heroImage: heroArtwork,
  photo: profilePhoto,
  summary:
    'Estudante de Ciencia da Computacao focado em desenvolvimento backend, APIs REST, arquitetura de software e sistemas distribuidos. Construo projetos com Java, bancos de dados, React e fundamentos modernos de engenharia.',
}

export const technologies = [
  {
    name: 'Java',
    level: 80,
    description: ['POO', 'Collections', 'Exceptions', 'JDBC', 'Maven'],
  },
  {
    name: 'APIs REST',
    level: 78,
    description: ['HTTP', 'DTOs', 'Status codes', 'Validacoes', 'Boas praticas'],
  },
  {
    name: 'SQL',
    level: 75,
    description: ['CRUD', 'Joins', 'Modelagem', 'Consultas', 'Relacionamentos'],
  },
  {
    name: 'React',
    level: 70,
    description: ['Components', 'Props', 'State', 'Hooks', 'Consumo de APIs'],
  },
  {
    name: 'MongoDB',
    level: 62,
    description: ['Documents', 'Collections', 'Filtros', 'Agregacoes', 'Modelagem NoSQL'],
  },
  {
    name: 'Kafka',
    level: 55,
    description: ['Topicos', 'Producers', 'Consumers', 'Eventos', 'Mensageria'],
  },
  {
    name: 'React Native',
    level: 55,
    description: ['Components nativos', 'Navegacao', 'Hooks', 'APIs', 'Layouts mobile'],
  },
  {
    name: 'Arquitetura',
    level: 65,
    description: ['Camadas', 'SOLID', 'Microsservicos', 'Clean Code', 'Separacao de responsabilidades'],
  },
]

export const journey = [
  {
    year: '2023',
    title: 'Stellantis',
    text: 'Contato com ambiente profissional, disciplina operacional e visao de processos em tecnologia e industria.',
  },
  {
    year: '2024',
    title: 'Ciencia da Computacao',
    text: 'Base academica em algoritmos, estruturas de dados, banco de dados e fundamentos de software.',
  },
  {
    year: '2025',
    title: 'Projetos Java',
    text: 'Construcao de APIs, persistencia, organizacao em camadas e pratica com ferramentas do ecossistema Java.',
  },
  {
    year: '2026',
    title: 'Microsservicos e Kafka',
    text: 'Estudo de sistemas distribuidos, mensageria, comunicacao entre servicos e arquitetura escalavel.',
  },
]

export const projects = [
  {
    title: 'Portfólio Profissional',
    description:
      'Portfólio pessoal desenvolvido para apresentar minha trajetória, tecnologias, projetos e contatos profissionais. O projeto foi desenvolvido utilizando React, Vite e TypeScript, priorizando design moderno, responsividade, animações suaves e código organizado.',
    image: heroArtwork,
    tags: ['React', 'Vite', 'TypeScript', 'CSS', 'Framer Motion'],
    github: 'https://github.com/HenriqueSrsDev/Portfolio',
    deploy: '#',
  },
]

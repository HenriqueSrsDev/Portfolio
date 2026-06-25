# Portfólio Profissional - Henrique Reis

Portfólio pessoal desenvolvido para apresentar minha trajetória acadêmica, evolução prática, tecnologias, projetos e canais de contato profissional.

O objetivo deste site é servir como uma vitrine profissional para GitHub, LinkedIn, currículo e processos seletivos de estágio ou oportunidades na área de desenvolvimento de software.

## Site online

O portfólio está publicado na Vercel e pode ser acessado pelo link:

[https://henrique-portfolio-mu.vercel.app/](https://henrique-portfolio-mu.vercel.app/)

## Sobre o projeto

Este projeto foi construído com foco em uma experiência moderna, responsiva e profissional. A proposta é apresentar de forma clara quem eu sou, quais tecnologias estudo e utilizo, minha jornada de aprendizado e os projetos que representam minha evolução prática.

Atualmente, a seção de projetos apresenta meu primeiro projeto publicado: este próprio portfólio. Novos projetos serão adicionados conforme minha evolução em desenvolvimento backend, frontend e arquitetura de software.

## Objetivos

- Apresentar meu perfil profissional como desenvolvedor em formação.
- Destacar meu foco em Java, APIs REST, microsserviços, Kafka, MongoDB, SQL, React e arquitetura de software.
- Reunir links importantes como GitHub, LinkedIn, currículo e e-mail.
- Mostrar minha evolução prática por meio de uma timeline e da seção de projetos.
- Servir como base profissional para processos seletivos e networking.

## Tecnologias utilizadas

- React
- Vite
- TypeScript
- CSS modularizado por responsabilidade
- Framer Motion
- Lucide React
- React Icons
- ESLint

## Funcionalidades

- Hero section com apresentação profissional.
- Foto de perfil personalizada.
- Links para GitHub, LinkedIn e currículo.
- Seção "Sobre mim".
- Seção de tecnologias com barras de progresso animadas.
- Tooltips explicando conhecimentos específicos de cada tecnologia.
- Timeline da jornada acadêmica e profissional.
- Seção de projetos preparada para evolução contínua.
- Estatísticas do GitHub integradas por cards externos.
- Seção de contato com LinkedIn, GitHub e e-mail.
- Layout responsivo para desktop, tablet e mobile.
- Animações suaves com Framer Motion.

## Estrutura do projeto

```text
./
├── public/
│   ├── curriculo-henrique-reis.pdf
│   └── favicon.png
│
├── src/
│   ├── assets/
│   │   ├── Foto-Portifolio.png
│   │   └── Portifolio.png
│   │
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── GithubStats.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Journey.tsx
│   │   ├── Particles.tsx
│   │   ├── Projects.tsx
│   │   ├── Section.tsx
│   │   └── Technologies.tsx
│   │
│   ├── data/
│   │   └── portfolio.ts
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── sections.css
│   │   ├── about.css
│   │   ├── techSkills.css
│   │   ├── journey.css
│   │   ├── projects.css
│   │   ├── githubStats.css
│   │   ├── contact.css
│   │   └── responsive.css
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

## Organização dos estilos

Os estilos foram separados por responsabilidade para facilitar manutenção e evolução do projeto.

- `variables.css`: cores, fontes, sombras, container e variáveis globais.
- `global.css`: reset, body, links, imagens, scrollbar e estilos globais.
- `navbar.css`: estilos do menu superior.
- `hero.css`: estilos da seção principal.
- `sections.css`: estilos compartilhados entre seções.
- `about.css`: estilos da seção sobre mim.
- `techSkills.css`: estilos da seção de tecnologias.
- `journey.css`: estilos da timeline.
- `projects.css`: estilos da seção de projetos.
- `githubStats.css`: estilos das estatísticas do GitHub.
- `contact.css`: estilos da seção de contato.
- `responsive.css`: ajustes responsivos.

## Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/HenriqueSrsDev/Portfolio.git
```

Acesse a pasta criada pelo clone:

```bash
cd Portfolio
```

Caso você já tenha aberto a pasta raiz do projeto, onde ficam `package.json`, `src`, `public` e `vite.config.ts`, pode pular esse comando.

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:5173
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento com Vite.

```bash
npm run build
```

Gera a versão de produção do projeto.

```bash
npm run preview
```

Executa uma prévia local da build de produção.

```bash
npm run lint
```

Executa a análise de código com ESLint.

## Deploy

O projeto está publicado na Vercel:

[https://henrique-portfolio-mu.vercel.app/](https://henrique-portfolio-mu.vercel.app/)

Também está preparado para deploy em plataformas como:

- Vercel
- Netlify
- GitHub Pages

Para deploy na Vercel, basta importar o repositório e utilizar as configurações padrão de um projeto Vite.

## Contato

- GitHub: [HenriqueSrsDev](https://github.com/HenriqueSrsDev)
- LinkedIn: [henrique-srs](https://www.linkedin.com/in/henrique-srs/)
- E-mail: [henrique.reis.contato01@gmail.com](mailto:henrique.reis.contato01@gmail.com)
- Site: [henrique-portfolio-mu.vercel.app](https://henrique-portfolio-mu.vercel.app/)

## Status

Projeto em evolução contínua.

Este portfólio representa meu primeiro projeto publicado. Conforme eu desenvolver novos projetos, eles serão adicionados à seção de projetos para demonstrar minha evolução prática em desenvolvimento de software.

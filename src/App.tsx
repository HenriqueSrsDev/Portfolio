import { About } from './components/About'
import { Contact } from './components/Contact'
import { GithubStats } from './components/GithubStats'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Journey />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
    </>
  )
}

export default App

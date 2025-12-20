import { Contact } from "./components/portfolio/Contact"
import { About } from "./components/portfolio/About"
import { Hero } from "./components/portfolio/Hero"
import { Navbar } from "./components/portfolio/Navbar"
import { Projects } from "./components/portfolio/Projects"
import { Skills } from "./components/portfolio/Skills"
import { Footer } from "./components/portfolio/Footer"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main >
        <Hero />
        <About />
        <Skills/>
        <Projects />
        <Contact/>
      </main>
       <Footer />
      <Toaster/>
    </div>
  )
}

export default App

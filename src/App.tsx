import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"

import { About } from "./sections/About/About"
import { Capabilities } from "./sections/Capabilities/Capabilities"
import { Contact } from "./sections/Contact/Contact"
import { Experience } from "./sections/Experience/Experience"
import { Hero } from "./sections/Hero/Hero"
import { Principles } from "./sections/Principles/Principles"
import { Projects } from "./sections/Projects/Projects"
import { Proof } from "./sections/Proof/Proof"

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Proof />
        <About />
        <Projects />
        <Capabilities />
        <Experience />
        <Principles />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App

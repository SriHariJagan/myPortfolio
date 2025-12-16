import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About/About'
import Experience from './Pages/Experience/Experience'
import Projects from './Pages/Projects/Projects'
import Techstack from './Pages/Techstack/Techstack'
import Skills from './Pages/Skills/Skills'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Techstack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
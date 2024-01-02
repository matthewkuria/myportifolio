import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectCard from './components/ProjectCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <div className="">
      <ProjectCard />
    </div>
      
    </>
  )
}

export default App

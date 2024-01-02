import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Hero />
    <About />
      <h1 className='text-blue-400 text-xl'>Work in Progress...</h1>
    </>
  )
}

export default App

import { useState } from 'react'
import NavBar from './components/NavBar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
      <h1 className='text-blue-400 text-xl'>Work in Progress...</h1>
    </>
  )
}

export default App

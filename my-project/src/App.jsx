import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectCard from './components/ProjectCard'
import Skills from './components/Skills'
import './App.css'
import {useForm} from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(data);

  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <div className="">
      <ProjectCard />
    </div>
    <Skills />
    <section className="FORM bg-cyan-400 h-72">
            <h1>Leave a Message </h1>
            <form onSubmit={handleSubmit(onSubmit)} > 

                    <input {...register("email")}  />          
                
                    <input {...register("message")}/>
              
                <button type="submit" className="bg-green-500 border-2  hover:animate-none border-green-500 hover:bg-white mx-4 px-3 py-2 rounded hover:text-green-500">Submit</button>
            </form>
        </section>
      
    </>
  )
}

export default App

import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectCard from './components/ProjectCard'
import Skills from './components/Skills'
import data from './data'
import './App.css'
import {useForm} from "react-hook-form";

function App() {

  const current = new Date();
  const date = `${current.getFullYear()}`;

  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(data);
  const cards = data.map(item =>{
    return(
      <ProjectCard
      id={item.id}
        title={item.title}
        desc={item.desc}
        img={item.projImg}
        liveLink={item.liveLink}
        githubLink={item.githubLink}
      />
    )
  })

  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <div className="">
      {cards}
    </div>
    <Skills />
    <section className="FORM bg-blue-600 h-auto">
            <h1 className='text-white font-bold'>Leave a Message </h1>
            <form onSubmit={handleSubmit(onSubmit)} > 

                    <input {...register("email")}  />          
                
                    <input {...register("message")}/>
              
                <button type="submit" className="bg-green-500 border-2  hover:animate-none border-green-500 hover:bg-white mx-4 px-3 py-2 rounded hover:text-green-500">Submit</button>
            </form>
            <div className="copyright justify-end text-white text-xs">
              <h2>Developed by Matthew Kuria &copy;<span>{date}</span></h2>
            </div>
        </section>
      
    </>
  )
}

export default App

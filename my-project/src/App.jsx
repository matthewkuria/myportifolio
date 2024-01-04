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
    <h1 className='text-2xl mt-10 text-blue-600 font-semibold'>Tech Stack</h1>
    <Skills />
    <div className="">
      <h1 className='text-2xl mt-10 text-blue-600 font-semibold'>Projects</h1>
      {cards}
    </div>
   
    <section className="FORM bg-blue-600 h-auto mt-5">
            <h1 className='text-white font-bold'>Leave a Message </h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:grid md:grid-cols-3 gap-4 p-8 justify-center'> 

                    <input {...register("email")} className='md:w-full' placeholder='Email' />          
                
                    <input {...register("message")} className='md:w-full ' placeholder='Message'/>
              
                <button type="submit" className="bg-green-500 border-2  hover:animate-none border-green-500 hover:bg-white mx-4 px-3 py-2 rounded hover:text-green-500 md:w-1/2">Submit</button>
            </form>
            <div className="copyright justify-end text-white text-xs">
              <h2 className='mt-5'>Developed by Matthew Kuria &copy;<span>{date}</span></h2>
            </div>
        </section>
      
    </>
  )
}

export default App

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
    <h2 className='text-2xl mt-10 text-blue-600 font-semibold'>Tech Stack</h2>
    <Skills />
    <div className="">
      <h2 className='text-2xl mt-10 text-blue-600 font-semibold'>Projects</h2>
      {cards}
    </div>
   
    <section className="FORM  h-auto mt-5">
            <h1 className='text-white font-bold'>Leave a Message </h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:grid md:grid-cols-3 gap-4 p-8 justify-center'> 
                  <label htmlFor="">Email</label>
                    <input {...register("email")} className='md:w-full bg-gray-300 rounded-md px-2' placeholder='Email' />          
                  <label htmlFor="">Send a Message</label>
                    <input {...register("message")} className='md:w-full bg-gray-300 rounded-md px-2' placeholder='Message'/>
              
                <button type="submit" className="bg-blue-500 border-2   border-blue-500 hover:bg-white mx-4 px-3 py-2 rounded text-white hover:text-blue-600 md:w-1/2">Submit</button>
            </form>
            <div className="copyright justify-end text-white text-xs">
              <h2 className='mt-5'>Developed by Matthew Kuria &copy;<span>{date}</span></h2>
            </div>
        </section>
      
    </>
  )
}

export default App

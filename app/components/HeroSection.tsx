import React from 'react'
import GetInTouchButton from './GetInTouchButton'
import Link from 'next/link'

const HeroSection = () => {
  return (
      <section className="hero flex flex-col md:flex lg:flex-row items-center justify-center h-screen   text-white">
            <div className=" flex flex-col w-full items-center text-center px-4">
                <h1 className=" font-bold mb-4">Web Designer & Frontend Developer at 
                  <span className='text-secondary px-2'>Brandriko Digital Solutions</span>
                  </h1>
              <p className="text-3xl md:text-8xl font-bold mb-8 uppercase">Mathew Kuria               
                </p>
                <p className="mb-6">
                  I design and build modern websites that help businesses attract customers and grow online.
                </p>
              <div className="flex gap-4 items-center">
                  <GetInTouchButton />
                  <Link href="#projects" className="bg-white text-secondary px-6 py-2 rounded-full  hover:bg-secondary hover:text-white transition duration-700 ease-in-out hover:outline-2">
                      View My Work
                  </Link>                  
                </div>
          </div>
         
    </section>
  )
}

export default HeroSection
import React from 'react'
import GetInTouchButton from './GetInTouchButton'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
      <section className="hero flex flex-col md:flex lg:flex-row items-center justify-center h-screen md:bg-gradient-to-r from-secondary to-blue-600 text-white">
            <div className=" flex flex-col w-full md:max-w-1/2 px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Full Stack developer solving problems with code</h1>
              <p className="text-md mb-8">Hi, am Matthew Kuria,
                I specialize in creating beautiful and functional websites using the latest technologies.
                Let's work together to bring your ideas to life!
                </p>
              <div className="flex gap-4 items-center">
                  <GetInTouchButton />
                  <Link href="#projects" className="bg-white text-blue-900 px-6 py-2 rounded-full  hover:bg-secondary hover:text-white transition duration-700 ease-in-out hover:outline-2">
                      View My Work
                  </Link>                  
                </div>
          </div>
          <div className="hidden md:block w-full md:max-w-1/2 p-2">
            <Image src="/tech_bg.webp" width={400} height={300} alt="Hero Image" className="w-[650px] h-full" priority />
          </div>
    </section>
  )
}

export default HeroSection
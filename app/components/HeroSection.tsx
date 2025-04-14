import React from 'react'
import GetInTouchButton from './GetInTouchButton'
import Link from 'next/link'

const HeroSection = () => {
  return (
      <section className="flex flex-col md:flex lg:flex-row items-center justify-center h-screen bg-gradient-to-r from-secondary to-blue-600 text-white">
            <div className="hero flex flex-col w-full md:max-w-1/2 px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Frontend developer creating unique websites</h1>
              <p className="text-lg mb-8">Hi, am Matthew Kuria, a passionate web developer.
                I specialize in creating beautiful and functional websites using the latest technologies.
                Let's work together to bring your ideas to life!
                </p>
              <div className="flex gap-4 items-center">
                  <GetInTouchButton />
                  <Link href="#projects" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition duration-300">
                      View My Work
                  </Link>                  
                </div>
          </div>
          <div className="hidden md:block w-full md:max-w-1/2 p-2">
            <img src="/tech_bg.webp" alt="Hero Image" className="w-[650px] h-full" />
          </div>
    </section>
  )
}

export default HeroSection
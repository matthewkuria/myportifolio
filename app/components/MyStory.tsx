import React from 'react'
import Image from 'next/image'
import GetInTouchButton from './GetInTouchButton'
import mattImage from "../../public/matt.jpg"
import Socials from './Socials'

const MyStory = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row w-full md:h-[350px] bg-secondary p-4 md:p-8 my-5">
        <div className="md:mx-5">
              <Image src={mattImage} width={200} height={300}  alt='Matthew Kuria'
               className='rounded-full md:rounded-none h-[200px] w-auto md:h-[300px]'
              />
        </div>
          <div className="flex flex-col w-full md:w-3/4">
              <div className="">
                  <h1 className="text-background text-2xl md:text-3xl font-bold">About Matthew Kuria</h1>
                  <p className="text-background text-md md:text-lg">I am a prolific <span className='text-yellow-500 font-semibold'>frontend developer.</span></p>
                  <p className="text-background text-md">I have a strong foundation in HTML, CSS, and JavaScript.
                    I have experience working with various frameworks and libraries, including React-Next.js, Tailwind CSS and TypeScript.
                    I am always eager to learn new technologies and improve my skills.
                    I am a problem solver at heart and enjoy tackling challenges head-on.
                    I believe that good communication and collaboration are key to successful projects,
                    and I strive to maintain open lines of communication with my clients and team members.
                    I am dedicated to delivering high-quality work on time and within budget.
                    I am always looking for new opportunities to grow and expand my skill set.
                    I am excited to take on new challenges and help bring your ideas to life.
                    If you are looking for a web developer who is passionate about creating beautiful and functional websites,
                    let us connect and see how we can work together!
                      </p>
              </div>
              <div className="flex flex-col  md:flex-row md:items-center md:justify-center my-5 w-full md:w-1/2 ">
                 <div className="w-1/2 my-5 md:mb-0">
                   <GetInTouchButton />
                 </div>
                  <Socials />
              </div>
        </div>
          
    </div>
  )
}

export default MyStory
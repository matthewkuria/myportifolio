import React from 'react'
import Image from 'next/image'
import mattImage from "../../public/passport_mk.png"

const MyStory = () => {
  return (
    <div id='about-mk' className="flex flex-col justify-center items-center md:flex-row w-full md:h-[350px] bg-secondary p-4 md:p-8 my-5">
        <div className="md:mx-5">
              <Image src={mattImage} width={200} height={300}  alt='Matthew Kuria'
               className='rounded-full md:rounded-none h-[200px] w-auto md:h-[300px] bg-white shadow shadow-gray-300 object-cover'
               priority
              />
        </div>
          <div className="flex flex-col w-full md:w-3/4">
              <div className="">
                  <h1 className="text-background text-2xl md:text-3xl font-bold my-5">About Matthew Kuria</h1>
                  <p className="text-background text-md md:text-lg">I am a prolific <span className='text-yellow-500 font-semibold'>full stack developer.</span></p>
          <p className="text-background text-md">I am  a passionate full-stack developer crafting seamless, user-focused web applications.
            With expertise in Next.js, Tailwind CSS, and TypeScript for dynamic and responsive frontends,
            I build intuitive interfaces that prioritize performance and design. On the backend, I leverage
            Django, Django REST Framework, and PostgreSQL to create robust APIs and scalable databases.
            My goal is to blend creativity and technical precision to deliver solutions that are both
            functional and delightful. Let us build something amazing together!
          </p>
        </div>
              
      </div>
    </div>
  )
}

export default MyStory
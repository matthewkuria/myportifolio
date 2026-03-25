import React from 'react'
import Image from 'next/image'
import mattImage from "../../public/passport_mk.png"

const MyStory = () => {
  return (
    <div
      id='about-mk'
      className="flex flex-col justify-center items-center md:flex-row w-full md:h-[350px] bg-secondary p-4 md:p-8 my-5"
    >
      <div className="md:mx-5">
        <Image
          src={mattImage}
          width={200}
          height={300}
          alt='Matthew Kuria'
          className='rounded-full md:rounded-none h-[200px] w-auto md:h-[300px] bg-white shadow shadow-gray-300 object-cover'
          priority
        />
      </div>

      <div className="flex flex-col w-full md:w-3/4">
        <div>
          <h1 className="text-foreground text-2xl md:text-3xl font-bold my-5">
            About Matthew Kuria
          </h1>

          <p className="">
            I am Matthew Kuria, founder of Brandriko Digital Solutions—a Nakuru-based agency specializing in hospitality digital solutions.
            I combine full-stack development (Next.js, Django, PostgreSQL) with graphic design (Photoshop, Illustrator) to deliver complete digital experiences. My recent work includes Thika Greens Golf Resort, a 5-star golf resort website with booking integration.
            My mission: Help Kenyan hospitality businesses grow through strategic branding, professional websites, and results-driven digital presence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyStory

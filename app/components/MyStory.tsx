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
          className='rounded-full md:rounded-none h-[200px] w-auto md:h-[300px] bg-white  object-cover'
          priority
        />
      </div>

      <div className="flex flex-col w-full md:w-3/4">
        <div>
          <h1 className="text-foreground text-2xl md:text-3xl font-bold my-5">
            About Matthew Kuria
          </h1>

          <p className="">
            I’m Matthew Kuria, founder of Brandriko Digital Solutions — a Kenyan-based agency focused on helping businesses solve real digital problems.
            I combine full-stack development using Next.js, Django, and PostgreSQL with professional graphic design to help businesses build strong, modern, and trustworthy digital presence.
            My focus is not just creating websites or graphics — it’s helping businesses attract customers, build credibility, and grow online through strategic branding and results-driven digital solutions.
            At Brandriko, we help businesses move from simply existing online to standing out with purpose.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyStory

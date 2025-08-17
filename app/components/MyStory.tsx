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
          <h1 className="text-background text-2xl md:text-3xl font-bold my-5">
            About Matthew Kuria
          </h1>

          <p className="text-background text-md md:text-lg">
            I am a prolific{' '}
            <span className='text-yellow-500 font-semibold'>full-stack developer</span>.
          </p>

          <p className="text-background text-md mt-2">
            I craft seamless, user-focused web applications that combine
            <span className="font-semibold text-yellow-500"> creativity</span> and 
            <span className="font-semibold text-yellow-500"> technical precision</span>.
            On the frontend, I specialize in <strong>Next.js, Tailwind CSS, and TypeScript</strong>,
            delivering responsive and high-performance interfaces. On the backend, I build scalable
            and secure systems using <strong>Django, DRF, and PostgreSQL</strong>.
          </p>

          <p className="text-background text-md mt-2">
            Beyond code, I bring a strong background in <strong>SEO</strong> and
            <strong> graphics design</strong> (Adobe Photoshop & Illustrator) — ensuring your
            project not only functions flawlessly but also looks stunning and ranks higher
            in search engines.
          </p>

          <p className="text-background text-md mt-2">
            My mission is to deliver solutions that are <em>functional, visually striking, 
            and optimized for growth</em>. Let’s build something amazing together!
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyStory

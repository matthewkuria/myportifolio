import Link from 'next/link'
import React from 'react'

const GetInTouchButton = () => {
  return (
    <div className="">
      <Link href="#get-in-touch" className="bg-secondary px-6 py-3 rounded-md text-background hover:text-secondary hover:outline-secondary hover:bg-background hover:outline-2  outline-1
          outline-background transition duration-700 ease-out">
        Get in Touch</Link>
    </div>
  )
}

export default GetInTouchButton
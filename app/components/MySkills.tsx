import React from 'react'

const MySkills = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-gray-800 text-3xl md:text-4xl font-extrabold mb-6 text-left md:text-center ml-10 md:ml-0">My Skills</h1>
        <div className="flex flex-col md:flex-row justify-center items-center px-20 gap-20 ">
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left md:ml-48">
              <h4 className="text-xl font-semibold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">Frontend</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Wordpress</li>
                <li>SEO</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left md:ml-32">
              <h4 className="text-xl font-semibold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">Backend</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Django</li>
                <li>Django REST Framework</li>
                <li>PostgreSQL</li>
                <li>Node.js</li>
                <li>Firebase</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default MySkills
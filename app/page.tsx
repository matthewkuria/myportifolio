import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">
          Explore my projects, skills, and achievements.
        </p>
        <Image
          src="/matt.jpg"
          alt="Profile Picture of Matthew Kuria"
          width={150}
          height={150}
          className="rounded-full mt-6"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2 text-center">
          I am a passionate developer with experience in building web
          applications. I love exploring new technologies and creating
          innovative solutions. My goal is to continuously learn and grow in my
          field while contributing to exciting projects.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Projects</h2>
        <p className="mt-2 text-center">
          Here are some of the projects I've worked on:
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li>
            <strong>Project 1:</strong> A web application that allows users to
            manage their tasks efficiently.
          </li>
          <li>
            <strong>Project 2:</strong> A responsive portfolio website built with
            Next.js and Tailwind CSS.
          </li>
          <li>
            <strong>Project 3:</strong> An e-commerce platform with a user-friendly
            interface and secure payment integration.
          </li>
          <li>    
            <strong>Project 4:</strong> A blog platform where users can share
            their thoughts and ideas.
          </li>
          <li>
            <strong>Project 5:</strong> A social media application that connects
            users with similar interests. 
          </li>
          <li>
            <strong>Project 6:</strong> A weather application that provides real-time
            weather updates and forecasts.
          </li>
          
        </ul>
      </div>  
    </main>
  );
}

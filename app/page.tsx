import Link from "next/link";

export default function Home() { 
  
  return (
    <main className="intro text-white bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col md:flex md:justify-center md:items-center p-5 min-h-[60vh] md:min-h-[100vh]">
      <div className="text-left">
        <h1 className="font-semibold text-4xl">Welcome to my portfolio</h1>
        <p className="my-2">I am a Software Developer who is passionate about building web applications that are user-friendly and accessible.</p>
        <Link href="/about" className="text-yellow-500 hover:text-white">Read More...</Link>
        <h2 className="font-semibold text-3xl">My Skills</h2>
      </div>
           
    </main>
  );
}

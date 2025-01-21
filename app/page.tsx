import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() { 
  
  return (
    <main className=" intro text-white bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col md:flex md:justify-center md:items-center p-5">
      <div className="">
        <h4 className="font-semibold text-4xl">Welcome to my portfolio</h4>
        <p className="my-2">I am a Software Developer who has a passion
          for building web applications that are user-friendly and accessible.
        </p>
        <Link href="/about" className="text-yellow-500 hover:text-white">Read More...</Link>
      </div>
           
    </main>
  );
}

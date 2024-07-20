import Image from "next/image";
import SideBar from "./ui/home/sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col max-w-md  h-screen p-4 ">
      <div className="intro">
        <h4 className="font-semibold text-2xl">Hey! There</h4>
        <p className="my-2">I am Full Stack Developer who started as a graphics Designer then as
          an IT specialist in a certain institution where I built my first website for that organisation.While still at
          that position I crafted my way to upskill the Front End development technologies and I
          got an internship where together with front end team we built great solutions.
        </p>
        <Link href="/about" className="text-sky-500 hover:text-white">Read More...</Link>
      </div>
      
      
    </main>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() { 
  
    return (
        <section id="projects" className="flex flex-col items-center justify-center">
        <p className="my-10 font-bold text-2xl">Projects</p>
        <div  className="cards-container overflow-y-scroll p-2">
           <Card className="mt-4 hover:border-r-4">
          <CardHeader>
            <CardTitle className="text-yellow-500">Space Tourism Website</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="image-div p-4">
              <Image
                src="/space-tourism.jpg"
                width={600}
                height={500}
                alt="The space tourism website image"
                className="project-image"
              />
            </div>
            <div className="content-div">
                <p>This is a multi-page website that allows users to explore the space.
                  The website has a home page which a nice feeling of space. Other pages include:-
                  <ol>
                    <li>Destination <span className="text-yellow-600 text-sm">Moon, Mars, Europa & Titan</span></li>
                    <li>Crew</li>
                    <li>Technology</li>
                  </ol>
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
              <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                <p className="text-black font-bold">Skills:</p>
                <p>Django</p>
                <p>Bootstrap</p>
                <p>PostgreSQL</p>
              </div>
              <div className="">
                <Link href="https://space-tourism-website-matt.vercel.app/"
                  className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600">
                  Visit site
                </Link>
              </div>
          </CardFooter>
        </Card>
        <Link href="https://mentorlst.com/">
           <Card className="mt-4 hover:border-r-8">
          <CardHeader>
            <CardTitle className="text-yellow-500">Mentorlst platform</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="image-div p-4">
              <Image
                src="/mentorlst.png"
                width={500}
                height={500}
                alt="The mentorlst platform image"
                className="project-image"
              />
            </div>
            <div className="content-div">
              <p>Mentorlst is platform that brings together mentors and mentees.
                The platform allows users to  sign up,find mentor and connect
                with professionals in your field.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="">Skills:</p>
            <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                <p>ReactJS</p>
                <p>Typescript</p>
                <p>Tailwind CSS</p>
              </div>
          </CardFooter>
        </Card>
        </Link>
      <Link href="https://hodsmart.vercel.app/">
        <Card className="mt-4 hover:border-r-8">
          <CardHeader>
            <CardTitle className="text-yellow-500">Hodsmart dashboard app</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="image-div p-4">
              <Image
                src="/hodsmart.png"
                width={500}
                height={500}
                alt="The hodsmart platform image"
              />
            </div>
            <div className="content-div">
              <p>This is a dashboard app that allows Head of Subject teachers to login,
                add,update or delete subjects & teachers in their department.After adding the teachers,
                the HOD can allocate lessons paperlessly.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="">Skills:</p>
            <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                <p>NextJS</p>
                <p>Typescript</p>
                <p>Tailwind CSS</p>
                <p>Google Firebase</p>
                <p>ShadcnUI</p>
              </div>
          </CardFooter>
          </Card>
          </Link>
        <Link href="https://artsoko.netlify.app/">
          <Card className="mt-4 hover:border-r-8">
          <CardHeader>
            <CardTitle className="text-yellow-500">ArtSoko Website</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="image-div p-4">
              <Image
                src="/artsoko.png"
                width={500}
                height={500}
                alt="The artsoko platform image"
              />
            </div>
            <div className="content-div">
              <p>ArtSoko is platform that brings together artists and art customers.
                The platform allows customers to  easily find art whereas the artists can
                share their and market their art.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="">Skills</p>
            <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                <p>ReactJS</p>
                <p>Tailwind CSS</p>
              </div>
          </CardFooter>
        </Card>
        </Link>
        </div>
        <Link className="hover:text-yellow-600 underline" href="">Watch a Reel</Link>
      </section>
    )
}
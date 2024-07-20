"use client"
import Image from "next/image"
export default function Page() {
    return (
        <main className="flex m-4 h-screen flex-col md:justify-around md:flex md:flex-row p-4 md:p-0 max-w-md">
            <div className="intro md:w-full">
                <h4 className="font-semibold text-2xl">Hey! I am Matthew</h4>
                <p className="my-2">I am Full Stack Developer who started as a graphics Designer then as
                an IT specialist in a certain where I built my first website for that organisation.While still at
                that position I crafted my way to upskill the Front End development technologies and I
                got an internship where together with front end team we built great solutions.
                </p>
                <p className="my-2">
                At the internship position, I got an opportunity to collaborate with both Front End and Back End
                team through Slack and Github for Code reviews and contributions using React, NextJs and Tailwind
                CSS.This enabled me to gain proven experience in software development.While still at the position
                I got interested in learning the back end development where I chose Python,Django and PostgresSQL.
                </p>
                <p className="my-2">
                When am coding & building on my computer I love travelling, bike riding or listening to music.
                </p>
            </div>
            <div className="image md:absolute md:right-10 md:top-12 flex justify-center md:flex-none md:mx-10 ">
                <Image
                    src="/matt.jpg"
                    alt="matthew kuria image for mobile"
                    width={500}
                    height={500}
                    className="border shadow-sm rounded-md shadow-white md:hidden block"
                />
                <Image
                    src="/matt.jpg"
                    alt="matthew kuria image for desktop"
                    width="250"
                    height="100"
                    className="shadow-sm rounded-md hidden md:block"
                />
            </div>
        </main>
    )
}
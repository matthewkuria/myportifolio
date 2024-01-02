import React from "react";

export default function NavBar (){
    return(
        <section className="NavBar container flex items-center justify-between bg-cyan-400 h-20 w-full">
           <div className="">
           <a href="/"><h3 className="font-bold text-3xl mx-3 text-blue-600">MK</h3></a>
           </div>
            <div className="hidden md:flex">
                <ul className="flex justify-between">
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase">Home</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase ">About</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase ">projects</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase ">Skills</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase ">Contact</a></li>
                </ul>
            </div>
            <button className="p-3 hidden md:block bg-white hover:bg-blue-400 rounded-full mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="16" viewBox="0 0 24 24">
                <path d="M7 12a5 5 0 1 1 5 5 5 5 0 0 1-5-5zm5-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm-1 15v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-2 0zm10-9h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM3 13h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm14.657-5.657a1 1 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707zM5.636 16.95l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0-1.414-1.414zm11.314 0a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 0zM5.636 7.05A1 1 0 0 0 7.05 5.636l-.707-.707a1 1 0 0 0-1.414 1.414z"/>
                </svg>
            </button>
            <img src="../icon-hamburger.svg" alt="" className=" block md:hidden p-6 hover:bg-black"/>
        </section>
    )
}
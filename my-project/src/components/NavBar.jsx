import React from "react";
import { useState } from "react";
import { Divide as Hamburger } from 'hamburger-react'

export default function NavBar (){
    const [isMenuOpen, setMenuOpen] = useState(false)
    return(
        <section className="NavBar container flex items-center justify-between bg-blue-600 h-20 w-full">
           <div className="">
           <a href="/"><h3 className="font-bold text-3xl mx-3 text-white">MK</h3></a>
           </div>
            <div className="hidden md:flex text-white">
                <ul className="flex justify-between">
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase">Home</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase ">About</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase ">projects</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase ">Skills</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold uppercase ">Contact</a></li>
                </ul>
            </div>
            <button className="p-2  hidden md:block bg-white hover:bg-white hover:animate-ping border border-white rounded-xl mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="16" viewBox="0 0 24 24">
                <path d="M7 12a5 5 0 1 1 5 5 5 5 0 0 1-5-5zm5-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm-1 15v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-2 0zm10-9h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM3 13h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm14.657-5.657a1 1 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707zM5.636 16.95l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0-1.414-1.414zm11.314 0a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 0zM5.636 7.05A1 1 0 0 0 7.05 5.636l-.707-.707a1 1 0 0 0-1.414 1.414z"/>
                </svg>
            </button>
            <div className="hambuger md:hidden">
            <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} color="white" easing="ease-in"
            onToggle={toggled => {
                if (toggled) {
                   // open a menu
                   
                 
                } else {
                   // close a menu
                }
            }}
            />
            </div>
           {isMenuOpen &&
            (
                <div className="HAMBURGER-MENU absolute md:hidden z-40 bg-black text-white top-20 bottom-0 right-1 left-1">
                <ul className="">
                        <li className="my-5"><a href="" className="hover:font-semibold uppercase">Home</a></li>
                        <li className="my-5"><a href="" className="hover:font-semibold uppercase ">About</a></li>
                        <li className="my-5"><a href="" className="hover:font-semibold uppercase ">projects</a></li>
                        <li className="my-5"><a href="" className="hover:font-semibold uppercase ">Skills</a></li>
                        <li className="my-5"><a href="" className="hover:font-semibold uppercase ">Contact</a></li>
                    </ul>
                </div>
            )
           }
        </section>
    )
}
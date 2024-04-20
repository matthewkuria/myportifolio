import React from "react";
import { useState } from "react";
import { Divide as Hamburger } from 'hamburger-react'


export default function NavBar (props){
    const [isMenuOpen, setMenuOpen] = useState(false)
    return(
        <header className="NavBar container text-blue-700 flex items-center justify-between h-20 w-full">
           <div className="">
           <a href="/"><h3 className="font-bold text-3xl mx-3 ">MK</h3></a>
           </div>
           <div className="" onClick={props.toggleDarkMode}>

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
         
            <div className="hambuger md:hidden">
            <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} color="blue" easing="ease-in"           
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
        </header>
    )
}
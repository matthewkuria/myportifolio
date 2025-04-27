"use client";
import Navlinks from "./Navlinks";
import Navlogo from "./Navlogo";
import HamburgerMenu from "./HamburgerMenu";
import React from "react";
import GetInTouchButton from "./GetInTouchButton";

export default function Header() {
  
    return (
        <>
            <nav className=" relative py-2 px-4 flex items-center justify-between shadow-md ">
                <Navlogo />
                <div className="flex items-center justify-between w-3/4 md:w-1/2 pr-3.5">
                    <div className="mx-5">
                        <Navlinks /> 
                    </div>  
                    <div className="hidden md:block">
                        <GetInTouchButton />
                    </div>
                </div> 
                <div className="block md:hidden">
                    <HamburgerMenu  />
                </div>
            </nav>
        </>
    )
}



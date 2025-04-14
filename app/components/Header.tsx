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
                <Navlinks />   
                <div className="hidden md:block">
                    <GetInTouchButton />
                </div>
                <HamburgerMenu  />
            </nav>
        </>
    )
}



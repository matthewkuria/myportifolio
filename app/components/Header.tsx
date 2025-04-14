"use client";
import Socials from "./Socials";
import Navlinks from "./Navlinks";
import Navlogo from "./Navlogo";
import HamburgerMenu from "./HamburgerMenu";
import React from "react";

export default function Header() {
  
    return (
        <>
            <Socials />
            <nav className=" relative py-2 px-4 flex items-center justify-between shadow-md ">
                <Navlogo />
                <Navlinks />                
                <HamburgerMenu  />
            </nav>
        </>
    )
}



import React from "react";

export default function NavBar (){
    return(
        <section className="NavBar container flex items-center justify-between bg-gray-300 h-20 w-full">
            <h3 className="font-bold mx-3 text-blue-600">Matthew Kuria</h3>
            <div className="hidden md:flex">
                <ul className="flex justify-between">
                    <li className="mx-5"><a href="" className="hover:font-semibold">Home</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold">About</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold">portifolio</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold">Skills</a></li>
                    <li className="mx-5"><a href="" className="hover:font-semibold">Contact</a></li>
                </ul>
            </div>
            <img src="../icon-hamburger.svg" alt="" className=" block md:hidden p-6 hover:bg-black"/>
        </section>
    )
}
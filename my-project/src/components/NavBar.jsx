import React from "react";

export default function NavBar (){
    return(
        <section className="NavBar flex justify-between">
            <h3 className="font-bold">Matthew Kuria</h3>
            <div className="hidden md:flex">
                <ul className="flex justify-between">
                    <li className="mx-5"><a href="">Home</a></li>
                    <li className="mx-5"><a href="">About</a></li>
                    <li className="mx-5"><a href="">portifolio</a></li>
                    <li className="mx-5"><a href="">Skills</a></li>
                    <li className="mx-5"><a href="">Contact</a></li>
                </ul>
            </div>
        </section>
    )
}
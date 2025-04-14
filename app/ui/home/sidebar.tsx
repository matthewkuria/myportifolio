import Link from "next/link";
import NavLinks from "./nav-links";
import { bebas_neue, redHatText, modak } from "@/app/fonts/fonts";

export default function SideBar() {
    return (
        <main className=" flex h-full flex-col px-2 py-4 md:px-2">            
            <div className="max-w-96 md:max-w-sm">
                <h1 className="text-4xl mt-10 font-bold">Matthew Kuria</h1>
                <p className="my-2 text-2xl text-yellow-400 font-bold">Full Stack Developer</p>
                <p className={`${redHatText.className} my-4`}>
                    I have a vast experience building pixel-perfect and responsive User Interfaces,
                    coupled with back end hands-on craftmanship.
                </p>
            </div>
            
            <div className=" NAV_LINKS flex md:flex-col">
                 <NavLinks />
            </div>           
        </main>
        
    )
}
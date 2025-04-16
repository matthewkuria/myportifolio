import Link from "next/link";
import {  open_sans } from "../fonts/fonts";
import MkLogo from "./MkLogo";
import Socials from "./Socials";

export default function Footer() {
    return (
        <footer className={`${open_sans.className} footer text-background `} id="get-in-touch">
            <div className="absolute -top-10 flex items-center justify-center w-full z-40">
                <MkLogo />
            </div>
            <div className="footer-content flex flex-col md:flex-row justify-between md:justify-around items-baseline p-4 md:p-8">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left mt-10">
                    <h4 className={` footer-title`}>Quick Links</h4>
                    <ul className="list-none">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#about-mk">About</Link></li>
                        <li><Link href="#projects">Projects</Link></li>
                        <li><Link href="#">Resume</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-start justify-center text-left">
                    <h5 className="footer-title">Contact Me at:</h5>
                    <ul>
                        <li>
                            <Link href="mailto:mathewkwachira@gmail.com">
                                 mathewkwachira@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link href="tel:0718421871">
                                0718421871
                            </Link>
                        </li>
                    </ul>                    
                </div>
                <div className="w-full md:w-1/4 mb-4">
                    <h6 className="footer-title">Follow Me On:</h6>
                    <Socials />
                </div>
            </div>
            <div className="copyright text-xs font-semibold md:font-normal flex justify-center bg-black py-2">
                <p className="tracking-wide">&copy; copyright-{new Date().getFullYear()} || MK || All rights reserved</p>
            </div>
        </footer>
    )
}
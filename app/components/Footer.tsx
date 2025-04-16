import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer text-white text-base" id="get-in-touch">
            <div className="footer-content flex flex-col items-center justify-center py-10">
                
            </div>
            
            <div className="copyright text-xs font-semibold md:font-normal flex justify-center bg-black py-2">
                <p className="tracking-wide">&copy; copyright-{new Date().getFullYear()} || MK || All rights reserved</p>
            </div>
        </footer>
    )
}
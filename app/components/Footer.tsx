import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer bg-slate-600 text-white text-base ">
            
            <div className="copyright text-xs font-semibold flex justify-center bg-black py-2">
                <p className="tracking-wide">&copy; copyright-{new Date().getFullYear()} || MK || All rights reserved</p>
            </div>
        </footer>
    )
}
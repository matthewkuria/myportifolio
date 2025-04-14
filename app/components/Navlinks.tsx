import Link from "next/link";

export default function Navlinks() {
    return (
        <ul className="md:flex justify-between  text-secondary  gap-5 hidden">
            <li className="hover:text-yellow-400 py-6 active"><Link href="/">Home</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/about-us">About Me</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/projects">Projects</Link></li>
        </ul>
    )
}
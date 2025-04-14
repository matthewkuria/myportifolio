import Image from "next/image";
import Link from "next/link"
import mkLogo from "../../public/mkLogo.png"
export default function Navlogo() {
    return (
        <div className="">
            <Link href="/" className="flex items-center gap-1">
                <Image src={mkLogo} alt="Matthew Kuria logo" width={50} height={50} className="w-16 h-16" />
                <p className="font-bold text-secondary">Matthew Kuria</p>
            </Link>
        </div>
    )
}
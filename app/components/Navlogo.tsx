import Image from "next/image";
import Link from "next/link"
import mkLogo from "../../public/mkLogo.png"
import { bebas_neue } from "../fonts/fonts";
export default function Navlogo() {
    return (
        <div className="">
            <Link href="/" className="flex items-center gap-1">
                <Image src={mkLogo} alt="Mathew Kuria logo" width={50} height={50} className="w-16 h-16" />
                <p className={`${bebas_neue.className} font-bold text-foreground`}>Mathew Kuria</p>
            </Link>
        </div>
    )
}
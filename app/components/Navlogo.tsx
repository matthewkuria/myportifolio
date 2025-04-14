import Image from "next/image";
import Link from "next/link"
import mkLogo from "../../public/mkLogo.png"
export default function Navlogo() {
    return (
            <div className="">
               <Link href="/"> <Image src={mkLogo} alt="Matthew Kuria logo" width={50} height={50} className="w-16 h-16"/></Link>
            </div>
    )
}
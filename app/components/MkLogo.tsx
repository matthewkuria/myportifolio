import React from 'react'
import Image from "next/image";
import mkLogo from "../../public/mkLogo.png"

const MkLogo = () => {
  return (
    <div className="flex justify-center items-center my-4">
          <Image src={mkLogo} height={100} width={100} alt="Matthew Kuria Logo"
            className="w-20 h-20 rounded-full bg-background border-[1px] border-secondary"
          />
    </div>
  )
}

export default MkLogo
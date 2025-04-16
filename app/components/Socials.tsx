import { SocialIcon } from "react-social-icons";

export default function Socials() {
    return (
        <div className="socials h-6 p-2 items-center justify-between text-white w-full ">
        <div className="flex gap-4 md:gap-10 items-center justify-around md:justify-between  w-full">
          <SocialIcon url="https://linkedin.com/" href="https://linkedin.com/in/matthew-kuria" style={{ height: 25, width: 25 }}/>
            <SocialIcon url="https://github.com" href="https://github.com/matthewkuria" style={{ height: 25, width: 25 }}/>            
            <SocialIcon url="https://twitter.com" href="https://twitter.com/matthew_kuria" style={{ height: 25, width: 25 }}/>
          </div>
          
        </div>
    )
}
import { SocialIcon } from "react-social-icons";

export default function Socials() {
    return (
        <div className="socials bg-blue-900 h-6 p-2 items-center justify-between text-white w-full hidden md:flex">
          <div className="flex gap-3">
          <p className="">Follow Me</p>
            <SocialIcon url="https://facebook.com" href="https://facebook.com/" style={{ height: 20, width: 20 }}/>
            <SocialIcon url="https://youtube.com/" style={{ height: 20, width: 20 }}/>
            <SocialIcon url="https://twitter.com" style={{ height: 20, width: 20 }}/>
            <SocialIcon url="https://LinkedIn.com" style={{ height: 20, width: 20 }}/>
          </div>
          
        </div>
    )
}
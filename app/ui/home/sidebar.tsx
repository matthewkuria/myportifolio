import NavLinks from "./nav-links";

export default function SideBar() {
    return (
        <main className="text-white flex h-full flex-col px-2 py-4 md:px-2">            
            <div className="max-w-96">
                <h1 className="text-4xl mt-10 font-bold">Matthew Kuria</h1>
                <p className="my-2 text-2xl text-sky-500 font-bold">Full Stack Engineer</p>
                <p className="text-sm my-3">I have a vast experience building pixel-perfect and responsive User Interfaces,
                    coupled with back end hands-on craftmanship.
                </p>
            </div>
            <div className=" NAV_LINKS flex md:flex-col">
                 <NavLinks />
            </div>           
        </main>
        
    )
}
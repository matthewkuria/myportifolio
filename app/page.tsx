import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Link from "next/link";

export default function Home() { 
  
  return (
    <main className="intro text-white bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col  md:flex md:justify-start md:items-center p-5 min-h-[60vh] md:min-h-[100vh]">
      <div className="text-left">
        <h1 className="font-semibold text-2xl md:text-4xl">Welcome to my portfolio</h1>
        <p className="my-2">I am a Software Developer who is passionate about building web applications that are user-friendly and accessible.</p>
        <Link href="/about" className="text-yellow-500 hover:text-white">Read More...</Link>
        <h2 className="font-semibold text-2xl my-4">My Skills</h2>
        {/* Carousel of skills */}
        <aside className="flex items-center justify-center  ">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-sm md:max-w-md lg:max-w-md"
          >
            <CarouselContent>
              {["Next.js", "TailwindCSS", "React", "TypeScript", "JavaScript"].map((skill, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                <div className="flex flex-col items-center">
                  {skill === "Next.js" && (
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.111.793-.26.793-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.62-5.478 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                  {skill === "TailwindCSS" && (
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.002 6.001c-2.667 0-4.334 1.333-5 4 1-1.333 2-2 3-2 1.333 0 2.333.667 3 2-.667-2.667-2.334-4-5-4zm5 0c-2.667 0-4.334 1.333-5 4 1-1.333 2-2 3-2 1.333 0 2.333.667 3 2-.667-2.667-2.334-4-5-4zm-10 6c-2.667 0-4.334 1.333-5 4 1-1.333 2-2 3-2 1.333 0 2.333.667 3 2-.667-2.667-2.334-4-5-4zm5 0c-2.667 0-4.334 1.333-5 4 1-1.333 2-2 3-2 1.333 0 2.333.667 3 2-.667-2.667-2.334-4-5-4z" />
                    </svg>
                  )}
                  {skill === "React" && (
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 18c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0-9c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                    </svg>
                  )}
                  {skill === "TypeScript" && (
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.111.793-.26.793-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.62-5.478 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                  {skill === "JavaScript" && (
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.111.793-.26.793-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.62-5.478 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                  <span className="text-xl font-semibold mt-2">{skill}</span>
                </div>
                    </CardContent>
                </Card>
              </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </aside>
      </div>
      {/* Social Media links */}
      <div className=" flex flex-row Socio-icons animate-bounce md:animate-none  md:flex md:flex-row  md:bottom-10 mt-6 md:mt-44 pt-10  md:fixed  ">
                <div className=" hover:animate-pulse">
                <Link href="https://twitter.com/matthew_kuria" className=" "><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#ffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></Link>
                </div>
               <div className="  mx-4 hover:animate-bounce">
               <Link href="https://linkedin.com/in/matthew-kuria" className=""><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 448 512"><path fill="#ffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></Link>
               </div>
                <div className=" mx-4 hover:animate-spin">
                <Link href="https://www.github.com/matthewkuria" className=""><svg xmlns="http://www.w3.org/2000/svg" height="32" width="31" viewBox="0 0 496 512"><path fill="#ffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></Link>
                </div>
               <div className=" mx-4 hover:animate-ping">
               <Link href="mailto:mathewkwachira@gmail.com" className=""><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#ffff" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></Link>
            </div>
          </div>
    </main>
  );
}

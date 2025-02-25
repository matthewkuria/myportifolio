import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Link from "next/link";

export default function Home() { 
  
  return (
    <main className="intro text-white bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col  md:flex md:justify-start md:items-center p-5 min-h-[60vh] md:min-h-[100vh]">
      <div className="text-left">
        <h1 className="font-semibold text-4xl">Welcome to my portfolio</h1>
        <p className="my-2">I am a Software Developer who is passionate about building web applications that are user-friendly and accessible.</p>
        <Link href="/about" className="text-yellow-500 hover:text-white">Read More...</Link>
        <h2 className="font-semibold text-2xl my-4">My Skills</h2>
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
           
    </main>
  );
}

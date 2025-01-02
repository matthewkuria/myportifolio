import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {  
  return (
    <main className="flex flex-col max-w-sm  h-screen pl-5 ">
      <div className="intro">
        <h4 className="font-semibold text-2xl">Hey! There</h4>
        <p className="my-2">I am Software Developer who started as a graphics Designer then as
          an IT specialist.While still at
          that position I crafted my way to upskill the Front End development technologies and I
          got an internship where together with front end team we built great solutions.I later
          learnt Backend development technologies
          and I have been building great solutions ever since.
        </p>
        <Link href="/about" className="text-yellow-500 hover:text-white">Read More...</Link>
      </div>
      <section className="w-full" id="experience">
        <h6 className="my-10 font-bold text-2xl">Experience</h6>
        <Link href="https://mentorlst.com/">
            <Card className="w-full border-dashed hover:shadow-white my-4">
              <CardHeader>
                <CardTitle>Frontend Developer intern</CardTitle>
                <CardDescription className="text-yellow-500">Dec 2023 - July 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Build,style and maintain different components of Mentorlst Platform.Working
                  closely with UI/UX team, front and backend developers to ensure the web app has an aesthetically
                  pleasing appearance and also advocating for web accessibility.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col">
              <p className="font-semibold">Tech Stack</p>
                <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                  <p>ReactJS / NextJS</p>
                  <p>Tailwind CSS</p>
                  <p>TypeScript</p>
                </div>
              </CardFooter>
            </Card>
        </Link>
        <Card className="w-full border-dashed hover:shadow-white">
            <CardHeader>
              <CardTitle>ICT Support Specialist</CardTitle>
              <CardDescription className="text-yellow-500">Feb 2022 - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
            <p>Design, build and maintain the school website.
              Configuring hardware and Software,setting up peripherals such as printers,projectors,
              routers and providing support to computer network users.
              Providing training to the learners and staff on the technological advances.
              Draft and implement the ICT policy to ensure smooth flow of acquiring,returning and using
              ICT resources.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col">
            <p className="font-semibold">Technologies used</p>
              <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Windows OS</p>
                <p>Microsoft 365</p>
              </div>
            </CardFooter>
          </Card>
      <Link href="#" className="my-5 font-bold underline underline-offset-2 hover:text-yellow-500">View Full Resume</Link>
      </section>
      <section id="projects" className="">
        <p className="my-10 font-bold text-2xl">Projects</p>
        <Link href="https://github.com/matthewkuria/Eshop">
           <Card className="mt-4 hover:border-r-8">
          <CardHeader>
            <CardTitle className="text-yellow-500">Eshop E-commerce</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="image-div p-4">
              <Image
                src="/eshop.png"
                width={200}
                height={200}
                alt="The mentorlst platform image"
              />
            </div>
            <div className="content-div">
                <p>Eshop is a Django web app that allows admin to add, update and remove
                  products,categories and prices through the admin panel.Users can sign up and become 
                  customers when they login.Customers can add or remove products to cart and finally checkout
                  the cart items.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="">Skills:</p>
            <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                <p>Django</p>
                <p>Bootstrap</p>
                <p>PostgreSQL</p>
              </div>
          </CardFooter>
        </Card>
        </Link>
        <Link href="https://mentorlst.com/">
           <Card className="mt-4 hover:border-r-8">
          <CardHeader>
            <CardTitle className="text-yellow-500">Mentorlst platform</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="image-div p-4">
              <Image
                src="/mentorlst.png"
                width={200}
                height={200}
                alt="The mentorlst platform image"
              />
            </div>
            <div className="content-div">
              <p>Mentorlst is platform that brings together mentors and mentees.
                The platform allows users to  sign up,find mentor and connect
                with professionals in your field.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="">Skills:</p>
            <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                <p>ReactJS</p>
                <p>Typescript</p>
                <p>Tailwind CSS</p>
              </div>
          </CardFooter>
        </Card>
        </Link>
      <Link href="https://hodsmart.vercel.app/">
        <Card className="mt-4 hover:border-r-8">
          <CardHeader>
            <CardTitle className="text-yellow-500">Hodsmart dashboard app</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="image-div p-4">
              <Image
                src="/hodsmart.png"
                width={200}
                height={200}
                alt="The hodsmart platform image"
              />
            </div>
            <div className="content-div">
              <p>This is a dashboard app that allows Head of Subject teachers to login,
                add,update or delete subjects & teachers in their department.After adding the teachers,
                the HOD can allocate lessons paperlessly.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="">Skills:</p>
            <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                <p>NextJS</p>
                <p>Typescript</p>
                <p>Tailwind CSS</p>
                <p>Google Firebase</p>
                <p>ShadcnUI</p>
              </div>
          </CardFooter>
          </Card>
          </Link>
        <Link href="https://artsoko.netlify.app/">
          <Card className="mt-4 hover:border-r-8">
          <CardHeader>
            <CardTitle className="text-yellow-500">ArtSoko Website</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="image-div p-4">
              <Image
                src="/artsoko.png"
                width={200}
                height={200}
                alt="The artsoko platform image"
              />
            </div>
            <div className="content-div">
              <p>ArtSoko is platform that brings together artists and art customers.
                The platform allows customers to  easily find art whereas the artists can
                share their and market their art.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="">Skills</p>
            <div className="flex gap-1 text-xs font-semibold text-yellow-500 rounded-lg p-4">
                <p>ReactJS</p>
                <p>Tailwind CSS</p>
              </div>
          </CardFooter>
        </Card>
        </Link>
        <Link className="hover:text-yellow-600 underline" href="/projects">View More Projects</Link>
      </section>
      
      
    </main>
  );
}

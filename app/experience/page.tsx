import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
export default function Page() {
    return (
    <main className="">
       <section className="w-full">
        <h6 className="my-10 font-bold text-2xl">Experience</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          <Link href="https://mentorlst.com/">
            <Card className="w-full border-dashed hover:shadow-white my-4 md:max-h-[380px]">
              <CardHeader>
                <CardTitle>Frontend Developer intern</CardTitle>
                <CardDescription className="text-yellow-500">Dec 2023 - July 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Build, style and maintain different components of Mentorlst Platform. Working
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
        <Card className="w-full border-dashed hover:shadow-white md:max-h-[360px]">
            <CardHeader>
              <CardTitle>ICT Support Specialist</CardTitle>
              <CardDescription className="text-yellow-500">Feb 2022 - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
            <p className="md:max-h-36 overflow-y-scroll">Design, build and maintain the school website.
              Configuring hardware and Software, setting up peripherals such as printers, projectors,
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
        </div>
      <Link href="#" className="my-5 font-bold underline underline-offset-2 hover:text-yellow-500">View Full Resume</Link>
      </section>
    </main>
    )
}
 import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import Link from "next/link"

const projects = [
    {
        project: "Talk Waves",
        live: "https://talkwaves.netlify.app/",
        github: "https://github.com/matthewkuria/talkwaves",
        description: "This a website that helps people overcome depression by sharing Podcasts and testimonials of people who overcame depression.",
        
    },
    {
        project: "Finance Logger",
        live: "https://fynancelogger.netlify.app/",
        github: "https://github.com/matthewkuria/finance-logger",
        description: "This a project that allows users to great either an invoice for a service offered or a payment receipt for those who are owed.",
    },
    {
        project: "Insure Landing page",
        live: "https://hotfix-insure.netlify.app/",
        github: "https://github.com/matthewkuria/z-Insure",
        description:"This is a landing page for an insurance company that is display the services offered."
    }
    
]
export default function Page() {
    return (
        <main className="mx-auto p-24">
            <Table>
                <TableCaption>A list of my projects.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Project</TableHead>
                    <TableHead>Live</TableHead>
                    <TableHead>Github</TableHead>
                    <TableHead className="text-right">Description</TableHead>
                    <TableHead className="text-right">Thumbnail</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project) => (
                    <TableRow key={project.project}>
                        <TableCell className="font-medium">{project.project}</TableCell>
                        <TableCell><Link className="underline hover:text-green-500" href={project.live}>link</Link></TableCell>
                        <TableCell><Link className="underline hover:text-blue-500" href={project.github}>link</Link></TableCell>
                        <TableCell className="text-xs text-right max-w-sm">{project.description}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>                        
            </Table>
        </main>
    )
}
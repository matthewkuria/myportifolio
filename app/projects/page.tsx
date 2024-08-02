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
        project: "INV002",
        live: "Pending",
        github: "$150.00",
        description: "PayPal",
    },
    {
        project: "INV003",
        live: "Unpaid",
        github: "$350.00",
        description: "Bank Transfer",
    },
    {
        project: "INV004",
        live: "Paid",
        github: "$450.00",
        description: "Credit Card",
    },
    {
        project: "INV005",
        live: "Paid",
        github: "$550.00",
        description: "PayPal",
    },
    {
        project: "INV006",
        live: "Pending",
        github: "$200.00",
        description: "Bank Transfer",
    },
    {
        project: "INV007",
        live: "Unpaid",
        github: "$300.00",
        description: "Credit Card",
    },
]
export default function Page() {
    return (
        <main className="mx-auto p-24">
            <Table>
                <TableCaption>A list of my projects.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Project</TableHead>
                    <TableHead>Live Link</TableHead>
                    <TableHead>Github</TableHead>
                    <TableHead className="text-right">Description</TableHead>
                    <TableHead className="text-right">Image Thumbnail</TableHead>
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
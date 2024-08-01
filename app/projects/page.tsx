 import {           Table,
                    TableBody,
                    TableCaption,
                    TableCell,
                    TableFooter,
                    TableHead,
                    TableHeader,
                    TableRow,
                    } from "@/components/ui/table"

                    const projects = [
                    {
                        project: "INV001",
                        live: "Paid",
                        github: "$250.00",
                        description: "Credit Card",
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
        <main className="">
            <Table>
                        <TableCaption>A list of my projects.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[100px]">Project</TableHead>
                            <TableHead>Live Link</TableHead>
                            <TableHead>Github</TableHead>
                            <TableHead className="text-right">Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.map((project) => (
                            <TableRow key={project.project}>
                                <TableCell className="font-medium">{project.project}</TableCell>
                                <TableCell>{project.live}</TableCell>
                                <TableCell>{project.description}</TableCell>
                                <TableCell className="text-right">{project.github}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>                        
                        </Table>                   

        </main>
    )
}
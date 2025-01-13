import Link from 'next/link';
export default function Page() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-baseline">
             <aside className="flex flex-col items-center justify-center p-4 bg-black">
                <h2 className="text-xl font-bold mb-4 text-white">Follow Me</h2>
                <ul className="space-y-2">
                <li>
                    <Link href="https://twitter.com/matthew_kuria" className="text-yellow-500 hover:underline">
                        Twitter
                    </Link>
                </li>
                <li>
                    <Link href="https://linkedin.com/in/matthew-kuria" className="text-yellow-500 hover:underline">
                        LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/matthewkuria" className="text-yellow-500 hover:underline">
                        GitHub
                    </Link>
                </li>
                </ul>
            </aside>
            <section className="shadow-md rounded-lg p-8 max-w-lg w-full bg-black">
                <h1 className="text-2xl font-bold mb-6 text-center">Contact Me</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-black text-white" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-black text-white" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-black text-white"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded-md shadow-sm hover:bg-yellow-600">Send Message</button>
                    </div>
                </form>
            </section>
           
        </main>
    );
}
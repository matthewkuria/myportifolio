import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer bg-slate-600 text-white text-base ">
            <div className="flex flex-col md:flex md:flex-row mx-auto md:justify-between p-6">
                <div className="contact flex flex-col w-full md:w-1/4">
                    <p className="footer-title">Contact Us</p>
                    <p>P.O. Box 9744 – 20100</p>
                    <p>Lanet, Nakuru, Kenya</p>
                    <p>Tel: +254 20 2079 806</p>
                    <p>Cell Phone: +254 718 109 636</p>
                    <p>E-mail:ncmi@ncmi-ke.org</p>
                </div>
                <div className="about-us flex flex-col w-full md:w-1/4">
                    <p className="footer-title">About Us</p>
                    <Link href="/">Home</Link>
                    <Link href="about-us">Our Founders</Link>                    
                    <Link href="https://maps.app.goo.gl/4wsg1azP58xCz4G8A">Directions</Link>
                    <Link href="contacts">Contact Us</Link>
                </div>
                <div className="ministries flex flex-col  w-full md:w-1/4">
                    <p className="footer-title">Our Ministries</p>
                    <Link href="/ncci">New Creation Church International</Link>
                    <Link href="/bible-school">Bible School</Link>
                    <Link href="/reed-of-hope">Reeds of Hope</Link>
                    <Link href="/sozotv">SozoTV</Link>
                </div>
                <div className="support flex flex-col  w-full md:w-1/4">
                    <p className="footer-title">Support</p>
                    <Link href="">Partner with Us</Link>
                    <Link href="/support">Donate</Link>
                </div>                
            </div>
            <div className="copyright text-xs font-semibold flex justify-center bg-black py-2">
                <p className="tracking-wide">&copy; copyright-{new Date().getFullYear()} || NCMI-Ke || All rights reserved</p>
            </div>
        </footer>
    )
}
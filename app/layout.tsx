import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./ui/home/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Kuria",
  description: "Developed and maintained by Matthew Kuria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <div className="flex flex-col md:flex md:flex-row">
          <div className="px-1 md:fixed">
            <SideBar />            
          </div>
          <div className="text-white flex justify-center mx-1 md:ml-[400px] md:mr-2 ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

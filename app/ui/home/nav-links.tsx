"use client";
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";

const links = [
  { name: 'Home', href: '/' },
  {name: 'About',href: '/about'},
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects'},
  {name: 'Contact', href: '/contact'}
];
export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
              {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[30px] grow items-center justify-center gap-2 rounded-md  p-1 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-500 text-white': pathname === link.href,
              }
            )

            }
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
        </>
    )
    
}
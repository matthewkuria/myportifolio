"use client";
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";
import {
  UserIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {name: 'About',href: '/about', icon:UserIcon},
  { name: 'Experience', href: '/#experience', icon:BriefcaseIcon },
  { name: 'Projects', href: '/#projects', icon:DocumentDuplicateIcon},
];
export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
        {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex  h-[30px] grow items-center justify-center gap-2 rounded-md  p-1 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-500 text-white ': pathname === link.href,
              }
            )

            }
          >
          <LinkIcon className="w-6" />
          <p className=" hidden md:block">{link.name}</p>
        </Link>
        );
        })}
         
      </>
    )
    
}
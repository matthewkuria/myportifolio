import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="">
       <div className="flex items-center justify-between h-16">          
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

      {/* Menu links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-gray-800 text-white absolute top-20  z-50 left-0 right-0`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link onClick={closeMenu} href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Home
          </Link>
          <Link onClick={closeMenu} href="/about-us" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            About Us
          </Link>
          <Link onClick={closeMenu} href="/ministries" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Ministries
          </Link>
          <Link onClick={closeMenu} href="/media" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Media
          </Link>
          <Link onClick={closeMenu} href="/events" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Events
          </Link>
          <Link onClick={closeMenu} href="/support" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Support or Partner
          </Link>
          <Link onClick={closeMenu} href="/contacts" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Contact Us
          </Link>
        </div>        
      </div>
    </div>
  );
}

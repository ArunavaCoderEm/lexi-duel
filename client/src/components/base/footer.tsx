import React from "react";
import Link from "next/link"; 

export default function Footer(): React.ReactNode {
  return (
    <footer className="bg-[#1B1B1B] mt-10 text-neutral-300 rounded-xl py-6">
      <div className="max-w-7xl mx-auhref px-4 flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} Godard
        </div>

        <div className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-[#FCFCF7] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#FCFCF7] transition">
            About
          </Link>
          <Link href="/feature" className="hover:text-[#FCFCF7] transition">
            Feature
          </Link>
          <Link href="/contact" className="hover:text-[#FCFCF7] transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

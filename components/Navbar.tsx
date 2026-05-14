"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const JOIN_URL =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSe1YtKjlsSxqwxzpsnwXoweV8rc0rw7awtlzAhK21ksGzd_Kw/viewform?usp=send_form";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Apps",     href: "#apps" },
  { label: "Team",     href: "#team" },
  { label: "Members",  href: "#members" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-karon-bg/95 backdrop-blur-sm border-b border-karon-border">
      <nav className="max-w-screen-xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group select-none shrink-0">
          <Image
            src="/karon-logo.png"
            alt="KARON"
            width={100}
            height={32}
            className="h-8 w-auto object-contain opacity-90 group-hover:opacity-60 transition-opacity duration-300"
            priority
          />
          <span className="hidden md:block w-px h-5 bg-karon-border" />
          <span className="hidden md:block font-sans text-karon-muted text-xs tracking-widest uppercase">
            KARON
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-sans text-karon-muted text-sm tracking-wide uppercase hover:text-karon-text transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 font-sans text-karon-text text-xs tracking-widest uppercase border border-karon-text px-4 py-2 rounded hover:bg-karon-text hover:text-karon-bg transition-all duration-300"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-karon-text transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-karon-text transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-karon-text transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>

      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-karon-border bg-karon-bg">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-sans text-karon-muted text-sm tracking-wide uppercase hover:text-karon-text transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-sans text-karon-text text-sm tracking-wide uppercase font-medium"
              >
                Join Us →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

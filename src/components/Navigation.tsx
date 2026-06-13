
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Syllabus", href: "#syllabus" },
    { name: "AI Tutor", href: "#ai-tutor" },
    { name: "Live Sessions", href: "#live" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-md border-b border-primary/20 text-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
            ॐ
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-headline font-extrabold text-lg tracking-tight">OMPATH MATH</span>
            <span className="text-[10px] text-gold uppercase font-semibold">Tution Classes</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white/80 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-saffron hover:bg-saffron/90 text-white rounded-full px-6 font-bold shadow-md">
            <Link href="#admission">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 w-full bg-primary border-b border-primary/20 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-semibold py-2 border-b border-white/10 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-saffron hover:bg-saffron/90 w-full rounded-full py-6 font-bold">
            <Link href="#admission" onClick={() => setIsOpen(false)}>Enroll Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}


"use client";

import Link from "next/link";
import { Youtube, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center font-bold text-lg">
                ॐ
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-headline font-extrabold text-xl">OMPATH MATH</span>
                <span className="text-[10px] text-gold uppercase font-semibold">Academy</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering the next generation of logical thinkers through specialized mathematics coaching for middle school students.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="#about" className="hover:text-white transition-colors">About Academy</Link></li>
              <li><Link href="#syllabus" className="hover:text-white transition-colors">Grade Syllabus</Link></li>
              <li><Link href="#ai-tutor" className="hover:text-white transition-colors">AI Tutor Tool</Link></li>
              <li><Link href="#live" className="hover:text-white transition-colors">Live Sessions</Link></li>
              <li><Link href="#admission" className="hover:text-white transition-colors">Online Admission</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-gold">Grade Focus</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>Class 5: Numbers & Logic</li>
              <li>Class 6: Intro to Algebra</li>
              <li>Class 7: Geometric Analytical</li>
              <li>Class 8: High School Prep</li>
              <li>Demo: 2 Free Sessions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-gold">Contact Support</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-saffron shrink-0" />
                <span>+91 79872 20105</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-saffron shrink-0" />
                <span>info@ompathmaths.in</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-saffron shrink-0" />
                <span>Online Learning Portal<br />Available Everywhere</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-semibold tracking-wider uppercase">
          <p>© 2024 OMPATH MATH ACADEMY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

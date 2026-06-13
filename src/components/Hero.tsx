
"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, PlayCircle, Users, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-saffron rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/mathematics.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-gold px-4 py-2 rounded-full text-sm font-bold mb-8 border border-white/20 animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles className="w-4 h-4" />
            NOW ACCEPTING ADMISSIONS 2024–25
          </div>
          
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Excel in <span className="text-saffron">Mathematics</span> <br className="hidden md:block" />
            with <span className="text-gold">OmPath Academy</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in duration-1000 delay-200">
            Expert coaching for Class 5 to 8. We transform complex mathematical concepts into simplified learning paths that every child can master.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in duration-1000 delay-300">
            <Button asChild size="lg" className="bg-saffron hover:bg-saffron/90 text-white font-bold h-14 px-10 rounded-full text-lg shadow-xl shadow-saffron/20 group">
              <Link href="#admission">
                Apply for Admission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold h-14 px-10 rounded-full text-lg">
              <Link href="#live">
                <PlayCircle className="mr-2 w-5 h-5" />
                Book Free Demo
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-12 animate-in fade-in duration-1000 delay-500">
            {[
              { label: "Middle School Classes", val: "5–8" },
              { label: "Free Demo Classes", val: "2 Days" },
              { label: "Personal Attention", val: "100%" },
              { label: "Live Sessions", val: "Daily" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-headline font-extrabold text-gold mb-1">{stat.val}</div>
                <div className="text-xs text-white/60 font-semibold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Target, Hash, Square, PieChart, GraduationCap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const syllabusData = [
  {
    id: 5,
    grade: "Class 5",
    focus: "Foundation Building",
    icon: <Hash className="w-6 h-6" />,
    topics: ["Large Numbers", "Factors & Multiples", "Decimals", "Basic Geometry", "Fraction Operations"],
    description: "Setting the stage for mathematical thinking through visualization."
  },
  {
    id: 6,
    grade: "Class 6",
    focus: "Introduction to Abstraction",
    icon: <Target className="w-6 h-6" />,
    topics: ["Integers", "Basics of Algebra", "Ratios & Proportions", "Practical Geometry", "Data Handling"],
    description: "Bridging arithmetic and logical reasoning."
  },
  {
    id: 7,
    grade: "Class 7",
    focus: "Analytical Skills",
    icon: <PieChart className="w-6 h-6" />,
    topics: ["Rational Numbers", "Algebraic Expressions", "Lines & Angles", "Perimeter & Area", "Exponents"],
    description: "Developing skills to solve multi-step problems."
  },
  {
    id: 8,
    grade: "Class 8",
    focus: "Advanced Preparations",
    icon: <Square className="w-6 h-6" />,
    topics: ["Rational Numbers", "Linear Equations", "Mensuration", "Square & Cube Roots", "Data Analysis"],
    description: "Preparing students for high school mathematics excellence."
  }
];

export function SyllabusExplorer() {
  const [active, setActive] = useState(8);

  const activeSyllabus = syllabusData.find(s => s.id === active);

  return (
    <section id="syllabus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-4">Grade Syllabus Explorer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your grade to explore the specialized math journey we've crafted for you.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {syllabusData.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={cn(
                "group relative p-6 rounded-3xl transition-all duration-300 text-left border-2",
                active === s.id
                  ? "bg-primary border-primary text-white shadow-2xl scale-105"
                  : "bg-mist-blue border-transparent hover:border-primary/20 hover:bg-white"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors",
                active === s.id ? "bg-saffron text-white" : "bg-primary/10 text-primary"
              )}>
                {s.icon}
              </div>
              <h3 className="font-extrabold text-xl mb-1">{s.grade}</h3>
              <p className={cn(
                "text-xs font-bold uppercase tracking-wider mb-2",
                active === s.id ? "text-gold" : "text-primary/60"
              )}>
                {s.focus}
              </p>
              <div className={cn(
                "absolute top-6 right-6 transition-opacity",
                active === s.id ? "opacity-100" : "opacity-0"
              )}>
                <Badge className="bg-saffron">Selected</Badge>
              </div>
            </button>
          ))}
        </div>

        <Card className="border-none shadow-xl bg-mist-blue rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-headline font-bold text-primary mb-4">
                  Exploring {activeSyllabus?.grade}
                </h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {activeSyllabus?.description}
                </p>
                <div className="space-y-4">
                  <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Core Curriculum Modules</h4>
                  <ul className="grid gap-3">
                    {activeSyllabus?.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-primary/5 shadow-sm">
                        <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-xs">
                          {i + 1}
                        </div>
                        <span className="font-semibold text-primary/80">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-primary rounded-3xl overflow-hidden shadow-2xl relative group">
                  <img
                    src={`https://picsum.photos/seed/math-grade-${active}/800/600`}
                    alt="Learning illustration"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mb-4 animate-bounce">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-white text-2xl font-bold mb-2">Ready to start?</h4>
                    <p className="text-white/80 mb-6">Join our live sessions for deep dives into these topics.</p>
                    <button className="bg-white text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gold transition-colors">
                      View Sample Lesson
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

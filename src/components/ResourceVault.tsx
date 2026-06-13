
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Lock, CheckCircle, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Class 8: Linear Equations Guide",
    type: "Conceptual PDF",
    size: "2.4 MB",
    isFree: true,
  },
  {
    title: "Weekly Practice Assignment - Set A",
    type: "Worksheet",
    size: "1.1 MB",
    isFree: true,
  },
  {
    title: "Class 7: Geometry Mastery Kit",
    type: "Flashcards",
    size: "4.5 MB",
    isFree: false,
  },
  {
    title: "Previous Year Sample Papers",
    type: "Exam Prep",
    size: "8.2 MB",
    isFree: false,
  }
];

export function ResourceVault() {
  return (
    <section className="py-20 bg-mist-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <FolderOpen className="w-4 h-4" />
            EDUCATIONAL RESOURCE VAULT
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-4">Download Learning Materials</h2>
          <p className="text-muted-foreground text-lg">
            Access our categorized repository of practice papers, conceptual guides, and homework worksheets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, i) => (
            <Card key={i} className="border-none shadow-lg rounded-3xl group overflow-hidden bg-white">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${res.isFree ? 'bg-green-100 text-green-600' : 'bg-primary/5 text-primary/40'}`}>
                  <FileText className="w-6 h-6" />
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{res.type}</span>
                  <h4 className="font-bold text-primary mt-1 leading-tight group-hover:text-accent transition-colors">{res.title}</h4>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/5">
                  <span className="text-xs font-semibold text-muted-foreground">{res.size}</span>
                  {res.isFree ? (
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 h-auto font-bold">
                      <Download className="w-4 h-4 mr-1" /> Download
                    </Button>
                  ) : (
                    <span className="flex items-center text-xs font-bold text-muted-foreground italic">
                      <Lock className="w-3 h-3 mr-1" /> Student Only
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Need personalized study material?</p>
          <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white px-8">
            Request Custom Resource
          </Button>
        </div>
      </div>
    </section>
  );
}

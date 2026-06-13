
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Calendar, Clock, ArrowRight } from "lucide-react";

export function LiveDashboard() {
  const sessions = [
    {
      title: "Algebraic Identities - Deep Dive",
      grade: "Class 8",
      time: "Today, 5:00 PM",
      status: "LIVE",
    },
    {
      title: "Fractions and Decimals - Part 2",
      grade: "Class 6",
      time: "Tomorrow, 4:00 PM",
      status: "UPCOMING",
    },
    {
      title: "Perimeter & Area - Concept Clear",
      grade: "Class 7",
      time: "Dec 24, 4:30 PM",
      status: "UPCOMING",
    }
  ];

  return (
    <section id="live" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
              <Youtube className="w-5 h-5" />
              YOUTUBE LIVE STREAMING
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary">Live Session Dashboard</h2>
          </div>
          <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white">
            Visit Our YouTube Channel <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sessions.map((session, idx) => (
            <Card key={idx} className="border-none shadow-lg rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden bg-primary/10">
                <img 
                  src={`https://picsum.photos/seed/live-thumb-${idx}/600/338`} 
                  alt="Session thumbnail" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={session.status === "LIVE" ? "bg-red-600 animate-pulse" : "bg-primary"}>
                    {session.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Youtube className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">{session.grade}</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-4 leading-tight">{session.title}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {session.time.split(',')[0]}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {session.time.split(',')[1]}
                  </div>
                </div>
                <Button className="w-full rounded-xl bg-primary hover:bg-primary/90">
                  {session.status === "LIVE" ? "Join Now" : "Set Reminder"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

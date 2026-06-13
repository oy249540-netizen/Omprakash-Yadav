
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Send, QrCode } from "lucide-react";

export function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    father: "",
    contact: "",
    grade: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🎓 *NEW ADMISSION REQUEST*\n\n👤 *Student Name:* ${formData.name}\n👨 *Father's Name:* ${formData.father}\n📞 *Contact:* ${formData.contact}\n🏫 *Class:* ${formData.grade}\n🏠 *Address:* ${formData.address}\n\n_Sent from OmPath Math Academy App_`;
    
    // Simulating submission
    setSubmitted(true);
    setTimeout(() => {
      window.open("https://wa.me/917987220105?text=" + encodeURIComponent(msg), "_blank");
    }, 1000);
  };

  return (
    <section id="admission" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-4">Direct Admission Gateway</h2>
              <p className="text-muted-foreground text-lg">
                Secure your child&apos;s academic future in minutes. Our streamlined enrollment process connects you directly to our faculty.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Fill the Form", desc: "Provide basic student details and contact information." },
                { title: "WhatsApp Connect", desc: "The form automatically bridges your query to our coordinators." },
                { title: "Free Trial", desc: "Enjoy 2 days of complimentary demo classes after enrollment." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-3xl border-2 border-dashed border-primary/20 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-mist-blue rounded-2xl">
                  <QrCode className="w-32 h-32 text-primary" />
                </div>
              </div>
              <p className="text-sm font-bold text-primary mb-1">SCAN TO APPLY INSTANTLY</p>
              <p className="text-xs text-muted-foreground">Open your camera to link directly to this form.</p>
            </div>
          </div>

          <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-primary text-white p-8">
              <CardTitle className="text-2xl font-headline">Enrollment Form</CardTitle>
              <CardDescription className="text-white/70">Admission for Academic Session 2024–25</CardDescription>
            </CardHeader>
            <CardContent className="p-8 bg-white">
              {submitted ? (
                <div className="text-center py-12 animate-in zoom-in duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
                  <p className="text-muted-foreground mb-6">We are redirecting you to WhatsApp to finalize your admission details.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">
                    Start New Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider">Student&apos;s Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      className="rounded-xl border-2 h-12 focus:border-accent"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="father" className="text-xs font-bold uppercase tracking-wider">Father&apos;s Name</Label>
                    <Input 
                      id="father" 
                      placeholder="Mr. Robert Doe" 
                      required 
                      className="rounded-xl border-2 h-12 focus:border-accent"
                      value={formData.father}
                      onChange={(e) => setFormData({...formData, father: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact" className="text-xs font-bold uppercase tracking-wider">Contact Number</Label>
                      <Input 
                        id="contact" 
                        placeholder="10-digit mobile" 
                        required 
                        maxLength={10} 
                        className="rounded-xl border-2 h-12 focus:border-accent"
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade" className="text-xs font-bold uppercase tracking-wider">Applying for Grade</Label>
                      <Select onValueChange={(val) => setFormData({...formData, grade: val})} required>
                        <SelectTrigger className="rounded-xl border-2 h-12 focus:border-accent">
                          <SelectValue placeholder="Select Class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Class 5">Class 5</SelectItem>
                          <SelectItem value="Class 6">Class 6</SelectItem>
                          <SelectItem value="Class 7">Class 7</SelectItem>
                          <SelectItem value="Class 8">Class 8</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-xs font-bold uppercase tracking-wider">Residential Address</Label>
                    <Input 
                      id="address" 
                      placeholder="City, State, Pincode" 
                      required 
                      className="rounded-xl border-2 h-12 focus:border-accent"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full h-14 bg-saffron hover:bg-saffron/90 rounded-xl text-lg font-bold shadow-lg shadow-saffron/20 mt-4 group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Submit Application
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground mt-4">
                    By submitting, you agree to be contacted for academic purposes. No fees are collected during this step.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SyllabusExplorer } from "@/components/SyllabusExplorer";
import { AIConceptSculptor } from "@/components/AIConceptSculptor";
import { AdmissionForm } from "@/components/AdmissionForm";
import { LiveDashboard } from "@/components/LiveDashboard";
import { ResourceVault } from "@/components/ResourceVault";
import { ParentSupport } from "@/components/ParentSupport";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      
      <Hero />
      
      <div id="about">
        <SyllabusExplorer />
      </div>
      
      <AIConceptSculptor />
      
      <LiveDashboard />
      
      <div id="resources">
        <ResourceVault />
      </div>
      
      <AdmissionForm />
      
      <Footer />
      
      <ParentSupport />
    </main>
  );
}

function ResourceVaultFallback() {
  return (
    <div className="py-12 bg-mist-blue text-center">
      <p className="text-muted-foreground">Resource vault loading...</p>
    </div>
  )
}

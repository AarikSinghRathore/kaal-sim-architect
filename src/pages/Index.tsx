
import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  WhatIsKaalSection,
  WhyKaalSection,
  CostComparisonSection,
  StrategicImpactSection
} from "@/components/sections/InfoSection";
import { 
  Download,
  FileText,
  Shield,
  Mountain
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Trigger animations when page loads
    const sections = document.querySelectorAll('.animate-fade-in');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.remove('opacity-0');
      }, index * 200);
    });
  }, []);

  return (
    <Layout 
      heroTitle={
        <>
          Project <span className="text-kaal-green">KAAL</span>
        </>
      }
      heroSubtitle="India's Immersive Military Simulation System"
      heroBackground="from-kaal-navy via-kaal-navy/80 to-black"
      className="mb-10"
    >
      {/* Main Content */}
      <div className="py-10">
        <WhatIsKaalSection />
        <WhyKaalSection />
        
        {/* View Options */}
        <section className="kaal-section opacity-0 animate-fade-in">
          <div className="container max-w-5xl mx-auto">
            <h2 className="section-title mb-12">Explore KAAL In Depth</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="kaal-card p-6 hover:border-kaal-blue/50 transition-colors flex flex-col">
                <div className="mb-4 p-3 rounded-full bg-kaal-blue/20 text-kaal-blue self-start">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">System Architecture</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  Explore the complete technical breakdown of KAAL's innovative dual system architecture with interactive diagrams.
                </p>
                <Link to="/architecture" className="mt-auto">
                  <Button className="w-full">View Architecture</Button>
                </Link>
              </div>
              
              <div className="kaal-card p-6 hover:border-kaal-green/50 transition-colors flex flex-col">
                <div className="mb-4 p-3 rounded-full bg-kaal-green/20 text-kaal-green self-start">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Safety Systems</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  Discover the comprehensive safety measures and failsafe protocols that ensure complete protection during training.
                </p>
                <Link to="/safety" className="mt-auto">
                  <Button className="w-full">Safety Details</Button>
                </Link>
              </div>
              
              <div className="kaal-card p-6 hover:border-kaal-yellow/50 transition-colors flex flex-col">
                <div className="mb-4 p-3 rounded-full bg-kaal-yellow/20 text-kaal-yellow self-start">
                  <Mountain className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Terrain Engine</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  Learn about the advanced terrain engine that powers KAAL's immersive simulation environment.
                </p>
                <Link to="/technical" className="mt-auto">
                  <Button className="w-full">Technical Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <StrategicImpactSection />
        
        {/* Downloads Section */}
        <section className="kaal-section opacity-0 animate-fade-in">
          <div className="container max-w-4xl mx-auto">
            <h2 className="section-title">Documentation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="kaal-card p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-kaal-blue/20 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-kaal-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">KAAL Whitepaper</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Comprehensive overview of Project KAAL's development methodology, technical specifications, and strategic implementation plan.
                </p>
                <Button className="mt-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download Whitepaper
                </Button>
              </div>
              
              <div className="kaal-card p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-kaal-green/20 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-kaal-green" />
                </div>
                <h3 className="text-lg font-medium mb-2">System Architecture Diagram</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Detailed technical diagrams showing the complete KAAL system architecture and component interactions.
                </p>
                <Button className="mt-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download Architecture Diagram
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-kaal-navy to-kaal-navy/80 py-16">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore KAAL's Architecture?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Dive deeper into the technical system behind Project KAAL's revolutionary training capabilities.
          </p>
          <Link to="/architecture">
            <Button variant="default" size="lg" className="bg-gradient-to-r from-kaal-green to-kaal-blue border-0">
              View System Architecture
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

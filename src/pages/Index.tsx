
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
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kaal-navy to-black z-0">
          {/* Abstract grid background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTgtMS4wNjQgMS44NzgtMi4xOTJDMzYuNTYgOC43NCAzMC4zMDQgMyAzMC4zMDQgM3MtNi4yNTQgNS43NC03LjU3NCAxMi44MDhDMjIuNDA4IDE2LjkzNiAyMy4zNzcgMTggMjQuNjA1IDE4SDM2eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                What is Project
              </span>
              <span className="text-kaal-green ml-2">KAAL?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Next-generation military training system
              for the modern battlefield
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="#what-is-kaal">
                <Button variant="default" size="lg" className="bg-gradient-to-r from-kaal-green to-kaal-blue border-0">
                  Learn More
                </Button>
              </Link>
              <Link to="/architecture">
                <Button variant="outline" size="lg">
                  System Architecture
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="py-10">
        <WhatIsKaalSection />
        <WhyKaalSection />
        <CostComparisonSection />
        <StrategicImpactSection />
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

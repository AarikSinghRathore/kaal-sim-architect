
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import GunToSuitSystem from "@/components/architecture/GunToSuitSystem";
import TerrainSimulation from "@/components/architecture/TerrainSimulation";
import SystemFlowchart from "@/components/architecture/SystemFlowchart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Mountain, Network } from "lucide-react";

const Architecture = () => {
  const [selectedTab, setSelectedTab] = useState("gun-suit");

  useEffect(() => {
    // Trigger animations when page loads
    const sections = document.querySelectorAll('.animate-fade-in');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.remove('opacity-0');
      }, index * 200);
    });
  }, [selectedTab]);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kaal-navy to-black z-0">
          {/* Abstract circuit background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTgtMS4wNjQgMS44NzgtMi4xOTJDMzYuNTYgOC43NCAzMC4zMDQgMyAzMC4zMDQgM3MtNi4yNTQgNS43NC03LjU3NCAxMi44MDhDMjIuNDA4IDE2LjkzNiAyMy4zNzcgMTggMjQuNjA1IDE4SDM2eiIgZmlsbD0icmdiYSg3NiwxNzUsODAsLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                System
              </span>
              <span className="text-kaal-blue ml-2">Architecture</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              The complete breakdown of KAAL's innovative technical systems
            </p>
          </div>
        </div>
      </section>
      
      {/* Tabs Section */}
      <section className="py-16 container">
        <Tabs 
          defaultValue="gun-suit" 
          className="max-w-5xl mx-auto"
          value={selectedTab}
          onValueChange={handleTabChange}
        >
          <TabsList className="grid grid-cols-3 mb-10">
            <TabsTrigger value="gun-suit" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Gun-to-Suit Feedback</span>
              <span className="sm:hidden">Feedback</span>
            </TabsTrigger>
            <TabsTrigger value="terrain" className="flex items-center gap-2">
              <Mountain className="h-4 w-4" />
              <span className="hidden sm:inline">Terrain Simulation</span>
              <span className="sm:hidden">Terrain</span>
            </TabsTrigger>
            <TabsTrigger value="flowchart" className="flex items-center gap-2">
              <Network className="h-4 w-4" />
              <span className="hidden sm:inline">Architecture Flowchart</span>
              <span className="sm:hidden">Flowchart</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="gun-suit">
            <GunToSuitSystem />
          </TabsContent>
          
          <TabsContent value="terrain">
            <TerrainSimulation />
          </TabsContent>
          
          <TabsContent value="flowchart">
            <SystemFlowchart />
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default Architecture;

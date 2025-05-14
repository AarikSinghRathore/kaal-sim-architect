
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import GunToSuitSystem from "@/components/architecture/GunToSuitSystem";
import TerrainSimulation from "@/components/architecture/TerrainSimulation";
import SystemFlowchart from "@/components/architecture/SystemFlowchart";
import InteractiveFlowchart from "@/components/architecture/InteractiveFlowchart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Mountain, Network, FileText, Link as LinkIcon, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Architecture = () => {
  const [selectedTab, setSelectedTab] = useState("flowchart");

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
    <Layout
      heroTitle="System Architecture"
      heroSubtitle="The complete breakdown of KAAL's innovative technical systems"
    >
      {/* Tabs Section */}
      <section className="py-12 container">
        <Tabs 
          defaultValue="flowchart" 
          className="max-w-5xl mx-auto"
          value={selectedTab}
          onValueChange={handleTabChange}
        >
          <TabsList className="grid grid-cols-5 mb-10">
            <TabsTrigger value="flowchart" className="flex items-center gap-2">
              <Network className="h-4 w-4" />
              <span className="hidden sm:inline">Flowchart</span>
              <span className="sm:hidden">Flow</span>
            </TabsTrigger>
            <TabsTrigger value="interactive" className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Interactive</span>
              <span className="sm:hidden">Inter</span>
            </TabsTrigger>
            <TabsTrigger value="gun-suit" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Gun-to-Suit</span>
              <span className="sm:hidden">Gun</span>
            </TabsTrigger>
            <TabsTrigger value="terrain" className="flex items-center gap-2">
              <Mountain className="h-4 w-4" />
              <span className="hidden sm:inline">Terrain</span>
              <span className="sm:hidden">Terrain</span>
            </TabsTrigger>
            <TabsTrigger value="docs" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Documents</span>
              <span className="sm:hidden">Docs</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="flowchart">
            <SystemFlowchart />
            <div className="flex justify-center mt-8">
              <Link to="/detailed-flowcharts">
                <Button className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  View Detailed Interactive Flowcharts
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="interactive">
            <InteractiveFlowchart />
            <div className="flex justify-center mt-8">
              <Link to="/detailed-flowcharts">
                <Button className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  View Detailed Interactive Flowcharts
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="gun-suit">
            <GunToSuitSystem />
          </TabsContent>
          
          <TabsContent value="terrain">
            <TerrainSimulation />
          </TabsContent>
          
          <TabsContent value="docs">
            <div className="space-y-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold text-center mb-8">Documentation & Downloads</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="kaal-card p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-kaal-blue/20 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-kaal-blue" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">KAAL Whitepaper</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Comprehensive technical whitepaper detailing the full KAAL system specifications,
                    research methodology, and implementation strategy.
                  </p>
                  <Button className="mt-auto">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Whitepaper (PDF)
                  </Button>
                </div>
                
                <div className="kaal-card p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-kaal-green/20 flex items-center justify-center mb-4">
                    <Network className="h-8 w-8 text-kaal-green" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">System Architecture Diagram</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Detailed system architecture diagrams showing the complete KAAL system
                    integration, data flow, and component interactions.
                  </p>
                  <Button className="mt-auto">
                    <Network className="h-4 w-4 mr-2" />
                    Download Architecture Diagram (PDF)
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center gap-6 mt-10">
                <Link to="/safety">
                  <Button variant="outline" size="lg">
                    <Shield className="h-4 w-4 mr-2" />
                    View Safety Systems
                  </Button>
                </Link>
                
                <Link to="/cost-comparison">
                  <Button variant="outline" size="lg">
                    View Cost Comparison
                  </Button>
                </Link>

                <Link to="/detailed-flowcharts">
                  <Button variant="outline" size="lg">
                    <Cpu className="h-4 w-4 mr-2" />
                    View Interactive Flowcharts
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default Architecture;

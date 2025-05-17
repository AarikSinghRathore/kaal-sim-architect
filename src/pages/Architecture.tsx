import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import GunToSuitSystem from "@/components/architecture/GunToSuitSystem";
import TerrainSimulation from "@/components/architecture/TerrainSimulation";
import SystemFlowchart from "@/components/architecture/SystemFlowchart";
import InteractiveFlowchart from "@/components/architecture/InteractiveFlowchart";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Mountain, Network, FileText, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Architecture = () => {
  const [selectedTab, setSelectedTab] = useState("flowchart");

  useEffect(() => {
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
          </TabsContent>

          <TabsContent value="interactive">
            <InteractiveFlowchart />
          </TabsContent>

          <TabsContent value="gun-suit">
            <GunToSuitSystem />
          </TabsContent>

          <TabsContent value="terrain">
            <TerrainSimulation />
          </TabsContent>

          <TabsContent value="docs">
            <div className="text-center opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Documentation Access Restricted</h2>
              <p className="text-muted-foreground">
                Document downloads have been disabled for this section.
              </p>
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
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default Architecture;

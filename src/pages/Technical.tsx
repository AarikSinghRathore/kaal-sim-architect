import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Zap, Shield, Mountain, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InteractiveFlowchart from "@/components/architecture/InteractiveFlowchart";
import GunToSuitSystem from "@/components/architecture/GunToSuitSystem";
import TerrainSimulation from "@/components/architecture/TerrainSimulation";

const Technical = () => {
  return (
    <Layout
      heroTitle="KAAL Technical Documentation"
      heroSubtitle="Comprehensive System Architecture and Technical Specifications"
      heroBackground="from-kaal-navy/90 to-black"
    >
      <div className="container mx-auto py-12">
        <Tabs defaultValue="flowchart" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="flowchart" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              <span className="hidden sm:inline">System Architecture</span>
              <span className="sm:hidden">Architecture</span>
            </TabsTrigger>
            <TabsTrigger value="gun-suit" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">Feedback System</span>
              <span className="sm:hidden">Feedback</span>
            </TabsTrigger>
            <TabsTrigger value="terrain" className="flex items-center gap-2">
              <Mountain className="h-4 w-4" />
              <span className="hidden sm:inline">Terrain Engine</span>
              <span className="sm:hidden">Terrain</span>
            </TabsTrigger>
            <TabsTrigger value="downloads" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Safety Systems</span>
              <span className="sm:hidden">Docs</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flowchart">
            <InteractiveFlowchart />
          </TabsContent>

          <TabsContent value="gun-suit">
            <GunToSuitSystem />
          </TabsContent>

          <TabsContent value="terrain">
            <TerrainSimulation />
          </TabsContent>

          <TabsContent value="downloads">
            <div className="text-center opacity-0 animate-fade-in">
              <p className="text-muted-foreground
              </p>
              <div className="flex justify-center mt-10">
                <Link to="/safety">
                  <Button variant="outline" size="lg">
                    <Shield className="h-4 w-4 mr-2" />
                    View Safety Systems
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Technical;

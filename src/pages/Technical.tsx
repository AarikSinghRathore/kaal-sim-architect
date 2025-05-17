import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cpu, 
  Zap, 
  Shield, 
  Mountain, 
  Table, 
  FileText 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InteractiveFlowchart from "@/components/architecture/InteractiveFlowchart";
import GunToSuitSystem from "@/components/architecture/GunToSuitSystem";
import TerrainSimulation from "@/components/architecture/TerrainSimulation";
import FlowchartContainer from "@/components/flowchart/FlowchartContainer";

const Technical = () => {
  return (
    <Layout 
      heroTitle="KAAL Technical" 
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
              <span className="hidden sm:inline">Resources</span>
              <span className="sm:hidden">Resources</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="flowchart">
            <InteractiveFlowchart />
            <div className="flex justify-center mt-8">
              <Link to="/detailed-flowcharts">
                <Button className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 mr-2" />
                  View Detailed Interactive Flowcharts
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="gun-suit">
            <div className="space-y-12">
              <GunToSuitSystem />
              <hr className="border-muted/20" />
              <FlowchartContainer type="feedback" />
              <div className="flex justify-center mt-8">
                <Link to="/detailed-flowcharts">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Zap className="h-4 w-4 mr-2" />
                    View Detailed Feedback System Flowcharts
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="terrain">
            <div className="space-y-12">
              <TerrainSimulation />
              <hr className="border-muted/20" />
              <FlowchartContainer type="terrain" />
              <div className="flex justify-center mt-8">
                <Link to="/detailed-flowcharts">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mountain className="h-4 w-4 mr-2" />
                    View Detailed Terrain System Flowcharts
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="downloads">
            <div className="space-y-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold text-center">Technical Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* KAAL Whitepaper Card */}
                <div className="kaal-card p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-kaal-blue/20 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-kaal-blue" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">KAAL Whitepaper</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Comprehensive technical whitepaper detailing the full KAAL system specifications,
                    research methodology, and implementation strategy.
                  </p>
                  <a
                    href="/downloads/KAAL_Whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full"
                  >
                    <Button className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Download Whitepaper (PDF)
                    </Button>
                  </a>
                </div>

                {/* System Architecture Diagram Card */}
                <div className="kaal-card p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-kaal-green/20 flex items-center justify-center mb-4">
                    <Table className="h-8 w-8 text-kaal-green" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">System Architecture Diagram</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Detailed system architecture diagrams showing the complete KAAL system
                    integration, data flow, and component interactions.
                  </p>
                  <Button
                    className="mt-auto w-full"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1puhfJ5VSebEozFuvTpdedzXCnDacXOQZ/view?usp=sharing",
                        "_blank"
                      )
                    }
                  >
                    <Table className="h-4 w-4 mr-2" />
                    Download Architecture Diagram (PDF)
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center gap-4 mt-10">
                <Link to="/safety">
                  <Button variant="outline" size="lg">
                    <Shield className="h-4 w-4 mr-2" />
                    View Safety Systems
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
      </div>
    </Layout>
  );
}

export default Technical;

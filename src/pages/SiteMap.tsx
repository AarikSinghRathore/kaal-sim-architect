
import React from "react";
import Layout from "@/components/layout/Layout";
import WebsiteFlowchart from "@/components/flowchart/WebsiteFlowchart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu, LayoutDashboard, Cpu } from "lucide-react";

const SiteMap = () => {
  return (
    <Layout 
      heroTitle="Website Structure" 
      heroSubtitle="A comprehensive visual guide to navigate Project KAAL's website" 
      heroBackground="from-kaal-navy/90 to-black"
    >
      <div className="container mx-auto py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Website Navigation Map</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            This interactive flowchart shows how the Project KAAL website is structured and where to find specific information.
            Explore the connections between pages and discover the wealth of content available.
          </p>
          
          <Tabs defaultValue="flowchart" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="flowchart" className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span>Interactive Map</span>
              </TabsTrigger>
              <TabsTrigger value="structure" className="flex items-center gap-2">
                <Menu className="h-4 w-4" />
                <span>Site Structure</span>
              </TabsTrigger>
              <TabsTrigger value="systems" className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                <span>Systems</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="flowchart" className="mt-6">
              <div className="kaal-card p-4 md:p-8">
                <WebsiteFlowchart />
              </div>
            </TabsContent>
            
            <TabsContent value="structure" className="mt-6">
              <div className="kaal-card p-6">
                <h3 className="text-xl font-semibold mb-4">Website Structure</h3>
                <p className="text-muted-foreground mb-6">
                  Project KAAL's website is organized into interconnected sections that provide comprehensive information 
                  about the system's architecture, technical specifications, and operational details.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2 text-kaal-blue">Main Sections</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 list-disc">
                      <li><strong>Home Page</strong> - Overview and introduction to KAAL</li>
                      <li><strong>System Architecture</strong> - Detailed system design</li>
                      <li><strong>Technical</strong> - Specifications and guides</li>
                      <li><strong>Terrain Engine</strong> - Simulation environment details</li>
                      <li><strong>Feedback System</strong> - Tactile response technology</li>
                      <li><strong>Safety Systems</strong> - Safety protocols and features</li>
                      <li><strong>Cost Comparison</strong> - Economic analysis</li>
                      <li><strong>Detailed Flowcharts</strong> - Technical diagrams</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-kaal-green">Navigation Paths</h4>
                    <p className="text-muted-foreground">
                      The site is designed with multiple navigation paths:
                    </p>
                    <ul className="pl-5 list-disc mt-2">
                      <li>Main navigation menu for direct access to all sections</li>
                      <li>Contextual links between related pages</li>
                      <li>Interactive flowcharts for visual navigation</li>
                      <li>This site map for comprehensive overview</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="systems" className="mt-6">
              <div className="kaal-card p-6">
                <h3 className="text-xl font-semibold mb-4">System Components</h3>
                <p className="text-muted-foreground mb-6">
                  Project KAAL consists of multiple interconnected systems that work together to create an immersive training experience.
                  Each system is documented in detail in its respective section.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-border bg-card/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-kaal-green">Feedback System</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      The tactical feedback system provides realistic sensations during training scenarios.
                    </p>
                    <ul className="text-sm pl-5 list-disc">
                      <li>Smart Gun Unit</li>
                      <li>Signal Processing</li>
                      <li>Haptic Suit</li>
                      <li>Control Interface</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border bg-card/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-kaal-blue">Terrain Engine</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Advanced simulation system for creating realistic training environments.
                    </p>
                    <ul className="text-sm pl-5 list-disc">
                      <li>DEM Processing</li>
                      <li>UE5 Rendering</li>
                      <li>LED Wall Display</li>
                      <li>Environmental Controls</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border bg-card/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-kaal-red">Safety Systems</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Comprehensive safety features ensuring secure operation.
                    </p>
                    <ul className="text-sm pl-5 list-disc">
                      <li>Emergency Shutdowns</li>
                      <li>Overload Protection</li>
                      <li>Monitoring Systems</li>
                      <li>Instructor Overrides</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border bg-card/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-kaal-yellow">Control Systems</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Instructor interfaces for managing training scenarios.
                    </p>
                    <ul className="text-sm pl-5 list-disc">
                      <li>Tablet Interface</li>
                      <li>Scenario Editor</li>
                      <li>Real-time Monitoring</li>
                      <li>After-action Review</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold">Website Navigation Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="kaal-card p-4">
                <h4 className="font-medium mb-2">Finding Technical Details</h4>
                <p className="text-sm text-muted-foreground">
                  For in-depth technical information, visit the Technical page or explore the
                  specific system pages for detailed specifications and guides.
                </p>
              </div>
              
              <div className="kaal-card p-4">
                <h4 className="font-medium mb-2">Understanding System Connections</h4>
                <p className="text-sm text-muted-foreground">
                  The interactive flowcharts show how different components of KAAL work together.
                  Each flowchart can be explored by clicking on nodes for details.
                </p>
              </div>
              
              <div className="kaal-card p-4">
                <h4 className="font-medium mb-2">Quick Reference</h4>
                <p className="text-sm text-muted-foreground">
                  Use this site map as your central navigation hub to quickly find any information
                  about Project KAAL's systems, features, or specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SiteMap;

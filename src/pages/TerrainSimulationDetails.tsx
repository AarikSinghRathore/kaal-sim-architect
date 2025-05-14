
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import ViewToggle from "@/components/ui/ViewToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mountain,
  Layers,
  Cpu,
  Tablet,
  Monitor,
  Cloud,
  AlertTriangle,
  Map,
  ChevronDown
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import ControlSystem from "@/components/terrain/ControlSystem";
import EnvironmentalFX from "@/components/terrain/EnvironmentalFX";
import DiagnosticsPanel from "@/components/terrain/DiagnosticsPanel";
import TerrainDataFlowchart from '@/components/flowchart/TerrainDataFlowchart';
import UERenderFlowchart from '@/components/flowchart/UERenderFlowchart';
import SafetyFlowchart from '@/components/flowchart/SafetyFlowchart';

const TerrainSimulationDetails = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);

  return (
    <Layout 
      heroTitle="Terrain Simulation Technical Details" 
      heroSubtitle="Comprehensive Documentation of the Holographic Terrain System" 
      heroBackground="from-kaal-navy/90 to-black"
    >
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center gap-6 mb-10">
          <h1 className="text-3xl font-bold">Terrain Visualization System</h1>
          <p className="text-muted-foreground text-center max-w-2xl">
            Detailed technical documentation of the holographic terrain simulation system, 
            including data pipeline, rendering technology, and hardware specifications.
          </p>
          <ViewToggle 
            isTechnicalView={isTechnicalView}
            setIsTechnicalView={setIsTechnicalView}
            className="max-w-sm"
          />
        </div>

        {isTechnicalView ? (
          <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
                <span className="sm:hidden">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="pipeline" className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <span className="hidden sm:inline">Data Pipeline</span>
                <span className="sm:hidden">Pipeline</span>
              </TabsTrigger>
              <TabsTrigger value="rendering" className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                <span className="hidden sm:inline">Rendering</span>
                <span className="sm:hidden">Render</span>
              </TabsTrigger>
              <TabsTrigger value="control" className="flex items-center gap-2">
                <Tablet className="h-4 w-4" />
                <span className="hidden sm:inline">Control</span>
                <span className="sm:hidden">Control</span>
              </TabsTrigger>
              <TabsTrigger value="safety" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span className="hidden sm:inline">Safety</span>
                <span className="sm:hidden">Safety</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="kaal-card p-6 space-y-8">
                <h2 className="text-xl font-semibold">System Architecture Overview</h2>
                <p className="text-muted-foreground">
                  The KAAL Terrain Visualization System consists of multiple integrated components 
                  forming an end-to-end pipeline from geographic data sources to immersive visualization.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-muted rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Map className="h-5 w-5 text-kaal-blue mr-2" />
                      <h3 className="font-medium">Data Sources</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Digital Elevation Models (DEMs)</li>
                      <li>• Satellite imagery</li>
                      <li>• Vector datasets</li>
                      <li>• LIDAR scans</li>
                      <li>• Classified terrain intelligence</li>
                    </ul>
                  </div>
                  
                  <div className="border border-muted rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Cpu className="h-5 w-5 text-kaal-green mr-2" />
                      <h3 className="font-medium">Processing Pipeline</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• QGIS preprocessing</li>
                      <li>• Cesium integration</li>
                      <li>• UE5 rendering engine</li>
                      <li>• Nanite geometry system</li>
                      <li>• Lumen lighting</li>
                    </ul>
                  </div>
                  
                  <div className="border border-muted rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Monitor className="h-5 w-5 text-kaal-red mr-2" />
                      <h3 className="font-medium">Output Systems</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 8K LED wall (8192 × 3072px)</li>
                      <li>• Holographic floor projection</li>
                      <li>• 120Hz refresh rate</li>
                      <li>• HDR10+ color space</li>
                      <li>• Multi-zone projection mapping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pipeline">
              <TerrainDataFlowchart />
            </TabsContent>
            
            <TabsContent value="rendering">
              <UERenderFlowchart />
            </TabsContent>
            
            <TabsContent value="control">
              <ControlSystem />
            </TabsContent>
            
            <TabsContent value="safety">
              <SafetyFlowchart />
            </TabsContent>
          </Tabs>
        ) : (
          <div className="kaal-card p-8 max-w-3xl mx-auto opacity-0 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-kaal-blue/20 flex items-center justify-center">
                <Mountain className="h-12 w-12 text-kaal-blue" />
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-center">Interactive Terrain Visualization</h2>
            <p className="text-muted-foreground text-center mb-10">
              The KAAL terrain system brings real-world locations to life with incredible detail for truly immersive training.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
                  <Map className="h-8 w-8 text-kaal-blue" />
                </div>
                <h3 className="font-medium mb-2">Real-World Data</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Our system uses actual geographic data from anywhere on Earth, letting you train in environments before you ever set foot there.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
                  <Monitor className="h-8 w-8 text-kaal-green" />
                </div>
                <h3 className="font-medium mb-2">Incredible Visuals</h3>
                <p className="text-sm text-muted-foreground text-center">
                  High-resolution LED walls and floor projections create a 360° environment that feels remarkably close to the real thing.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-muted/10 p-6 rounded-lg border border-muted/30">
              <h3 className="font-medium mb-3 flex items-center">
                <Tablet className="h-5 w-5 text-kaal-blue mr-2" />
                Easy Controls
              </h3>
              <p className="text-sm text-muted-foreground">
                Instructors can control everything from a simple tablet interface:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-muted/20 p-3 rounded text-center">
                  <div className="text-sm font-medium mb-1">Terrain Types</div>
                  <div className="text-xs text-muted-foreground">Mountains, desert, urban, jungle</div>
                </div>
                <div className="bg-muted/20 p-3 rounded text-center">
                  <div className="text-sm font-medium mb-1">Weather</div>
                  <div className="text-xs text-muted-foreground">Clear, rain, fog, snow, dust</div>
                </div>
                <div className="bg-muted/20 p-3 rounded text-center">
                  <div className="text-sm font-medium mb-1">Time of Day</div>
                  <div className="text-xs text-muted-foreground">Day, night, dusk, dawn</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TerrainSimulationDetails;

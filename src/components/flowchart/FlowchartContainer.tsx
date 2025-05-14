import React, { useState } from 'react';
import ViewToggle from '@/components/ui/ViewToggle';
import GunSubsystemFlowchart from './GunSubsystemFlowchart';
import SuitSubsystemFlowchart from './SuitSubsystemFlowchart';
import FullSystemFlowchart from './FullSystemFlowchart';
import TerrainDataFlowchart from './TerrainDataFlowchart';
import UERenderFlowchart from './UERenderFlowchart';
import SafetyFlowchart from './SafetyFlowchart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Zap, Cpu, Monitor, Mountain, Map, AlertTriangle, Tablet } from 'lucide-react';

interface FlowchartContainerProps {
  type: "feedback" | "terrain";
}

const FlowchartContainer: React.FC<FlowchartContainerProps> = ({ type }) => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);

  return (
    <div className="space-y-8 mt-8">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-center">
          {type === "feedback" 
            ? "Feedback System Interactive Flow" 
            : "Terrain System Interactive Flow"}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl">
          {type === "feedback"
            ? "Interactive flowcharts of the KAAL Gun-to-Suit feedback system components. Click on any node to see detailed technical specifications."
            : "Interactive flowcharts of the KAAL Terrain Simulation system components. Click on any node to see detailed technical specifications."}
        </p>
        <ViewToggle 
          isTechnicalView={isTechnicalView} 
          setIsTechnicalView={setIsTechnicalView}
          className="max-w-sm"
        />
      </div>
      
      {isTechnicalView ? (
        <div className="opacity-0 animate-fade-in">
          {type === "feedback" ? (
            <Tabs defaultValue="gun" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="gun" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span className="hidden sm:inline">Gun Subsystem</span>
                  <span className="sm:hidden">Gun</span>
                </TabsTrigger>
                <TabsTrigger value="suit" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span className="hidden sm:inline">Suit Subsystem</span>
                  <span className="sm:hidden">Suit</span>
                </TabsTrigger>
                <TabsTrigger value="full" className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  <span className="hidden sm:inline">Complete System</span>
                  <span className="sm:hidden">System</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="gun">
                <GunSubsystemFlowchart />
              </TabsContent>
              
              <TabsContent value="suit">
                <SuitSubsystemFlowchart />
              </TabsContent>
              
              <TabsContent value="full">
                <FullSystemFlowchart />
              </TabsContent>
            </Tabs>
          ) : (
            <Tabs defaultValue="pipeline" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="pipeline" className="flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  <span className="hidden sm:inline">Data Pipeline</span>
                  <span className="sm:hidden">Pipeline</span>
                </TabsTrigger>
                <TabsTrigger value="render" className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  <span className="hidden sm:inline">Render System</span>
                  <span className="sm:hidden">Render</span>
                </TabsTrigger>
                <TabsTrigger value="safety" className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="hidden sm:inline">Control & Safety</span>
                  <span className="sm:hidden">Safety</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="pipeline">
                <TerrainDataFlowchart />
              </TabsContent>
              
              <TabsContent value="render">
                <UERenderFlowchart />
              </TabsContent>
              
              <TabsContent value="safety">
                <SafetyFlowchart />
              </TabsContent>
            </Tabs>
          )}
        </div>
      ) : (
        <div className="opacity-0 animate-fade-in">
          {type === "feedback" ? (
            <NonTechnicalFeedbackView />
          ) : (
            <NonTechnicalTerrainView />
          )}
        </div>
      )}
    </div>
  );
};

const NonTechnicalFeedbackView = () => {
  return (
    <div className="kaal-card p-8 max-w-3xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 rounded-full bg-kaal-green/20 flex items-center justify-center">
          <Zap className="h-12 w-12 text-kaal-green" />
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-center">How the Feedback System Works</h3>
      <p className="text-muted-foreground text-center mb-10">
        The KAAL system creates realistic training by providing instant physical feedback when a trainee is "hit" during simulations.
      </p>
      
      <div className="relative">
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-muted/50 -translate-y-1/2"></div>
        <div className="grid grid-cols-3 gap-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-kaal-blue" />
            </div>
            <h4 className="font-medium text-center">Gun Fires Signal</h4>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Special training gun fires a harmless infrared signal
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-kaal-green" />
            </div>
            <h4 className="font-medium text-center">Signal Detection</h4>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Training suit detects the hit and location on the body
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
              <Cpu className="h-8 w-8 text-kaal-yellow" />
            </div>
            <h4 className="font-medium text-center">Feedback Response</h4>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Suit provides immediate haptic feedback at the impact point
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted/10 p-6 rounded-lg border border-muted/30">
          <h3 className="font-medium mb-3 flex items-center">
            <Shield className="h-5 w-5 text-kaal-green mr-2" />
            Complete Safety
          </h3>
          <p className="text-sm text-muted-foreground">
            The system uses low-voltage technology with multiple safety systems, emergency cutoffs, and automatic monitoring to ensure a completely safe training experience.
          </p>
        </div>
        
        <div className="bg-muted/10 p-6 rounded-lg border border-muted/30">
          <h3 className="font-medium mb-3 flex items-center">
            <Monitor className="h-5 w-5 text-kaal-blue mr-2" />
            Instructor Control
          </h3>
          <p className="text-sm text-muted-foreground">
            Trainers have complete control via tablet interface, showing real-time participant status, with the ability to adjust feedback intensity or disable the system instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

const NonTechnicalTerrainView = () => {
  return (
    <div className="kaal-card p-8 max-w-3xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 rounded-full bg-kaal-blue/20 flex items-center justify-center">
          <Mountain className="h-12 w-12 text-kaal-blue" />
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-center">Interactive Terrain Visualization</h3>
      <p className="text-muted-foreground text-center mb-10">
        KAAL's terrain system brings real-world locations to life with incredible detail for immersive training scenarios.
      </p>
      
      <div className="relative">
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-muted/50 -translate-y-1/2"></div>
        <div className="grid grid-cols-3 gap-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
              <Map className="h-8 w-8 text-kaal-blue" />
            </div>
            <h4 className="font-medium text-center">Real-World Data</h4>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Uses actual geographic data from anywhere on Earth
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
              <Cpu className="h-8 w-8 text-kaal-green" />
            </div>
            <h4 className="font-medium text-center">Processing</h4>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Advanced graphics processing creates photo-realistic environments
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
              <Monitor className="h-8 w-8 text-kaal-yellow" />
            </div>
            <h4 className="font-medium text-center">Display</h4>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Stunning high-resolution display on LED walls and floors
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted/10 p-6 rounded-lg border border-muted/30">
          <h3 className="font-medium mb-3 flex items-center">
            <Mountain className="h-5 w-5 text-kaal-blue mr-2" />
            Location Flexibility
          </h3>
          <p className="text-sm text-muted-foreground">
            Instantly switch between different terrain types - from desert to urban environments, mountains to jungles - all with accurate topography and features.
          </p>
        </div>
        
        <div className="bg-muted/10 p-6 rounded-lg border border-muted/30">
          <h3 className="font-medium mb-3 flex items-center">
            <Tablet className="h-5 w-5 text-kaal-green mr-2" />
            Easy Control
          </h3>
          <p className="text-sm text-muted-foreground">
            Simple tablet controls allow instructors to change time of day, weather conditions, and environmental factors with just a few taps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlowchartContainer;

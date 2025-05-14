
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import DetailedFeedbackFlowchart from '@/components/feedback/DetailedFeedbackFlowchart';
import DetailedTerrainFlowchart from '@/components/terrain/DetailedTerrainFlowchart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ViewToggle from '@/components/ui/ViewToggle';
import { Shield, Zap, Cpu, Monitor, Mountain, Map, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const DetailedFlowcharts = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);
  
  const handleNodeClick = () => {
    toast({
      title: "Node Selected",
      description: "Click different nodes to see detailed specifications",
      duration: 3000,
    });
  };

  return (
    <Layout 
      heroTitle="Interactive System Flowcharts" 
      heroSubtitle="Explore the KAAL system architecture with interactive flowcharts"
      heroBackground="from-kaal-navy/90 to-black"
    >
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center gap-6 mb-10">
          <h1 className="text-3xl font-bold">Detailed System Flowcharts</h1>
          <p className="text-muted-foreground text-center max-w-2xl">
            Interactive visualizations of the KAAL system architecture. Click on any node to see technical specifications.
          </p>
          <ViewToggle 
            isTechnicalView={isTechnicalView}
            setIsTechnicalView={setIsTechnicalView}
            className="max-w-sm"
          />
        </div>

        {isTechnicalView ? (
          <Tabs defaultValue="gun" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-6 mb-8">
              <TabsTrigger value="gun" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span className="hidden sm:inline">Gun System</span>
                <span className="sm:hidden">Gun</span>
              </TabsTrigger>
              <TabsTrigger value="suit" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Suit System</span>
                <span className="sm:hidden">Suit</span>
              </TabsTrigger>
              <TabsTrigger value="full" className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                <span className="hidden sm:inline">Full System</span>
                <span className="sm:hidden">Full</span>
              </TabsTrigger>
              <TabsTrigger value="pipeline" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                <span className="hidden sm:inline">Data Pipeline</span>
                <span className="sm:hidden">Data</span>
              </TabsTrigger>
              <TabsTrigger value="render" className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                <span className="hidden sm:inline">Render System</span>
                <span className="sm:hidden">Render</span>
              </TabsTrigger>
              <TabsTrigger value="safety" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span className="hidden sm:inline">Safety Logic</span>
                <span className="sm:hidden">Safety</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="gun">
              <DetailedFeedbackFlowchart type="gun" />
            </TabsContent>
            
            <TabsContent value="suit">
              <DetailedFeedbackFlowchart type="suit" />
            </TabsContent>
            
            <TabsContent value="full">
              <DetailedFeedbackFlowchart type="full" />
            </TabsContent>
            
            <TabsContent value="pipeline">
              <DetailedTerrainFlowchart type="pipeline" />
            </TabsContent>
            
            <TabsContent value="render">
              <DetailedTerrainFlowchart type="render" />
            </TabsContent>
            
            <TabsContent value="safety">
              <DetailedTerrainFlowchart type="safety" />
            </TabsContent>
          </Tabs>
        ) : (
          <div className="kaal-card p-8 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{opacity: 1}}>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-kaal-blue/20 flex items-center justify-center">
                <Cpu className="h-12 w-12 text-kaal-blue" />
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-center">KAAL System Flowcharts</h2>
            <p className="text-muted-foreground text-center mb-8">
              The KAAL system features two main components that work together to create a realistic training environment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="flex flex-col items-center p-6 bg-muted/10 rounded-lg border border-muted/30">
                <Shield className="h-12 w-12 text-kaal-green mb-4" />
                <h3 className="font-medium mb-2">Feedback System</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Our gun-to-suit system provides immediate physical feedback to trainees when they're hit during exercises, simulating real combat conditions.
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-muted/10 rounded-lg border border-muted/30">
                <Mountain className="h-12 w-12 text-kaal-blue mb-4" />
                <h3 className="font-medium mb-2">Terrain System</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Our terrain visualization system brings real-world locations to life with incredible detail for truly immersive training scenarios.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <Button onClick={() => setIsTechnicalView(true)} className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                View Technical Flowcharts
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex justify-center mt-12">
          <div className="flex gap-4">
            <Link to="/technical">
              <Button variant="outline">Back to Technical Documentation</Button>
            </Link>
            <Link to="/architecture">
              <Button variant="outline">View System Architecture</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailedFlowcharts;

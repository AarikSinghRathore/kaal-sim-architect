import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
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
import TerrainPipeline from "@/components/terrain/TerrainPipeline";

const TerrainSimulationDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <Layout 
      heroTitle="Terrain Simulation Technical Details" 
      heroSubtitle="Comprehensive Documentation of the Holographic Terrain System" 
      heroBackground="from-kaal-navy/90 to-black"
    >
      <div className="container mx-auto py-12">
        <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              <span className="hidden sm:inline">System Overview</span>
              <span className="sm:hidden">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="rendering" className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span className="hidden sm:inline">Rendering System</span>
              <span className="sm:hidden">Render</span>
            </TabsTrigger>
            <TabsTrigger value="hardware" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              <span className="hidden sm:inline">Hardware Setup</span>
              <span className="sm:hidden">Hardware</span>
            </TabsTrigger>
            <TabsTrigger value="fx" className="flex items-center gap-2">
              <Cloud className="h-4 w-4" />
              <span className="hidden sm:inline">Environmental FX</span>
              <span className="sm:hidden">Effects</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="space-y-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold text-center">Terrain Visualization System</h2>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Map className="h-5 w-5 text-kaal-blue mr-2" />
                  Terrain Data Pipeline
                </h3>
                <p className="text-muted-foreground mb-6">
                  End-to-end pipeline for transforming geographic data into real-time interactive terrain visualization.
                </p>
                
                <TerrainPipeline />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Data Sources & Preprocessing</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Primary:</strong> SRTM DEM (30m res) / ALOS DEM (5m)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Imagery:</strong> Sentinel-2 (10m) / Maxar (0.3m)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Format:</strong> EPSG:4326 (WGS84) with UTM projection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Vector:</strong> OpenStreetMap extract for structures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Enhancement:</strong> AI superresolution for details</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Cesium Integration</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Tiling:</strong> 3D Tiles standard with quadtree hierarchy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>LOD:</strong> Distance-dependent mesh refinement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Cache:</strong> 50GB local terrain cache with LRU policy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Streaming:</strong> Progressive loading with view priority</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Build:</strong> Custom UE5 plugin enhancements</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Collapsible className="mt-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Pipeline Processing Code Example
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-muted/10 rounded-md border border-muted/30">
                    <pre className="text-xs text-muted-foreground overflow-x-auto">
{`// Example QGIS Processing Script (Python)
import processing
from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterRasterLayer
from qgis.core import QgsProcessingParameterVectorLayer
from qgis.core import QgsProcessingParameterRasterDestination

class DEMEnhancementPipeline(QgsProcessingAlgorithm):
    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterRasterLayer('input_dem', 'Input DEM', defaultValue=None))
        self.addParameter(QgsProcessingParameterVectorLayer('waterbodies', 'Water Bodies Vector', defaultValue=None))
        self.addParameter(QgsProcessingParameterRasterDestination('enhanced_dem', 'Enhanced DEM'))

    def processAlgorithm(self, parameters, context, model_feedback):
        feedback = QgsProcessingMultiStepFeedback(7, model_feedback)
        results = {}
        
        # Step 1: Fill DEM voids
        feedback.setCurrentStep(0)
        filled_dem = processing.run('native:fillnodata', {
            'INPUT': parameters['input_dem'],
            'BAND': 1,
            'FILL_VALUE': 0,
            'ITERATIONS': 10,
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }, context=context, feedback=feedback)['OUTPUT']
        
        # Step 2: DEM smoothing for noise reduction
        feedback.setCurrentStep(1)
        smoothed_dem = processing.run('gdal:gaussianfilter', {
            'INPUT': filled_dem,
            'BAND': 1,
            'RADIUS': 3,
            'SIGMA': 1,
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }, context=context, feedback=feedback)['OUTPUT']
        
        # Step 3: Burn water bodies into DEM
        feedback.setCurrentStep(2)
        hydro_dem = processing.run('gdal:rasterize', {
            'INPUT': parameters['waterbodies'],
            'FIELD': '',
            'BURN': 0,
            'UNITS': 1,
            'WIDTH': 0,
            'HEIGHT': 0,
            'EXTENT': smoothed_dem,
            'NODATA': 0,
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }, context=context, feedback=feedback)['OUTPUT']
        
        # Step 4: Terrain Enhancement via Multidirectional Hillshade
        feedback.setCurrentStep(3)
        hillshade = processing.run('native:hillshade', {
            'INPUT': hydro_dem,
            'Z_FACTOR': 1.5,
            'AZIMUTH': 315,
            'V_ANGLE': 40,
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }, context=context, feedback=feedback)['OUTPUT']
        
        # Step 5: Final DEM enhancement and export
        feedback.setCurrentStep(6)
        enhanced_dem = processing.run('gdal:rastercalculator', {
            'INPUT_A': hydro_dem,
            'BAND_A': 1,
            'INPUT_B': hillshade,
            'BAND_B': 1,
            'FORMULA': 'A + (B * 0.05)',
            'OUTPUT': parameters['enhanced_dem']
        }, context=context, feedback=feedback)['OUTPUT']
        
        results['enhanced_dem'] = enhanced_dem
        return results`}
                    </pre>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="kaal-card p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Layers className="h-5 w-5 text-kaal-green mr-2" />
                    Rendering Technology
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>Engine:</strong> Unreal Engine 5.3+ with Nanite virtualized geometry and Lumen global illumination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>Geometry:</strong> Dynamic LOD system with sub-pixel detail preservation and ~100M triangles per frame</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>Materials:</strong> PBR pipeline with virtual texturing for 8K textures and multi-layer terrain blending</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>Lighting:</strong> Physical sky model with atmospheric scattering and accurate celestial positioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>Post-FX:</strong> Temporal AA, ACES tone mapping, and military-grade color grading</span>
                    </li>
                  </ul>
                </div>
                
                <div className="kaal-card p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Monitor className="h-5 w-5 text-kaal-blue mr-2" />
                    Display System
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>LED Wall:</strong> 8192 × 3072 pixels (8K × 3K) with 1.5mm pixel pitch and 5000:1 contrast</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>Hardware:</strong> Dual NVIDIA RTX A6000 GPUs with NVLink and 48GB VRAM each</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>Projection:</strong> 6× Sony VPL-GTZ380 with camera-based alignment and edge blending</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>Audio:</strong> 7.1.4 Dolby Atmos surround with 16 addressable zones and DSP room correction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>Cooling:</strong> Liquid cooling with redundant pumps, heat exchangers, and thermal throttling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="rendering">
            <div className="space-y-8">
              {/* Rendering content - simplified for brevity */}
              <EnvironmentalFX />
            </div>
          </TabsContent>
          
          <TabsContent value="hardware">
            <div className="space-y-8">
              {/* Hardware content - simplified for brevity */}
              <DiagnosticsPanel />
            </div>
          </TabsContent>
          
          <TabsContent value="fx">
            <div className="space-y-8">
              {/* FX content - simplified for brevity */}
              <ControlSystem />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default TerrainSimulationDetails;

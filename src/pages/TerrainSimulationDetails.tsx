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

const TerrainSimulationDetails = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);

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
                
                <div className="relative h-64 border border-border rounded-lg bg-card/50 overflow-hidden p-4">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <line
                      x1="10%"
                      y1="50%"
                      x2="30%"
                      y2="50%"
                      stroke="rgba(128, 128, 128, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="30%"
                      y1="50%"
                      x2="50%"
                      y2="50%"
                      stroke="rgba(128, 128, 128, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="50%"
                      y1="50%"
                      x2="70%"
                      y2="50%"
                      stroke="rgba(128, 128, 128, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="70%"
                      y1="50%"
                      x2="90%"
                      y2="50%"
                      stroke="rgba(128, 128, 128, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>

                  <div className="flex justify-between items-center h-full relative z-10">
                    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-kaal-blue/20 border-2 border-kaal-blue">
                      <Map className="h-6 w-6 text-kaal-blue" />
                      <div className="text-xs font-medium mt-1">DEM Data</div>
                      <div className="text-[10px] text-muted-foreground">GeoTIFF</div>
                    </div>
                    
                    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
                      <Layers className="h-6 w-6 text-kaal-green" />
                      <div className="text-xs font-medium mt-1">QGIS Processing</div>
                      <div className="text-[10px] text-muted-foreground">GeoJSON</div>
                    </div>
                    
                    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
                      <Map className="h-6 w-6 text-kaal-yellow" />
                      <div className="text-xs font-medium mt-1">Cesium</div>
                      <div className="text-[10px] text-muted-foreground">3D Tiles</div>
                    </div>
                    
                    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
                      <Cpu className="h-6 w-6 text-kaal-red" />
                      <div className="text-xs font-medium mt-1">UE5 Engine</div>
                      <div className="text-[10px] text-muted-foreground">UASSET</div>
                    </div>
                    
                    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
                      <Monitor className="h-6 w-6 text-kaal-blue" />
                      <div className="text-xs font-medium mt-1">LED Wall</div>
                      <div className="text-[10px] text-muted-foreground">8K Display</div>
                    </div>
                  </div>
                </div>
                
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
            <div className="space-y-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold text-center">Rendering Technology</h2>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Layers className="h-5 w-5 text-kaal-green mr-2" />
                  Unreal Engine 5 Rendering Pipeline
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Nanite Virtualized Geometry</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Micropolygons:</strong> Sub-pixel geometry detail</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Memory:</strong> 2-3MB per km² of terrain</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>LOD System:</strong> View-dependent geometry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Triangle Count:</strong> ~100M triangles per frame</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Caching:</strong> Cluster-based geometry storage</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Lumen Global Illumination</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Lighting:</strong> Real-time global illumination</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Reflections:</strong> Screen space + traced fallbacks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Time-of-Day:</strong> Dynamic sun with atmospheric scattering</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Shadows:</strong> Virtual Shadow Maps with cascades</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Occlusion:</strong> Dynamic multi-bounce occlusion</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Material System</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>PBR Pipeline:</strong> Physically based rendering with metallic workflow</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Terrain Materials:</strong> Multi-layer blending with height-based transitions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Virtual Texturing:</strong> Streaming texture data for 8K textures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Tessellation:</strong> Displacement mapping for close-up terrain detail</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Material Instances:</strong> 50+ terrain material variations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Post-Processing Pipeline</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>Temporal AA:</strong> 8x temporal upsampling with anti-ghosting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>Bloom:</strong> HDR light scattering with threshold control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>Tone Mapping:</strong> ACES filmic curve with custom LUTs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>Depth of Field:</strong> Bokeh DOF for distance visualization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>Color Grading:</strong> Military-grade color schemes</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Collapsible className="mt-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      UE5 Scene Configuration
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-muted/10 rounded-md border border-muted/30">
                    <pre className="text-xs text-muted-foreground overflow-x-auto">
{`// UE5 Project Settings for Terrain Rendering (pseudocode)

// Engine.ini configuration
[/Script/Engine.RendererSettings]
r.NaniteForcedPerPixelShading=1
r.Nanite.ProjectEnabled=1
r.Lumen.DiffuseIndirect.Allow=1
r.Lumen.TraceMeshSDFs=1
r.SkinCache.CompileShaders=1
r.RayTracing.Shadows=1
r.RayTracing.Skylight=1
r.VirtualTextures=1
r.VT.Borders=0

[/Script/RenderSettings]
r.Shadow.Virtual.Enable=1
r.Shadow.Virtual.MaxPhysicalPages=8192
r.Streaming.PoolSize=16000
r.Streaming.MaxEffectiveScreenSize=0

// Cesium Integration
[/Script/CesiumRuntime.CesiumRuntimeSettings]
DefaultIonAccessToken=*****REDACTED*****
DefaultIonAssetID=2275207
RequestsPerCachePrune=10000
MaximumSimultaneousDownloads=32
LogGeometryDecoding=False
UseDefaultGeoreference=True

// Post-processing settings
[PostProcessVolume]
Settings=(
    bOverride_FilmGrainIntensity=True,
    FilmGrainIntensity=0.1,
    bOverride_VignetteIntensity=True,
    VignetteIntensity=0.2,
    bOverride_AutoExposureBias=True,
    AutoExposureBias=0.5,
    bOverride_BloomIntensity=True,
    BloomIntensity=0.7,
    bOverride_AmbientOcclusionIntensity=True,
    AmbientOcclusionIntensity=0.8,
    bOverride_MotionBlurAmount=True,
    MotionBlurAmount=0.3
)

// World composition settings
[WorldSettings]
bEnableWorldComposition=True
bEnableWorldOriginRebasing=True
WorldOriginLocationThreshold=1000000.0
WorldOriginRebasing=Rebase_TopLeft

// Terrain material instance parameters
[TerrainMaterialInstance]
TerrainHeightMin=-500.0
TerrainHeightMax=9000.0
SlopeBlendMin=0.2
SlopeBlendMax=0.6
SnowHeight=2000.0
SnowSlopeThreshold=0.7
GrassHeight=1800.0
SandHeight=5.0
RockErosion=0.8
DetailNormalStrength=0.7
MacroVariation=0.4
MicroDetailScale=1000.0`}
                    </pre>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Monitor className="h-5 w-5 text-kaal-blue mr-2" />
                  Performance Optimizations
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/20 backdrop-blur-sm rounded p-3">
                    <h6 className="text-sm font-medium">Occlusion Culling</h6>
                    <p className="text-xs text-muted-foreground mt-1">
                      Hierarchical Z-buffer with software occlusion culling for distant terrain features
                    </p>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-sm rounded p-3">
                    <h6 className="text-sm font-medium">DLSS/FSR Integration</h6>
                    <p className="text-xs text-muted-foreground mt-1">
                      AI upscaling for 60+ FPS at native 8K resolution with 4K render target
                    </p>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-sm rounded p-3">
                    <h6 className="text-sm font-medium">Multi-GPU Rendering</h6>
                    <p className="text-xs text-muted-foreground mt-1">
                      Alternate Frame Rendering with frame interleaving for dual-GPU setup with NVLink
                    </p>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-sm rounded p-3">
                    <h6 className="text-sm font-medium">Mesh Instancing</h6>
                    <p className="text-xs text-muted-foreground mt-1">
                      Hardware instancing for vegetation and debris with custom culling distances
                    </p>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-sm rounded p-3">
                    <h6 className="text-sm font-medium">Shadow Optimization</h6>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cascaded shadow maps with distance-based quality degradation and caching
                    </p>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-sm rounded p-3">
                    <h6 className="text-sm font-medium">Frame Pacing</h6>
                    <p className="text-xs text-muted-foreground mt-1">
                      Adaptive V-Sync with triple buffering and input lag compensation
                    </p>
                  </div>
                </div>
                
                <div className="bg-muted/10 p-4 rounded-md border border-muted/30 mt-6">
                  <h5 className="font-medium mb-3">Performance Targets</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="border-b border-muted">
                        <tr>
                          <th className="text-left py-2">Configuration</th>
                          <th className="text-center py-2">Resolution</th>
                          <th className="text-center py-2">Frame Rate</th>
                          <th className="text-center py-2">Features</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-muted/30">
                          <td className="py-2">Standard</td>
                          <td className="text-center">8K (Native)</td>
                          <td className="text-center">60+ FPS</td>
                          <td className="text-center">All enabled</td>
                        </tr>
                        <tr className="border-b border-muted/30">
                          <td className="py-2">High Detail</td>
                          <td className="text-center">8K (DLSS from 4K)</td>
                          <td className="text-center">90+ FPS</td>
                          <td className="text-center">All enabled</td>
                        </tr>
                        <tr className="border-b border-muted/30">
                          <td className="py-2">Maximum Performance</td>
                          <td className="text-center">8K (DLSS from 1440p)</td>
                          <td className="text-center">120+ FPS</td>
                          <td className="text-center">Reduced shadows</td>
                        </tr>
                        <tr>
                          <td className="py-2">Fallback Mode</td>
                          <td className="text-center">4K</td>
                          <td className="text-center">60+ FPS</td>
                          <td className="text-center">Single GPU</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="hardware">
            <div className="space-y-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold text-center">Hardware Architecture</h2>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Cpu className="h-5 w-5 text-kaal-green mr-2" />
                  System Architecture
                </h3>
                
                <div className="relative">
                  <div className="h-64 border border-border rounded-lg bg-card/50 overflow-hidden">
                    <svg viewBox="0 0 1000 500" className="w-full h-full">
                      {/* Background grid */}
                      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(76, 175, 80, 0.1)" strokeWidth="1"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* Render Server */}
                      <g>
                        <rect x="100" y="175" width="240" height="150" rx="10" fill="#1A1F2C" stroke="#4CAF50" strokeWidth="2"/>
                        <text x="220" y="160" fill="white" fontSize="16" textAnchor="middle">Render Server</text>
                        
                        {/* CPUs */}
                        <rect x="130" y="200" width="80" height="40" rx="5" fill="#121520" stroke="#3F51B5" strokeWidth="1"/>
                        <text x="170" y="225" fill="white" fontSize="12" textAnchor="middle">CPU</text>
                        
                        {/* GPUs */}
                        <rect x="230" y="200" width="80" height="40" rx="5" fill="#121520" stroke="#F44336" strokeWidth="1"/>
                        <text x="270" y="225" fill="white" fontSize="12" textAnchor="middle">GPU</text>
                        
                        {/* RAM */}
                        <rect x="130" y="260" width="180" height="30" rx="5" fill="#121520" stroke="#FFC107" strokeWidth="1"/>
                        <text x="220" y="280" fill="white" fontSize="12" textAnchor="middle">RAM</text>
                      </g>
                      
                      {/* LED Wall Controller */}
                      <g>
                        <rect x="460" y="175" width="240" height="150" rx="10" fill="#1A1F2C" stroke="#4CAF50" strokeWidth="2"/>
                        <text x="580" y="160" fill="white" fontSize="16" textAnchor="middle">LED Wall Controller</text>
                        
                        {/* Video Processor */}
                        <rect x="490" y="200" width="180"

</initial_code>

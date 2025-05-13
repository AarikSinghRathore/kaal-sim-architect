
import React, { useState } from 'react';
import { 
  Mountain, 
  Cloud, 
  Cpu, 
  Tablet,
  Map,
  Moon,
  CloudFog,
  IterationCcw,
} from 'lucide-react';
import ViewToggle from '@/components/ui/ViewToggle';

const TerrainSimulation = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);

  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center gap-6">
        <div className="kaal-badge-secondary">Terrain Engine</div>
        <h2 className="text-3xl font-bold text-center">Terrain Simulation Engine</h2>
        <ViewToggle 
          isTechnicalView={isTechnicalView}
          setIsTechnicalView={setIsTechnicalView}
          className="max-w-sm mx-auto"
        />
      </div>

      <div className="mt-8">
        {isTechnicalView ? <TechnicalView /> : <NonTechnicalView />}
      </div>
    </div>
  );
};

const TechnicalView = () => {
  return (
    <div className="space-y-12 opacity-0 animate-fade-in">
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Cpu className="h-5 w-5 text-kaal-blue mr-2" />
          Core Engine
        </h3>
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Unreal Engine 5 + Cesium</h4>
              <p className="text-sm text-muted-foreground">
                Custom-modified Unreal Engine 5.2 implementation with integrated Cesium for geospatial capabilities. Features optimized rendering pipeline for real-time terrain manipulation with hardware-accelerated geospatial data processing.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Nanite for Dense Geometry Rendering</h4>
              <p className="text-sm text-muted-foreground">
                Leverages Nanite virtualized micropolygon system for sub-centimeter terrain detail. Implements dynamic level of detail with priority rendering for operational areas and optimized memory management for large-scale terrain datasets.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Lumen for Real-Time Lighting & Shadows</h4>
              <p className="text-sm text-muted-foreground">
                Fully dynamic global illumination system with realistic shadow casting for time-of-day simulation. Includes atmospheric scattering model for accurate long-distance visibility assessment and infrared/night vision simulation capabilities.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">DEM Preprocessing Pipeline</h4>
              <p className="text-sm text-muted-foreground">
                Custom-built pipeline utilizing QGIS for initial data preparation and Mapbox for tiled delivery. Features automatic terrain enhancement using AI upsampling for areas with limited survey data and seamless integration of classified terrain intelligence.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Custom HLSL Shaders</h4>
              <p className="text-sm text-muted-foreground">
                Proprietary shader library for environmental effects including volumetric fog, dust, precipitation, and thermal gradients. Implements physics-based rendering with material-specific properties for different terrain types and conditions.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-muted">
              <h5 className="text-sm font-medium mb-2">System Requirements</h5>
              <pre className="text-xs text-muted-foreground overflow-x-auto">
{`Component         | Minimum Spec                | Recommended Spec
------------------+-----------------------------+-------------------------
CPU               | Intel i7-9700 / AMD R7 3700X| Intel i9-12900K / AMD R9 5950X
GPU               | NVIDIA RTX 3060 / AMD 6700XT| NVIDIA RTX 4080 / AMD 7900XT
RAM               | 32 GB                       | 64 GB
Storage           | 1 TB NVMe SSD               | 2 TB NVMe SSD
Network           | 1 Gbps Ethernet             | 10 Gbps Ethernet
Operating System  | Windows 11 Pro              | Windows 11 Pro
Projection System | 4K @ 60 Hz                  | 8K @ 120 Hz`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Mountain className="h-5 w-5 text-kaal-green mr-2" />
          Holographic Projection
        </h3>
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">LED Floor + Standing Projection System</h4>
              <p className="text-sm text-muted-foreground">
                Ultra-high-resolution (8K) modular LED floor panels with 120Hz refresh rate and HDR10+ color reproduction. Complemented by six 4K short-throw laser projectors with automatic calibration for vertical element visualization and seamless edge blending.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Tree/Mountain Projections</h4>
              <p className="text-sm text-muted-foreground">
                Volumetric mapping system using depth cameras and real-time projection adjustment. Features automated registration with physical terrain model and dynamic shadow casting to enhance physical model features with projected details.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Control via Tablet</h4>
              <p className="text-sm text-muted-foreground">
                iPad Pro with custom application providing multitouch gesture control of terrain features. Includes object placement, scaling, and terrain deformation tools with haptic feedback and position-aware interface elements when moving within the simulation space.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-muted">
              <h5 className="text-sm font-medium mb-2">Projection Technical Specifications</h5>
              <pre className="text-xs text-muted-foreground overflow-x-auto">
{`Feature             | Specification
--------------------+--------------------------------------------
Display Resolution  | 15360 x 8640 pixels (combined floor/wall)
Pixel Density       | 1.5mm pitch (ground) / 2.0mm pitch (walls)
Brightness          | 2,500 nits (floor) / 5,000 lumens (proj.)
Contrast Ratio      | 5000:1 (floor) / 2000:1 (projectors)
Color Accuracy      | 100% Rec.2020 color space
Refresh Rate        | 120 Hz with adaptive sync
Latency             | < 8.3ms total system latency
Calibration         | Automatic daily with IR camera array`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Tablet className="h-5 w-5 text-kaal-blue mr-2" />
          Control Interface
        </h3>
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Real-Time Terrain Change</h4>
              <p className="text-sm text-muted-foreground">
                Geography selection system with access to global terrain database (500+ pre-loaded regions). Features instantaneous terrain swapping with morphing transition effects and preservation of placed assets during terrain changes where possible.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Interactive Environment Controls</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive environment parameter control including:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2 space-y-1">
                <li>Time of day with accurate sun/moon positioning</li>
                <li>Weather conditions (precipitation, cloud cover, fog density)</li>
                <li>Seasonal variations affecting vegetation and water bodies</li>
                <li>Urban structure density and damage states</li>
                <li>Dynamic water level for flood/drought simulation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Embedded Mission Logic</h4>
              <p className="text-sm text-muted-foreground">
                Scenario editor with trigger system for event sequencing and conditional responses. Includes AI-driven threat simulation with configurable behavior patterns and integration with AAR (After Action Review) system for performance evaluation.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-muted">
              <h5 className="text-sm font-medium mb-2">Command Script Example</h5>
              <pre className="text-xs text-muted-foreground overflow-x-auto">
{`// Sample terrain control script
ScenarioManager.loadTerrain("Khyber_Pass_v3");
TimeController.setTimeOfDay(6, 30);  // 06:30 hours
WeatherSystem.setConditions({
  cloudCover: 0.4,      // 40% cloud cover
  fogDensity: 0.15,     // light mountain fog
  precipitation: 0,     // no rain
  windSpeed: 5.2,       // 5.2 m/s wind speed
  windDirection: 230    // from southwest
});

// Set up opposition forces
AIDirector.spawnUnit({
  type: "infantry_squad", 
  position: {x: 1250, y: 890, z: 320},
  behavior: "defensive_perimeter",
  alertness: "aware"     // not expecting attack but vigilant
});

// Create a trigger zone
TriggerSystem.createZone({
  id: "ambush_trigger",
  position: {x: 950, y: 760, z: 280},
  radius: 50,
  onEnter: function(entity) {
    if(entity.isPlayerControlled()) {
      AIDirector.setUnitBehavior("infantry_squad", "aggressive");
      WeatherSystem.transitionTo({fogDensity: 0.5}, 30); // fog thickens in 30s
    }
  }
});`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const NonTechnicalView = () => {
  return (
    <div className="space-y-10 opacity-0 animate-fade-in">
      <div className="kaal-card p-8 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-kaal-blue/20 flex items-center justify-center">
            <Mountain className="h-12 w-12 text-kaal-blue" />
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4">Realistic Terrain At Your Command</h3>
        <p className="text-muted-foreground">
          Experience terrain as if you're there in real life, with intuitive controls to adapt the environment to your training needs.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-x-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
              <Map className="h-8 w-8 text-kaal-green" />
            </div>
            <h4 className="font-medium">Real-World Terrain</h4>
            <p className="text-xs text-muted-foreground mt-2">
              Accurate topography from anywhere on Earth
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
              <Cloud className="h-8 w-8 text-kaal-blue" />
            </div>
            <h4 className="font-medium">Dynamic Environment</h4>
            <p className="text-xs text-muted-foreground mt-2">
              Control weather, time of day, and conditions
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
              <Tablet className="h-8 w-8 text-kaal-yellow" />
            </div>
            <h4 className="font-medium">Simple Controls</h4>
            <p className="text-xs text-muted-foreground mt-2">
              Easy tablet interface for all team members
            </p>
          </div>
        </div>
      </div>

      <section className="kaal-card p-6">
        <h3 className="text-xl font-semibold mb-6 text-center">Environment Controls</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-muted/20 p-4 rounded-md border border-muted/50 hover:border-kaal-blue/50 transition-colors">
            <div className="flex flex-col items-center">
              <Moon className="h-8 w-8 text-kaal-blue mb-2" />
              <h4 className="font-medium">Night View</h4>
              <p className="text-xs text-muted-foreground mt-1 text-center">
                Train for night operations with accurate starlight and moonlight
              </p>
            </div>
          </div>
          
          <div className="bg-muted/20 p-4 rounded-md border border-muted/50 hover:border-kaal-blue/50 transition-colors">
            <div className="flex flex-col items-center">
              <CloudFog className="h-8 w-8 text-kaal-blue mb-2" />
              <h4 className="font-medium">Foggy Mode</h4>
              <p className="text-xs text-muted-foreground mt-1 text-center">
                Simulate reduced visibility conditions and fog of war
              </p>
            </div>
          </div>
          
          <div className="bg-muted/20 p-4 rounded-md border border-muted/50 hover:border-kaal-blue/50 transition-colors">
            <div className="flex flex-col items-center">
              <IterationCcw className="h-8 w-8 text-kaal-blue mb-2" />
              <h4 className="font-medium">Enemy AI Path</h4>
              <p className="text-xs text-muted-foreground mt-1 text-center">
                Visualize enemy movement and patrol routes across terrain
              </p>
            </div>
          </div>
          
          <div className="bg-muted/20 p-4 rounded-md border border-muted/50 hover:border-kaal-blue/50 transition-colors">
            <div className="flex flex-col items-center">
              <Mountain className="h-8 w-8 text-kaal-blue mb-2" />
              <h4 className="font-medium">Terrain Types</h4>
              <p className="text-xs text-muted-foreground mt-1 text-center">
                Switch between desert, mountain, urban, and jungle environments
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-muted/10 rounded-md border border-muted/30">
          <h4 className="font-medium mb-2 text-center">Interactive Terrain Control</h4>
          <div className="relative h-40 rounded-lg overflow-hidden bg-gradient-to-b from-kaal-navy to-kaal-blue/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-white">Tap to rotate terrain</p>
                <p className="text-xs text-white/70 mt-1">Pinch to zoom in and out</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-1 text-xs text-white flex items-center">
                <Tablet className="h-3 w-3 mr-1" />
                <span>Drag finger to modify terrain</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TerrainSimulation;

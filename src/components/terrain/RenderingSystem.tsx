
import React from 'react';
import { Layers, Cpu } from 'lucide-react';

const RenderingSystem = () => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Unreal Engine 5 Rendering Pipeline</h4>
      <p className="text-muted-foreground mb-6">
        High-fidelity visualization using cutting-edge rendering technology with Nanite and Lumen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
          <h5 className="font-medium mb-2 flex items-center">
            <Layers className="h-4 w-4 text-kaal-green mr-2" />
            Nanite Virtualized Geometry
          </h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="text-kaal-green mr-2">•</span>
              <span><strong>Micropolygon Rendering:</strong> Sub-pixel geometry detail</span>
            </li>
            <li className="flex items-start">
              <span className="text-kaal-green mr-2">•</span>
              <span><strong>Memory Footprint:</strong> 2-3MB per km² of terrain</span>
            </li>
            <li className="flex items-start">
              <span className="text-kaal-green mr-2">•</span>
              <span><strong>LOD System:</strong> Dynamic view-dependent geometry</span>
            </li>
            <li className="flex items-start">
              <span className="text-kaal-green mr-2">•</span>
              <span><strong>Triangle Budget:</strong> ~100M triangles per frame</span>
            </li>
            <li className="flex items-start">
              <span className="text-kaal-green mr-2">•</span>
              <span><strong>Caching:</strong> Cluster-based geometry storage</span>
            </li>
          </ul>
        </div>

        <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
          <h5 className="font-medium mb-2 flex items-center">
            <Cpu className="h-4 w-4 text-kaal-blue mr-2" />
            Lumen Global Illumination
          </h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="text-kaal-blue mr-2">•</span>
              <span><strong>Dynamic Lighting:</strong> Real-time global illumination</span>
            </li>
            <li className="flex items-start">
              <span className="text-kaal-blue mr-2">•</span>
              <span><strong>Reflection System:</strong> Screen space + traced fallbacks</span>
            </li>
            <li className="flex items-start">
              <span className="text-kaal-blue mr-2">•</span>
              <span><strong>Time-of-Day:</strong> Dynamic sun/moon with atmospheric scattering</span>
            </li>
            <li className="flex items-start">
              <span className="text-kaal-blue mr-2">•</span>
              <span><strong>Shadow System:</strong> Virtual Shadow Maps with cascades</span>
            </li>
            <li className="flex items-start">
              <span className="text-kaal-blue mr-2">•</span>
              <span><strong>Ambient Occlusion:</strong> Dynamic multi-bounce occlusion</span>
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
              <span><strong>Color Grading:</strong> Military-grade color schemes for different environments</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-muted/10 p-4 rounded-md border border-muted/30">
        <h5 className="font-medium mb-2">Performance Optimizations</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/20 backdrop-blur-sm rounded p-3">
            <h6 className="text-sm font-medium">Occlusion Culling</h6>
            <p className="text-xs text-muted-foreground mt-1">
              Hierarchical Z-buffer with software occlusion culling for distant terrain
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
              AFR with frame interleaving for dual-GPU setup with NVLink
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderingSystem;

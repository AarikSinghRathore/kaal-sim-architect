
import React, { useState } from 'react';
import FlowchartNode from './FlowchartNode';
import { Layers, Cloud, Monitor, FileImage, Zap, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NodeData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: React.ReactNode;
}

const UERenderFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const nodes: NodeData[] = [
    {
      id: 'cesium',
      title: 'Cesium 3D Tiles',
      description: 'Data source',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">3D Tiles Integration</h4>
          <ul className="text-sm space-y-1">
            <li>• CesiumForUnreal plugin v1.25.0+</li>
            <li>• Tile format: glTF-based 3D Tiles</li>
            <li>• View-dependent streaming</li>
            <li>• Adaptive LOD system</li>
            <li>• Geographic coordinate transformation</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Blueprint Integration</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div className="mb-1"><strong>Asset:</strong> CesiumGeoreference, CesiumSunSky</div>
              <div className="mb-1"><strong>Origin:</strong> WGS84 coordinates</div>
              <div><strong>API:</strong> ion REST API with access token</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'nanite',
      title: 'Nanite Landscape Mesh',
      description: 'Virtualized geometry',
      icon: <Layers className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Nanite Technical Details</h4>
          <ul className="text-sm space-y-1">
            <li>• Micropolygon rendering system</li>
            <li>• Sub-pixel geometry detail</li>
            <li>• Near-lossless geometry compression</li>
            <li>• Memory footprint: 2-3MB per km²</li>
            <li>• ~100M triangles per frame</li>
            <li>• Cluster-based culling system</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Performance Specs</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div className="mb-1"><strong>Triangle budget:</strong> 100M+ per frame</div>
              <div className="mb-1"><strong>Draw calls:</strong> 2,500-5,000</div>
              <div><strong>Cluster visibility:</strong> Hardware accelerated</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'megascans',
      title: 'Quixel Megascan Materials',
      description: 'PBR textures',
      icon: <FileImage className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Material Library</h4>
          <ul className="text-sm space-y-1">
            <li>• Photogrammetry-captured materials</li>
            <li>• Texture resolution: up to 8K</li>
            <li>• Full PBR workflow (Base Color, Normal, Roughness, etc.)</li>
            <li>• Terrain-specific material collection</li>
            <li>• Environmental material variations</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Material Layers</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs grid grid-cols-2 gap-x-4 gap-y-1">
              <div><strong>Snow:</strong> 4 variants</div>
              <div><strong>Rock:</strong> 12 variants</div>
              <div><strong>Sand:</strong> 6 variants</div>
              <div><strong>Soil:</strong> 8 variants</div>
              <div><strong>Grass:</strong> 10 variants</div>
              <div><strong>Forest:</strong> 5 variants</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'texture',
      title: 'Runtime Virtual Textures',
      description: 'Texture streaming',
      icon: <FileImage className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Virtual Texturing System</h4>
          <ul className="text-sm space-y-1">
            <li>• Runtime Virtual Texture (RVT) system</li>
            <li>• On-demand texture page loading</li>
            <li>• GPU-accelerated layer blending</li>
            <li>• Height/slope-based transitions</li>
            <li>• Dynamic normal map generation</li>
          </ul>
          
          <pre className="text-xs bg-muted p-2 rounded mt-2">
{`// RVT Configuration
Engine.ini:
[SystemSettings]
r.VirtualTextures=1
r.VirtualTexturedLightmaps=1
r.VirtualTextureMemoryBudget=2048
r.VT.TileSize=256
r.VT.TileBorderSize=4
r.VT.UploadAll=0
r.VT.Priority=1`}
          </pre>
        </div>
      )
    },
    {
      id: 'lumen',
      title: 'Lumen Lighting + Fog FX',
      description: 'Global illumination',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Lighting System</h4>
          <ul className="text-sm space-y-1">
            <li>• Real-time global illumination</li>
            <li>• Software ray tracing with hybrid solution</li>
            <li>• Screen space reflections with trace fallbacks</li>
            <li>• Virtual Shadow Maps (VSM) with cascades</li>
            <li>• Volumetric fog with height-based density</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Atmospheric Effects</h5>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-muted/20 p-2 rounded-md text-xs">
                <div className="font-medium">Sky System</div>
                <ul className="space-y-1 mt-1">
                  <li>• Real-time day/night cycle</li>
                  <li>• Accurate celestial positioning</li>
                  <li>• Physical sun intensity model</li>
                </ul>
              </div>
              <div className="bg-muted/20 p-2 rounded-md text-xs">
                <div className="font-medium">Weather Effects</div>
                <ul className="space-y-1 mt-1">
                  <li>• Volumetric clouds</li>
                  <li>• Precipitation systems</li>
                  <li>• Dynamic weather transitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ledwall',
      title: 'Render to LED Wall',
      description: 'Display output',
      icon: <Monitor className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Display System</h4>
          <ul className="text-sm space-y-1">
            <li>• LED wall: 8K × 3K resolution (8192 × 3072px)</li>
            <li>• 1.5mm pixel pitch (ultra-fine)</li>
            <li>• 2500 nits brightness</li>
            <li>• 5000:1 contrast ratio</li>
            <li>• 120Hz refresh rate</li>
            <li>• HDR10+ support with 10-bit color depth</li>
          </ul>
          
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="bg-muted/20 p-2 rounded-md text-xs">
              <div className="font-medium">Rendering Pipeline</div>
              <ul className="space-y-1 mt-1">
                <li>• DLSS/FSR AI upscaling</li>
                <li>• Dual NVIDIA RTX A6000 (48GB VRAM each)</li>
                <li>• Multi-GPU with NVLink</li>
                <li>• Frame sync via NVIDIA Quadro Sync II</li>
              </ul>
            </div>
            <div className="bg-muted/20 p-2 rounded-md text-xs">
              <div className="font-medium">Panel Hardware</div>
              <ul className="space-y-1 mt-1">
                <li>• Modular LED cabinets (500×500mm)</li>
                <li>• Redundant power supplies</li>
                <li>• Liquid cooling system</li>
                <li>• Emergency backup power</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
  ];

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(nodeId === activeNode ? null : nodeId);
  };

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-center">Unreal Engine Render Flow</h3>
      
      <div className="relative">
        <div className="flex flex-col items-center space-y-6">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.slice(0, -1).map((_, index) => (
              <line
                key={`line-${index}`}
                x1="50%"
                y1={`${8 + (index * 15)}%`}
                x2="50%"
                y2={`${15 + (index * 15)}%`}
                stroke={activeNode ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
                strokeWidth="2"
                strokeDasharray={activeNode ? "none" : "5,5"}
                className={cn(activeNode && "animate-pulse")}
              />
            ))}
          </svg>
          
          {/* Nodes */}
          {nodes.map((node, index) => (
            <FlowchartNode
              key={node.id}
              id={node.id}
              title={node.title}
              description={node.description}
              icon={node.icon}
              color={node.color}
              isActive={activeNode === node.id}
              onClick={() => handleNodeClick(node.id)}
              className="w-64 z-10"
              tooltipContent={node.details}
            />
          ))}
        </div>
      </div>
      
      {/* Details panel */}
      {activeNode && (
        <div className="mt-4">
          <div className={`kaal-card p-4 border border-${nodes.find(n => n.id === activeNode)?.color || 'border'}/50 bg-${nodes.find(n => n.id === activeNode)?.color || 'card'}/5`}>
            {nodes.find(n => n.id === activeNode)?.details}
          </div>
        </div>
      )}
    </div>
  );
};

export default UERenderFlowchart;

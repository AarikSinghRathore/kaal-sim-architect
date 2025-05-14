
import React, { useState } from 'react';
import FlowchartNode from './FlowchartNode';
import { Map, Layers, Database, Cloud, Cpu, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

interface NodeData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: React.ReactNode;
}

const TerrainDataFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const nodes: NodeData[] = [
    {
      id: 'dem',
      title: 'DEM (GeoTIFF)',
      description: 'Source data',
      icon: <Map className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Digital Elevation Model</h4>
          <ul className="text-sm space-y-1">
            <li>• 32-bit float GeoTIFF format</li>
            <li>• Resolution: SRTM (30m) / ALOS (5m)</li>
            <li>• Coordinate system: EPSG:4326 (WGS84)</li>
            <li>• Vertical datum: EGM96</li>
            <li>• Sources: USGS, NASA, JAXA</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">File Specifications</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div><strong>Format:</strong> GeoTIFF</div>
              <div><strong>Size:</strong> ~500MB per 1° tile</div>
              <div><strong>Bit depth:</strong> 32-bit float</div>
              <div><strong>Height range:</strong> -500m to 9,000m</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'qgis',
      title: 'QGIS Preprocessing',
      description: 'Data preparation',
      icon: <Layers className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">QGIS Processing Pipeline</h4>
          <ul className="text-sm space-y-1">
            <li>• Void filling and noise reduction</li>
            <li>• Reprojection: EPSG:4326 → EPSG:3857</li>
            <li>• Clipping to area of interest</li>
            <li>• DEM smoothing (Gaussian filter)</li>
            <li>• Water body burning</li>
            <li>• Hillshade generation</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Pipeline Steps</h5>
            <ol className="list-decimal ml-4 text-xs mt-1">
              <li>Fill nodata voids</li>
              <li>Apply Gaussian smoothing (σ=1)</li>
              <li>Burn vector water bodies to DEM</li>
              <li>Generate multidirectional hillshade</li>
              <li>Export for Mapbox processing</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'mapbox',
      title: 'Mapbox Tile Conversion',
      description: 'Tiling system',
      icon: <Map className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Mapbox Terrain Processing</h4>
          <ul className="text-sm space-y-1">
            <li>• Terrain-RGB encoding (height to RGB values)</li>
            <li>• Quadtree tiling structure</li>
            <li>• Zoom levels 0-15</li>
            <li>• 12-bit elevation encoding</li>
            <li>• Vector overlay integration</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Tile Format</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div><strong>Structure:</strong> z/x/y.png format</div>
              <div><strong>Encoding:</strong> Height = -10000 + ((R * 256 * 256 + G * 256 + B) * 0.1)</div>
              <div><strong>Cache size:</strong> ~5GB per region</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cesium',
      title: 'Cesium ion Upload',
      description: 'Cloud processing',
      icon: <Cloud className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Cesium ion Integration</h4>
          <ul className="text-sm space-y-1">
            <li>• Cloud-based terrain processing</li>
            <li>• 3D Tiles format conversion</li>
            <li>• Texture and imagery integration</li>
            <li>• World Terrain base layer fusion</li>
            <li>• Asset ID: 2275207 (example)</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">3D Tiles Specification</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div><strong>Format:</strong> glTF-based 3D Tiles</div>
              <div><strong>Structure:</strong> Hierarchical spatial data structure</div>
              <div><strong>Features:</strong> Implicit tiling, quantized-mesh</div>
              <div><strong>Integration:</strong> OGC standard</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tiles',
      title: '3D Tiles Streamed',
      description: 'Data delivery',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Streaming System</h4>
          <ul className="text-sm space-y-1">
            <li>• Progressive loading based on view distance</li>
            <li>• Level-of-detail management</li>
            <li>• 50GB local cache with LRU policy</li>
            <li>• Streaming protocol: HTTP/2</li>
            <li>• Compression: DRACO for mesh, WEBP for textures</li>
          </ul>
          
          <pre className="text-xs bg-muted p-2 rounded mt-2">
{`// Streaming configuration
{
  "type": "3DTILES",
  "url": "https://assets.cesium.com/2275207/tileset.json",
  "maximumScreenSpaceError": 2,
  "preloadAncestors": true,
  "preloadSiblings": false,
  "loadingDescendantLimit": 20,
  "skipLevelOfDetail": true,
  "cacheBytes": 50000000000,
  "maximumSimultaneousRequests": 32
}`}
          </pre>
        </div>
      )
    },
    {
      id: 'ue5',
      title: 'UE5 Terrain Load',
      description: 'Engine import',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">UE5 Integration</h4>
          <ul className="text-sm space-y-1">
            <li>• Cesium for Unreal plugin integration</li>
            <li>• Nanite virtualized geometry conversion</li>
            <li>• Runtime Virtual Texturing for materials</li>
            <li>• Lumen global illumination setup</li>
            <li>• Compute shader terrain modifications</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">UE5 Blueprint Flow</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div className="mb-1">1. CesiumGeoreference → SetOriginLocation</div>
              <div className="mb-1">2. CesiumTerrain → SetTilesetSource</div>
              <div className="mb-1">3. Material Instance → SetTexture Params</div>
              <div className="mb-1">4. World Composition → RegisterGeoreference</div>
              <div>5. Nanite → BuildProxyLOD → GenerateImposters</div>
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
      <h3 className="text-xl font-semibold text-center">Terrain Data Pipeline Flow</h3>
      
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

export default TerrainDataFlowchart;

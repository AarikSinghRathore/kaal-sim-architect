
import React, { useState } from 'react';
import { Mountain, Code, Cpu, Monitor, Map, Database, ArrowRight, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlowNode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: React.ReactNode;
}

interface FlowchartProps {
  type: 'pipeline' | 'render' | 'safety';
}

const DetailedTerrainFlowchart: React.FC<FlowchartProps> = ({ type }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const pipelineNodes: FlowNode[] = [
    {
      id: 'dem',
      title: 'DEM (GeoTIFF)',
      description: 'Raw elevation data',
      icon: <Map className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Digital Elevation Model</h4>
          <ul className="text-sm space-y-1">
            <li>• Source: USGS 3DEP/SRTM/ASTER</li>
            <li>• Resolution: 1-30m/px</li>
            <li>• Format: GeoTIFF (16-bit)</li>
            <li>• Coordinate system: WGS84</li>
            <li>• Typical size: 300MB-2GB</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Sample EPSG code: 4326 (WGS84)<br/>
            Elevation range: -430m to +8,850m
          </div>
        </div>
      )
    },
    {
      id: 'qgis',
      title: 'QGIS Preprocessing',
      description: 'GIS optimization',
      icon: <Code className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Preprocessing Steps</h4>
          <ul className="text-sm space-y-1">
            <li>• Reprojection to Web Mercator (EPSG:3857)</li>
            <li>• Void filling and artifact removal</li>
            <li>• Vertical exaggeration: 1.2x-1.5x</li>
            <li>• Contour extraction (20m intervals)</li>
            <li>• Blending multiple DEM sources</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Tools: GDAL, SAGA GIS, WhiteboxTools<br/>
            Output: Cleaned GeoTIFF + vector data
          </div>
        </div>
      )
    },
    {
      id: 'mapbox',
      title: 'Mapbox Tile Conversion',
      description: 'Data optimization',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Tiling Process</h4>
          <ul className="text-sm space-y-1">
            <li>• Vector tile generation (pbf format)</li>
            <li>• Zoom levels 0-16 generation</li>
            <li>• Terrain-RGB format encoding</li>
            <li>• Vector feature attribution</li>
            <li>• MBTiles package creation</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Tile size: 512×512 pixels<br/>
            LOD levels: 12 (distant) to 16 (close-up)
          </div>
        </div>
      )
    },
    {
      id: 'cesium',
      title: 'Cesium ion Upload',
      description: '3D terrain processing',
      icon: <Cloud className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Cesium Processing</h4>
          <ul className="text-sm space-y-1">
            <li>• 3D Tiles generation</li>
            <li>• Quantized-mesh terrain format</li>
            <li>• Texture mapping and blending</li>
            <li>• Draping imagery over terrain</li>
            <li>• Asset metadata generation</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Output format: glTF 2.0 with extensions<br/>
            Texturing: 0.5m-1m satellite imagery
          </div>
        </div>
      )
    },
    {
      id: 'tiles',
      title: '3D Tiles Streamed',
      description: 'Progressive loading',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Streaming Architecture</h4>
          <ul className="text-sm space-y-1">
            <li>• HTTP/2 multiplexed streaming</li>
            <li>• Dynamic level-of-detail loading</li>
            <li>• View-dependent prioritization</li>
            <li>• Geometry/texture compression</li>
            <li>• Local cache management</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Bandwidth usage: 20-100 MB/km²<br/>
            Cache size: 5-10GB for typical region
          </div>
        </div>
      )
    },
    {
      id: 'ue5',
      title: 'UE5 Terrain Load',
      description: 'Engine integration',
      icon: <Monitor className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">UE5 Integration</h4>
          <ul className="text-sm space-y-1">
            <li>• Cesium for Unreal plugin</li>
            <li>• Nanite terrain conversion</li>
            <li>• Landscape material assignment</li>
            <li>• PBR texture application</li>
            <li>• Collision mesh generation</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Triangle count: 20-80M triangles/km²<br/>
            Material layers: 10-12 per landscape
          </div>
        </div>
      )
    },
  ];
  
  const renderNodes: FlowNode[] = [
    {
      id: 'cesium',
      title: 'Cesium 3D Tiles',
      description: 'Core data source',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Cesium Integration</h4>
          <ul className="text-sm space-y-1">
            <li>• Geodetic coordinate system</li>
            <li>• WGS84 ellipsoid model</li>
            <li>• Runtime LOD streaming</li>
            <li>• Georeferenced position data</li>
            <li>• Quadtree spatial organization</li>
          </ul>
        </div>
      )
    },
    {
      id: 'nanite',
      title: 'Nanite Landscape Mesh',
      description: 'Virtualized geometry',
      icon: <Mountain className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Nanite Details</h4>
          <ul className="text-sm space-y-1">
            <li>• Micropolygon rendering</li>
            <li>• 20 billion polygon scenes</li>
            <li>• Lossless detail preservation</li>
            <li>• Sub-pixel geometry precision</li>
            <li>• Memory-mapped streaming</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Triangle budget: Unlimited (1px triangle size)<br/>
            Compression: 2-5x over raw geometry
          </div>
        </div>
      )
    },
    {
      id: 'quixel',
      title: 'Quixel Megascan Materials',
      description: 'Surface appearance',
      icon: <Map className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Material System</h4>
          <ul className="text-sm space-y-1">
            <li>• 8K PBR texture sets</li>
            <li>• Photogrammetry-based surfaces</li>
            <li>• Dynamic surface blending</li>
            <li>• Slope/altitude-based distribution</li>
            <li>• Vegetation scatter maps</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Materials: Sand, rock, soil, grass, snow<br/>
            Layer blending: Height, slope, altitude based
          </div>
        </div>
      )
    },
    {
      id: 'textures',
      title: 'Runtime Virtual Textures',
      description: 'Dynamic texture streaming',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Virtual Texturing</h4>
          <ul className="text-sm space-y-1">
            <li>• Texture streaming pool: 8GB</li>
            <li>• Page size: 128×128 pixels</li>
            <li>• Mip level generation: 0-12</li>
            <li>• Feedback system for page requests</li>
            <li>• Virtual address translation</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Texture memory: Unlimited (virtualized)<br/>
            Physical texture cache: 8-12GB
          </div>
        </div>
      )
    },
    {
      id: 'lumen',
      title: 'Lumen Lighting + Fog FX',
      description: 'Environmental effects',
      icon: <Cloud className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Lumen GI System</h4>
          <ul className="text-sm space-y-1">
            <li>• Full dynamic global illumination</li>
            <li>• Multi-bounce indirect lighting</li>
            <li>• Software ray tracing fallback</li>
            <li>• Hardware ray tracing acceleration</li>
            <li>• Volumetric fog with godrays</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Bounce count: 3-5 light bounces<br/>
            Shadow cascade count: 5 (1m to 10km)
          </div>
        </div>
      )
    },
    {
      id: 'render',
      title: 'Render to LED Wall',
      description: 'Display output',
      icon: <Monitor className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">LED Panel Specs</h4>
          <ul className="text-sm space-y-1">
            <li>• Resolution: 8K (7680×4320)</li>
            <li>• Refresh rate: 120Hz with VRR</li>
            <li>• Color depth: 10-bit HDR</li>
            <li>• Peak brightness: 2,500 nits</li>
            <li>• Pixel pitch: 1.5mm (floor), 2.0mm (walls)</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            Sync method: Genlock with 1ms precision<br/>
            Rendering latency: 8.3ms (120Hz pipeline)
          </div>
        </div>
      )
    },
  ];
  
  const safetyNodes: FlowNode[] = [
    {
      id: 'tablet',
      title: 'User Tablet Command',
      description: 'Input interface',
      icon: <Monitor className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Instructor Control Panel</h4>
          <ul className="text-sm space-y-1">
            <li>• iPad Pro 12.9" with custom app</li>
            <li>• Wi-Fi 6E secure connection</li>
            <li>• Admin authentication required</li>
            <li>• Haptic feedback confirmation</li>
            <li>• Emergency override controls</li>
          </ul>
        </div>
      )
    },
    {
      id: 'blueprint',
      title: 'UE5 Blueprint Response',
      description: 'Logic processing',
      icon: <Code className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Blueprint System</h4>
          <ul className="text-sm space-y-1">
            <li>• Command validation layers</li>
            <li>• State machine architecture</li>
            <li>• Input debouncing and filtering</li>
            <li>• Safety checks and validation</li>
            <li>• Logging and telemetry</li>
          </ul>
        </div>
      )
    },
    {
      id: 'adjustments',
      title: 'Scene Adjustments Applied',
      description: 'Environment changes',
      icon: <Mountain className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Scene Modification</h4>
          <ul className="text-sm space-y-1">
            <li>• Time of day transitions</li>
            <li>• Weather system control</li>
            <li>• Terrain deformation tools</li>
            <li>• Asset placement interface</li>
            <li>• Environment parameter tuning</li>
          </ul>
        </div>
      )
    },
    {
      id: 'render',
      title: 'GPU Render Triggered',
      description: 'Graphics processing',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Render Pipeline</h4>
          <ul className="text-sm space-y-1">
            <li>• NVIDIA RTX 4090 workstation GPUs</li>
            <li>• Multi-GPU rendering with NVLink</li>
            <li>• DLSS 3.5 frame generation</li>
            <li>• Hardware ray tracing active</li>
            <li>• 120fps target framerate</li>
          </ul>
        </div>
      )
    },
    {
      id: 'sync',
      title: 'Frame Sync with LED Wall',
      description: 'Display output',
      icon: <Monitor className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Synchronization</h4>
          <ul className="text-sm space-y-1">
            <li>• Genlock with hardware sync</li>
            <li>• Frame pacing at 8.3ms intervals</li>
            <li>• Black frame insertion optional</li>
            <li>• G-Sync Ultimate implementation</li>
            <li>• DisplayPort 2.1 connection</li>
          </ul>
        </div>
      )
    },
    {
      id: 'safety',
      title: 'GPU Safety Thread',
      description: 'Monitoring system',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Safety Systems</h4>
          <ul className="text-sm space-y-1">
            <li>• Dedicated monitoring thread</li>
            <li>• Real-time temperature sensors</li>
            <li>• Power draw monitoring</li>
            <li>• Error detection and correction</li>
            <li>• Hardware watchdog timer</li>
          </ul>
        </div>
      )
    },
    {
      id: 'temp',
      title: 'Temp > 90°C?',
      description: 'Decision point',
      icon: <Code className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Temperature Monitoring</h4>
          <ul className="text-sm space-y-1">
            <li>• High-precision thermal sensors</li>
            <li>• 1°C resolution measurements</li>
            <li>• 100ms sampling interval</li>
            <li>• Multiple sensor points per GPU</li>
            <li>• Trend analysis algorithm</li>
          </ul>
        </div>
      )
    },
    {
      id: 'shutdown',
      title: 'Auto Shutdown',
      description: 'Safety response',
      icon: <Monitor className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Emergency Procedures</h4>
          <ul className="text-sm space-y-1">
            <li>• Graceful application shutdown</li>
            <li>• LED wall fade to black</li>
            <li>• System state preservation</li>
            <li>• Alert notification to staff</li>
            <li>• Automatic incident logging</li>
          </ul>
          <div className="text-xs mt-2 bg-muted/30 p-2 rounded">
            E-stop response time: {"<100ms"}<br/>
            Recovery procedure: Manual restart required
          </div>
        </div>
      )
    },
    {
      id: 'continue',
      title: 'Continue Rendering',
      description: 'Normal operation',
      icon: <Monitor className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Runtime Monitoring</h4>
          <ul className="text-sm space-y-1">
            <li>• Performance metrics tracking</li>
            <li>• Frame time analysis</li>
            <li>• Memory utilization monitoring</li>
            <li>• Throttling prevention</li>
            <li>• Thermal optimization</li>
          </ul>
        </div>
      )
    },
  ];
  
  const renderNodesForType = () => {
    let nodes: FlowNode[] = [];
    
    switch(type) {
      case 'pipeline':
        nodes = pipelineNodes;
        break;
      case 'render':
        nodes = renderNodes;
        break;
      case 'safety':
        nodes = safetyNodes;
        break;
    }
    
    if (type === 'safety') {
      return (
        <div className="mt-10">
          {/* Main Flow */}
          <div className="flex flex-col items-center space-y-6 mb-12">
            {safetyNodes.slice(0, 5).map((node, index) => renderNodeWithConnection(node, index))}
          </div>
          
          {/* Branching Flow */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-20">
              <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M90 0V20H10V40M90 20H170V40" 
                  stroke={activeNode ? "#6EE7B7" : "#9CA3AF"}
                  strokeWidth="2"
                  className={cn(activeNode && "animate-pulse")}
                />
              </svg>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              {renderNodeWithConnection(safetyNodes[5], 5)}
            </div>
            
            <div className="flex items-center justify-center mb-6">
              {renderNodeWithConnection(safetyNodes[6], 6)}
            </div>
            
            <div className="grid grid-cols-2 gap-x-48">
              <div className="flex flex-col items-center">
                <svg width="2" height="32" viewBox="0 0 2 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="0" x2="1" y2="32" stroke={activeNode ? "#EF4444" : "#9CA3AF"} strokeWidth="2" />
                </svg>
                <div className="mb-2 text-sm">Yes</div>
                {renderNodeWithConnection(safetyNodes[7], 7)}
              </div>
              <div className="flex flex-col items-center">
                <svg width="2" height="32" viewBox="0 0 2 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="0" x2="1" y2="32" stroke={activeNode ? "#6EE7B7" : "#9CA3AF"} strokeWidth="2" />
                </svg>
                <div className="mb-2 text-sm">No</div>
                {renderNodeWithConnection(safetyNodes[8], 8)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="flex flex-col items-center space-y-6 mt-10">
        {nodes.map((node, index) => renderNodeWithConnection(node, index))}
      </div>
    );
  };
  
  const renderNodeWithConnection = (node: FlowNode, index: number) => {
    const handleNodeClick = () => {
      setActiveNode(node.id === activeNode ? null : node.id);
    };
    
    const baseClasses = "transition-all duration-300 cursor-pointer rounded-md flex flex-col items-center justify-center p-3 text-center w-64 z-10";
    const activeClass = activeNode === node.id ? `bg-${node.color}/20 border border-${node.color} shadow-lg` : 'bg-card hover:bg-muted/20 border border-border';
    
    return (
      <div key={node.id} className="relative">
        {index > 0 && !(type === 'safety' && (index === 5 || index === 7 || index === 8)) && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 h-8">
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 0L12 24L4 16L12 24L20 16L12 24L12 32" 
                stroke={activeNode ? "#6EE7B7" : "#9CA3AF"} 
                strokeWidth="2"
                className={cn(activeNode && "animate-pulse")}
              />
            </svg>
          </div>
        )}
        
        <div 
          className={cn(baseClasses, activeClass)}
          onClick={handleNodeClick}
        >
          <div className={`p-2 rounded-full bg-${node.color}/20 text-${node.color}`}>
            {node.icon}
          </div>
          <div className="mt-2 text-sm font-medium">{node.title}</div>
          <div className="text-xs text-muted-foreground mt-1">{node.description}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-center">
        {type === 'pipeline' && "Terrain Data Pipeline Flow"}
        {type === 'render' && "Unreal Engine Render Flow"}
        {type === 'safety' && "Control + Safety Logic Flow"}
      </h3>
      
      <div className="relative">
        {renderNodesForType()}
      </div>
      
      {activeNode && (
        <div className="mt-4 opacity-0 animate-fade-in" style={{opacity: 1}}>
          <div className={`kaal-card p-4 border border-${
            type === 'pipeline' 
              ? pipelineNodes.find(n => n.id === activeNode)?.color 
              : type === 'render' 
                ? renderNodes.find(n => n.id === activeNode)?.color
                : safetyNodes.find(n => n.id === activeNode)?.color
            || 'border'}/50 bg-${
            type === 'pipeline' 
              ? pipelineNodes.find(n => n.id === activeNode)?.color 
              : type === 'render' 
                ? renderNodes.find(n => n.id === activeNode)?.color
                : safetyNodes.find(n => n.id === activeNode)?.color
            || 'card'}/5`}>
            {type === 'pipeline' && pipelineNodes.find(n => n.id === activeNode)?.details}
            {type === 'render' && renderNodes.find(n => n.id === activeNode)?.details}
            {type === 'safety' && safetyNodes.find(n => n.id === activeNode)?.details}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedTerrainFlowchart;

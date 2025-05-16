
import React, { useState, useEffect } from 'react';
import { CircleIcon, ChevronDown, ZapIcon, RadioIcon, CpuIcon, ShieldIcon, TabletIcon } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FlowchartNode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  connections: string[];
  color: string;
  detailedDescription?: string;
  keyPoints?: string[];
}

const InteractiveFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animateFlow, setAnimateFlow] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeSystem, setActiveSystem] = useState<'feedback' | 'terrain'>('feedback');

  const nodes: FlowchartNode[] = [
    // Gun-to-Suit System Nodes
    {
      id: 'gun',
      title: 'Smart Gun Unit',
      description: 'IR/Laser emitter with signal modulation',
      icon: <ZapIcon className="h-5 w-5" />,
      x: 15,
      y: 20,
      connections: ['signal'],
      color: 'kaal-blue',
      detailedDescription: 'The Smart Gun Unit contains precision IR/Laser emitters that transmit encoded damage parameters and targeting information. This unit includes signal modulation hardware that ensures accurate hit detection.',
      keyPoints: [
        'Modulated IR/Laser emission',
        'Encrypted hit data transmission',
        'Multiple damage parameter settings',
        'Integrated targeting system'
      ]
    },
    {
      id: 'signal',
      title: 'Signal Processing',
      description: 'Wireless transmission with encryption',
      icon: <RadioIcon className="h-5 w-5" />,
      x: 40,
      y: 20,
      connections: ['microcontroller'],
      color: 'kaal-yellow',
      detailedDescription: 'The Signal Processing system handles secure wireless transmission between the gun and suit components. It includes advanced encryption and reliable packet delivery protocols to ensure training accuracy.',
      keyPoints: [
        'AES-256 encryption',
        'Packet redundancy for reliability',
        'Frequency hopping for interference resistance',
        'Ultra-low latency transmission'
      ]
    },
    {
      id: 'microcontroller',
      title: 'Microcontroller',
      description: 'STM32/ESP32 processing unit',
      icon: <CpuIcon className="h-5 w-5" />,
      x: 65,
      y: 20,
      connections: ['suit'],
      color: 'kaal-green',
      detailedDescription: 'High-performance STM32/ESP32 microcontrollers decode signals and coordinate the suit response. These units handle advanced processing tasks including hit validation, timing control, and feedback intensity modulation.',
      keyPoints: [
        '240MHz dual-core processors',
        'Real-time operating system',
        'Integrated DSP capabilities',
        'Ultra-low power modes between signals'
      ]
    },
    {
      id: 'suit',
      title: 'Feedback Suit',
      description: 'Conductive cloth with electrode zones',
      icon: <ShieldIcon className="h-5 w-5" />,
      x: 90,
      y: 20,
      connections: [],
      color: 'kaal-green',
      detailedDescription: 'The Feedback Suit features strategically placed electrode zones on conductive fabric to provide targeted shock feedback. The system can simulate various hit intensities and locations, enhancing training realism.',
      keyPoints: [
        'Anatomically mapped electrode positioning',
        'Variable intensity feedback',
        'Machine-washable conductive fabric',
        'Bluetooth connectivity to central system'
      ]
    },
    
    // Terrain System Nodes
    {
      id: 'dem',
      title: 'DEM Data',
      description: 'Digital Elevation Model data sourcing',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 15,
      y: 60,
      connections: ['qgis'],
      color: 'kaal-blue',
      detailedDescription: 'Digital Elevation Model (DEM) data provides high-resolution topographic information sourced from satellite imagery and aerial surveys. This data forms the foundation of the terrain simulation system.',
      keyPoints: [
        'Sub-meter resolution capabilities',
        'Global dataset coverage',
        'Regular update cycles',
        'Multiple elevation reference systems'
      ]
    },
    {
      id: 'qgis',
      title: 'QGIS Processing',
      description: 'Geographic Information System processing',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 40,
      y: 60,
      connections: ['ue5'],
      color: 'kaal-yellow',
      detailedDescription: 'QGIS processing transforms raw elevation data into optimized terrain models. This stage includes feature extraction, texture mapping preparation, and geospatial analysis for enhanced environmental fidelity.',
      keyPoints: [
        'Automated feature recognition',
        'Terrain classification algorithms',
        'Hydrology simulation preparation',
        'Vegetation density mapping'
      ]
    },
    {
      id: 'ue5',
      title: 'UE5 (Cesium + Nanite)',
      description: 'Unreal Engine 5 with geospatial integration',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 65,
      y: 60,
      connections: ['ledwall'],
      color: 'kaal-green',
      detailedDescription: 'Unreal Engine 5 with Cesium integration and Nanite micropolygon rendering creates photorealistic terrain visualization with billions of polygons. This system enables real-time rendering of vast environments at unprecedented detail levels.',
      keyPoints: [
        'Nanite virtualized geometry',
        'Lumen global illumination',
        'Real-world scale mapping',
        'Dynamic time-of-day systems'
      ]
    },
    {
      id: 'ledwall',
      title: 'LED Wall Display',
      description: 'High-resolution immersive visualization',
      icon: <TabletIcon className="h-5 w-5" />,
      x: 90,
      y: 60,
      connections: [],
      color: 'kaal-red',
      detailedDescription: 'The LED Wall Display provides a high-resolution, immersive visualization surface for the terrain simulation. This custom-designed system features seamless panels with wide viewing angles and high refresh rates.',
      keyPoints: [
        '4K+ resolution per panel segment',
        'HDR color reproduction',
        'Low-latency input processing',
        'Modular design for size flexibility'
      ]
    }
  ];

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(nodeId === activeNode ? null : nodeId);
  };

  const toggleSystem = () => {
    setActiveSystem(prev => prev === 'feedback' ? 'terrain' : 'feedback');
    setActiveNode(null);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.1, 0.7));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const simulateFlow = () => {
    setAnimateFlow(true);
    setTimeout(() => setAnimateFlow(false), 3000);
  };

  const getNodeById = (id: string) => {
    return nodes.find(node => node.id === id);
  };

  const renderNodeDetails = () => {
    if (!activeNode) return (
      <div className="kaal-card p-6 mt-6 bg-muted/5">
        <h3 className="font-semibold mb-2">Interactive System Architecture</h3>
        <p className="text-muted-foreground text-sm">
          Click on any node in the flowchart to view detailed information about that component.
          Use the system toggle to switch between feedback and terrain systems.
        </p>
      </div>
    );

    const node = nodes.find(n => n.id === activeNode);
    if (!node) return null;

    return (
      <div className={`kaal-card p-6 mt-6 border-2 border-${node.color}/50 bg-${node.color}/5 animate-fade-in`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2.5 rounded-full bg-${node.color}/20 text-${node.color}`}>
            {node.icon}
          </div>
          <div>
            <h3 className={`font-bold text-lg text-${node.color}`}>{node.title}</h3>
            <p className="text-muted-foreground">{node.description}</p>
          </div>
        </div>

        {node.detailedDescription && (
          <div className="mb-4">
            <p className="text-sm text-foreground/90">{node.detailedDescription}</p>
          </div>
        )}

        {node.keyPoints && node.keyPoints.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {node.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs bg-muted/20 p-2 rounded-md">
                  <CircleIcon className="h-3 w-3 mt-0.5 text-foreground" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">System Architecture Flowchart</h2>
        
        <div className="flex items-center gap-3">
          <div className="flex rounded-md overflow-hidden border border-border">
            <Button
              variant={activeSystem === 'feedback' ? 'default' : 'outline'}
              size="sm"
              onClick={() => activeSystem !== 'feedback' && toggleSystem()}
              className="rounded-r-none"
            >
              Gun-to-Suit System
            </Button>
            <Button
              variant={activeSystem === 'terrain' ? 'default' : 'outline'}
              size="sm"
              onClick={() => activeSystem !== 'terrain' && toggleSystem()}
              className="rounded-l-none"
            >
              Terrain Engine
            </Button>
          </div>
          
          <Button 
            onClick={simulateFlow}
            size="sm"
            className="bg-kaal-blue/20 hover:bg-kaal-blue/30 text-kaal-blue"
          >
            Simulate Flow
          </Button>
        </div>
      </div>
      
      <div className="flex justify-end gap-2 mb-2">
        <Button 
          onClick={handleZoomOut} 
          size="icon"
          variant="outline"
          className="h-8 w-8"
          aria-label="Zoom out"
        >
          -
        </Button>
        <Button 
          onClick={handleResetZoom} 
          size="sm"
          variant="outline"
          className="h-8"
          aria-label="Reset zoom"
        >
          Reset
        </Button>
        <Button 
          onClick={handleZoomIn}
          size="icon" 
          variant="outline"
          className="h-8 w-8"
          aria-label="Zoom in"
        >
          +
        </Button>
      </div>

      <div className="relative h-[500px] border-2 border-border rounded-lg bg-card/50 overflow-hidden p-4 shadow-xl">
        {/* System Legend */}
        <div className="absolute top-2 left-2 z-10 bg-card p-3 rounded-md border border-border backdrop-blur-sm shadow-md">
          <div className="text-sm font-semibold mb-2">Legend:</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-kaal-blue"></div>
              <span className="text-xs font-medium">Input System</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-kaal-yellow"></div>
              <span className="text-xs font-medium">Processing Unit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-kaal-green"></div>
              <span className="text-xs font-medium">Core Component</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-kaal-red"></div>
              <span className="text-xs font-medium">Output System</span>
            </div>
          </div>
        </div>
        
        {/* System Title */}
        <div className="absolute top-0 left-0 w-full">
          <h3 className="text-base font-medium ml-16 mt-2">
            {activeSystem === 'feedback' ? 'Gun-to-Suit Feedback System' : 'Terrain Engine Pipeline'}
          </h3>
        </div>
        
        <div className="relative w-full h-full" style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center', transition: 'transform 0.3s ease-out' }}>
          {/* Feedback System */}
          {activeSystem === 'feedback' && (
            <>
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
                {/* Gun to Signal */}
                <line 
                  x1="15%" 
                  y1="20%" 
                  x2="40%" 
                  y2="20%" 
                  stroke={animateFlow || activeNode === 'gun' ? `var(--kaal-blue)` : "rgba(128, 128, 128, 0.5)"} 
                  strokeWidth={animateFlow || activeNode === 'gun' ? "3" : "2"} 
                  className={cn((animateFlow || activeNode === 'gun') && "animate-pulse")} 
                />
                
                {/* Signal to Microcontroller */}
                <line 
                  x1="40%" 
                  y1="20%" 
                  x2="65%" 
                  y2="20%" 
                  stroke={animateFlow || activeNode === 'signal' ? `var(--kaal-yellow)` : "rgba(128, 128, 128, 0.5)"} 
                  strokeWidth={animateFlow || activeNode === 'signal' ? "3" : "2"} 
                  className={cn((animateFlow || activeNode === 'signal') && "animate-pulse")} 
                />
                
                {/* Microcontroller to Suit */}
                <line 
                  x1="65%" 
                  y1="20%" 
                  x2="90%" 
                  y2="20%" 
                  stroke={animateFlow || activeNode === 'microcontroller' ? `var(--kaal-green)` : "rgba(128, 128, 128, 0.5)"} 
                  strokeWidth={animateFlow || activeNode === 'microcontroller' ? "3" : "2"} 
                  className={cn((animateFlow || activeNode === 'microcontroller') && "animate-pulse")} 
                />
              </svg>
              
              {/* Nodes */}
              {nodes.slice(0, 4).map((node, index) => (
                <div 
                  key={node.id}
                  className={`absolute p-3 cursor-pointer transition-all duration-300 
                            ${activeNode === node.id 
                              ? `bg-${node.color}/15 border-2 border-${node.color} shadow-lg` 
                              : 'bg-card hover:bg-muted/20 border border-border hover:border-muted-foreground'}
                            rounded-md flex flex-col items-center w-[140px] text-center`}
                  style={{ 
                    left: `${node.x}%`, 
                    top: `${node.y}%`, 
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => handleNodeClick(node.id)}
                >
                  <div className={`p-2.5 rounded-full bg-${node.color}/20 text-${node.color}`}>
                    {node.icon}
                  </div>
                  <div className="mt-2 text-sm font-medium">{node.title}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2 h-8">
                    {node.description}
                  </div>
                  <ChevronDown className={`h-4 w-4 mt-1 transition-transform ${activeNode === node.id ? 'rotate-180' : ''}`} />
                  
                  {activeNode === node.id && (
                    <Badge className={`absolute -top-2 -right-2 bg-${node.color}`}>
                      Selected
                    </Badge>
                  )}
                </div>
              ))}
            </>
          )}
          
          {/* Terrain System */}
          {activeSystem === 'terrain' && (
            <>
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
                {/* DEM to QGIS */}
                <line 
                  x1="15%" 
                  y1="60%" 
                  x2="40%" 
                  y2="60%" 
                  stroke={animateFlow || activeNode === 'dem' ? `var(--kaal-blue)` : "rgba(128, 128, 128, 0.5)"} 
                  strokeWidth={animateFlow || activeNode === 'dem' ? "3" : "2"} 
                  className={cn((animateFlow || activeNode === 'dem') && "animate-pulse")} 
                />
                
                {/* QGIS to UE5 */}
                <line 
                  x1="40%" 
                  y1="60%" 
                  x2="65%" 
                  y2="60%" 
                  stroke={animateFlow || activeNode === 'qgis' ? `var(--kaal-yellow)` : "rgba(128, 128, 128, 0.5)"} 
                  strokeWidth={animateFlow || activeNode === 'qgis' ? "3" : "2"} 
                  className={cn((animateFlow || activeNode === 'qgis') && "animate-pulse")} 
                />
                
                {/* UE5 to LED Wall */}
                <line 
                  x1="65%" 
                  y1="60%" 
                  x2="90%" 
                  y2="60%" 
                  stroke={animateFlow || activeNode === 'ue5' ? `var(--kaal-green)` : "rgba(128, 128, 128, 0.5)"} 
                  strokeWidth={animateFlow || activeNode === 'ue5' ? "3" : "2"} 
                  className={cn((animateFlow || activeNode === 'ue5') && "animate-pulse")} 
                />
              </svg>
              
              {/* Nodes */}
              {nodes.slice(4).map((node) => (
                <div 
                  key={node.id}
                  className={`absolute p-3 cursor-pointer transition-all duration-300 
                            ${activeNode === node.id 
                              ? `bg-${node.color}/15 border-2 border-${node.color} shadow-lg` 
                              : 'bg-card hover:bg-muted/20 border border-border hover:border-muted-foreground'}
                            rounded-md flex flex-col items-center w-[140px] text-center`}
                  style={{ 
                    left: `${node.x}%`, 
                    top: `${node.y}%`, 
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => handleNodeClick(node.id)}
                >
                  <div className={`p-2.5 rounded-full bg-${node.color}/20 text-${node.color}`}>
                    {node.icon}
                  </div>
                  <div className="mt-2 text-sm font-medium">{node.title}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2 h-8">
                    {node.description}
                  </div>
                  <ChevronDown className={`h-4 w-4 mt-1 transition-transform ${activeNode === node.id ? 'rotate-180' : ''}`} />
                  
                  {activeNode === node.id && (
                    <Badge className={`absolute -top-2 -right-2 bg-${node.color}`}>
                      Selected
                    </Badge>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
        
        {/* Node flow animation indicators */}
        {animateFlow && (
          <div className="absolute bottom-4 right-4 bg-card/70 backdrop-blur-sm border border-border px-3 py-2 rounded-md shadow-md">
            <p className="text-xs font-medium text-kaal-green">
              Simulating data flow...
            </p>
          </div>
        )}
      </div>
      
      {renderNodeDetails()}
    </div>
  );
};

export default InteractiveFlowchart;

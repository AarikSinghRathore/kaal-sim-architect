
import React, { useState } from 'react';
import { CircleIcon, ChevronDown } from 'lucide-react';

interface FlowchartNode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  connections: string[];
  color: string;
}

const InteractiveFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes: FlowchartNode[] = [
    {
      id: 'gun',
      title: 'Smart Gun Unit',
      description: 'IR/Laser emitter with signal modulation for target acquisition and damage parameters.',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 15,
      y: 20,
      connections: ['signal'],
      color: 'kaal-blue'
    },
    {
      id: 'signal',
      title: 'Signal Processing',
      description: 'Wireless transmission with encryption and reliable packet delivery logic.',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 40,
      y: 20,
      connections: ['microcontroller'],
      color: 'kaal-yellow'
    },
    {
      id: 'microcontroller',
      title: 'Microcontroller',
      description: 'STM32/ESP32 processing unit handling signal decoding and suit response.',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 65,
      y: 20,
      connections: ['suit'],
      color: 'kaal-green'
    },
    {
      id: 'suit',
      title: 'Feedback Suit',
      description: 'Conductive cloth with electrode zones providing targeted shock feedback.',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 90,
      y: 20,
      connections: [],
      color: 'kaal-green'
    },
    {
      id: 'dem',
      title: 'DEM Data',
      description: 'Digital Elevation Model data sourced from high-resolution topographic surveys.',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 15,
      y: 60,
      connections: ['qgis'],
      color: 'kaal-blue'
    },
    {
      id: 'qgis',
      title: 'QGIS Processing',
      description: 'Geographic Information System processing for enhanced terrain fidelity.',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 40,
      y: 60,
      connections: ['ue5'],
      color: 'kaal-yellow'
    },
    {
      id: 'ue5',
      title: 'UE5 (Cesium + Nanite)',
      description: 'Unreal Engine 5 with Cesium integration and Nanite micropolygon rendering.',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 65,
      y: 60,
      connections: ['ledwall'],
      color: 'kaal-green'
    },
    {
      id: 'ledwall',
      title: 'LED Wall Display',
      description: 'High-resolution LED wall for immersive terrain visualization.',
      icon: <CircleIcon className="h-5 w-5" />,
      x: 90,
      y: 60,
      connections: [],
      color: 'kaal-red'
    }
  ];

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(nodeId === activeNode ? null : nodeId);
  };

  const renderNodeDetails = () => {
    if (!activeNode) return (
      <div className="kaal-card p-6 mt-6">
        <h3 className="font-semibold mb-2">Interactive System Architecture</h3>
        <p className="text-muted-foreground text-sm">
          Click on any node in the flowchart to view detailed information about that component.
        </p>
      </div>
    );

    const node = nodes.find(n => n.id === activeNode);
    if (!node) return null;

    return (
      <div className={`kaal-card p-6 mt-6 border border-${node.color}/50 bg-${node.color}/5`}>
        <h3 className={`font-semibold mb-2 text-${node.color}`}>{node.title}</h3>
        <p className="text-muted-foreground">{node.description}</p>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8">System Architecture Flowchart</h2>
      
      <div className="relative h-[500px] border border-border rounded-lg bg-card/50 overflow-hidden p-4">
        {/* Feedback System Flow */}
        <div className="absolute top-0 left-0 w-full">
          <h3 className="text-base font-medium ml-4 mt-2">Gun-to-Suit Feedback System</h3>
        </div>
        
        {nodes.slice(0, 4).map((node, index) => (
          <div 
            key={node.id}
            className={`absolute p-2 cursor-pointer transition-all 
                       ${activeNode === node.id ? `bg-${node.color}/20 border border-${node.color}` : 'bg-card hover:bg-muted/20 border border-border'}
                       rounded-md flex flex-col items-center w-[120px] text-center`}
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
            onClick={() => handleNodeClick(node.id)}
          >
            <div className={`p-2 rounded-full bg-${node.color}/20 text-${node.color}`}>
              {node.icon}
            </div>
            <div className="mt-2 text-sm font-medium">{node.title}</div>
            <ChevronDown className={`h-4 w-4 mt-1 transition-transform ${activeNode === node.id ? 'rotate-180' : ''}`} />
          </div>
        ))}
        
        {/* Connection lines for feedback system */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
          <line x1="15%" y1="20%" x2="40%" y2="20%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
          <line x1="40%" y1="20%" x2="65%" y2="20%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
          <line x1="65%" y1="20%" x2="90%" y2="20%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
        </svg>
        
        {/* Terrain System Flow */}
        <div className="absolute top-[40%] left-0 w-full">
          <h3 className="text-base font-medium ml-4 mt-2">Terrain Engine Pipeline</h3>
        </div>
        
        {nodes.slice(4).map((node) => (
          <div 
            key={node.id}
            className={`absolute p-2 cursor-pointer transition-all 
                      ${activeNode === node.id ? `bg-${node.color}/20 border border-${node.color}` : 'bg-card hover:bg-muted/20 border border-border'}
                      rounded-md flex flex-col items-center w-[120px] text-center`}
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
            onClick={() => handleNodeClick(node.id)}
          >
            <div className={`p-2 rounded-full bg-${node.color}/20 text-${node.color}`}>
              {node.icon}
            </div>
            <div className="mt-2 text-sm font-medium">{node.title}</div>
            <ChevronDown className={`h-4 w-4 mt-1 transition-transform ${activeNode === node.id ? 'rotate-180' : ''}`} />
          </div>
        ))}
        
        {/* Connection lines for terrain system */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
          <line x1="15%" y1="60%" x2="40%" y2="60%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
          <line x1="40%" y1="60%" x2="65%" y2="60%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
          <line x1="65%" y1="60%" x2="90%" y2="60%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
        </svg>
      </div>
      
      {renderNodeDetails()}
    </div>
  );
};

export default InteractiveFlowchart;

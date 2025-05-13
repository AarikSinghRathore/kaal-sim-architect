
import React, { useState } from 'react';
import { Zap, Shield, AlertTriangle, Mountain, Tablet } from 'lucide-react';

interface FlowchartNodeProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  isActive: boolean;
  onClick: () => void;
  x: string;
  y: string;
}

const FlowchartNode: React.FC<FlowchartNodeProps> = ({ 
  title,
  icon,
  color,
  isActive,
  onClick,
  x,
  y
}) => {
  const baseClasses = `absolute transform -translate-x-1/2 -translate-y-1/2 w-32 h-20
                      flex flex-col items-center justify-center rounded-md 
                      transition-all duration-300 cursor-pointer
                      border ${isActive ? `border-${color} shadow-lg` : 'border-border'}`;
  
  const bgClass = isActive ? `bg-${color}/10` : 'bg-card hover:bg-muted/20';
  
  return (
    <div 
      className={`${baseClasses} ${bgClass}`}
      style={{ left: x, top: y }}
      onClick={onClick}
    >
      <div className={`text-${color}`}>
        {icon}
      </div>
      <div className="mt-2 text-sm font-medium">{title}</div>
    </div>
  );
};

const SystemFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const handleNodeClick = (nodeId: string) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
  };

  const getLineClass = (nodeId: string) => {
    const baseClass = "absolute border-2 transition-all duration-300";
    
    if (activeNode === nodeId) {
      return `${baseClass} border-kaal-green animate-pulse`;
    } else if (activeNode === "safety" && (nodeId === "gun-suit" || nodeId === "tablet")) {
      return `${baseClass} border-kaal-red animate-pulse`;
    } else if (activeNode === "tablet" && (nodeId === "gun-suit" || nodeId === "terrain")) {
      return `${baseClass} border-kaal-blue animate-pulse`;
    } else {
      return `${baseClass} border-border/50`;
    }
  };

  const renderActiveNodeDetails = () => {
    switch (activeNode) {
      case "gun":
        return (
          <div className="kaal-card p-6 bg-kaal-green/5 border-kaal-green/30">
            <h3 className="font-medium mb-3 text-kaal-green">Gun Unit Details</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span>IR/Laser emitter for targeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span>Signal modulation for damage parameters</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span>Trigger-to-signal logic system</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span>Range tuning for distance simulation</span>
              </li>
            </ul>
          </div>
        );
      case "suit":
        return (
          <div className="kaal-card p-6 bg-kaal-green/5 border-kaal-green/30">
            <h3 className="font-medium mb-3 text-kaal-green">Feedback Suit Details</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span>Conductive cloth with electrode zones</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span>Low-voltage shock feedback system</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span>Signal decoder and actuator drivers</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span>Microcontroller for precise control</span>
              </li>
            </ul>
          </div>
        );
      case "safety":
        return (
          <div className="kaal-card p-6 bg-kaal-red/5 border-kaal-red/30">
            <h3 className="font-medium mb-3 text-kaal-red">Safety System Details</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span>Manual emergency cutoff buttons</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span>Automatic overload protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span>Continuous physical monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span>Instructor override capabilities</span>
              </li>
            </ul>
          </div>
        );
      case "terrain":
        return (
          <div className="kaal-card p-6 bg-kaal-blue/5 border-kaal-blue/30">
            <h3 className="font-medium mb-3 text-kaal-blue">Terrain Engine Details</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span>High-fidelity 3D terrain rendering</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span>Real-time environmental conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span>Holographic and LED floor projection</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span>Dynamic time of day and weather</span>
              </li>
            </ul>
          </div>
        );
      case "tablet":
        return (
          <div className="kaal-card p-6 bg-kaal-blue/5 border-kaal-blue/30">
            <h3 className="font-medium mb-3 text-kaal-blue">Control Tablet Details</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span>Instructor command interface</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span>Real-time system monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span>Terrain and environment controls</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span>Safety override capabilities</span>
              </li>
            </ul>
          </div>
        );
      default:
        return (
          <div className="kaal-card p-6">
            <h3 className="font-medium mb-2">System Architecture Overview</h3>
            <p className="text-sm text-muted-foreground">
              Click on any system component above to see detailed information about how it connects to other components.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-center">System Architecture Flowchart</h2>
      
      <div className="flex flex-col gap-6">
        <div className="relative h-96 border border-border rounded-lg bg-card/50 overflow-hidden">
          {/* Connecting Lines */}
          <div className={getLineClass("gun-suit")} style={{ width: '100px', height: '2px', left: '35%', top: '30%', transform: 'rotate(90deg)' }}></div>
          <div className={getLineClass("gun-tablet")} style={{ width: '120px', height: '2px', left: '30%', top: '60%', transform: 'rotate(45deg)' }}></div>
          <div className={getLineClass("suit-tablet")} style={{ width: '120px', height: '2px', left: '45%', top: '60%', transform: 'rotate(135deg)' }}></div>
          <div className={getLineClass("terrain-tablet")} style={{ width: '100px', height: '2px', left: '65%', top: '50%' }}></div>
          
          {/* Nodes */}
          <FlowchartNode
            title="Gun Unit"
            icon={<Zap className="h-6 w-6" />}
            color="kaal-green"
            isActive={activeNode === "gun"}
            onClick={() => handleNodeClick("gun")}
            x="25%"
            y="20%"
          />
          
          <FlowchartNode
            title="Feedback Suit"
            icon={<Shield className="h-6 w-6" />}
            color="kaal-green"
            isActive={activeNode === "suit"}
            onClick={() => handleNodeClick("suit")}
            x="25%"
            y="50%"
          />
          
          <FlowchartNode
            title="Safety System"
            icon={<AlertTriangle className="h-6 w-6" />}
            color="kaal-red"
            isActive={activeNode === "safety"}
            onClick={() => handleNodeClick("safety")}
            x="25%"
            y="80%"
          />
          
          <FlowchartNode
            title="Terrain Engine"
            icon={<Mountain className="h-6 w-6" />}
            color="kaal-blue"
            isActive={activeNode === "terrain"}
            onClick={() => handleNodeClick("terrain")}
            x="75%"
            y="30%"
          />
          
          <FlowchartNode
            title="Control Tablet"
            icon={<Tablet className="h-6 w-6" />}
            color="kaal-blue"
            isActive={activeNode === "tablet"}
            onClick={() => handleNodeClick("tablet")}
            x="75%"
            y="70%"
          />
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-kaal-green/20 border border-kaal-green mr-2"></div>
            <span className="text-xs text-muted-foreground">Normal Operation</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-kaal-red/20 border border-kaal-red mr-2"></div>
            <span className="text-xs text-muted-foreground">Safety Triggered</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-kaal-blue/20 border border-kaal-blue mr-2"></div>
            <span className="text-xs text-muted-foreground">Instructor Action</span>
          </div>
        </div>

        {/* Details Panel */}
        <div className="mt-6">
          {renderActiveNodeDetails()}
        </div>
      </div>
    </div>
  );
};

export default SystemFlowchart;

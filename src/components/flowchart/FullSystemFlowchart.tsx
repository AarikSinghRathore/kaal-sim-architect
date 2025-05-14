
import React, { useState } from 'react';
import FlowchartNode from './FlowchartNode';
import { Shield, Zap, Cpu, Radio, Database, Tablet } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NodeData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  x: string;
  y: string;
  connects: string[];
  details: React.ReactNode;
}

const FullSystemFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animateFlow, setAnimateFlow] = useState(false);
  
  const nodes: NodeData[] = [
    {
      id: 'gun',
      title: 'Gun Triggered',
      description: 'Input event',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-blue',
      x: '15%',
      y: '25%',
      connects: ['signal'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Trigger Event</h4>
          <ul className="text-sm space-y-1">
            <li>• Physical trigger pull detected</li>
            <li>• Debounce circuit cleans signal</li>
            <li>• MCU wakes from sleep mode</li>
            <li>• Power to IR emitter enabled</li>
          </ul>
        </div>
      )
    },
    {
      id: 'signal',
      title: 'IR Signal Sent',
      description: 'Optical transmission',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-green',
      x: '40%',
      y: '25%',
      connects: ['detect'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Signal Transmission</h4>
          <ul className="text-sm space-y-1">
            <li>• 38kHz modulated IR signal</li>
            <li>• 24-bit data payload</li>
            <li>• Encoded weapon ID and damage value</li>
            <li>• 25ms total transmission time</li>
            <li>• Directional beam with 15° spread</li>
          </ul>
        </div>
      )
    },
    {
      id: 'detect',
      title: 'Suits Detect Hit',
      description: 'Signal reception',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-yellow',
      x: '65%',
      y: '25%',
      connects: ['decode'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Hit Detection</h4>
          <ul className="text-sm space-y-1">
            <li>• TSOP38438 IR sensors detect signal</li>
            <li>• Multiple sensors for body coverage</li>
            <li>• Interrupt triggered on MCU</li>
            <li>• Wake-up from low-power mode</li>
            <li>• Signal strength evaluation</li>
          </ul>
        </div>
      )
    },
    {
      id: 'decode',
      title: 'Payload Decoded',
      description: 'Data extraction',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-blue',
      x: '90%',
      y: '25%',
      connects: ['feedback'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Signal Decoding</h4>
          <ul className="text-sm space-y-1">
            <li>• Manchester decoding algorithm</li>
            <li>• Parity check for data integrity</li>
            <li>• Weapon identification</li>
            <li>• Timestamp validation</li>
            <li>• Hit zone determination</li>
          </ul>
        </div>
      )
    },
    {
      id: 'feedback',
      title: 'Electrode Triggers',
      description: 'Haptic activation',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-red',
      x: '15%',
      y: '75%',
      connects: ['user'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Feedback Generation</h4>
          <ul className="text-sm space-y-1">
            <li>• Electrode zone selection</li>
            <li>• Pulse width modulation control</li>
            <li>• Intensity based on weapon type</li>
            <li>• Safety limits enforcement</li>
            <li>• Pulse duration: 100-500ms</li>
          </ul>
        </div>
      )
    },
    {
      id: 'user',
      title: 'Feedback to User',
      description: 'Tactile sensation',
      icon: <Shield className="h-5 w-5" />,
      color: 'kaal-green',
      x: '40%',
      y: '75%',
      connects: ['log'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">User Experience</h4>
          <ul className="text-sm space-y-1">
            <li>• Localized feedback at hit location</li>
            <li>• Variable intensity based on weapon</li>
            <li>• Safe voltage/current levels</li>
            <li>• Multiple hit detection and feedback</li>
            <li>• Integrated into training scenarios</li>
          </ul>
        </div>
      )
    },
    {
      id: 'log',
      title: 'Data Logged',
      description: 'Event recording',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-blue',
      x: '65%',
      y: '75%',
      connects: ['instructor'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Data Logging System</h4>
          <ul className="text-sm space-y-1">
            <li>• Hit timestamp and location</li>
            <li>• Weapon type and damage value</li>
            <li>• User ID and team affiliation</li>
            <li>• Local storage in EEPROM</li>
            <li>• Periodic sync with central system</li>
          </ul>
        </div>
      )
    },
    {
      id: 'instructor',
      title: 'Instructor View Updated',
      description: 'Monitoring display',
      icon: <Tablet className="h-5 w-5" />,
      color: 'kaal-yellow',
      x: '90%',
      y: '75%',
      connects: [],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Instructor Interface</h4>
          <ul className="text-sm space-y-1">
            <li>• Real-time trainee status dashboard</li>
            <li>• Heat map visualization of impacts</li>
            <li>• Team performance metrics</li>
            <li>• Exercise control options</li>
            <li>• Emergency override capabilities</li>
            <li>• Post-action review recording</li>
          </ul>
        </div>
      )
    },
  ];

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(nodeId === activeNode ? null : nodeId);
  };

  const simulateFlow = () => {
    setAnimateFlow(true);
    setTimeout(() => setAnimateFlow(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Full Gun-to-Suit System Flow</h3>
        <button 
          onClick={simulateFlow}
          className="bg-kaal-blue/20 hover:bg-kaal-blue/30 text-kaal-blue px-4 py-1 rounded-md text-sm transition-colors"
        >
          Simulate Flow
        </button>
      </div>
      
      <div className="relative h-96 border border-border rounded-lg bg-card/50 overflow-hidden p-4">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Top row horizontal */}
          <line
            x1="15%"
            y1="25%"
            x2="40%"
            y2="25%"
            stroke={animateFlow || activeNode === 'gun' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={animateFlow || activeNode ? "none" : "5,5"}
            className={cn((animateFlow || activeNode === 'gun') && "animate-pulse")}
          />
          <line
            x1="40%"
            y1="25%"
            x2="65%"
            y2="25%"
            stroke={animateFlow || activeNode === 'signal' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={animateFlow || activeNode ? "none" : "5,5"}
            className={cn((animateFlow || activeNode === 'signal') && "animate-pulse")}
          />
          <line
            x1="65%"
            y1="25%"
            x2="90%"
            y2="25%"
            stroke={animateFlow || activeNode === 'detect' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={animateFlow || activeNode ? "none" : "5,5"}
            className={cn((animateFlow || activeNode === 'detect') && "animate-pulse")}
          />
          
          {/* Connecting line from top right to bottom left */}
          <path
            d="M 90% 25% C 90% 50%, 15% 50%, 15% 75%"
            fill="none"
            stroke={animateFlow || activeNode === 'decode' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={animateFlow || activeNode ? "none" : "5,5"}
            className={cn((animateFlow || activeNode === 'decode') && "animate-pulse")}
          />
          
          {/* Bottom row horizontal */}
          <line
            x1="15%"
            y1="75%"
            x2="40%"
            y2="75%"
            stroke={animateFlow || activeNode === 'feedback' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={animateFlow || activeNode ? "none" : "5,5"}
            className={cn((animateFlow || activeNode === 'feedback') && "animate-pulse")}
          />
          <line
            x1="40%"
            y1="75%"
            x2="65%"
            y2="75%"
            stroke={animateFlow || activeNode === 'user' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={animateFlow || activeNode ? "none" : "5,5"}
            className={cn((animateFlow || activeNode === 'user') && "animate-pulse")}
          />
          <line
            x1="65%"
            y1="75%"
            x2="90%"
            y2="75%"
            stroke={animateFlow || activeNode === 'log' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={animateFlow || activeNode ? "none" : "5,5"}
            className={cn((animateFlow || activeNode === 'log') && "animate-pulse")}
          />
        </svg>
        
        {/* Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            style={{
              position: 'absolute',
              left: node.x,
              top: node.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <FlowchartNode
              id={node.id}
              title={node.title}
              description={node.description}
              icon={node.icon}
              color={node.color}
              isActive={activeNode === node.id}
              onClick={() => handleNodeClick(node.id)}
              className="w-40"
              tooltipContent={node.details}
            />
          </div>
        ))}
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

export default FullSystemFlowchart;

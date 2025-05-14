
import React, { useState } from 'react';
import FlowchartNode from './FlowchartNode';
import { Shield, Zap, Cpu, Code, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NodeData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: React.ReactNode;
}

const GunSubsystemFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const nodes: NodeData[] = [
    {
      id: 'trigger',
      title: 'Trigger Button',
      description: 'Physical input mechanism',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Trigger Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• Tactile switch (Omron B3F)</li>
            <li>• Debounce capacitor (100nF)</li>
            <li>• Pull-down resistor (10kΩ)</li>
            <li>• Response time: {"<"}5ms</li>
          </ul>
        </div>
      )
    },
    {
      id: 'debounce',
      title: 'Debounce Circuit',
      description: 'Signal cleaning',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Debounce Circuit Details</h4>
          <ul className="text-sm space-y-1">
            <li>• RC filter with 100nF capacitor</li>
            <li>• Schmitt trigger for clean edges</li>
            <li>• 10ms debounce time</li>
            <li>• Hardware-based to reduce CPU load</li>
          </ul>
        </div>
      )
    },
    {
      id: 'mcu',
      title: 'ESP32 Microcontroller',
      description: 'Signal processing',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">ESP32 Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• Dual-core Xtensa LX6 at 240MHz</li>
            <li>• 4MB PSRAM, 16MB Flash</li>
            <li>• 3.3V operating voltage</li>
            <li>• Low-power mode: 10µA sleep current</li>
            <li>• 36 GPIO pins with interrupt support</li>
          </ul>
        </div>
      )
    },
    {
      id: 'encoding',
      title: 'Signal Encoding',
      description: 'PWM + ID payload',
      icon: <Code className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Signal Protocol</h4>
          <ul className="text-sm space-y-1">
            <li>• 38kHz carrier frequency</li>
            <li>• 8-bit weapon ID</li>
            <li>• 8-bit damage value</li>
            <li>• 8-bit timestamp</li>
            <li>• 1 parity bit for error detection</li>
            <li>• 300µs bit width</li>
          </ul>
          <pre className="text-xs bg-muted p-2 rounded">
{`// Packet structure
struct GunPacket {
  uint8_t weaponId;   // Unique gun identifier
  uint8_t damage;     // Damage value (0-255)
  uint8_t timestamp;  // Rolling counter
  uint8_t parity;     // Error detection
};`}
          </pre>
        </div>
      )
    },
    {
      id: 'emitter',
      title: 'IR Laser Emitter',
      description: 'Optical transmission',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">IR Emitter Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• Class 1 IR Laser Diode - 850nm</li>
            <li>• 5mW power output</li>
            <li>• 15° beam spread</li>
            <li>• TTL modulated input</li>
            <li>• Range: up to 100m</li>
            <li>• Current draw: 60mA at peak</li>
          </ul>
        </div>
      )
    },
    {
      id: 'pulse',
      title: 'Emit Modulated Pulse',
      description: 'Output signal',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Signal Transmission</h4>
          <ul className="text-sm space-y-1">
            <li>• Pulse duration: 25ms total</li>
            <li>• 38kHz modulation</li>
            <li>• Manchester encoding</li>
            <li>• Automatic retry on failure</li>
            <li>• Range adjustable via firmware</li>
          </ul>
          <div className="text-xs mt-2">
            Signal pattern: 9.6ms header + 24-bit data + 2.4ms stop
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
      <h3 className="text-xl font-semibold text-center">Gun Subsystem Flow</h3>
      
      <div className="relative">
        <div className="flex flex-col items-center space-y-6">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.slice(0, -1).map((_, index) => (
              <line
                key={`line-${index}`}
                x1="50%"
                y1={`${8 + (index * 20)}%`}
                x2="50%"
                y2={`${20 + (index * 20)}%`}
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

export default GunSubsystemFlowchart;

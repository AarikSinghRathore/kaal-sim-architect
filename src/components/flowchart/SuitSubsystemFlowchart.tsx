
import React, { useState } from 'react';
import FlowchartNode from './FlowchartNode';
import { Shield, Zap, Cpu, Radio, Database, Map } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NodeData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: React.ReactNode;
}

const SuitSubsystemFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const nodes: NodeData[] = [
    {
      id: 'reception',
      title: 'IR Signal Reception',
      description: 'Signal detection',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Signal Reception Details</h4>
          <ul className="text-sm space-y-1">
            <li>• Detection range: up to 100m</li>
            <li>• 850nm wavelength sensitivity</li>
            <li>• Automatic gain control</li>
            <li>• 3 redundant receivers for coverage</li>
          </ul>
        </div>
      )
    },
    {
      id: 'receiver',
      title: 'TSOP IR Receiver',
      description: 'Hardware decoder',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">TSOP Receiver Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• TSOP38438 IR sensor</li>
            <li>• 38kHz demodulation</li>
            <li>• 45° reception cone</li>
            <li>• Signal amplification: 30dB</li>
            <li>• Low current: 0.7mA operating</li>
          </ul>
        </div>
      )
    },
    {
      id: 'mcu',
      title: 'STM32 MCU',
      description: 'Signal processing',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">STM32 Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• STM32F103C8T6 "Blue Pill"</li>
            <li>• ARM Cortex-M3 @ 72MHz</li>
            <li>• 20KB RAM, 64KB Flash</li>
            <li>• External EEPROM (24LC256) for logging</li>
            <li>• 12 analog input channels</li>
            <li>• Operating voltage: 3.3V</li>
          </ul>
        </div>
      )
    },
    {
      id: 'decode',
      title: 'Payload Decode Logic',
      description: 'Extract signal data',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Signal Decoding Process</h4>
          <ul className="text-sm space-y-1">
            <li>• Interrupt-driven ISR capture</li>
            <li>• Manchester code demodulation</li>
            <li>• Parity check verification</li>
            <li>• Packet validation</li>
            <li>• Processing time: {"<"}2ms</li>
          </ul>
          <pre className="text-xs bg-muted p-2 rounded mt-2">
{`// Decode function pseudocode
void decodeIRSignal(uint8_t* rawData, size_t len) {
  // Validate header pulse
  if (!validateHeader(rawData)) return;
  
  // Decode Manchester-encoded bits
  uint32_t decodedData = decodeManchesterBits(
    rawData + HEADER_LEN, 
    DATA_BITS_LEN
  );
  
  // Extract fields
  uint8_t weaponId = (decodedData >> 16) & 0xFF;
  uint8_t damage = (decodedData >> 8) & 0xFF;
  uint8_t timestamp = decodedData & 0xFF;
  
  // Verify parity
  if (!verifyParity(decodedData)) return;
  
  // Process valid hit
  processHit(weaponId, damage);
}`}
          </pre>
        </div>
      )
    },
    {
      id: 'zone',
      title: 'Zone Map Match',
      description: 'Target location',
      icon: <Map className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Body Zone Mapping</h4>
          <ul className="text-sm space-y-1">
            <li>• 22 anatomically mapped zones</li>
            <li>• Zone priority based on hit location</li>
            <li>• Damage multipliers per zone</li>
          </ul>
          
          <div className="mt-4 bg-muted/20 p-2 rounded-md">
            <h5 className="text-sm font-medium">Zone Map</h5>
            <div className="relative h-32 mt-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-32">
                  {/* Simplified body zone map */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border border-kaal-red/50 bg-kaal-red/20"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-md border border-kaal-yellow/50 bg-kaal-yellow/20"></div>
                  <div className="absolute top-16 left-0 w-4 h-14 rounded-md border border-kaal-green/50 bg-kaal-green/20"></div>
                  <div className="absolute top-16 right-0 w-4 h-14 rounded-md border border-kaal-green/50 bg-kaal-green/20"></div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-12 rounded-md border border-kaal-blue/50 bg-kaal-blue/20"></div>
                </div>
              </div>
              <div className="absolute bottom-0 w-full text-xs text-center text-muted-foreground">
                22 zones with variable feedback intensities
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'electrode',
      title: 'Electrode Activation',
      description: 'Haptic feedback',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Electrode System</h4>
          <ul className="text-sm space-y-1">
            <li>• High-frequency, low-voltage (30-80V)</li>
            <li>• 150-300Hz frequency modulation</li>
            <li>• Current limiting to max 5mA per zone</li>
            <li>• Tunable intensity based on damage value</li>
            <li>• GFCI and isolation transformers for safety</li>
          </ul>
          
          <div className="mt-2 text-xs text-muted-foreground">
            Conductive cloth with interwoven silver-coated fibers
          </div>
        </div>
      )
    },
    {
      id: 'log',
      title: 'Log & Report to Tablet',
      description: 'Data transmission',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Data Logging</h4>
          <ul className="text-sm space-y-1">
            <li>• 50,000+ event storage capacity</li>
            <li>• BLE 5.2 transmission to tablet</li>
            <li>• Hit metrics: location, time, intensity</li>
            <li>• Latency: {"<"}250ms to instructor view</li>
            <li>• Automatic sync when in range</li>
          </ul>
          
          <div className="mt-2 text-xs text-muted-foreground">
            AES-256 encrypted transmission with session keys
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
      <h3 className="text-xl font-semibold text-center">Suit Subsystem Flow</h3>
      
      <div className="relative">
        <div className="flex flex-col items-center space-y-6">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.slice(0, -1).map((_, index) => (
              <line
                key={`line-${index}`}
                x1="50%"
                y1={`${8 + (index * 13.5)}%`}
                x2="50%"
                y2={`${13.5 + (index * 13.5)}%`}
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

export default SuitSubsystemFlowchart;

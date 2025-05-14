
import React, { useState } from 'react';
import { Zap, Radio, Cpu, Code, Shield, ArrowRight, Tablet } from 'lucide-react';
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
  type: 'gun' | 'suit' | 'full';
}

const DetailedFeedbackFlowchart: React.FC<FlowchartProps> = ({ type }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const gunNodes: FlowNode[] = [
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
        </div>
      )
    },
  ];
  
  const suitNodes: FlowNode[] = [
    {
      id: 'reception',
      title: 'IR Signal Reception',
      description: 'Optical input',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Reception Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• 360° coverage via 8 sensors</li>
            <li>• IR band filter: 830-870nm</li>
            <li>• Signal strength detection</li>
            <li>• Ambient light rejection</li>
          </ul>
        </div>
      )
    },
    {
      id: 'tsop',
      title: 'TSOP IR Receiver',
      description: 'Signal demodulation',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">TSOP Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• TSOP34838 receiver</li>
            <li>• 38kHz demodulation</li>
            <li>• AGC for consistent reception</li>
            <li>• Pre-amp and bandpass filter</li>
            <li>• TTL-compatible output</li>
          </ul>
        </div>
      )
    },
    {
      id: 'stm32',
      title: 'STM32 MCU',
      description: 'Core processing',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">STM32 Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• STM32F4 series @ 168MHz</li>
            <li>• 256KB SRAM, 1MB Flash</li>
            <li>• Hardware timers for precise timing</li>
            <li>• Real-time OS (FreeRTOS)</li>
            <li>• BLE module for instructor feedback</li>
          </ul>
        </div>
      )
    },
    {
      id: 'decode',
      title: 'Payload Decode Logic',
      description: 'Signal analysis',
      icon: <Code className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Decode Logic</h4>
          <ul className="text-sm space-y-1">
            <li>• Manchester decoding</li>
            <li>• Parity check and validation</li>
            <li>• Timestamp comparison</li>
            <li>• Hit position triangulation</li>
            <li>• Error correction</li>
          </ul>
        </div>
      )
    },
    {
      id: 'zone',
      title: 'Zone Map Match',
      description: 'Body mapping',
      icon: <Shield className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Body Zone Mapping</h4>
          <ul className="text-sm space-y-1">
            <li>• 24 distinct body zones</li>
            <li>• Hit location precision: ±3cm</li>
            <li>• Priority zones (vital areas)</li>
            <li>• Configurable damage multipliers</li>
          </ul>
          <div className="mt-4 p-2 bg-muted/30 rounded border border-muted">
            <div className="grid grid-cols-3 gap-1 text-xs">
              <div className="bg-red-500/20 p-1 rounded text-center">Head (3x)</div>
              <div className="bg-red-500/20 p-1 rounded text-center">Upper Torso (2x)</div>
              <div className="bg-red-500/20 p-1 rounded text-center">Lower Torso (1.5x)</div>
              <div className="bg-blue-500/20 p-1 rounded text-center">Upper Arms (1x)</div>
              <div className="bg-blue-500/20 p-1 rounded text-center">Lower Arms (0.8x)</div>
              <div className="bg-blue-500/20 p-1 rounded text-center">Hands (0.5x)</div>
              <div className="bg-green-500/20 p-1 rounded text-center">Upper Legs (1x)</div>
              <div className="bg-green-500/20 p-1 rounded text-center">Lower Legs (0.8x)</div>
              <div className="bg-green-500/20 p-1 rounded text-center">Feet (0.5x)</div>
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
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Electrode System</h4>
          <ul className="text-sm space-y-1">
            <li>• 48 independent electrodes</li>
            <li>• Safe voltage: 40-70V</li>
            <li>• Current limited to 3mA max</li>
            <li>• Pulse width: 50-200µs</li>
            <li>• Multiple intensity levels</li>
          </ul>
        </div>
      )
    },
    {
      id: 'report',
      title: 'Log & Report to Tablet',
      description: 'Data collection',
      icon: <Tablet className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Reporting System</h4>
          <ul className="text-sm space-y-1">
            <li>• Real-time hit logging</li>
            <li>• BLE connectivity to instructor tablet</li>
            <li>• Hit statistics and analysis</li>
            <li>• Training performance metrics</li>
            <li>• System health monitoring</li>
          </ul>
        </div>
      )
    },
  ];

  const fullSystemNodes = [
    {
      id: 'gun-triggered',
      title: 'Gun Triggered',
      description: 'User initiates',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Trigger Event</h4>
          <ul className="text-sm space-y-1">
            <li>• Trigger pull detected</li>
            <li>• Debounce logic applied</li>
            <li>• Firing sequence initiated</li>
            <li>• Realistic recoil simulated</li>
          </ul>
        </div>
      )
    },
    {
      id: 'ir-signal',
      title: 'IR Signal Sent',
      description: 'Data transmission',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Signal Transmission</h4>
          <ul className="text-sm space-y-1">
            <li>• 38kHz modulated IR burst</li>
            <li>• Encoded weapon and damage data</li>
            <li>• Directional emission cone</li>
            <li>• 100m effective range</li>
          </ul>
        </div>
      )
    },
    {
      id: 'suits-detect',
      title: 'Suits Detect Hit',
      description: 'Signal reception',
      icon: <Shield className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Hit Detection</h4>
          <ul className="text-sm space-y-1">
            <li>• Multi-sensor triangulation</li>
            <li>• Signal strength analysis</li>
            <li>• Ambient light rejection</li>
            <li>• Invalid signal filtering</li>
          </ul>
        </div>
      )
    },
    {
      id: 'payload-decoded',
      title: 'Payload Decoded',
      description: 'Data extraction',
      icon: <Code className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Decode Process</h4>
          <ul className="text-sm space-y-1">
            <li>• Manchester decoded</li>
            <li>• Parity verified</li>
            <li>• Weapon type identified</li>
            <li>• Damage value extracted</li>
          </ul>
        </div>
      )
    },
    {
      id: 'electrode-triggers',
      title: 'Electrode Triggers',
      description: 'Feedback activation',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Feedback Generation</h4>
          <ul className="text-sm space-y-1">
            <li>• Specific zone electrodes activated</li>
            <li>• Pulse pattern matched to weapon</li>
            <li>• Intensity based on damage value</li>
            <li>• Multiple safety checks</li>
          </ul>
        </div>
      )
    },
    {
      id: 'feedback-user',
      title: 'Feedback to User',
      description: 'Haptic sensation',
      icon: <Shield className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">User Experience</h4>
          <ul className="text-sm space-y-1">
            <li>• Localized sensation at hit point</li>
            <li>• Intensity proportional to damage</li>
            <li>• Distinct weapon "signature" feel</li>
            <li>• Safety-limited stimulus</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-logged',
      title: 'Data Logged',
      description: 'Record keeping',
      icon: <Tablet className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Data Collection</h4>
          <ul className="text-sm space-y-1">
            <li>• Hit timestamp and location</li>
            <li>• Weapon type and damage</li>
            <li>• User reaction metrics</li>
            <li>• System performance data</li>
          </ul>
        </div>
      )
    },
    {
      id: 'instructor-view',
      title: 'Instructor View Updated',
      description: 'Monitoring system',
      icon: <Tablet className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Instructor Dashboard</h4>
          <ul className="text-sm space-y-1">
            <li>• Real-time hit visualization</li>
            <li>• Trainee status monitoring</li>
            <li>• Performance analytics</li>
            <li>• System control and override</li>
          </ul>
        </div>
      )
    },
  ];
  
  const renderNodes = () => {
    let nodes: FlowNode[] = [];
    
    switch(type) {
      case 'gun':
        nodes = gunNodes;
        break;
      case 'suit':
        nodes = suitNodes;
        break;
      case 'full':
        nodes = fullSystemNodes;
        break;
    }
    
    if (type === 'full') {
      return (
        <div className="grid grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            {nodes.slice(0, nodes.length/2).map((node, index) => renderNodeWithConnection(node, index))}
          </div>
          <div className="space-y-6">
            {nodes.slice(nodes.length/2).map((node, index) => renderNodeWithConnection(node, index + nodes.length/2))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="flex flex-col items-center space-y-6">
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
        {index > 0 && type !== 'full' && (
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
        {type === 'gun' && "Gun Subsystem Flow"}
        {type === 'suit' && "Suit Subsystem Flow"}
        {type === 'full' && "Full Gun-to-Suit System Flow"}
      </h3>
      
      <div className="relative">
        {renderNodes()}
      </div>
      
      {activeNode && (
        <div className="mt-4 opacity-0 animate-fade-in" style={{opacity: 1}}>
          <div className={`kaal-card p-4 border border-${
            type === 'gun' 
              ? gunNodes.find(n => n.id === activeNode)?.color 
              : type === 'suit' 
                ? suitNodes.find(n => n.id === activeNode)?.color
                : fullSystemNodes.find(n => n.id === activeNode)?.color
            || 'border'}/50 bg-${
            type === 'gun' 
              ? gunNodes.find(n => n.id === activeNode)?.color 
              : type === 'suit' 
                ? suitNodes.find(n => n.id === activeNode)?.color
                : fullSystemNodes.find(n => n.id === activeNode)?.color
            || 'card'}/5`}>
            {type === 'gun' && gunNodes.find(n => n.id === activeNode)?.details}
            {type === 'suit' && suitNodes.find(n => n.id === activeNode)?.details}
            {type === 'full' && fullSystemNodes.find(n => n.id === activeNode)?.details}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedFeedbackFlowchart;

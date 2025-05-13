
import React, { useState } from 'react';
import { Zap, Signal, Cpu, Shield } from 'lucide-react';

const FeedbackSystemFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: 'trigger',
      title: 'Gun Trigger',
      description: 'Hall-effect magnetic sensor with 1.5ms debounce logic',
      icon: <Zap className="h-6 w-6" />,
      color: 'blue',
      latency: '1-3ms'
    },
    {
      id: 'signal',
      title: 'Signal Emission',
      description: 'IR/RF transmission with encrypted data packets',
      icon: <Signal className="h-6 w-6" />,
      color: 'green',
      latency: '5-15ms'
    },
    {
      id: 'mcu',
      title: 'MCU Processing',
      description: 'ESP32/STM32 microcontroller with real-time processing',
      icon: <Cpu className="h-6 w-6" />,
      color: 'yellow',
      latency: '3-6ms'
    },
    {
      id: 'feedback',
      title: 'Zoned Feedback',
      description: 'Targeted electrode activation with variable intensity',
      icon: <Shield className="h-6 w-6" />,
      color: 'red',
      latency: '2-5ms'
    }
  ];

  return (
    <div className="relative">
      {/* Flow Chart */}
      <div className="relative h-64 border border-border rounded-lg bg-card/50 overflow-hidden p-4">
        {/* Connection line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <line
            x1="12.5%"
            y1="50%"
            x2="37.5%"
            y2="50%"
            stroke="rgba(128, 128, 128, 0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="37.5%"
            y1="50%"
            x2="62.5%"
            y2="50%"
            stroke="rgba(128, 128, 128, 0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="62.5%"
            y1="50%"
            x2="87.5%"
            y2="50%"
            stroke="rgba(128, 128, 128, 0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Flow nodes */}
        <div className="flex justify-between items-center h-full relative z-10">
          {nodes.map((node) => (
            <NodeComponent
              key={node.id}
              node={node}
              isActive={activeNode === node.id}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
            />
          ))}
        </div>
      </div>

      {/* Node details panel */}
      <div className="mt-4">
        {activeNode ? (
          <NodeDetails node={nodes.find(n => n.id === activeNode)!} />
        ) : (
          <div className="text-center text-sm text-muted-foreground p-4 border border-dashed border-border rounded-md">
            Click on any node above to see detailed information
          </div>
        )}
      </div>
    </div>
  );
};

interface Node {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  latency: string;
}

const NodeComponent: React.FC<{
  node: Node;
  isActive: boolean;
  onClick: () => void;
}> = ({ node, isActive, onClick }) => {
  return (
    <div
      className={`
        w-20 h-20 flex flex-col items-center justify-center rounded-full cursor-pointer transition-all
        ${isActive ? `bg-kaal-${node.color}/20 border-2 border-kaal-${node.color}` : 'bg-card border border-border hover:bg-muted/20'}
      `}
      onClick={onClick}
    >
      <div className={`text-kaal-${node.color}`}>{node.icon}</div>
      <div className="text-xs font-medium mt-1">{node.title}</div>
      <div className="text-[10px] text-muted-foreground">{node.latency}</div>
    </div>
  );
};

const NodeDetails: React.FC<{ node: Node }> = ({ node }) => {
  return (
    <div className={`bg-kaal-${node.color}/10 p-4 rounded-md border border-kaal-${node.color}/30`}>
      <div className="flex items-start">
        <div className={`p-2 rounded-full bg-kaal-${node.color}/20 text-kaal-${node.color} mr-3`}>
          {node.icon}
        </div>
        <div>
          <h4 className="font-medium">{node.title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{node.description}</p>
          <div className="flex items-center mt-2">
            <span className="text-xs bg-muted/20 px-2 py-0.5 rounded-full">Latency: {node.latency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSystemFlowchart;

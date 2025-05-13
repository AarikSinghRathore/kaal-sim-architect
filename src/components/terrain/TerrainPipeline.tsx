
import React, { useState } from 'react';
import { Map, Cpu, Layers, Monitor } from 'lucide-react';

const TerrainPipeline = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: 'dem',
      title: 'DEM Data',
      description: 'Digital Elevation Model with satellite imagery',
      icon: <Map className="h-6 w-6" />,
      color: 'blue',
      files: 'GeoTIFF, SRTM, ALOS'
    },
    {
      id: 'qgis',
      title: 'QGIS Processing',
      description: 'Geographic data preprocessing and enhancement',
      icon: <Layers className="h-6 w-6" />,
      color: 'green',
      files: 'Shapefile, GeoJSON'
    },
    {
      id: 'cesium',
      title: 'Cesium Integration',
      description: '3D tiling and geospatial conversion',
      icon: <Map className="h-6 w-6" />,
      color: 'yellow',
      files: '3D Tiles, glTF'
    },
    {
      id: 'ue5',
      title: 'UE5 Engine',
      description: 'Real-time rendering with Nanite and Lumen',
      icon: <Cpu className="h-6 w-6" />,
      color: 'red',
      files: 'UASSET, UMAP'
    },
    {
      id: 'output',
      title: 'LED Wall Display',
      description: '8K resolution terrain visualization',
      icon: <Monitor className="h-6 w-6" />,
      color: 'blue',
      files: 'HDMI 2.1, DisplayPort 1.4'
    }
  ];

  return (
    <div className="relative">
      {/* Flow Chart */}
      <div className="relative h-64 border border-border rounded-lg bg-card/50 overflow-hidden p-4">
        {/* Connection line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <line
            x1="10%"
            y1="50%"
            x2="30%"
            y2="50%"
            stroke="rgba(128, 128, 128, 0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="30%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke="rgba(128, 128, 128, 0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="50%"
            y1="50%"
            x2="70%"
            y2="50%"
            stroke="rgba(128, 128, 128, 0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="70%"
            y1="50%"
            x2="90%"
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
            Click on any stage to see detailed information
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
  files: string;
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
            <span className="text-xs bg-muted/20 px-2 py-0.5 rounded-full">File Types: {node.files}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerrainPipeline;

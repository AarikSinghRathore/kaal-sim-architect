
import React from 'react';
import { Map, Layers, Cpu, Monitor } from 'lucide-react';

const TerrainPipeline = () => {
  return (
    <div className="relative h-64 border border-border rounded-lg bg-card/50 overflow-hidden p-4">
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

      <div className="flex justify-between items-center h-full relative z-10">
        <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-kaal-blue/20 border-2 border-kaal-blue">
          <Map className="h-6 w-6 text-kaal-blue" />
          <div className="text-xs font-medium mt-1">DEM Data</div>
          <div className="text-[10px] text-muted-foreground">GeoTIFF</div>
        </div>
        
        <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
          <Layers className="h-6 w-6 text-kaal-green" />
          <div className="text-xs font-medium mt-1">QGIS Processing</div>
          <div className="text-[10px] text-muted-foreground">GeoJSON</div>
        </div>
        
        <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
          <Map className="h-6 w-6 text-kaal-yellow" />
          <div className="text-xs font-medium mt-1">Cesium</div>
          <div className="text-[10px] text-muted-foreground">3D Tiles</div>
        </div>
        
        <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
          <Cpu className="h-6 w-6 text-kaal-red" />
          <div className="text-xs font-medium mt-1">UE5 Engine</div>
          <div className="text-[10px] text-muted-foreground">UASSET</div>
        </div>
        
        <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
          <Monitor className="h-6 w-6 text-kaal-blue" />
          <div className="text-xs font-medium mt-1">LED Wall</div>
          <div className="text-[10px] text-muted-foreground">8K Display</div>
        </div>
      </div>
    </div>
  );
};

export default TerrainPipeline;


import React from 'react';
import { Cpu, AlertTriangle, Activity } from 'lucide-react';

const DiagnosticsPanel = () => {
  return (
    <div className="relative border border-border rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm p-4">
      <div className="absolute top-2 left-4 text-xs text-kaal-green">TERRAIN ENGINE DIAGNOSTICS</div>
      
      {/* Simulated Diagnostics UI */}
      <div className="mt-6">
        {/* Performance Metrics */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <Activity className="h-4 w-4 text-kaal-green mr-1" />
              <span className="text-xs">Frame Rate</span>
            </div>
            <span className="text-xs text-kaal-green">60 FPS</span>
          </div>
          <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-kaal-green to-kaal-blue rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
        
        {/* GPU Usage */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <Cpu className="h-4 w-4 text-kaal-blue mr-1" />
              <span className="text-xs">GPU Utilization</span>
            </div>
            <span className="text-xs text-kaal-yellow">82%</span>
          </div>
          <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-kaal-green via-kaal-yellow to-kaal-red rounded-full" style={{ width: '82%' }}></div>
          </div>
        </div>
        
        {/* VRAM Usage */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <Cpu className="h-4 w-4 text-kaal-yellow mr-1" />
              <span className="text-xs">VRAM Usage</span>
            </div>
            <span className="text-xs text-kaal-yellow">28.4 GB / 48 GB</span>
          </div>
          <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-kaal-green to-kaal-yellow rounded-full" style={{ width: '59%' }}></div>
          </div>
        </div>
        
        {/* System Temperatures */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
          <div>
            <div className="flex justify-between items-center text-xs mb-0.5">
              <span>GPU 0 Temp</span>
              <span className="text-kaal-yellow">72°C</span>
            </div>
            <div className="w-full h-1.5 bg-muted/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-kaal-green via-kaal-yellow to-kaal-red rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center text-xs mb-0.5">
              <span>GPU 1 Temp</span>
              <span className="text-kaal-green">63°C</span>
            </div>
            <div className="w-full h-1.5 bg-muted/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-kaal-green via-kaal-yellow to-kaal-red rounded-full" style={{ width: '63%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center text-xs mb-0.5">
              <span>CPU Temp</span>
              <span className="text-kaal-green">58°C</span>
            </div>
            <div className="w-full h-1.5 bg-muted/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-kaal-green via-kaal-yellow to-kaal-red rounded-full" style={{ width: '58%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center text-xs mb-0.5">
              <span>System Temp</span>
              <span className="text-kaal-green">42°C</span>
            </div>
            <div className="w-full h-1.5 bg-muted/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-kaal-green via-kaal-yellow to-kaal-red rounded-full" style={{ width: '42%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Alerts */}
        <div className="bg-muted/20 p-2 rounded-md border border-kaal-yellow/30 flex items-center mb-3">
          <AlertTriangle className="h-4 w-4 text-kaal-yellow mr-2" />
          <span className="text-xs text-kaal-yellow">Warning: GPU 0 nearing temperature threshold</span>
        </div>
        
        {/* System Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-muted/20 p-2 rounded-md">
            <span className="block text-muted-foreground">Draw Calls:</span>
            <span>8,423</span>
          </div>
          <div className="bg-muted/20 p-2 rounded-md">
            <span className="block text-muted-foreground">Triangles:</span>
            <span>124.6M</span>
          </div>
          <div className="bg-muted/20 p-2 rounded-md">
            <span className="block text-muted-foreground">Terrain Tiles:</span>
            <span>142 loaded</span>
          </div>
          <div className="bg-muted/20 p-2 rounded-md">
            <span className="block text-muted-foreground">Shader Complexity:</span>
            <span>Medium-High</span>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-right text-muted-foreground">
          Last update: 0.3 seconds ago
        </div>
      </div>
    </div>
  );
};

export default DiagnosticsPanel;

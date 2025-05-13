
import React from 'react';
import { Monitor, Cpu } from 'lucide-react';

const TerrainHardware = () => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Hardware Architecture</h4>
      <p className="text-muted-foreground mb-6">
        Purpose-built hardware configuration to deliver seamless terrain visualization at ultra-high resolutions.
      </p>

      <div className="relative">
        <div className="h-64 border border-border rounded-lg bg-card/50 overflow-hidden">
          {/* Hardware visualization diagram */}
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            {/* Background grid */}
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(76, 175, 80, 0.1)" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Render Server */}
            <g>
              <rect x="100" y="175" width="240" height="150" rx="10" fill="#1A1F2C" stroke="#4CAF50" strokeWidth="2"/>
              <text x="220" y="160" fill="white" fontSize="16" textAnchor="middle">Render Server</text>
              
              {/* CPUs */}
              <rect x="130" y="200" width="80" height="40" rx="5" fill="#121520" stroke="#3F51B5" strokeWidth="1"/>
              <text x="170" y="225" fill="white" fontSize="12" textAnchor="middle">CPU</text>
              
              {/* GPUs */}
              <rect x="230" y="200" width="80" height="40" rx="5" fill="#121520" stroke="#F44336" strokeWidth="1"/>
              <text x="270" y="225" fill="white" fontSize="12" textAnchor="middle">GPU</text>
              
              {/* RAM */}
              <rect x="130" y="260" width="180" height="30" rx="5" fill="#121520" stroke="#FFC107" strokeWidth="1"/>
              <text x="220" y="280" fill="white" fontSize="12" textAnchor="middle">RAM</text>
            </g>
            
            {/* LED Wall Controller */}
            <g>
              <rect x="460" y="175" width="240" height="150" rx="10" fill="#1A1F2C" stroke="#4CAF50" strokeWidth="2"/>
              <text x="580" y="160" fill="white" fontSize="16" textAnchor="middle">LED Wall Controller</text>
              
              {/* Video Processor */}
              <rect x="490" y="200" width="180" height="40" rx="5" fill="#121520" stroke="#9C27B0" strokeWidth="1"/>
              <text x="580" y="225" fill="white" fontSize="12" textAnchor="middle">Video Processor</text>
              
              {/* Output Ports */}
              <rect x="490" y="260" width="40" height="30" rx="5" fill="#121520" stroke="#00BCD4" strokeWidth="1"/>
              <rect x="540" y="260" width="40" height="30" rx="5" fill="#121520" stroke="#00BCD4" strokeWidth="1"/>
              <rect x="590" y="260" width="40" height="30" rx="5" fill="#121520" stroke="#00BCD4" strokeWidth="1"/>
              <rect x="640" y="260" width="40" height="30" rx="5" fill="#121520" stroke="#00BCD4" strokeWidth="1"/>
            </g>
            
            {/* LED Wall */}
            <g>
              <rect x="760" y="100" width="180" height="300" rx="10" fill="#1A1F2C" stroke="#4CAF50" strokeWidth="2"/>
              <text x="850" y="85" fill="white" fontSize="16" textAnchor="middle">LED Wall Display</text>
              
              {/* LED Panels Grid */}
              {[0, 1, 2, 3, 4, 5].map(row => (
                [0, 1, 2].map(col => (
                  <rect 
                    key={`panel-${row}-${col}`} 
                    x={780 + col * 45} 
                    y={125 + row * 45} 
                    width="40" 
                    height="40" 
                    rx="2" 
                    fill="#121520" 
                    stroke="#03A9F4" 
                    strokeWidth="1"
                  />
                ))
              ))}
            </g>
            
            {/* Connection lines */}
            {/* Render Server to LED Controller */}
            <path d="M 340 250 L 460 250" stroke="#4CAF50" strokeWidth="4" strokeDasharray="5,5"/>
            
            {/* LED Controller to LED Wall */}
            <path d="M 700 250 L 760 250" stroke="#00BCD4" strokeWidth="4" strokeDasharray="5,5"/>
            
            {/* Wifi Connection to Tablet */}
            <path d="M 220 175 Q 220 100 300 100" stroke="#FF9800" strokeWidth="2" strokeDasharray="5,5"/>
            <circle cx="320" cy="100" r="20" fill="#1A1F2C" stroke="#FF9800" strokeWidth="2"/>
            <text x="320" y="104" fill="white" fontSize="12" textAnchor="middle">📱</text>
          </svg>
        </div>
      </div>
      
      <div className="mt-8 bg-muted/10 p-4 rounded-md border border-muted/30">
        <h5 className="font-medium mb-4 flex items-center">
          <Monitor className="h-5 w-5 text-kaal-blue mr-2" />
          System Architecture
        </h5>
        <p className="text-sm text-muted-foreground mb-4">
          The KAAL terrain visualization system is built around a high-performance render server that processes 
          geospatial data and outputs to a modular LED wall display. The system features dual GPU rendering with 
          specific optimizations for terrain data and real-time effects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-black/20 backdrop-blur-sm rounded p-3">
            <h6 className="text-sm font-medium">Signal Flow</h6>
            <p className="text-xs text-muted-foreground mt-1">
              DisplayPort 1.4 with DSC → LED Processor → Custom FPGA → LED Modules
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded p-3">
            <h6 className="text-sm font-medium">Cooling System</h6>
            <p className="text-xs text-muted-foreground mt-1">
              Liquid cooling with redundant pumps, heat exchangers, and emergency thermal throttling
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded p-3">
            <h6 className="text-sm font-medium">Power Requirements</h6>
            <p className="text-xs text-muted-foreground mt-1">
              3-phase power with UPS backup, 12kW total system capacity (6kW typical load)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerrainHardware;

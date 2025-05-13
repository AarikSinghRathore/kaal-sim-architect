
import React from 'react';
import { Tablet, Signal } from 'lucide-react';

const ControlSystem = () => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Control Interface Architecture</h4>
      <p className="text-muted-foreground mb-6">
        Tablet-based control system with intuitive UI for manipulating terrain, environment, and simulation parameters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative border border-border rounded-lg bg-card/50 overflow-hidden p-6">
          <h5 className="font-medium mb-4 flex items-center">
            <Tablet className="h-4 w-4 text-kaal-yellow mr-2" />
            Tablet Interface
          </h5>
          
          {/* Simulated tablet UI */}
          <div className="relative border-[8px] border-black rounded-2xl overflow-hidden bg-kaal-navy">
            <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-between px-3">
              <div className="flex items-center text-xs text-white">
                <span>10:42</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-kaal-green"></div>
                <div className="w-3 h-3 rounded-full bg-kaal-blue"></div>
              </div>
            </div>
            
            <div className="pt-6 p-2 h-[220px] text-white">
              <div className="text-xs font-bold mb-2 px-1">KAAL TERRAIN CONTROL</div>
              
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="bg-black/40 rounded-md p-1.5">
                  <div className="text-[8px] mb-1">LOCATION</div>
                  <div className="text-[10px] flex justify-between">
                    <span>Kashmir Valley</span>
                    <span>▼</span>
                  </div>
                </div>
                <div className="bg-black/40 rounded-md p-1.5">
                  <div className="text-[8px] mb-1">TIME</div>
                  <div className="text-[10px] flex justify-between">
                    <span>17:30 hrs</span>
                    <span>▼</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-1.5 mb-2">
                <div className="bg-black/40 rounded-md p-1.5">
                  <div className="text-[6px] mb-1">WEATHER</div>
                  <div className="bg-kaal-blue/20 rounded h-8 border border-kaal-blue/50"></div>
                </div>
                <div className="bg-black/40 rounded-md p-1.5">
                  <div className="text-[6px] mb-1">VISIBILITY</div>
                  <div className="bg-kaal-green/20 rounded h-8 border border-kaal-green/50"></div>
                </div>
                <div className="bg-black/40 rounded-md p-1.5">
                  <div className="text-[6px] mb-1">EFFECTS</div>
                  <div className="bg-kaal-yellow/20 rounded h-8 border border-kaal-yellow/50"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-1.5">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="bg-black/40 rounded-md p-1 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-muted/20 border border-muted/50"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative border border-border rounded-lg bg-card/50 overflow-hidden p-6">
          <h5 className="font-medium mb-4 flex items-center">
            <Signal className="h-4 w-4 text-kaal-blue mr-2" />
            Communication Architecture
          </h5>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="mt-1 p-1 rounded-full bg-kaal-blue/20 text-kaal-blue mr-3 flex-shrink-0">
                <Signal className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">WebSocket Protocol</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Bi-directional, low-latency communication between tablet and render server
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 p-1 rounded-full bg-kaal-blue/20 text-kaal-blue mr-3 flex-shrink-0">
                <Signal className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">UE5 Plugin Integration</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Custom WebSocket server plugin exposing UE5 terrain parameters
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 p-1 rounded-full bg-kaal-blue/20 text-kaal-blue mr-3 flex-shrink-0">
                <Signal className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Command Structure</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  JSON-based command API with parameter validation and response tracking
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 p-1 rounded-full bg-kaal-blue/20 text-kaal-blue mr-3 flex-shrink-0">
                <Signal className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Status Reporting</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Real-time performance metrics and system status pushed to control tablet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlSystem;


import React, { useState } from 'react';
import { Cloud, Zap, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnvironmentalFX = () => {
  const [activeEffect, setActiveEffect] = useState<string | null>(null);
  
  const effects = [
    {
      id: 'volumetric-cloud',
      name: 'Volumetric Clouds',
      description: 'Dynamic cloud system with physical lighting and raymarched rendering',
      icon: <Cloud className="h-5 w-5" />,
      color: 'blue',
      detail: 'The cloud system uses raymarched volumetric rendering with multiple noise octaves for shape and detail. Each cloud interacts with the global lighting system, casting shadows on the terrain and supporting time-of-day transitions.',
      performance: 'Medium-High GPU Impact'
    },
    {
      id: 'fog',
      name: 'Volumetric Fog',
      description: 'Height-based atmospheric fog with density variation and light scattering',
      icon: <Cloud className="h-5 w-5" />,
      color: 'green',
      detail: 'Ground-hugging fog uses volumetric rendering with altitude-based density falloff. The system supports terrain-aware fog that pools in valleys and dissipates at higher elevations, with wind-driven animation.',
      performance: 'Medium GPU Impact'
    },
    {
      id: 'precipitation',
      name: 'Precipitation Effects',
      description: 'Rain and snow particles with surface interaction and accumulation',
      icon: <Cloud className="h-5 w-5" />,
      color: 'yellow',
      detail: 'The precipitation system uses GPU particle rendering with collision detection against terrain. Rain creates dynamic surface splashes, puddles, and wet material effects. Snow accumulates on surfaces with variable thickness.',
      performance: 'Medium-Low GPU Impact'
    },
    {
      id: 'lighting',
      name: 'Dynamic Lighting',
      description: 'Time-of-day system with physically accurate sun/moon positioning',
      icon: <Zap className="h-5 w-5" />,
      color: 'red',
      detail: 'The lighting system positions celestial bodies based on geographic location, date, and time. It includes atmospheric scattering, volumetric light shafts, and dynamic shadow systems with time-lapse capabilities.',
      performance: 'High GPU Impact'
    },
    {
      id: 'terrain-deformation',
      name: 'Terrain Deformation',
      description: 'Dynamic modification of terrain with craters, trenches, and other effects',
      icon: <Mountain className="h-5 w-5" />,
      color: 'blue',
      detail: 'Runtime terrain modification using displacement mapping and tessellation. Supports impact craters, blast damage, and procedural erosion effects with material changes. Changes can be persistent or temporary.',
      performance: 'Medium-High GPU Impact'
    }
  ];
  
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Environmental Effects System</h4>
      <p className="text-muted-foreground mb-6">
        Real-time dynamic environmental systems for creating immersive, customizable training scenarios.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {effects.map(effect => (
          <Button
            key={effect.id}
            variant="outline"
            className={`h-auto flex flex-col items-center text-left p-4 ${
              activeEffect === effect.id ? `bg-kaal-${effect.color}/20 border-kaal-${effect.color}` : ''
            }`}
            onClick={() => setActiveEffect(activeEffect === effect.id ? null : effect.id)}
          >
            <div className={`w-10 h-10 rounded-full bg-kaal-${effect.color}/20 flex items-center justify-center mb-2`}>
              <div className={`text-kaal-${effect.color}`}>{effect.icon}</div>
            </div>
            <div className="text-sm font-medium">{effect.name}</div>
          </Button>
        ))}
      </div>
      
      <div className="mt-6 min-h-[200px]">
        {activeEffect ? (
          <div className={`bg-kaal-${effects.find(e => e.id === activeEffect)?.color || 'blue'}/10 p-4 rounded-md border border-kaal-${effects.find(e => e.id === activeEffect)?.color || 'blue'}/30`}>
            <h5 className="font-medium mb-2">{effects.find(e => e.id === activeEffect)?.name}</h5>
            <p className="text-sm text-muted-foreground mb-4">
              {effects.find(e => e.id === activeEffect)?.detail}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 backdrop-blur-sm rounded p-3">
                <h6 className="text-xs font-medium mb-1">Implementation Details</h6>
                <p className="text-xs text-muted-foreground">
                  Leverages UE5's Niagara particle system with GPU simulation for high-performance rendering. 
                  Custom HLSL shaders provide advanced visual effects with minimal performance impact.
                </p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm rounded p-3">
                <h6 className="text-xs font-medium mb-1">Performance Considerations</h6>
                <p className="text-xs text-muted-foreground mb-1">
                  {effects.find(e => e.id === activeEffect)?.performance}
                </p>
                <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-kaal-green to-kaal-red rounded-full" 
                    style={{ 
                      width: effects.find(e => e.id === activeEffect)?.performance.includes('Low') ? '30%' : 
                             effects.find(e => e.id === activeEffect)?.performance.includes('Medium-Low') ? '45%' :
                             effects.find(e => e.id === activeEffect)?.performance.includes('Medium') ? '60%' :
                             effects.find(e => e.id === activeEffect)?.performance.includes('Medium-High') ? '75%' : '90%' 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-sm text-muted-foreground p-4 border border-dashed border-border rounded-md">
            Click on any effect above to see detailed information
          </div>
        )}
      </div>
    </div>
  );
};

export default EnvironmentalFX;

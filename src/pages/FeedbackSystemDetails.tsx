
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import ViewToggle from "@/components/ui/ViewToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Zap,
  Shield,
  Cpu,
  Radio,
  AlertTriangle,
  Map,
  Tablet,
  Database
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import GunSubsystemFlowchart from '@/components/flowchart/GunSubsystemFlowchart';
import SuitSubsystemFlowchart from '@/components/flowchart/SuitSubsystemFlowchart';
import FullSystemFlowchart from '@/components/flowchart/FullSystemFlowchart';

const FeedbackSystemDetails = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);

  return (
    <Layout 
      heroTitle="Feedback System Technical Details" 
      heroSubtitle="Comprehensive Documentation of the Gun-to-Suit Feedback System" 
      heroBackground="from-kaal-navy/90 to-black"
    >
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center gap-6 mb-10">
          <h1 className="text-3xl font-bold">Gun-to-Suit Feedback System</h1>
          <p className="text-muted-foreground text-center max-w-2xl">
            Detailed technical documentation of the KAAL feedback system, 
            including gun unit, suit sensors, and electrode feedback mechanisms.
          </p>
          <ViewToggle 
            isTechnicalView={isTechnicalView}
            setIsTechnicalView={setIsTechnicalView}
            className="max-w-sm"
          />
        </div>

        {isTechnicalView ? (
          <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
                <span className="sm:hidden">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="gun" className="flex items-center gap-2">
                <Radio className="h-4 w-4" />
                <span className="hidden sm:inline">Gun Subsystem</span>
                <span className="sm:hidden">Gun</span>
              </TabsTrigger>
              <TabsTrigger value="suit" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Suit Subsystem</span>
                <span className="sm:hidden">Suit</span>
              </TabsTrigger>
              <TabsTrigger value="system" className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                <span className="hidden sm:inline">Complete System</span>
                <span className="sm:hidden">System</span>
              </TabsTrigger>
              <TabsTrigger value="safety" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span className="hidden sm:inline">Safety</span>
                <span className="sm:hidden">Safety</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="kaal-card p-6 space-y-8">
                <h2 className="text-xl font-semibold">System Architecture Overview</h2>
                <p className="text-muted-foreground">
                  The KAAL Feedback System consists of two main components that work together to create 
                  realistic training scenarios with immediate physical feedback.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-muted rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Radio className="h-5 w-5 text-kaal-blue mr-2" />
                      <h3 className="font-medium">Gun Unit</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Trigger mechanism with debounce</li>
                      <li>• ESP32 microcontroller</li>
                      <li>• IR/Laser emitter (850nm)</li>
                      <li>• Signal modulation</li>
                      <li>• Weapon identification system</li>
                    </ul>
                  </div>
                  
                  <div className="border border-muted rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-kaal-green mr-2" />
                      <h3 className="font-medium">Feedback Suit</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• TSOP IR sensors</li>
                      <li>• STM32 microcontroller</li>
                      <li>• Conductive cloth zones</li>
                      <li>• Electrode grid layout</li>
                      <li>• Safety circuit protection</li>
                    </ul>
                  </div>
                  
                  <div className="border border-muted rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Tablet className="h-5 w-5 text-kaal-yellow mr-2" />
                      <h3 className="font-medium">Control System</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Instructor tablet interface</li>
                      <li>• Real-time status monitoring</li>
                      <li>• Emergency override controls</li>
                      <li>• Exercise configuration</li>
                      <li>• Analytics and reporting</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                  <h4 className="font-medium mb-2">Key System Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>End-to-end latency:</span>
                      <span className="font-mono">11-29ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Signal range:</span>
                      <span className="font-mono">up to 100m</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery life (gun):</span>
                      <span className="font-mono">8+ hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery life (suit):</span>
                      <span className="font-mono">12+ hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Feedback zones:</span>
                      <span className="font-mono">22 anatomical areas</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wireless protocol:</span>
                      <span className="font-mono">LoRa + BLE</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gun">
              <GunSubsystemFlowchart />
            </TabsContent>
            
            <TabsContent value="suit">
              <SuitSubsystemFlowchart />
            </TabsContent>
            
            <TabsContent value="system">
              <FullSystemFlowchart />
            </TabsContent>
            
            <TabsContent value="safety">
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-center">Safety Systems</h3>
                
                <div className="kaal-card p-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-kaal-red mr-2" />
                    <h3 className="text-lg font-medium">Comprehensive Safety Architecture</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium mb-3 border-b border-muted pb-2">Manual Safety Systems</h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-kaal-red mr-2 mt-1">•</span>
                          <div>
                            <div className="font-medium">Emergency Stop Button</div>
                            <p>Physical red button on each suit providing immediate hardware cutoff of all electrode systems</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-kaal-red mr-2 mt-1">•</span>
                          <div>
                            <div className="font-medium">Instructor Override</div>
                            <p>Tablet-based "Kill Shock" switch with redundant wireless transmission for immediate system-wide deactivation</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-kaal-red mr-2 mt-1">•</span>
                          <div>
                            <div className="font-medium">Intensity Control</div>
                            <p>Per-participant feedback intensity adjustment with master limiter settings</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3 border-b border-muted pb-2">Automatic Safety Systems</h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-kaal-yellow mr-2 mt-1">•</span>
                          <div>
                            <div className="font-medium">Pulse Duration Limiter</div>
                            <p>Hardware-enforced 300ms maximum pulse duration regardless of signal input</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-kaal-yellow mr-2 mt-1">•</span>
                          <div>
                            <div className="font-medium">Current Monitoring</div>
                            <p>INA219 current sensor with &gt;800mA spike detection and automatic cutoff</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-kaal-yellow mr-2 mt-1">•</span>
                          <div>
                            <div className="font-medium">Skin Resistance Sensing</div>
                            <p>Continuous monitoring with automatic shutdown if resistance falls below safety threshold</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-muted/10 rounded-md border border-muted/30">
                    <h5 className="text-sm font-medium mb-2">Technical Safety Parameters</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                      <div className="border border-muted/50 p-2 rounded">
                        <div className="font-medium mb-1">Maximum Voltage</div>
                        <div>80Vp-p (peak-to-peak)</div>
                      </div>
                      <div className="border border-muted/50 p-2 rounded">
                        <div className="font-medium mb-1">Maximum Current</div>
                        <div>5mA per zone</div>
                      </div>
                      <div className="border border-muted/50 p-2 rounded">
                        <div className="font-medium mb-1">Pulse Frequency</div>
                        <div>150-300Hz</div>
                      </div>
                      <div className="border border-muted/50 p-2 rounded">
                        <div className="font-medium mb-1">Pulse Width</div>
                        <div>50-300μs</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="kaal-card p-6">
                  <h3 className="font-medium mb-4">Safety Circuit Architecture</h3>
                  <div className="relative h-64 border border-muted rounded-lg bg-muted/20 p-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <p className="mb-2">Circuit schematic diagram for safety systems</p>
                        <Button variant="outline" size="sm">View Full Schematic</Button>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 bg-muted/30 p-2 rounded text-xs">
                      <div className="font-medium">Safety Components:</div>
                      <ul className="mt-1 space-y-1 text-muted-foreground">
                        <li>• GFCI protection</li>
                        <li>• Isolation transformer</li>
                        <li>• Redundant cutoff relays</li>
                        <li>• Watchdog timer circuit</li>
                        <li>• Hardware current limiter</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="kaal-card p-8 max-w-3xl mx-auto opacity-0 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-kaal-green/20 flex items-center justify-center">
                <Zap className="h-12 w-12 text-kaal-green" />
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-center">How the Feedback System Works</h2>
            <p className="text-muted-foreground text-center mb-10">
              The KAAL system creates realistic training by providing instant physical feedback when a trainee is "hit" during exercises.
            </p>
            
            <div className="relative">
              <div className="absolute left-0 top-1/2 w-full h-0.5 bg-muted/50 -translate-y-1/2"></div>
              <div className="grid grid-cols-3 gap-8 relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-kaal-blue" />
                  </div>
                  <h4 className="font-medium text-center">Gun Fires Signal</h4>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Special training gun fires a harmless infrared signal
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-kaal-green" />
                  </div>
                  <h4 className="font-medium text-center">Signal Detection</h4>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Training suit detects the hit and location on the body
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-muted flex items-center justify-center mb-4">
                    <Cpu className="h-8 w-8 text-kaal-yellow" />
                  </div>
                  <h4 className="font-medium text-center">Feedback Response</h4>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Suit provides immediate haptic feedback at the impact point
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted/10 p-6 rounded-lg border border-muted/30">
                <h3 className="font-medium mb-3 flex items-center">
                  <Shield className="h-5 w-5 text-kaal-green mr-2" />
                  Complete Safety
                </h3>
                <p className="text-sm text-muted-foreground">
                  The system uses low-voltage technology with multiple safety systems, emergency cutoffs, and automatic monitoring to ensure a completely safe training experience.
                </p>
              </div>
              
              <div className="bg-muted/10 p-6 rounded-lg border border-muted/30">
                <h3 className="font-medium mb-3 flex items-center">
                  <Monitor className="h-5 w-5 text-kaal-blue mr-2" />
                  Instructor Control
                </h3>
                <p className="text-sm text-muted-foreground">
                  Trainers have complete control via tablet interface, showing real-time participant status, with the ability to adjust feedback intensity or disable the system instantly.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FeedbackSystemDetails;

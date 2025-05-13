
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield, 
  Zap, 
  Cpu, 
  Radio, 
  Tablet, 
  AlertTriangle, 
  Battery, 
  Layers, 
  Signal,
  ChevronDown
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const FeedbackSystemDetails = () => {
  return (
    <Layout 
      heroTitle="Feedback System Technical Details" 
      heroSubtitle="Comprehensive Documentation of Suit & Gun Feedback Architecture" 
      heroBackground="from-kaal-navy/90 to-black"
    >
      <div className="container mx-auto py-12">
        <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">System Overview</span>
              <span className="sm:hidden">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="electronics" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              <span className="hidden sm:inline">Electronics</span>
              <span className="sm:hidden">Circuit</span>
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">Feedback System</span>
              <span className="sm:hidden">Feedback</span>
            </TabsTrigger>
            <TabsTrigger value="safety" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Safety Systems</span>
              <span className="sm:hidden">Safety</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="space-y-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold text-center">Tactical Feedback System</h2>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Signal className="h-5 w-5 text-kaal-blue mr-2" />
                  Signal Flow Architecture
                </h3>
                <p className="text-muted-foreground mb-6">
                  The complete signal flow architecture from gun trigger to impact feedback on the suit, showing the full data/signal pipeline with precise latency measurements.
                </p>
                
                <div className="relative h-64 border border-border rounded-lg bg-card/50 overflow-hidden p-4">
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

                  <div className="flex justify-between items-center h-full relative z-10">
                    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-kaal-blue/20 border-2 border-kaal-blue">
                      <Zap className="h-6 w-6 text-kaal-blue" />
                      <div className="text-xs font-medium mt-1">Gun Trigger</div>
                      <div className="text-[10px] text-muted-foreground">1-3ms</div>
                    </div>
                    
                    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
                      <Signal className="h-6 w-6 text-kaal-green" />
                      <div className="text-xs font-medium mt-1">Signal Emission</div>
                      <div className="text-[10px] text-muted-foreground">5-15ms</div>
                    </div>
                    
                    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
                      <Cpu className="h-6 w-6 text-kaal-yellow" />
                      <div className="text-xs font-medium mt-1">MCU Processing</div>
                      <div className="text-[10px] text-muted-foreground">3-6ms</div>
                    </div>
                    
                    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-card border border-border hover:bg-muted/20">
                      <Shield className="h-6 w-6 text-kaal-red" />
                      <div className="text-xs font-medium mt-1">Zoned Feedback</div>
                      <div className="text-[10px] text-muted-foreground">2-5ms</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Signal Chain Latency</h5>
                    <table className="w-full text-sm">
                      <thead className="border-b border-muted">
                        <tr>
                          <th className="text-left py-2">Component</th>
                          <th className="text-right py-2">Latency</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-muted/30">
                          <td className="py-2">Trigger Debounce</td>
                          <td className="text-right">1-3ms</td>
                        </tr>
                        <tr className="border-b border-muted/30">
                          <td className="py-2">IR/RF Signal Emission</td>
                          <td className="text-right">&lt;1ms</td>
                        </tr>
                        <tr className="border-b border-muted/30">
                          <td className="py-2">Wireless Transmission</td>
                          <td className="text-right">5-15ms</td>
                        </tr>
                        <tr className="border-b border-muted/30">
                          <td className="py-2">MCU Processing</td>
                          <td className="text-right">3-6ms</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Total Latency</td>
                          <td className="text-right font-medium">11-29ms</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Communication Protocols</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Primary:</strong> 2.4GHz RF with frequency hopping (BLE 5.2)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Secondary:</strong> 940nm IR for close-quarter scenarios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Encryption:</strong> AES-128 with rotating session keys</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Error Correction:</strong> Reed-Solomon FEC with packet retransmission</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Range:</strong> 100m outdoor / 30m indoor (RF mode)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="kaal-card p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-kaal-green mr-2" />
                    Gun Simulation
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>Trigger System:</strong> Hall-effect magnetic sensors with 1.5mm actuation and adjustable pull force (1.5-3.0N)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>IR Emission:</strong> 940nm LED array (200mW) with 650nm red laser for aiming (Class IIIa, 4.5mW)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>Range:</strong> Effective up to 100m with adjustable beam divergence (3-15mrad)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>Power:</strong> 18650 Li-ion cell (3.7V/2000mAh) with 8+ hours runtime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2 mt-0.5">•</span>
                      <span><strong>Integration:</strong> Universal rail system (Picatinny compatible), IP54 rated</span>
                    </li>
                  </ul>
                </div>
                
                <div className="kaal-card p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Radio className="h-5 w-5 text-kaal-blue mr-2" />
                    Instructor Panel
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>Protocol:</strong> WebSocket over secure WiFi with BLE mesh backup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>Updates:</strong> 250ms status updates (4Hz), &lt;50ms for critical events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>Security:</strong> TLS 1.3 with mutual authentication via client certificates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>Control:</strong> Emergency shutdown, feedback intensity, weapon parameters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-blue mr-2 mt-0.5">•</span>
                      <span><strong>Monitoring:</strong> Health tracking, hit analysis, event timeline with export</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="electronics">
            <div className="space-y-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold text-center">Electronic Systems</h2>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Cpu className="h-5 w-5 text-kaal-green mr-2" />
                  Microcontroller Design
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">MCU Specifications</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Primary:</strong> ESP32-S3 (Xtensa LX7 dual-core, 240MHz)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Alternative:</strong> STM32F411 (ARM Cortex-M4, 100MHz)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>RAM:</strong> 512KB SRAM (ESP32) or 128KB (STM32)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Flash:</strong> 8MB for firmware and configuration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>GPIO:</strong> 22 zone control lines, 5 safety inputs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Real-Time Processing</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>RTOS:</strong> FreeRTOS for deterministic task management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Interrupts:</strong> &lt;5μs response time for critical events</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Watchdog:</strong> 8-second hardware watchdog with system reset</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>OTA Updates:</strong> Secure firmware delivery via WiFi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Logging:</strong> Non-volatile storage for event history</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Collapsible className="mt-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Firmware Architecture
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-muted/10 rounded-md border border-muted/30">
                    <pre className="text-xs text-muted-foreground overflow-x-auto">
{`// Feedback Suit Main Firmware Structure
#include "ESP32S3_FeedbackSystem.h"
#include "SafetyMonitor.h"
#include "BLECommunication.h"
#include "ElectrodeController.h"
#include "BatteryManager.h"

// Interrupt handlers for critical systems
void IRAM_ATTR handleEmergencyButton() {
  systemState = EMERGENCY_SHUTDOWN;
  disableAllElectrodes();
  sendEmergencySignal();
}

void IRAM_ATTR handleOvercurrentDetection() {
  if (currentSensor.readValue() > MAX_SAFE_CURRENT) {
    disableAffectedZone();
    logSafetyEvent(OVERCURRENT_DETECTED);
  }
}

void setup() {
  // Initialize hardware
  batterySensor.begin();
  electrodeController.begin();
  wirelessReceiver.begin();
  
  // Set up watchdog timer (8 second timeout)
  esp_task_wdt_init(8, true);
  esp_task_wdt_add(NULL);
  
  // Configure interrupts
  attachInterrupt(EMERGENCY_PIN, handleEmergencyButton, FALLING);
  attachInterrupt(CURRENT_SENSE_PIN, handleOvercurrentDetection, RISING);
  
  // Start OTA update service in background
  setupOTA();
}

void loop() {
  // Reset watchdog timer
  esp_task_wdt_reset();
  
  // Process incoming hit signals
  if (wirelessReceiver.dataAvailable()) {
    HitData hit = wirelessReceiver.readHitData();
    if (validateHitData(hit)) {
      processHit(hit);
    }
  }
  
  // Battery monitoring
  batteryManager.update();
  if (batteryManager.isLowBattery()) {
    enterLowPowerMode();
  }
  
  // Send status updates to instructor panel (every 250ms)
  static unsigned long lastUpdate = 0;
  if (millis() - lastUpdate > 250) {
    sendStatusUpdate();
    lastUpdate = millis();
  }
}`}
                    </pre>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Battery className="h-5 w-5 text-kaal-yellow mr-2" />
                  Power Supply
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Battery Specifications</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Type:</strong> Lithium Ion 2S2P (7.4V nominal)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Capacity:</strong> 3000mAh (22.2Wh)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Discharge:</strong> 2C (6A continuous)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Runtime:</strong> 3-4 hours intensive use</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Charge Time:</strong> 1.5 hours (2A charger)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Power Management</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>BMS:</strong> Overcurrent, overdischarge, thermal protection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>MCU Supply:</strong> 3.3V via TPS62133 Buck (95% efficiency)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Electrode Driver:</strong> 30-80V boost via TPS61088</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Thermal:</strong> 70°C max operating, shutdown at 80°C</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Hot-Swap:</strong> Secondary battery port with seamless switchover</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="feedback">
            <div className="space-y-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold text-center">Tactile Feedback System</h2>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Layers className="h-5 w-5 text-kaal-blue mr-2" />
                  Zoned Electrode Architecture
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-72 border border-border rounded-lg bg-card/50 overflow-hidden">
                    <div className="absolute top-2 left-0 w-full text-center text-sm font-medium">Front View</div>
                    
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                      <path
                        d="M50,15 C53,15 56,16 58,18 C60,20 60,22 60,25 C60,28 58,30 58,33 C58,36 60,38 60,40 
                          C60,45 55,50 55,55 C55,60 55,65 55,70 C55,75 55,80 53,85 C51,90 51,95 50,95 
                          C49,95 49,90 47,85 C45,80 45,75 45,70 C45,65 45,60 45,55 C45,50 40,45 40,40 
                          C40,38 42,36 42,33 C42,30 40,28 40,25 C40,22 40,20 42,18 C44,16 47,15 50,15"
                        fill="#333"
                        stroke="none"
                      />
                      
                      <circle cx="50" cy="30" r="15" className="fill-kaal-blue/20 stroke-kaal-blue/50 hover:fill-kaal-blue/30 cursor-pointer" />
                      <circle cx="50" cy="45" r="15" className="fill-kaal-blue/20 stroke-kaal-blue/50 hover:fill-kaal-blue/30 cursor-pointer" />
                      <circle cx="35" cy="25" r="10" className="fill-kaal-blue/20 stroke-kaal-blue/50 hover:fill-kaal-blue/30 cursor-pointer" />
                      <circle cx="65" cy="25" r="10" className="fill-kaal-blue/20 stroke-kaal-blue/50 hover:fill-kaal-blue/30 cursor-pointer" />
                      <circle cx="25" cy="35" r="8" className="fill-kaal-blue/20 stroke-kaal-blue/50 hover:fill-kaal-blue/30 cursor-pointer" />
                      <circle cx="75" cy="35" r="8" className="fill-kaal-blue/20 stroke-kaal-blue/50 hover:fill-kaal-blue/30 cursor-pointer" />
                      <circle cx="43" cy="65" r="10" className="fill-kaal-blue/20 stroke-kaal-blue/50 hover:fill-kaal-blue/30 cursor-pointer" />
                      <circle cx="57" cy="65" r="10" className="fill-kaal-blue/20 stroke-kaal-blue/50 hover:fill-kaal-blue/30 cursor-pointer" />
                    </svg>
                  </div>
                  
                  <div className="relative h-72 border border-border rounded-lg bg-card/50 overflow-hidden">
                    <div className="absolute top-2 left-0 w-full text-center text-sm font-medium">Back View</div>
                    
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                      <path
                        d="M50,15 C53,15 56,16 58,18 C60,20 60,22 60,25 C60,28 58,30 58,33 C58,36 60,38 60,40 
                          C60,45 55,50 55,55 C55,60 55,65 55,70 C55,75 55,80 53,85 C51,90 51,95 50,95 
                          C49,95 49,90 47,85 C45,80 45,75 45,70 C45,65 45,60 45,55 C45,50 40,45 40,40 
                          C40,38 42,36 42,33 C42,30 40,28 40,25 C40,22 40,20 42,18 C44,16 47,15 50,15"
                        fill="#333"
                        stroke="none"
                      />
                      
                      <circle cx="50" cy="30" r="15" className="fill-kaal-green/20 stroke-kaal-green/50 hover:fill-kaal-green/30 cursor-pointer" />
                      <circle cx="50" cy="45" r="15" className="fill-kaal-green/20 stroke-kaal-green/50 hover:fill-kaal-green/30 cursor-pointer" />
                      <circle cx="43" cy="65" r="10" className="fill-kaal-green/20 stroke-kaal-green/50 hover:fill-kaal-green/30 cursor-pointer" />
                      <circle cx="57" cy="65" r="10" className="fill-kaal-green/20 stroke-kaal-green/50 hover:fill-kaal-green/30 cursor-pointer" />
                      <circle cx="43" cy="85" r="8" className="fill-kaal-green/20 stroke-kaal-green/50 hover:fill-kaal-green/30 cursor-pointer" />
                      <circle cx="57" cy="85" r="8" className="fill-kaal-green/20 stroke-kaal-green/50 hover:fill-kaal-green/30 cursor-pointer" />
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Electrode Specifications</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Zone Count:</strong> 22 anatomically mapped zones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Electrodes:</strong> 64 per zone (1408 total)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Current Limit:</strong> 3-5mA per electrode contact</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Voltage:</strong> 30-80V (peak-to-peak)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Frequency:</strong> 150-300Hz modulated</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Electrode Circuit</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Driver IC:</strong> TI DRV5055 with gate isolators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Capacitors:</strong> 100µF bank per zone</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Addressing:</strong> 8×8 matrix per zone</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Monitoring:</strong> INA219 per zone for safety</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Cutoff:</strong> Solid state relays with hardware override</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Material Integration</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Conductive:</strong> Silver-coated nylon (12Ω/sq)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Wiring:</strong> FFC (0.5mm pitch, 36-conductor)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Insulation:</strong> 3-layer with silicone barrier</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Ventilation:</strong> Mesh zones at key heat areas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Sizing:</strong> 5 variants with adjustable tension</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Tablet className="h-5 w-5 text-kaal-yellow mr-2" />
                  Control Interface
                </h3>
                
                <div className="relative border border-border rounded-lg bg-black/50 overflow-hidden p-4">
                  <div className="absolute top-2 left-4 text-xs text-kaal-yellow">KAAL INSTRUCTOR PANEL</div>
                  
                  <div className="mt-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <Battery className="h-4 w-4 text-kaal-yellow mr-1" />
                          <span className="text-xs">Battery Status</span>
                        </div>
                        <span className="text-xs text-kaal-green">87%</span>
                      </div>
                      <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-kaal-green to-kaal-blue rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <Signal className="h-4 w-4 text-kaal-blue mr-1" />
                          <span className="text-xs">Signal Strength</span>
                        </div>
                        <span className="text-xs text-kaal-blue">92%</span>
                      </div>
                      <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-kaal-blue to-kaal-green rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-muted/20 p-2 rounded-md border border-muted/30">
                        <div className="flex justify-between items-center">
                          <span className="text-xs">Unit #1</span>
                          <div className="w-2 h-2 rounded-full bg-kaal-green"></div>
                        </div>
                      </div>
                      <div className="bg-muted/20 p-2 rounded-md border border-muted/30">
                        <div className="flex justify-between items-center">
                          <span className="text-xs">Unit #2</span>
                          <div className="w-2 h-2 rounded-full bg-kaal-green"></div>
                        </div>
                      </div>
                      <div className="bg-muted/20 p-2 rounded-md border border-muted/30">
                        <div className="flex justify-between items-center">
                          <span className="text-xs">Unit #3</span>
                          <div className="w-2 h-2 rounded-full bg-kaal-yellow animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/20 p-2 rounded-md border border-kaal-red/30 flex items-center">
                      <AlertTriangle className="h-4 w-4 text-kaal-red mr-2" />
                      <span className="text-xs text-kaal-red">Unit #3: Low Battery Warning</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Instructor Panel Features</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Hardware:</strong> iPad Pro 12.9" / Samsung Galaxy Tab S9</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Connection:</strong> Wi-Fi 6E with WPA3 Enterprise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Interface:</strong> WebGL + WebSocket React-based UI</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Security:</strong> Biometric + hardware token authentication</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Control Capabilities</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Emergency:</strong> Global or targeted safety override</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Feedback:</strong> Adjustable by zone, user or scenario</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Weapon:</strong> Damage profiles, range limits, fire modes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span><strong>Scenarios:</strong> Load/save configs, scheduled events</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="safety">
            <div className="space-y-8 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold text-center">Safety Systems</h2>
              
              <div className="kaal-card p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-kaal-red mr-2" />
                  Multi-Layer Safety Architecture
                </h3>
                
                <div className="relative">
                  <div className="h-96 border border-border rounded-lg overflow-hidden">
                    <div className="absolute inset-0 grid grid-rows-3 gap-1 p-4">
                      <div className="bg-kaal-red/10 rounded-lg border border-kaal-red/30 p-4 relative">
                        <div className="absolute top-2 right-3 text-xs text-kaal-red font-medium">
                          HARDWARE LAYER
                        </div>
                        <div className="h-full flex items-center">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            <div className="bg-black/20 backdrop-blur-sm rounded p-3 flex items-start">
                              <div className="mr-3 mt-1">
                                <AlertTriangle className="h-5 w-5 text-kaal-red" />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium">Emergency Button</h5>
                                <p className="text-xs text-muted-foreground mt-1">Hardware interrupt to immediately disable system</p>
                              </div>
                            </div>
                            
                            <div className="bg-black/20 backdrop-blur-sm rounded p-3 flex items-start">
                              <div className="mr-3 mt-1">
                                <Shield className="h-5 w-5 text-kaal-red" />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium">Current Limiters</h5>
                                <p className="text-xs text-muted-foreground mt-1">Physical current restriction to 5mA maximum</p>
                              </div>
                            </div>
                            
                            <div className="bg-black/20 backdrop-blur-sm rounded p-3 flex items-start">
                              <div className="mr-3 mt-1">
                                <AlertTriangle className="h-5 w-5 text-kaal-red" />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium">Thermal Cutoff</h5>
                                <p className="text-xs text-muted-foreground mt-1">Bi-metallic switch activates at 80°C</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-kaal-yellow/10 rounded-lg border border-kaal-yellow/30 p-4 relative">
                        <div className="absolute top-2 right-3 text-xs text-kaal-yellow font-medium">
                          FIRMWARE LAYER
                        </div>
                        <div className="h-full flex items-center">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            <div className="bg-black/20 backdrop-blur-sm rounded p-3 flex items-start">
                              <div className="mr-3 mt-1">
                                <Cpu className="h-5 w-5 text-kaal-yellow" />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium">Watchdog Timer</h5>
                                <p className="text-xs text-muted-foreground mt-1">8-second system reset if firmware hangs</p>
                              </div>
                            </div>
                            
                            <div className="bg-black/20 backdrop-blur-sm rounded p-3 flex items-start">
                              <div className="mr-3 mt-1">
                                <Cpu className="h-5 w-5 text-kaal-yellow" />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium">Pulse Duration Limit</h5>
                                <p className="text-xs text-muted-foreground mt-1">Software enforced 300ms maximum activation</p>
                              </div>
                            </div>
                            
                            <div className="bg-black/20 backdrop-blur-sm rounded p-3 flex items-start">
                              <div className="mr-3 mt-1">
                                <Shield className="h-5 w-5 text-kaal-yellow" />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium">Self-Test Routine</h5>
                                <p className="text-xs text-muted-foreground mt-1">System diagnostics before activation</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-kaal-green/10 rounded-lg border border-kaal-green/30 p-4 relative">
                        <div className="absolute top-2 right-3 text-xs text-kaal-green font-medium">
                          INSTRUCTOR LAYER
                        </div>
                        <div className="h-full flex items-center">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            <div className="bg-black/20 backdrop-blur-sm rounded p-3 flex items-start">
                              <div className="mr-3 mt-1">
                                <AlertTriangle className="h-5 w-5 text-kaal-green" />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium">Kill Switch</h5>
                                <p className="text-xs text-muted-foreground mt-1">Remote deactivation of all connected suits</p>
                              </div>
                            </div>
                            
                            <div className="bg-black/20 backdrop-blur-sm rounded p-3 flex items-start">
                              <div className="mr-3 mt-1">
                                <Shield className="h-5 w-5 text-kaal-green" />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium">Intensity Control</h5>
                                <p className="text-xs text-muted-foreground mt-1">Adjustable feedback levels for different users</p>
                              </div>
                            </div>
                            
                            <div className="bg-black/20 backdrop-blur-sm rounded p-3 flex items-start">
                              <div className="mr-3 mt-1">
                                <Cpu className="h-5 w-5 text-kaal-green" />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium">Health Monitoring</h5>
                                <p className="text-xs text-muted-foreground mt-1">Real-time system status and diagnostic view</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/10 p-4 rounded-md border border-muted/30 mt-6">
                  <h5 className="font-medium mb-2">Safety System Response Chain</h5>
                  <p className="text-sm text-muted-foreground">
                    The KAAL system employs a hierarchical safety architecture with three defensive layers.
                    The instructor layer provides real-time monitoring and manual overrides, the firmware layer
                    adds intelligent safeguards and automatic monitoring, while the hardware layer provides
                    physical fail-safes that operate independently of software systems.
                  </p>
                  <div className="mt-3 flex items-center justify-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="flex items-center mr-4">
                        <div className="w-3 h-3 rounded-full bg-kaal-green mr-1"></div>
                        <span>Instructor Control</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <div className="w-3 h-3 rounded-full bg-kaal-yellow mr-1"></div>
                        <span>Firmware Safety</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-kaal-red mr-1"></div>
                        <span>Hardware Protection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="kaal-card p-6 border border-kaal-red/30">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-kaal-red mr-2" />
                  Safety Certification
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-base font-medium mb-3 text-kaal-red">Standards Compliance</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>IEC 60335-1:</strong> Safety of household and similar electrical appliances</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>EN 60950-1:</strong> Information technology equipment safety</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>ISO 13732-1:</strong> Ergonomics of the thermal environment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>IEC 62471:</strong> Photobiological safety of lamps (for IR emitters)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-medium mb-3 text-kaal-red">Redundant Safety Features</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>Multiple Cutoffs:</strong> Hardware, firmware, and user-triggered</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>Current Control:</strong> Multiple current limiters at different stages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>Thermal Protection:</strong> Active and passive cooling with shutdown</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-red mr-2">•</span>
                        <span><strong>Encrypted Commands:</strong> Prevents unauthorized system activation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm rounded p-4 mt-6 flex items-start">
                  <div className="mt-1 p-1 rounded-full bg-kaal-red/20 text-kaal-red mr-3 flex-shrink-0">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Complete Safety Assurance</h4>
                    <p className="text-muted-foreground mt-2">
                      The KAAL system prioritizes safety with multiple redundant systems. All feedback is precisely controlled 
                      to provide realistic training without risk of injury. The system features both manual emergency stops 
                      and automatic safety protocols that continuously monitor all aspects of operation. Instructor oversight 
                      provides an additional layer of safety management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default FeedbackSystemDetails;

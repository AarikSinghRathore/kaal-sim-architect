import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import ViewToggle from "@/components/ui/ViewToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
  CircleCheck,
  CircleX,
  CircleAlert,
  Circuit,
  Microchip,
  Code,
  ChevronDown
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import FeedbackSystemFlowchart from "@/components/feedback/FeedbackSystemFlowchart";
import { cn } from '@/lib/utils';

const FeedbackSystemDetails = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);
  const [activeGunSubsystem, setActiveGunSubsystem] = useState<string | null>("trigger");
  const [activeSuitSubsystem, setActiveSuitSubsystem] = useState<string | null>("receiver");

  // Interactive component selection handling
  const handleGunSubsystemClick = (subsystem: string) => {
    setActiveGunSubsystem(activeGunSubsystem === subsystem ? null : subsystem);
  };

  const handleSuitSubsystemClick = (subsystem: string) => {
    setActiveSuitSubsystem(activeSuitSubsystem === subsystem ? null : subsystem);
  };

  return (
    <Layout 
      heroTitle="Feedback System Technical Details" 
      heroSubtitle="Comprehensive Documentation of Suit & Gun Feedback Architecture" 
      heroBackground="from-kaal-navy/90 to-black"
    >
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="kaal-badge-primary">Tactical Response System</div>
          <h2 className="text-3xl font-bold text-center">Feedback Suit & Gun System</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-center">
            End-to-end architecture for simulated weapons and feedback suit with real-time tactical response
          </p>
          <ViewToggle 
            isTechnicalView={isTechnicalView}
            setIsTechnicalView={setIsTechnicalView}
            className="max-w-sm mx-auto"
          />
        </div>

        {isTechnicalView ? (
          <Tabs defaultValue="gun" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="gun" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span className="hidden sm:inline">Gun System</span>
                <span className="sm:hidden">Gun</span>
              </TabsTrigger>
              <TabsTrigger value="suit" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Suit System</span>
                <span className="sm:hidden">Suit</span>
              </TabsTrigger>
              <TabsTrigger value="signal" className="flex items-center gap-2">
                <Signal className="h-4 w-4" />
                <span className="hidden sm:inline">Signal Flow</span>
                <span className="sm:hidden">Signal</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gun" className="space-y-12 opacity-0 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Zap className="h-6 w-6 text-kaal-blue mr-3" />
                Gun System Architecture
              </h3>
              
              <div className="kaal-card p-6">
                <h4 className="text-lg font-medium mb-4">Interactive Schematic</h4>
                <div className="text-muted-foreground mb-6">
                  Select any component to view detailed specifications and circuit diagrams.
                </div>
                
                <div className="relative bg-muted/20 rounded-lg p-6 border border-muted h-[360px]">
                  {/* Gun system visualization */}
                  <div className="absolute left-[10%] top-[30%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeGunSubsystem === "trigger" 
                          ? "bg-kaal-blue/20 border-2 border-kaal-blue" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleGunSubsystemClick("trigger")}
                    >
                      <Zap className="h-8 w-8 text-kaal-blue" />
                    </div>
                    <span className="mt-2 text-sm">Trigger</span>
                  </div>

                  <div className="absolute left-[40%] top-[30%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeGunSubsystem === "mcu" 
                          ? "bg-kaal-green/20 border-2 border-kaal-green" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleGunSubsystemClick("mcu")}
                    >
                      <Cpu className="h-8 w-8 text-kaal-green" />
                    </div>
                    <span className="mt-2 text-sm">MCU</span>
                  </div>

                  <div className="absolute left-[70%] top-[30%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeGunSubsystem === "emitter" 
                          ? "bg-kaal-yellow/20 border-2 border-kaal-yellow" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleGunSubsystemClick("emitter")}
                    >
                      <Signal className="h-8 w-8 text-kaal-yellow" />
                    </div>
                    <span className="mt-2 text-sm">Emitter</span>
                  </div>

                  <div className="absolute left-[25%] top-[70%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeGunSubsystem === "power" 
                          ? "bg-kaal-red/20 border-2 border-kaal-red" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleGunSubsystemClick("power")}
                    >
                      <Battery className="h-8 w-8 text-kaal-red" />
                    </div>
                    <span className="mt-2 text-sm">Power</span>
                  </div>

                  <div className="absolute left-[55%] top-[70%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeGunSubsystem === "safety" 
                          ? "bg-kaal-orange/20 border-2 border-kaal-orange" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleGunSubsystemClick("safety")}
                    >
                      <AlertTriangle className="h-8 w-8 text-kaal-orange" />
                    </div>
                    <span className="mt-2 text-sm">Safety</span>
                  </div>

                  {/* Signal flow arrows */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="22%" y1="30%" x2="32%" y2="30%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
                    <line x1="52%" y1="30%" x2="62%" y2="30%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
                    <line x1="25%" y1="58%" x2="40%" y2="42%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
                    <line x1="55%" y1="58%" x2="48%" y2="42%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
                  </svg>
                </div>

                {/* Subsystem details */}
                <div className="mt-6 p-4 rounded-md border">
                  {!activeGunSubsystem ? (
                    <div className="text-center text-muted-foreground p-4">
                      Click on a component above to view detailed specifications
                    </div>
                  ) : (
                    <SubsystemDetail subsystem={activeGunSubsystem} type="gun" />
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="suit" className="space-y-12 opacity-0 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Shield className="h-6 w-6 text-kaal-green mr-3" />
                Suit System Architecture
              </h3>
              
              <div className="kaal-card p-6">
                <h4 className="text-lg font-medium mb-4">Interactive Schematic</h4>
                <div className="text-muted-foreground mb-6">
                  Select any component to view detailed specifications and circuit diagrams.
                </div>
                
                <div className="relative bg-muted/20 rounded-lg p-6 border border-muted h-[360px]">
                  {/* Suit system visualization */}
                  <div className="absolute left-[10%] top-[30%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeSuitSubsystem === "receiver" 
                          ? "bg-kaal-blue/20 border-2 border-kaal-blue" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleSuitSubsystemClick("receiver")}
                    >
                      <Radio className="h-8 w-8 text-kaal-blue" />
                    </div>
                    <span className="mt-2 text-sm">Receiver</span>
                  </div>

                  <div className="absolute left-[40%] top-[30%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeSuitSubsystem === "mcu" 
                          ? "bg-kaal-green/20 border-2 border-kaal-green" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleSuitSubsystemClick("mcu")}
                    >
                      <Cpu className="h-8 w-8 text-kaal-green" />
                    </div>
                    <span className="mt-2 text-sm">MCU</span>
                  </div>

                  <div className="absolute left-[70%] top-[30%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeSuitSubsystem === "electrodes" 
                          ? "bg-kaal-yellow/20 border-2 border-kaal-yellow" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleSuitSubsystemClick("electrodes")}
                    >
                      <Circuit className="h-8 w-8 text-kaal-yellow" />
                    </div>
                    <span className="mt-2 text-sm">Electrodes</span>
                  </div>

                  <div className="absolute left-[25%] top-[70%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeSuitSubsystem === "power" 
                          ? "bg-kaal-red/20 border-2 border-kaal-red" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleSuitSubsystemClick("power")}
                    >
                      <Battery className="h-8 w-8 text-kaal-red" />
                    </div>
                    <span className="mt-2 text-sm">Power</span>
                  </div>

                  <div className="absolute left-[55%] top-[70%] w-32 h-28 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all",
                        activeSuitSubsystem === "safety" 
                          ? "bg-kaal-orange/20 border-2 border-kaal-orange" 
                          : "bg-muted/30 hover:bg-muted/40 border border-border"
                      )}
                      onClick={() => handleSuitSubsystemClick("safety")}
                    >
                      <AlertTriangle className="h-8 w-8 text-kaal-orange" />
                    </div>
                    <span className="mt-2 text-sm">Safety</span>
                  </div>

                  {/* Signal flow arrows */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="22%" y1="30%" x2="32%" y2="30%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
                    <line x1="52%" y1="30%" x2="62%" y2="30%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
                    <line x1="25%" y1="58%" x2="40%" y2="42%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
                    <line x1="55%" y1="58%" x2="48%" y2="42%" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="2" />
                  </svg>
                </div>

                {/* Subsystem details */}
                <div className="mt-6 p-4 rounded-md border">
                  {!activeSuitSubsystem ? (
                    <div className="text-center text-muted-foreground p-4">
                      Click on a component above to view detailed specifications
                    </div>
                  ) : (
                    <SubsystemDetail subsystem={activeSuitSubsystem} type="suit" />
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="signal" className="space-y-8 opacity-0 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Signal className="h-6 w-6 text-kaal-blue mr-3" />
                Signal Flow Architecture
              </h3>
              
              <div className="kaal-card p-6 mb-8">
                <h4 className="text-lg font-medium mb-4">End-to-End Signal Pipeline</h4>
                <p className="text-muted-foreground mb-6">
                  Complete data and signal flow from gun trigger actuation to targeted feedback on the suit, with precise latency estimations at each stage.
                </p>
                
                <FeedbackSystemFlowchart />
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Signal Protocol</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Modulation:</strong> PWM with 38kHz carrier frequency</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Payload:</strong> 8-bit data with weapon ID and timestamp</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Error Detection:</strong> Parity bit + 16-bit CRC</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span><strong>Range:</strong> 50m effective, 100m maximum</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">System Latency</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Trigger to MCU:</strong> 1-3ms (debounce + processing)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Signal Transmission:</strong> 5-15ms (depending on distance)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Signal Processing:</strong> 3-6ms (decoding + validation)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Electrode Activation:</strong> 2-5ms (power-up)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span><strong>Total End-to-End:</strong> 11-29ms (typical: ~18ms)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Collapsible className="mt-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Signal Processing Code Example
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-muted/10 rounded-md border border-muted/30">
                    <pre className="text-xs text-muted-foreground overflow-x-auto">
{`// IR Signal Processing Firmware Code (Arduino-compatible)
#include <Arduino.h>

// Pin definitions
const int RECEIVER_PIN = 14;      // IR receiver input
const int ELECTRODES[12] = {23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45}; // Electrode outputs
const int EMERGENCY_BUTTON = 2;   // Emergency stop (interrupt pin)
const int STATUS_LED = 13;        // Status LED

// Signal processing constants
const unsigned long MAX_PULSE_LENGTH = 12000;  // Maximum pulse length in microseconds
const unsigned long TIMEOUT = 10000;           // Signal timeout in microseconds
const byte START_MARKER = 0xAA;                // Signal start marker
const byte END_MARKER = 0x55;                  // Signal end marker
const int BUFFER_SIZE = 16;                    // Signal buffer size

// Signal variables
volatile byte signalBuffer[BUFFER_SIZE];
volatile int bufferIndex = 0;
volatile bool signalReady = false;
volatile unsigned long lastSignalTime = 0;

// Interrupt Service Routine for IR signal detection
void IRAM_ATTR irInterrupt() {
  static unsigned long pulseStart = 0;
  static bool pulseHigh = false;
  static byte currentByte = 0;
  static byte bitCount = 0;
  
  unsigned long currentTime = micros();
  
  // Calculate pulse length
  unsigned long pulseLength = currentTime - pulseStart;
  pulseStart = currentTime;
  
  // Ignore excessively long pulses (likely noise)
  if (pulseLength > MAX_PULSE_LENGTH) {
    bufferIndex = 0;
    pulseHigh = false;
    return;
  }
  
  // Toggle pulse state
  pulseHigh = !pulseHigh;
  
  // We're only interested in the high-to-low transitions
  if (pulseHigh) return;
  
  // Process the pulse length to extract bit value
  bool bit = (pulseLength > 1000) ? true : false;
  
  // Shift in the new bit
  currentByte = (currentByte << 1) | bit;
  bitCount++;
  
  // If we've received a full byte
  if (bitCount == 8) {
    // Check if this is a start marker
    if (bufferIndex == 0 && currentByte != START_MARKER) {
      // Not a start marker, reset
      bufferIndex = 0;
    } else {
      // Store the byte
      signalBuffer[bufferIndex++] = currentByte;
      
      // Check for buffer overflow or end marker
      if (bufferIndex >= BUFFER_SIZE || currentByte == END_MARKER) {
        signalReady = true;
        lastSignalTime = millis();
      }
    }
    
    // Reset for next byte
    currentByte = 0;
    bitCount = 0;
  }
}

// Emergency stop interrupt handler
void IRAM_ATTR emergencyStop() {
  // Immediately disable all electrodes
  for (int i = 0; i < 12; i++) {
    digitalWrite(ELECTRODES[i], LOW);
  }
  
  // Signal emergency state
  digitalWrite(STATUS_LED, HIGH);
}

void setup() {
  // Initialize serial for debugging
  Serial.begin(115200);
  Serial.println("Feedback Suit System Initializing...");
  
  // Set pin modes
  pinMode(RECEIVER_PIN, INPUT);
  for (int i = 0; i < 12; i++) {
    pinMode(ELECTRODES[i], OUTPUT);
    digitalWrite(ELECTRODES[i], LOW);
  }
  pinMode(EMERGENCY_BUTTON, INPUT_PULLUP);
  pinMode(STATUS_LED, OUTPUT);
  
  // Attach interrupts
  attachInterrupt(digitalPinToInterrupt(RECEIVER_PIN), irInterrupt, CHANGE);
  attachInterrupt(digitalPinToInterrupt(EMERGENCY_BUTTON), emergencyStop, FALLING);
  
  Serial.println("System Ready");
}

void loop() {
  // Process received signal
  if (signalReady) {
    processSignal();
    signalReady = false;
    bufferIndex = 0;
  }
  
  // Check for signal timeout (automatic safety)
  if (millis() - lastSignalTime > 500) {
    // Disable all electrodes after timeout
    for (int i = 0; i < 12; i++) {
      digitalWrite(ELECTRODES[i], LOW);
    }
  }
}

void processSignal() {
  // Validate signal integrity
  if (signalBuffer[0] != START_MARKER || signalBuffer[bufferIndex-1] != END_MARKER) {
    Serial.println("Invalid signal markers");
    return;
  }
  
  // Extract payload data
  byte weaponId = signalBuffer[1];
  byte hitLocation = signalBuffer[2];
  byte hitIntensity = signalBuffer[3];
  
  // Validate hit location
  if (hitLocation >= 12) {
    Serial.println("Invalid hit location");
    return;
  }
  
  // Log hit information
  Serial.print("Hit detected: Weapon=");
  Serial.print(weaponId, HEX);
  Serial.print(", Location=");
  Serial.print(hitLocation);
  Serial.print(", Intensity=");
  Serial.println(hitIntensity);
  
  // Apply electrode feedback
  applyFeedback(hitLocation, hitIntensity);
}`}
                    </pre>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="kaal-card p-8 text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-kaal-green/20 flex items-center justify-center">
                <Zap className="h-12 w-12 text-kaal-green" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">The Ultimate Training Experience</h3>
            <p className="text-xl text-muted-foreground mb-8">
              The KAAL Tactical Response System creates realistic training by providing immediate, targeted feedback during simulated combat operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-x-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-kaal-blue" />
                </div>
                <h4 className="font-medium">Smart Weapons</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Weapons that precisely track hits and target acquisition
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
                  <Radio className="h-8 w-8 text-kaal-yellow" />
                </div>
                <h4 className="font-medium">Instant Transmission</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Ultra-fast signals for realistic training feedback
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-kaal-green" />
                </div>
                <h4 className="font-medium">Tactical Feedback</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Feel precise impacts exactly where you're hit
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

interface SubsystemDetailProps {
  subsystem: string;
  type: 'gun' | 'suit';
}

// Component to display details of the selected subsystem
const SubsystemDetail: React.FC<SubsystemDetailProps> = ({ subsystem, type }) => {
  // Gun subsystem details
  const gunDetails: Record<string, React.ReactNode> = {
    trigger: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-blue">
          <Zap className="h-5 w-5 mr-2" />
          Trigger Mechanism
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Switch:</strong> Omron B3F tactile switch (50g actuation force)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Debounce:</strong> 100nF capacitor with 10kΩ pull-down resistor</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Interface:</strong> Direct connection to GPIO with hardware interrupt</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Response:</strong> 1.5ms debounce logic in firmware</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Durability:</strong> Rated for 300,000 cycles</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Trigger Circuit Schematic</h5>
            <div className="text-xs text-muted-foreground">
              <pre className="overflow-x-auto">
{`    VCC (3.3V)
       |
       Z 10kΩ
       |
GPIO---|---o/ o---+
       |          |
      === 100nF   |
       |          |
      GND        GND`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
    mcu: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-green">
          <Cpu className="h-5 w-5 mr-2" />
          Microcontroller Unit
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>MCU:</strong> ESP32-WROOM-32E (dual-core, 240 MHz)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>Memory:</strong> 4MB Flash, 512KB SRAM</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>GPIO:</strong> 25 programmable I/O pins</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>Features:</strong> Hardware watchdog, deep sleep, PWM</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>Development:</strong> Arduino-based or ESP-IDF framework</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Pin Allocation</h5>
            <div className="text-xs text-muted-foreground">
              <pre className="overflow-x-auto">
{`GPIO02: Trigger input (interrupt)
GPIO04: IR Emitter control
GPIO12: Status LED (Blue)
GPIO13: Status LED (Red)
GPIO14: Safety switch input
GPIO15: Battery voltage monitor (ADC)
GPIO18: Debug UART TX
GPIO19: Debug UART RX
GPIO21: I2C SDA (config EEPROM)
GPIO22: I2C SCL (config EEPROM)`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
    emitter: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-yellow">
          <Signal className="h-5 w-5 mr-2" />
          IR Laser Emitter
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Type:</strong> Class 1 IR Laser Diode Module (850nm)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Power:</strong> 5mW output, TTL modulated</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Focus:</strong> Collimated with 1.5° beam divergence</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Driver:</strong> TC62K constant current driver (100mA)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Modulation:</strong> 38kHz carrier for compatibility with IR receivers</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Emitter Circuit</h5>
            <div className="text-xs text-muted-foreground">
              <pre className="overflow-x-auto">
{`    VCC (3.3V)
       |
       Z 1kΩ
       |
GPIO---|>|--- IR LED
       |
      GND

Driver IC (TC62K):
   +--------+
   |        |
   | o1   8o|--- VCC
   |        |
   | o2   7o|--- Control
   |        |
   | o3   6o|--- LED+
   |        |
   | o4   5o|--- GND
   +--------+`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
    power: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-red">
          <Battery className="h-5 w-5 mr-2" />
          Power System
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Battery:</strong> 3.7V 18650 Li-Ion cell (2600mAh)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Regulator:</strong> AMS1117-3.3 LDO voltage regulator</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Protection:</strong> Overcharge, overdischarge, short-circuit</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Runtime:</strong> 72+ hours standby, 36+ hours active use</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Monitoring:</strong> ADC battery voltage monitoring via voltage divider</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Power Circuit Schematic</h5>
            <div className="text-xs text-muted-foreground">
              <pre className="overflow-x-auto">
{`Battery --+-- Switch --+-- AMS1117 --+-- 3.3V
           |             |             |
           |            === 10μF      === 22μF
           |             |             |
          GND           GND           GND

Voltage Monitor:
                 100kΩ
3.7V Battery --+---/\/\/\---+-- ADC Pin
               |            |
               |           === 10kΩ
               |            |
              GND          GND`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
    safety: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-orange">
          <AlertTriangle className="h-5 w-5 mr-2" />
          Safety Systems
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Manual Override:</strong> Hardware toggle switch (interrupt-based)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Timeout:</strong> Automatic laser cutoff after 500ms continuous activation</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Watchdog:</strong> Hardware watchdog timer (reset if firmware hangs)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Indicators:</strong> Dual-color status LED for system health</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Protection:</strong> Current limiting resistor on IR emitter</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Safety Logic (Pseudocode)</h5>
            <div className="text-xs text-muted-foreground">
              <pre className="overflow-x-auto">
{`// Safety timeout system
unsigned long laserActivationTime = 0;
bool laserActive = false;

void activateLaser() {
  if (!safetyToggleEnabled) {
    return; // Safety override active
  }
  
  digitalWrite(LASER_PIN, HIGH);
  laserActive = true;
  laserActivationTime = millis();
}

void checkSafetyTimeout() {
  // Auto-cutoff after 500ms
  if (laserActive && 
     (millis() - laserActivationTime > 500)) {
    digitalWrite(LASER_PIN, LOW);
    laserActive = false;
  }
}

// Called at 100Hz in main loop
void loop() {
  checkSafetyTimeout();
  // Other processing
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  // Suit subsystem details
  const suitDetails: Record<string, React.ReactNode> = {
    receiver: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-blue">
          <Radio className="h-5 w-5 mr-2" />
          IR Receiver
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Sensor:</strong> TSOP38438 IR receiver module</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Frequency:</strong> 38kHz carrier detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Viewing Angle:</strong> 45° cone with angle-limiting shroud</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Range:</strong> Effective up to 50m in direct line of sight</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-blue mr-2">•</span>
                <span><strong>Filtering:</strong> Ambient light rejection, anti-fog lens coating</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Receiver Circuit</h5>
            <div className="text-xs text-muted-foreground">
              <pre className="overflow-x-auto">
{`        VCC (3.3V)
           |
           Z 10kΩ
           |
GPIO---|<|--- TSOP38438
           |    (IR Receiver)
          GND

   +--------+
   |        |
   | o1 GND |
   |        |
   | o2 OUT |-----> To MCU (Interrupt)
   |        |
   | o3 VCC |-----> 3.3V
   |        |
   +--------+`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
    mcu: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-green">
          <Cpu className="h-5 w-5 mr-2" />
          Processing Unit
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>MCU:</strong> STM32F103C8T6 "Blue Pill" (72 MHz ARM Cortex-M3)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>Memory:</strong> 64KB Flash, 20KB SRAM</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>External Storage:</strong> 24LC256 EEPROM (32KB) for event logging</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>Interface:</strong> UART (debug), I2C (EEPROM), GPIO (electrodes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">•</span>
                <span><strong>Signal Processing:</strong> Interrupt-driven ISR for pulse decoding</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Signal Decoding Logic</h5>
            <div className="text-xs text-muted-foreground">
              <pre className="overflow-x-auto">
{`// Interrupt-based pulse decoding
volatile uint32_t pulseStart = 0;
volatile uint8_t bitCount = 0;
volatile uint8_t currentByte = 0;

void IR_ISR() {
  uint32_t now = micros();
  uint32_t pulseDuration = now - pulseStart;
  pulseStart = now;
  
  // Decode pulse width to bit value
  bool bitValue = (pulseDuration > 1000);
  
  // Shift into current byte
  currentByte = (currentByte << 1) | bitValue;
  bitCount++;
  
  // Process complete byte
  if (bitCount == 8) {
    processReceivedByte(currentByte);
    bitCount = 0;
    currentByte = 0;
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
    electrodes: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-yellow">
          <Circuit className="h-5 w-5 mr-2" />
          Electrode System
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Layout:</strong> 12-zone anatomical map with targeted feedback areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Type:</strong> Coin-type vibration motors or electro-tactile pads</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Drive Voltage:</strong> 28V DC pulses via MOSFET drivers</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Current:</strong> 100-500mA per pad (adjustable via PWM)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-yellow mr-2">•</span>
                <span><strong>Control:</strong> ULN2803 or IRFZ44N MOSFETs, GPIO-controlled</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Zone Map</h5>
            <div className="w-48 h-48 mx-auto relative bg-black/30 rounded-md">
              {/* Simple human figure with electrode zones */}
              <div className="absolute top-[15%] left-[45%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[25%] left-[36%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[25%] left-[54%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[38%] left-[40%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[38%] left-[50%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[50%] left-[45%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[60%] left-[36%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[60%] left-[54%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[75%] left-[36%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[75%] left-[54%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[40%] left-[20%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <div className="absolute top-[40%] left-[70%] w-3 h-3 rounded-full bg-kaal-yellow"></div>
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              12 addressable electrode zones
            </div>
          </div>
        </div>
      </div>
    ),
    power: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-red">
          <Battery className="h-5 w-5 mr-2" />
          Power Management
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Battery:</strong> 2-cell Li-Po (7.4V, 2200mAh)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Protection:</strong> BMS circuit with overcurrent, overdischarge protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Regulation:</strong> Dual output DC-DC converter (7.4V → 28V & 3.3V)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Monitoring:</strong> Voltage divider for MCU sensing (ADC input)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">•</span>
                <span><strong>Runtime:</strong> 6+ hours continuous operation, 48+ hours standby</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Power Block Diagram</h5>
            <div className="text-xs text-muted-foreground">
              <pre className="overflow-x-auto">
{`7.4V Li-Po
   |
   +------- BMS Protection Circuit
   |               |
   |               v
   +---+------- Charge Port
   |   |
   |   +------ Power Switch
   |           |
   |           v
   +----- DC-DC Boost (28V)
   |           |
   |           v
   |       Electrode Driver
   |
   +----- DC-DC Buck (3.3V)
               |
               v
         MCU & Sensors

Battery Monitoring:
7.4V ----+
         |
       47kΩ
         |
         +---- ADC Input
         |
        10kΩ
         |
        GND`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
    safety: (
      <div className="space-y-4">
        <h4 className="text-lg font-medium flex items-center text-kaal-orange">
          <AlertTriangle className="h-5 w-5 mr-2" />
          Safety Systems
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Manual Cutoff:</strong> Emergency push-button wired to interrupt pin (active HIGH)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Auto Cutoff:</strong> Overcurrent detection using INA219 sensor (cut if >800mA spike)</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Signal Validation:</strong> CRC checking on received signals</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Automatic Timeout:</strong> Force-disable after 500ms of continuous activation</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-orange mr-2">•</span>
                <span><strong>Status Indicators:</strong> RGB LED for system status and fault conditions</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-md p-3">
            <h5 className="text-sm font-medium mb-2">Safety Logic Diagram</h5>
            <div className="text-xs text-muted-foreground">
              <pre className="overflow-x-auto">
{`               +-------------+
               | Emergency   |
               | Stop Button |----+
               +-------------+    |
                                  v
   +----------+             +------------+
   | INA219   |------------>|            |
   | Current  |    Current  |   Safety   |
   | Sensor   |    Reading  | Controller |
   +----------+             |            |
                            +------------+
                                  |
                                  v
   +--------------+      +----------------+
   | Electrode    |<-----| Enable/Disable |
   | Driver Array |      |    Signal      |
   +--------------+      +----------------+

// State Machine Logic
enum SafetyState {
  NORMAL_OPERATION,
  OVERCURRENT_FAULT,
  EMERGENCY_STOP,
  TIMEOUT_FAULT
};

SafetyState currentState = NORMAL_OPERATION;

// Called at 1kHz in real-time thread
void safetyCheck() {
  // Read current sensor
  float current = readCurrentSensor();
  
  if (emergencyButtonPressed) {
    currentState = EMERGENCY_STOP;
    disableAllElectrodes();
    setStatusLED(RED);
  }
  else if (current > 800.0) { // mA
    currentState = OVERCURRENT_FAULT;
    disableAllElectrodes();
    setStatusLED(ORANGE);
    logFault("Overcurrent");
  }
  // More safety checks...
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div>
      {type === 'gun' && gunDetails[subsystem]}
      {type === 'suit' && suitDetails[subsystem]}
    </div>
  );
};

export default FeedbackSystemDetails;

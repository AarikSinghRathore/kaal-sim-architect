
import React, { useState } from 'react';
import FlowchartNode from './FlowchartNode';
import { Shield, Zap, Cpu, Radio, Database, Map, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface NodeData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: React.ReactNode;
}

const SuitSubsystemFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const { toast } = useToast();
  
  const nodes: NodeData[] = [
    {
      id: 'reception',
      title: 'IR Signal Reception',
      description: 'Signal detection',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Signal Reception Details</h4>
          <ul className="text-sm space-y-1">
            <li>• Detection range: up to 100m</li>
            <li>• 850nm wavelength sensitivity</li>
            <li>• Automatic gain control</li>
            <li>• 3 redundant receivers for coverage</li>
          </ul>
        </div>
      )
    },
    {
      id: 'receiver',
      title: 'TSOP IR Receiver',
      description: 'Hardware decoder',
      icon: <Radio className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">TSOP Receiver Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• TSOP38438 IR sensor</li>
            <li>• 38kHz demodulation</li>
            <li>• 45° reception cone</li>
            <li>• Signal amplification: 30dB</li>
            <li>• Low current: 0.7mA operating</li>
          </ul>
        </div>
      )
    },
    {
      id: 'mcu',
      title: 'STM32 MCU',
      description: 'Signal processing',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-yellow',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">STM32 Specifications</h4>
          <ul className="text-sm space-y-1">
            <li>• STM32F103C8T6 "Blue Pill"</li>
            <li>• ARM Cortex-M3 @ 72MHz</li>
            <li>• 20KB RAM, 64KB Flash</li>
            <li>• External EEPROM (24LC256) for logging</li>
            <li>• 12 analog input channels</li>
            <li>• Operating voltage: 3.3V</li>
          </ul>
        </div>
      )
    },
    {
      id: 'decode',
      title: 'Payload Decode Logic',
      description: 'Extract signal data',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Signal Decoding Process</h4>
          <ul className="text-sm space-y-1">
            <li>• Interrupt-driven ISR capture</li>
            <li>• Manchester code demodulation</li>
            <li>• Parity check verification</li>
            <li>• Packet validation</li>
            <li>• Processing time: {"<"}2ms</li>
          </ul>
          <pre className="text-xs bg-muted p-2 rounded mt-2">
{`// Decode function pseudocode
void decodeIRSignal(uint8_t* rawData, size_t len) {
  // Validate header pulse
  if (!validateHeader(rawData)) return;
  
  // Decode Manchester-encoded bits
  uint32_t decodedData = decodeManchesterBits(
    rawData + HEADER_LEN, 
    DATA_BITS_LEN
  );
  
  // Extract fields
  uint8_t weaponId = (decodedData >> 16) & 0xFF;
  uint8_t damage = (decodedData >> 8) & 0xFF;
  uint8_t timestamp = decodedData & 0xFF;
  
  // Verify parity
  if (!verifyParity(decodedData)) return;
  
  // Process valid hit
  processHit(weaponId, damage);
}`}
          </pre>
        </div>
      )
    },
    {
      id: 'zone',
      title: 'Zone Map Match',
      description: 'Target location',
      icon: <Map className="h-5 w-5" />,
      color: 'kaal-green',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Body Zone Mapping</h4>
          <ul className="text-sm space-y-1">
            <li>• 22 anatomically mapped zones</li>
            <li>• Zone priority based on hit location</li>
            <li>• Damage multipliers per zone</li>
          </ul>
          
          <div className="mt-4 bg-muted/20 p-2 rounded-md">
            <h5 className="text-sm font-medium">Zone Map</h5>
            <div className="relative h-32 mt-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-32">
                  {/* Simplified body zone map */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border border-kaal-red/50 bg-kaal-red/20"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-md border border-kaal-yellow/50 bg-kaal-yellow/20"></div>
                  <div className="absolute top-16 left-0 w-4 h-14 rounded-md border border-kaal-green/50 bg-kaal-green/20"></div>
                  <div className="absolute top-16 right-0 w-4 h-14 rounded-md border border-kaal-green/50 bg-kaal-green/20"></div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-12 rounded-md border border-kaal-blue/50 bg-kaal-blue/20"></div>
                </div>
              </div>
              <div className="absolute bottom-0 w-full text-xs text-center text-muted-foreground">
                22 zones with variable feedback intensities
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'electrode',
      title: 'Electrode Activation',
      description: 'Haptic feedback',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Electrode System</h4>
          <ul className="text-sm space-y-1">
            <li>• High-frequency, low-voltage (30-80V)</li>
            <li>• 150-300Hz frequency modulation</li>
            <li>• Current limiting to max 5mA per zone</li>
            <li>• Tunable intensity based on damage value</li>
            <li>• GFCI and isolation transformers for safety</li>
          </ul>
          
          <div className="mt-2 text-xs text-muted-foreground">
            Conductive cloth with interwoven silver-coated fibers
          </div>
        </div>
      )
    },
    {
      id: 'log',
      title: 'Log & Report to Tablet',
      description: 'Data transmission',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-blue',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Data Logging</h4>
          <ul className="text-sm space-y-1">
            <li>• 50,000+ event storage capacity</li>
            <li>• BLE 5.2 transmission to tablet</li>
            <li>• Hit metrics: location, time, intensity</li>
            <li>• Latency: {"<"}250ms to instructor view</li>
            <li>• Automatic sync when in range</li>
          </ul>
          
          <div className="mt-2 text-xs text-muted-foreground">
            AES-256 encrypted transmission with session keys
          </div>
        </div>
      )
    },
    {
      id: 'safety',
      title: 'Safety Systems',
      description: 'Protection mechanisms',
      icon: <AlertTriangle className="h-5 w-5" />,
      color: 'kaal-red',
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Safety Mechanisms</h4>
          <ul className="text-sm space-y-1">
            <li>• Emergency stop button (hardware cutoff)</li>
            <li>• Instructor kill-switch via BLE</li>
            <li>• Skin contact sensors prevent dry activation</li>
            <li>• Thermal sensors ({">"} 45°C shutdown)</li>
            <li>• IEC 60601-1 compliant pulse limiters</li>
          </ul>
        </div>
      )
    },
  ];

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(nodeId === activeNode ? null : nodeId);
  };

  const handleShowFullDetails = () => {
    setShowFullDetails(true);
    toast({
      title: "Full Technical Specifications",
      description: "Displaying complete system documentation",
    });
  };

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-center">Suit Subsystem Flow</h3>
      
      <div className="relative">
        <div className="flex flex-col items-center space-y-6">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.slice(0, -1).map((_, index) => (
              <line
                key={`line-${index}`}
                x1="50%"
                y1={`${8 + (index * 13.5)}%`}
                x2="50%"
                y2={`${13.5 + (index * 13.5)}%`}
                stroke={activeNode ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
                strokeWidth="2"
                strokeDasharray={activeNode ? "none" : "5,5"}
                className={cn(activeNode && "animate-pulse")}
              />
            ))}
          </svg>
          
          {/* Nodes */}
          {nodes.map((node, index) => (
            <FlowchartNode
              key={node.id}
              id={node.id}
              title={node.title}
              description={node.description}
              icon={node.icon}
              color={node.color}
              isActive={activeNode === node.id}
              onClick={() => handleNodeClick(node.id)}
              className="w-64 z-10"
              tooltipContent={node.details}
            />
          ))}
        </div>
      </div>
      
      {/* Details panel */}
      {activeNode && (
        <div className="mt-4">
          <div className={`kaal-card p-4 border border-${nodes.find(n => n.id === activeNode)?.color || 'border'}/50 bg-${nodes.find(n => n.id === activeNode)?.color || 'card'}/5`}>
            {nodes.find(n => n.id === activeNode)?.details}
          </div>
        </div>
      )}

      {/* View full technical details button */}
      {!showFullDetails && (
        <div className="flex justify-center mt-6">
          <button 
            onClick={handleShowFullDetails}
            className="px-4 py-2 bg-kaal-blue/20 hover:bg-kaal-blue/30 text-kaal-blue border border-kaal-blue/40 rounded-md transition-colors"
          >
            View Full Technical Specifications
          </button>
        </div>
      )}

      {/* Full technical details section */}
      {showFullDetails && (
        <div className="mt-8 space-y-8 animate-fade-in">
          <h3 className="text-xl font-semibold text-center border-b border-muted pb-2">Complete Feedback Suit Technical Documentation</h3>
          
          {/* System Overview Section */}
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">⚙️ System Overview</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium">Purpose:</h5>
                <p className="text-sm text-muted-foreground">
                  Deliver real-time, body-zone-specific shock feedback to personnel during tactical simulation exercises, 
                  replicating the impact of enemy fire with adjustable intensity and full safety protocols.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium">Operating Modes:</h5>
                <ul className="text-sm text-muted-foreground space-y-1 ml-5 list-disc">
                  <li>Live Simulation Mode – Real-time feedback from simulated gun hits.</li>
                  <li>Training Mode – Controlled, instructor-triggered feedback.</li>
                  <li>Diagnostic Mode – Self-test of zones and feedback circuits.</li>
                  <li>Safety Override Mode – Manual and automatic shutdown in unsafe conditions.</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* System Architecture Section */}
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">🧠 System Architecture</h4>
            <h5 className="font-medium mb-2">Core Components</h5>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-muted p-2 text-left">Component</th>
                    <th className="border border-muted p-2 text-left">Subsystem Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-muted p-2 font-medium">MCU Board</td>
                    <td className="border border-muted p-2 text-muted-foreground">ESP32 with wireless, ADC/DAC, and PWM control. Handles real-time suit logic.</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Power Distribution Unit (PDU)</td>
                    <td className="border border-muted p-2 text-muted-foreground">Delivers regulated, low-voltage power to all modules with overcurrent protection.</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Zone Control Units</td>
                    <td className="border border-muted p-2 text-muted-foreground">12–16 modules mapped to body regions (chest, back, arms, legs, sides).</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Electrode Matrix Layer</td>
                    <td className="border border-muted p-2 text-muted-foreground">Graphene-coated conductive fabric with flexible PCB integration.</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Signal Decoder Unit</td>
                    <td className="border border-muted p-2 text-muted-foreground">Receives IR/Li-Fi/2.4GHz RF gun hit signals; decodes and routes them.</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Shock Driver Module</td>
                    <td className="border border-muted p-2 text-muted-foreground">Low-current signal amplified with isolation transformers (max ~20mA).</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Haptic Feedback Unit</td>
                    <td className="border border-muted p-2 text-muted-foreground">Optional vibration layer beneath electrodes for tactile realism.</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Cooling & Thermoregulation Unit</td>
                    <td className="border border-muted p-2 text-muted-foreground">Micro fan layer + breathable mesh for temp control.</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Emergency Safety Switch</td>
                    <td className="border border-muted p-2 text-muted-foreground">Red push-button + BLE trigger for instant shutdown.</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Telemetry Module</td>
                    <td className="border border-muted p-2 text-muted-foreground">Sends real-time zone feedback and health data to instructor tablet.</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2 font-medium">Battery Unit</td>
                    <td className="border border-muted p-2 text-muted-foreground">10,000mAh Li-Po with BMS (Battery Management System) and hot-swap bay.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          {/* Zonal Layout Section */}
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">🎯 Zonal Layout</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/30">
                      <th className="border border-muted p-2 text-left">Zone</th>
                      <th className="border border-muted p-2 text-left">Position</th>
                      <th className="border border-muted p-2 text-left">Function</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-muted p-2">Z1</td>
                      <td className="border border-muted p-2">Left Chest</td>
                      <td className="border border-muted p-2 text-muted-foreground">Vital region feedback</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2">Z2</td>
                      <td className="border border-muted p-2">Right Chest</td>
                      <td className="border border-muted p-2 text-muted-foreground">Vital region feedback</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2">Z3</td>
                      <td className="border border-muted p-2">Abdomen</td>
                      <td className="border border-muted p-2 text-muted-foreground">High pain sensitivity</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2">Z4</td>
                      <td className="border border-muted p-2">Left Arm</td>
                      <td className="border border-muted p-2 text-muted-foreground">Peripheral hit simulation</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2">Z5</td>
                      <td className="border border-muted p-2">Right Arm</td>
                      <td className="border border-muted p-2 text-muted-foreground">Peripheral hit simulation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/30">
                      <th className="border border-muted p-2 text-left">Zone</th>
                      <th className="border border-muted p-2 text-left">Position</th>
                      <th className="border border-muted p-2 text-left">Function</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-muted p-2">Z6</td>
                      <td className="border border-muted p-2">Upper Back</td>
                      <td className="border border-muted p-2 text-muted-foreground">Non-visible feedback zone</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2">Z7</td>
                      <td className="border border-muted p-2">Lower Back</td>
                      <td className="border border-muted p-2 text-muted-foreground">Shock + optional pressure feedback</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2">Z8</td>
                      <td className="border border-muted p-2">Left Leg</td>
                      <td className="border border-muted p-2 text-muted-foreground">Movement-impact simulation</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2">Z9</td>
                      <td className="border border-muted p-2">Right Leg</td>
                      <td className="border border-muted p-2 text-muted-foreground">Movement-impact simulation</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2">Z10</td>
                      <td className="border border-muted p-2">Shoulder (L/R)</td>
                      <td className="border border-muted p-2 text-muted-foreground">Realistic upper body targeting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              💡 Zones can be increased to 16 with modular plug-and-play architecture.
            </div>
          </section>
          
          {/* Flow sections */}
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">📡 Signal Flow</h4>
            <div className="bg-muted/20 p-4 rounded-lg">
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <div className="px-3 py-1 rounded bg-muted/30">Hit Received</div>
                <div>→</div>
                <div className="px-3 py-1 rounded bg-muted/30">Gun Sends IR/RF Signal</div>
                <div>→</div>
                <div className="px-3 py-1 rounded bg-muted/30">Suit Signal Decoder</div>
                <div>→</div>
                <div className="px-3 py-1 rounded bg-muted/30">MCU Logic</div>
                <div>→</div>
                <div className="px-3 py-1 rounded bg-muted/30">Shock Driver + Electrode Zone</div>
                <div>→</div>
                <div className="px-3 py-1 rounded bg-muted/30">Feedback Applied</div>
                <div>→</div>
                <div className="px-3 py-1 rounded bg-muted/30">Telemetry Sent to Tablet</div>
              </div>
            </div>
          </section>
          
          {/* MCU Logic Flow */}
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">🧩 Microcontroller Logic Flow</h4>
            <div className="bg-muted/30 p-4 rounded-lg">
              <pre className="text-xs overflow-x-auto">
{`if suit_powered_on:
    run_self_diagnostics()
    while training_active:
        if signal_received:
            verify_hit()
            activate_zone(zone_id, intensity_level)
            log_telemetry(zone_id, intensity_level, timestamp)
        if safety_triggered or suit_error:
            shutdown_feedback_system()
            alert_instructor()`}
              </pre>
            </div>
          </section>
          
          {/* Safety Systems */}
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">🧪 Safety Systems</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">Manual Safety Overrides</h5>
                <ul className="text-sm text-muted-foreground space-y-1 ml-5 list-disc">
                  <li>Hardware Switch: Push-button on chest shuts down MCU + driver power.</li>
                  <li>Instructor Kill-Switch: BLE command from instructor tablet.</li>
                  <li>Child Lock Mode: Activated via app for underage users or demonstrations.</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Automatic Safety Mechanisms</h5>
                <ul className="text-sm text-muted-foreground space-y-1 ml-5 list-disc">
                  <li>Skin Contact Sensors: Disable electrode if skin resistance too low.</li>
                  <li>Overheat Protection: Thermal sensors disable zones {">"}45°C.</li>
                  <li>Pulse Limiters: Caps current below medical safety thresholds (IEC 60601-1).</li>
                  <li>Dry Contact Detection: Halts activation if electrode contact is dry (no conductivity).</li>
                  <li>Battery Overload Cutoff: BMS circuit shuts off current draw during surges.</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Additional Technical Sections */}
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">🧬 Communication + Control</h4>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/30">
                  <th className="border border-muted p-2 text-left">Module</th>
                  <th className="border border-muted p-2 text-left">Protocol Used</th>
                  <th className="border border-muted p-2 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-muted p-2">Gun → Suit</td>
                  <td className="border border-muted p-2">IR/RF/Li-Fi</td>
                  <td className="border border-muted p-2 text-muted-foreground">Trigger feedback event</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2">Suit → Tablet</td>
                  <td className="border border-muted p-2">BLE 5.0</td>
                  <td className="border border-muted p-2 text-muted-foreground">Send real-time logs, zone data, battery levels</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2">Instructor → Suit</td>
                  <td className="border border-muted p-2">BLE 5.0</td>
                  <td className="border border-muted p-2 text-muted-foreground">Manual trigger, mode change, diagnostics</td>
                </tr>
              </tbody>
            </table>
          </section>
          
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">🧵 Material + Wearable Design</h4>
            <ul className="text-sm text-muted-foreground space-y-1 ml-5 list-disc">
              <li>Outer Layer: Fire-retardant polyester, water-resistant.</li>
              <li>Electrode Layer: Silver-fiber/graphene-coated, anti-bacterial, washable.</li>
              <li>Zonal Interface: Snap-lock magnetic connection for easy module swap.</li>
              <li>Flexibility: Suit design rated for high mobility (military movement test passed).</li>
              <li>Weight: ~2.8 kg with battery; 2.1 kg without.</li>
            </ul>
          </section>
          
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">🔁 Top-Level Flow: Main System Loop</h4>
            <div className="bg-muted/30 p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs whitespace-pre">
{`+-------------------------+
|  Power ON / Boot Suit  |
+-------------------------+
           |
           v
+-------------------------+
|  Self-Diagnostics Mode |
| - Zone check           |
| - MCU temp             |
| - Battery & signal     |
+-------------------------+
           |
           v
+-------------------------+
| Wait for Signal Input  |
| - From Gun (IR/Li-Fi)  |
+-------------------------+
           |
    +------+------+
    |             |
    v             v
[Manual Override] [Signal Received from Gun]
   |                   |
   v                   v
[Shutdown system]    [Decode Signal]
                        |
                        v
              +---------------------+
              | Identify Hit Zone   |
              | Intensity & Type    |
              +---------------------+
                        |
                        v
              +---------------------+
              | Safety Check Gate   |
              | - Pulse limiter     |
              | - Skin contact      |
              | - Overheat guard    |
              +---------------------+
                        |
         +--------------+---------------+
         |                              |
     [Fail Any]                   [All OK]
         |                              |
         v                              v
[Block Zone Activation]      [Activate Zone Driver]
         |                              |
         v                              v
[Log Event + Alert Tablet]   [Shock Signal → Electrode]
                                       |
                                       v
                        +----------------------------+
                        | Send Realtime Telemetry    |
                        | - Zone ID, Timestamp       |
                        | - Intensity, Status        |
                        | → Instructor Tablet        |
                        +----------------------------+
                                       |
                                       v
                        +----------------------------+
                        | Return to Wait for Signal  |
                        +----------------------------+`}
              </pre>
            </div>
          </section>
          
          <section className="kaal-card p-6">
            <h4 className="text-lg font-medium mb-4">🧪 Sub-Flow: Zone Safety & Pulse Control</h4>
            <div className="bg-muted/30 p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs whitespace-pre">
{`+-----------------------------+
| Zone Activation Requested  |
+-----------------------------+
           |
           v
+-----------------------------+
| Check Skin Contact Sensor  |
+-----------------------------+
           |
       +---+---+
       |       |
    [No]     [Yes]
       |       |
       v       v
 [Block Zone]  +--------------------------+
               | Check Pulse Thresholds  |
               +--------------------------+
                         |
                      +--+--+
                      |     |
                   [Fail] [Pass]
                      |     |
                      v     v
              [Block Activation] → [Deliver Shock Signal]`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default SuitSubsystemFlowchart;

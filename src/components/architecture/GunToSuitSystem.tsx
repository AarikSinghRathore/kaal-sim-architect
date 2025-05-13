
import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Cpu, 
  Radio, 
  Tablet,
  AlertTriangle
} from 'lucide-react';
import ViewToggle from '@/components/ui/ViewToggle';

const GunToSuitSystem = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);

  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center gap-6">
        <div className="kaal-badge-primary">Feedback System</div>
        <h2 className="text-3xl font-bold text-center">Gun-to-Suit Feedback System</h2>
        <ViewToggle 
          isTechnicalView={isTechnicalView}
          setIsTechnicalView={setIsTechnicalView}
          className="max-w-sm mx-auto"
        />
      </div>

      <div className="mt-8">
        {isTechnicalView ? <TechnicalView /> : <NonTechnicalView />}
      </div>
    </div>
  );
};

const TechnicalView = () => {
  return (
    <div className="space-y-12 opacity-0 animate-fade-in">
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Zap className="h-5 w-5 text-kaal-blue mr-2" />
          Smart Gun Unit
        </h3>
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">IR/Laser Emitter</h4>
              <p className="text-sm text-muted-foreground">
                Precision-targeting dual-spectrum emitter utilizing 950nm IR for indoor scenarios and 650nm visible laser for outdoor operations. Includes beam collimation optics and 15° spread lens for close-quarter combat simulation.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Signal Modulation Chip</h4>
              <p className="text-sm text-muted-foreground">
                Custom ASIC with ARM Cortex-M4 core handling real-time signal processing. Implements 128-bit AES encryption for secure weapon-to-suit communication with unique weapon identification signatures and variable damage parameters.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Battery and Charge Controller</h4>
              <p className="text-sm text-muted-foreground">
                3.7V 2000mAh LiPo battery with integrated BMS providing 8+ hours continuous operation. Includes over-discharge protection and USB-C fast charging capability with smart charging circuit.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Trigger-to-Signal Logic</h4>
              <p className="text-sm text-muted-foreground">
                Hall-effect magnetic sensor with 1.5mm actuation distance for reliable trigger detection. Features debounce algorithm and hardware interrupt handling to ensure < 5ms response time between trigger pull and signal emission.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Range Tuning Circuit</h4>
              <p className="text-sm text-muted-foreground">
                Digitally controlled variable gain amplifier with 6 preset power levels. Simulates effective ranges from 10m to 300m with discrete power settings controlled via DIP switches or wireless configuration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Shield className="h-5 w-5 text-kaal-green mr-2" />
          Feedback Suit
        </h3>
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Conductive Cloth Zones</h4>
              <p className="text-sm text-muted-foreground">
                Military-grade ripstop nylon with interwoven silver-coated conductive fibers. Features 22 anatomically mapped impact zones with redundant connection paths and washable construction (up to 100 cycles).
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Zoned Electrode Grid Layout</h4>
              <p className="text-sm text-muted-foreground">
                Multi-layer PCB with 64 individually addressable electrodes per zone. Utilizes flexible circuit material with strain relief connections and variable voltage distribution for realistic impact sensation simulation.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">High-Frequency Low-Voltage Shock Module</h4>
              <p className="text-sm text-muted-foreground">
                Tunable 30-80V peak-to-peak output with 150-300Hz frequency modulation. Includes current limiting to maximum 5mA per zone with multiple safety circuits including GFCI and isolation transformer.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Microcontroller (STM32/ESP32)</h4>
              <p className="text-sm text-muted-foreground">
                Dual-core processor system with dedicated cores for signal reception and electrode actuation. Features real-time operating system with prioritized interrupts and watchdog timer for system reliability.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Signal Decoder and Actuator Driver</h4>
              <p className="text-sm text-muted-foreground">
                Custom signal processing pipeline with 16-bit DACs for precise electrode control. Incorporates programmable waveform generator and calibrated feedback intensity mapping based on weapon type and range data.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Battery Pack and Circuit Protection</h4>
              <p className="text-sm text-muted-foreground">
                7.4V 5000mAh LiPo battery with integrated thermal monitoring and over-current protection. Features hot-swappable design allowing for continuous operation during multi-day exercises with secondary power supply.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Radio className="h-5 w-5 text-kaal-yellow mr-2" />
          Wireless Protocols
        </h3>
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">LoRa or BLE</h4>
              <p className="text-sm text-muted-foreground">
                Dual-radio system with LoRa (868/915MHz) for long-range operation and BLE 5.2 for close-quarter combat. Implements adaptive frequency hopping and automatic protocol switching based on signal quality and range requirements.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Encryption Layer for Secure Communication</h4>
              <p className="text-sm text-muted-foreground">
                AES-256-GCM encryption with rotating session keys and digital signatures. Includes secure boot with hardware root of trust and NIST-compliant key exchange protocol to prevent signal spoofing or unauthorized access.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Retry Logic for Dropped Packets</h4>
              <p className="text-sm text-muted-foreground">
                Automatic retransmission protocol with priority queuing and QoS implementation. Features dynamic timeout adjustment based on network conditions and guaranteed delivery with maximum 15ms latency for critical signals.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-muted">
              <h5 className="text-sm font-medium mb-2">Protocol Efficiency Metrics</h5>
              <pre className="text-xs text-muted-foreground overflow-x-auto">
{`Signal Type    | Packet Size | Latency   | Range    | Battery Impact
-------------+-------------+-----------+----------+---------------
Hit Detection | 24 bytes    | < 5ms     | 100m     | Minimal
Damage Calc   | 64 bytes    | < 10ms    | 100m     | Low
Status Update | 128 bytes   | < 100ms   | 300m     | Medium
Config Change | 256 bytes   | < 1000ms  | 300m     | High`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Tablet className="h-5 w-5 text-kaal-blue mr-2" />
          Tablet/Instructor Control Interface
        </h3>
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Real-Time Suit Status</h4>
              <p className="text-sm text-muted-foreground">
                Web-based reactive dashboard with < 250ms update latency showing per-participant health and hit status. Features heat map visualization of impact locations and configurable thresholds for "wounded" vs "eliminated" status tracking.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Unit Mapping and Diagnostics</h4>
              <p className="text-sm text-muted-foreground">
                Hierarchical unit visualization with squad/team groupings and individual soldier status. Includes diagnostic tools for battery level monitoring, connection quality metrics, and system health checks with early warning alerts.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">"Kill Suit" Safety Override Button</h4>
              <p className="text-sm text-muted-foreground">
                Prominent emergency deactivation control with triple-confirmation for mass deactivation. Features dedicated wireless channel with hardware-level priority access and redundant transmission to ensure rapid response.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Logging and Analytics Dashboard</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive event capture system recording all hits, responses, and system states. Provides post-exercise analysis tools including shot accuracy, reaction times, hit distribution, and synchronized video playback capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 text-kaal-red mr-2" />
          Safety Override System
        </h3>
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Manual Safety</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start">
                  <span className="text-kaal-red mr-2">•</span>
                  <span>Red emergency button on suit (hardware cutoff)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-red mr-2">•</span>
                  <span>Instructor "Kill Shock" switch via tablet</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Automatic Safety Logic</h4>
              <h5 className="text-sm font-medium mt-2">Conditions Monitored:</h5>
              <ul className="text-sm text-muted-foreground space-y-2 mt-1">
                <li className="flex items-start">
                  <span className="text-kaal-red mr-2">•</span>
                  <span>Pulse duration limit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-red mr-2">•</span>
                  <span>Overfrequency in zone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-red mr-2">•</span>
                  <span>Voltage/current spike detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-red mr-2">•</span>
                  <span>Suit battery drop</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-red mr-2">•</span>
                  <span>Low skin resistance</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Safety Response Actions</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start">
                  <span className="text-kaal-red mr-2">•</span>
                  <span>Auto-disable pulse driver and log event</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-red mr-2">•</span>
                  <span>Sends alert to instructor interface</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-md border border-muted">
              <h5 className="text-sm font-medium mb-2">Pseudocode Example for MCU Safety Logic:</h5>
              <pre className="text-xs text-muted-foreground overflow-x-auto">
{`if (pulse_duration > 300ms || resistance < threshold) {
    shutdownDriver();
    sendSafetyAlert("AUTO SAFETY TRIGGERED");
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const NonTechnicalView = () => {
  return (
    <div className="space-y-10 opacity-0 animate-fade-in">
      <div className="kaal-card p-8 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-kaal-green/20 flex items-center justify-center">
            <Zap className="h-12 w-12 text-kaal-green" />
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
        <p className="text-muted-foreground">
          The KAAL feedback system creates realistic training by simulating the consequences of actions in the field.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-x-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-kaal-blue" />
            </div>
            <h4 className="font-medium">Gun Fires Signal</h4>
            <p className="text-xs text-muted-foreground mt-2">
              Gun fires a harmless signal that simulates weapon fire
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
              <Radio className="h-8 w-8 text-kaal-yellow" />
            </div>
            <h4 className="font-medium">Signal Transmission</h4>
            <p className="text-xs text-muted-foreground mt-2">
              Encrypted wireless signal sent to target suit
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-kaal-green" />
            </div>
            <h4 className="font-medium">Feedback Response</h4>
            <p className="text-xs text-muted-foreground mt-2">
              Suit provides realistic tap or shock at impact point
            </p>
          </div>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-center">Safe, Smart, and Adjustable</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="kaal-card p-6">
            <h4 className="font-medium mb-4">Complete Safety</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 p-1 rounded-full bg-kaal-red/20 text-kaal-red mr-2">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Multiple safety systems including emergency shutdown buttons and automatic monitoring
                </p>
              </div>
              
              <div className="flex items-center justify-center mt-4">
                <div className="w-16 h-16 rounded-full bg-kaal-red/20 flex items-center justify-center border-2 border-kaal-red">
                  <span className="text-xl font-bold text-kaal-red">STOP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="kaal-card p-6">
            <h4 className="font-medium mb-4">Intelligent Response</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 p-1 rounded-full bg-kaal-green/20 text-kaal-green mr-2">
                  <Cpu className="h-4 w-4" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Realistic feedback based on weapon type, distance, and impact location
                </p>
              </div>
              
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="w-full h-6 bg-muted/30 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-kaal-green to-kaal-blue rounded-full"></div>
                </div>
                <div className="w-full flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>Light</span>
                  <span>Medium</span>
                  <span>Strong</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="kaal-card p-6">
            <h4 className="font-medium mb-4">Instructor Control</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 p-1 rounded-full bg-kaal-blue/20 text-kaal-blue mr-2">
                  <Tablet className="h-4 w-4" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Full instructor oversight with real-time monitoring and control capabilities
                </p>
              </div>
              
              <div className="flex items-center justify-center mt-4">
                <div className="relative w-24 h-16 bg-muted/50 rounded-lg border border-muted flex items-center justify-center">
                  <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-kaal-red animate-pulse"></div>
                  <Tablet className="h-5 w-5 text-kaal-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GunToSuitSystem;


import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { 
  AlertTriangle, 
  ShieldAlert, 
  Cpu, 
  Wifi, 
  Power
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ViewToggle from "@/components/ui/ViewToggle";

const Safety = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);
  
  return (
    <Layout 
      heroTitle="KAAL Safety Systems" 
      heroSubtitle="Comprehensive Safety Mechanisms and Fail-Safe Protocols"
      heroBackground="from-kaal-red/30 to-black"
    >
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6 mb-10">
            <div className="kaal-badge-danger">Priority #1</div>
            <h2 className="text-3xl font-bold text-center">Safety Overwrite System</h2>
            <ViewToggle 
              isTechnicalView={isTechnicalView}
              setIsTechnicalView={setIsTechnicalView}
              className="max-w-sm mx-auto"
            />
          </div>

          <div className="mt-8">
            {isTechnicalView ? <TechnicalView /> : <NonTechnicalView />}
          </div>
          
          <div className="flex justify-center mt-16 gap-4">
            <Link to="/architecture">
              <Button variant="outline">
                Back to Architecture
              </Button>
            </Link>
            
            <Link to="/cost-comparison">
              <Button>
                Cost Comparison
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const TechnicalView = () => {
  return (
    <div className="space-y-10 opacity-0 animate-fade-in">
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 text-kaal-red mr-2" />
          Manual Override System
        </h3>
        
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Instructor Control Interface</h4>
              <p className="text-sm text-muted-foreground">
                Dedicated high-priority control channel with triple-redundant transmission paths. 
                Utilizes separate power supply with UPS backup and direct hardware connection to 
                suit shutdown relays, bypassing all software intermediaries.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Physical Emergency Buttons</h4>
              <p className="text-sm text-muted-foreground">
                Each suit includes 2 emergency cutoff buttons positioned for easy access (chest and back).
                Buttons directly disconnect power to electrode drivers through mechanical relay system
                requiring manual reset, preventing accidental reactivation.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">RFID Proximity Triggers</h4>
              <p className="text-sm text-muted-foreground">
                Instructor wristbands contain RFID master keys that immediately deactivate any suit within
                2 meters when held against emergency receiver. System works even when suit MCU or
                communications system has failed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <ShieldAlert className="h-5 w-5 text-kaal-yellow mr-2" />
          Automatic Shutdown System
        </h3>
        
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Thermal Protection Circuit</h4>
              <p className="text-sm text-muted-foreground">
                Distributed temperature sensors monitor 8 critical points in the electronics subsystem.
                Hardware comparator triggers latching shutdown relay when temperature exceeds 60°C, 
                requiring manual reset after cooling. System operates independently of MCU.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Signal Fault Detection</h4>
              <p className="text-sm text-muted-foreground">
                Separate watchdog processor monitors all incoming signals for anomalies including:
                excessive frequency, invalid encryption, out-of-range parameters, or corrupt packets.
                Three consecutive faulty signals trigger 30-second safety lockout with automatic alert
                to instructor tablet.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Power Management Protection</h4>
              <p className="text-sm text-muted-foreground">
                Battery monitoring circuit with dedicated low-power microprocessor tracks voltage, current
                and discharge rate. System isolates electrode driver circuits if battery reaches 20% capacity
                or if abnormal power draw is detected, while maintaining communications.
              </p>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-md border border-muted">
              <h5 className="text-sm font-medium mb-2">Safety System Architecture</h5>
              <pre className="text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap">
{`// Primary safety loop pseudocode
void SafetyLoop() {
  while(1) {
    // Hardware monitoring (runs even if main MCU fails)
    if(temperature > TEMP_THRESHOLD || 
       voltage < VOLTAGE_THRESHOLD ||
       current > CURRENT_THRESHOLD) {
      
      // Direct hardware shutdown path
      DISABLE_ELECTRODE_POWER();
      SET_ALERT_LED(RED);
      SEND_EMERGENCY_SIGNAL();
    }
    
    // Check for manual override
    if(EMERGENCY_BUTTON_PRESSED || RFID_OVERRIDE_DETECTED) {
      LATCH_SHUTDOWN_RELAY();
      REQUIRE_MANUAL_RESET = true;
    }
    
    sleep(1); // 1ms check interval
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Power className="h-5 w-5 text-kaal-green mr-2" />
          Redundant Safety Indicators
        </h3>
        
        <div className="kaal-card p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">LED Indicator System</h4>
              <p className="text-sm text-muted-foreground">
                Three-color LED status indicators on suit (8 locations) and gun (2 locations) with 
                dedicated power supply separate from main battery. Green indicates normal operation,
                yellow indicates warning condition, red indicates safety activation or fault.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Audible Alert System</h4>
              <p className="text-sm text-muted-foreground">
                Multi-tone piezoelectric transducer with 95dB output at 1m provides distinct audio
                patterns for different alert conditions. Battery-backed system continues to function
                even when main power is disconnected.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Fail-Safe Relay System</h4>
              <p className="text-sm text-muted-foreground">
                All critical safety relays are designed as normally-open (requiring power to activate),
                ensuring that power or control system failures default to safe state. Mechanical latching
                relays maintain state even during power loss.
              </p>
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
          <div className="w-24 h-24 rounded-full bg-kaal-red/20 flex items-center justify-center">
            <ShieldAlert className="h-12 w-12 text-kaal-red" />
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4">Safety First Design</h3>
        <p className="text-muted-foreground">
          KAAL's safety systems ensure complete protection for all training participants through
          multiple layers of protection, monitoring, and emergency controls.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="kaal-card p-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-kaal-red/20 flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-kaal-red" />
          </div>
          <h4 className="font-medium mb-2 text-center">Emergency Stop</h4>
          <p className="text-sm text-muted-foreground text-center">
            Every suit has clearly marked emergency buttons that immediately cut all power
            to the feedback system. Instructors also have remote emergency controls.
          </p>
          
          <div className="mt-6 w-16 h-16 rounded-full border-4 border-kaal-red flex items-center justify-center bg-red-600 animate-pulse">
            <span className="text-white font-bold">STOP</span>
          </div>
        </div>
        
        <div className="kaal-card p-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-kaal-yellow/20 flex items-center justify-center mb-4">
            <Cpu className="h-8 w-8 text-kaal-yellow" />
          </div>
          <h4 className="font-medium mb-2 text-center">Automatic Protection</h4>
          <p className="text-sm text-muted-foreground text-center">
            Intelligent safety systems automatically detect problems like overheating or
            signal errors and immediately shut down the system to prevent any risk.
          </p>
          
          <div className="mt-6 flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-kaal-green animate-pulse"></div>
            <div className="h-4 w-4 rounded-full bg-kaal-yellow"></div>
            <div className="h-4 w-4 rounded-full bg-kaal-red"></div>
          </div>
        </div>
        
        <div className="kaal-card p-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-kaal-blue/20 flex items-center justify-center mb-4">
            <Wifi className="h-8 w-8 text-kaal-blue" />
          </div>
          <h4 className="font-medium mb-2 text-center">Constant Monitoring</h4>
          <p className="text-sm text-muted-foreground text-center">
            The instructor's control tablet shows real-time safety status of all equipment,
            with warning alerts for any potential issues before they become problems.
          </p>
          
          <div className="mt-6 w-16 h-8 border border-muted bg-black/50 rounded relative">
            <div className="absolute top-1 left-1 h-1 w-1 rounded-full bg-kaal-green animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;

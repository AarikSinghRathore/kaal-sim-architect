import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import ViewToggle from "@/components/ui/ViewToggle";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
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
  CircleAlert
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import FeedbackSystemFlowchart from "@/components/feedback/FeedbackSystemFlowchart";

// For our simplified first version, let's just include the basic structure
// and we can add the other components in follow-up iterations

const FeedbackSystemDetails = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(true);

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
          <div className="space-y-12">
            <section className="opacity-0 animate-fade-in">
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
                
                <div className="mt-8 bg-muted/10 p-4 rounded-md border border-muted/30">
                  <h5 className="font-medium mb-2">System Overview</h5>
                  <p className="text-sm text-muted-foreground">
                    The feedback system delivers precise tactical response with ultra-low latency (under 30ms), allowing for realistic training scenarios with accurate hit detection and feedback.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="opacity-0 animate-fade-in animate-delay-100">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Cpu className="h-6 w-6 text-kaal-green mr-3" />
                Technical Specifications
              </h3>
              
              <div className="kaal-card p-6">
                <h4 className="text-lg font-medium mb-4">Key System Capabilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Processing Power</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span>ESP32-S3 Dual-core MCU</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span>240MHz clock speed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-green mr-2">•</span>
                        <span>Real-time hit detection</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Wireless Communication</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span>BLE 5.2 with mesh networking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span>AES-128 encrypted data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-blue mr-2">•</span>
                        <span>100m effective range</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/10 p-4 rounded-md border border-muted/30">
                    <h5 className="font-medium mb-2">Electrode System</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span>22 anatomical zones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span>5mA maximum current</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-kaal-yellow mr-2">•</span>
                        <span>Variable intensity levels</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-12">
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
          </div>
        )}
      </div>
    </Layout>
  );
};

// Helper icon component for the ChevronDown icon
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default FeedbackSystemDetails;

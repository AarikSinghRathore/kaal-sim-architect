
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { BenefitsIcons } from '../icons/BenefitIcons';
import { Card } from '@/components/ui/card';

interface InfoSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="kaal-section">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export const WhatIsKaalSection = () => {
  return (
    <InfoSection id="what-is-kaal" title="What is KAAL?">
      <div className="space-y-8 opacity-0 animate-fade-in">
        <p className="text-lg text-muted-foreground">
          KAAL is a next-generation military training system designed to simulate real-world missions using immersive terrain environments and feedback-enabled gear including shock suits and smart weapons.
        </p>
        
        <div className="kaal-card p-6">
          <h3 className="text-xl font-medium mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-kaal-green" />
            Advanced Simulation Platform
          </h3>
          <p className="text-muted-foreground">
            KAAL eliminates the need for bulky physical sand models and enables multi-person live terrain walkthroughs with holograms, AI, and real-time changes. This revolutionary approach allows for dynamic training scenarios that adapt to changing conditions and tactics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="kaal-card p-6">
            <h4 className="font-medium mb-2">Multi-User Experience</h4>
            <p className="text-sm text-muted-foreground">
              Train entire squads simultaneously in a cohesive, shared environment with real-time feedback across all participants.
            </p>
          </div>
          
          <div className="kaal-card p-6">
            <h4 className="font-medium mb-2">Immersive Reality</h4>
            <p className="text-sm text-muted-foreground">
              Experience terrain and mission parameters without cumbersome VR/AR headsets, allowing for natural communication and movement.
            </p>
          </div>
          
          <div className="kaal-card p-6">
            <h4 className="font-medium mb-2">Instant Scenario Adaptation</h4>
            <p className="text-sm text-muted-foreground">
              Mission parameters can be adjusted in real-time, allowing instructors to increase difficulty or introduce unexpected elements.
            </p>
          </div>
          
          <div className="kaal-card p-6">
            <h4 className="font-medium mb-2">Realistic Feedback System</h4>
            <p className="text-sm text-muted-foreground">
              Experience consequential training with smart weapons and shock suits that provide tactical feedback during simulations.
            </p>
          </div>
        </div>
      </div>
    </InfoSection>
  );
};

export const WhyKaalSection = () => {
  return (
    <InfoSection id="why-kaal" title="Why is KAAL Needed?">
      <div className="space-y-8 opacity-0 animate-fade-in">
        <p className="text-lg text-muted-foreground">
          KAAL represents a paradigm shift in military training, providing capabilities that traditional methods simply cannot match.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="kaal-card p-6 border-kaal-green/20 hover:border-kaal-green/40 transition-colors">
            <h3 className="font-medium mb-4">Traditional Training</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">✕</span>
                <span>Limited to physical models and static representations</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">✕</span>
                <span>Expensive to maintain and update with new terrain</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">✕</span>
                <span>Individuals train with varying levels of immersion</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">✕</span>
                <span>Limited integration with modern technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-red mr-2">✕</span>
                <span>Requires extensive physical space</span>
              </li>
            </ul>
          </Card>
          
          <Card className="kaal-card p-6 border-kaal-green/20 hover:border-kaal-green/40 transition-colors">
            <h3 className="font-medium mb-4">KAAL Training</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">✓</span>
                <span>No AR/VR headsets, allowing natural team communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">✓</span>
                <span>Group-scale simultaneous simulation with feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">✓</span>
                <span>Real-time AI-driven terrain and scenario changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">✓</span>
                <span>Immediate adaptation to different regions and conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-kaal-green mr-2">✓</span>
                <span>Compact system with portable deployment options</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <h3 className="text-xl font-medium mt-8 mb-4">Key Benefits</h3>
        <BenefitsIcons />
      </div>
    </InfoSection>
  );
};

export const CostComparisonSection = () => {
  return (
    <InfoSection id="cost-comparison" title="Cost Comparison (Long-Term)">
      <div className="space-y-8 opacity-0 animate-fade-in">
        <p className="text-lg text-muted-foreground">
          KAAL represents a significant investment in the future of military training, with substantial long-term cost benefits over traditional war room systems.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full kaal-card">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left">Metric</th>
                <th className="p-4 text-left">Traditional War Room</th>
                <th className="p-4 text-left">Project KAAL</th>
              </tr>
            </thead>
            <tbody className="text-sm text-muted-foreground">
              <tr className="border-b border-border">
                <td className="p-4">Initial Setup</td>
                <td className="p-4">$1.5M - $3M</td>
                <td className="p-4">$2M - $2.5M</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Annual Maintenance</td>
                <td className="p-4">$350K - $500K</td>
                <td className="p-4">$120K - $200K</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Scenario Updates</td>
                <td className="p-4">$75K - $150K per major update</td>
                <td className="p-4">$15K - $30K per major update</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Operator Requirements</td>
                <td className="p-4">5-7 dedicated personnel</td>
                <td className="p-4">1-2 dedicated personnel</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Space Requirements</td>
                <td className="p-4">1,500 - 3,000 sq ft</td>
                <td className="p-4">300 - 800 sq ft</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Utility Costs</td>
                <td className="p-4">$40K - $60K annually</td>
                <td className="p-4">$10K - $20K annually</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">5-Year Total Cost</td>
                <td className="p-4">$4.5M - $7M</td>
                <td className="p-4">$2.8M - $3.5M</td>
              </tr>
              <tr>
                <td className="p-4">Immersion Level</td>
                <td className="p-4">Medium</td>
                <td className="p-4">Very High</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="kaal-card p-6 border-kaal-green/30 mt-4">
          <h4 className="font-medium flex items-center">
            <ArrowRight className="h-5 w-5 text-kaal-green mr-2" /> 
            Long-Term Value
          </h4>
          <p className="text-muted-foreground mt-2">
            KAAL typically saves 50-70% in cost over 5 years compared to traditional war room setups, while providing significantly higher training effectiveness and adaptability.
          </p>
        </div>
      </div>
    </InfoSection>
  );
};

export const StrategicImpactSection = () => {
  return (
    <InfoSection id="strategic-impact" title="Strategic Impact">
      <div className="space-y-8 opacity-0 animate-fade-in">
        <p className="text-lg text-muted-foreground">
          Project KAAL delivers transformational capabilities that enhance military readiness, decision-making, and joint-force planning.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="kaal-card p-6">
            <h3 className="font-medium mb-4">Enhanced Readiness</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                KAAL enables rapid scenario training across diverse environments, allowing forces to prepare for deployment anywhere in the world with minimal notice.
              </p>
              
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start">
                  <span className="text-kaal-green mr-2">•</span>
                  <span>Quickly adapt to new intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-green mr-2">•</span>
                  <span>Rehearse in accurate terrain models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-green mr-2">•</span>
                  <span>Train for environmental variables</span>
                </li>
              </ul>
            </div>
          </Card>
          
          <Card className="kaal-card p-6">
            <h3 className="font-medium mb-4">Improved Decision-Making</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The immersive environment allows commanders to visualize consequences of tactical decisions and develop intuitive understanding of terrain impacts.
              </p>
              
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start">
                  <span className="text-kaal-green mr-2">•</span>
                  <span>Test multiple approaches rapidly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-green mr-2">•</span>
                  <span>Experience realistic feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-green mr-2">•</span>
                  <span>Develop terrain intuition</span>
                </li>
              </ul>
            </div>
          </Card>
          
          <Card className="kaal-card p-6">
            <h3 className="font-medium mb-4">Joint-Force Planning</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                KAAL facilitates multi-unit coordination across different force components, enhancing combined arms operations and integrated planning.
              </p>
              
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start">
                  <span className="text-kaal-green mr-2">•</span>
                  <span>Coordinate air and ground assets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-green mr-2">•</span>
                  <span>Practice communications protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaal-green mr-2">•</span>
                  <span>Synchronize multi-domain operations</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </InfoSection>
  );
};

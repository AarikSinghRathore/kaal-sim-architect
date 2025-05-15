
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Cpu, 
  FileText, 
  Mountain,
  Shield,
  Zap,
  DollarSign,
  LayoutDashboard,
  Menu,
  Book,
  BookOpen,
  CircleDot
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface Page {
  id: string;
  name: string;
  path: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  position: { x: string; y: string };
  connections: string[];
  keyFeatures?: string[];
}

interface SubSection {
  name: string;
  description: string;
}

const WebsiteFlowchart = () => {
  const [activePage, setActivePage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  
  const pages: Page[] = [
    {
      id: 'home',
      name: 'Home Page',
      path: '/',
      icon: <Home className="h-5 w-5" />,
      description: 'Overview of Project KAAL with sections explaining what it is, its benefits, and navigation to other pages.',
      color: 'kaal-blue',
      position: { x: '50%', y: '20%' },
      connections: ['architecture', 'technical', 'safety', 'terrain', 'feedback', 'cost'],
      keyFeatures: [
        'Project overview and introduction',
        'Key benefits and features',
        'Navigation to specialized sections',
        'Visual highlights of the system'
      ]
    },
    {
      id: 'architecture',
      name: 'System Architecture',
      path: '/architecture',
      icon: <Cpu className="h-5 w-5" />,
      description: 'Detailed overview of KAAL\'s dual system architecture with interactive diagrams.',
      color: 'kaal-green',
      position: { x: '25%', y: '40%' },
      connections: ['technical', 'flowcharts'],
      keyFeatures: [
        'System component diagrams',
        'Interactive flowcharts',
        'Hardware specifications',
        'Integration details'
      ]
    },
    {
      id: 'technical',
      name: 'Technical Documentation',
      path: '/technical',
      icon: <FileText className="h-5 w-5" />,
      description: 'Comprehensive technical specifications and documentation for the KAAL system.',
      color: 'kaal-yellow',
      position: { x: '75%', y: '40%' },
      connections: ['terrain', 'feedback', 'safety', 'flowcharts'],
      keyFeatures: [
        'System requirements',
        'API documentation',
        'Implementation guidelines',
        'Troubleshooting guide'
      ]
    },
    {
      id: 'terrain',
      name: 'Terrain Engine',
      path: '/terrain-simulation',
      icon: <Mountain className="h-5 w-5" />,
      description: 'Detailed information about the advanced terrain simulation engine.',
      color: 'kaal-blue',
      position: { x: '15%', y: '60%' },
      connections: ['flowcharts'],
      keyFeatures: [
        'Terrain generation technology',
        'Real-world mapping integration',
        'Environmental effects',
        'Rendering capabilities'
      ]
    },
    {
      id: 'feedback',
      name: 'Feedback System',
      path: '/feedback-system',
      icon: <Zap className="h-5 w-5" />,
      description: 'Information about the tactile feedback system that provides realistic training.',
      color: 'kaal-red',
      position: { x: '38%', y: '60%' },
      connections: ['flowcharts'],
      keyFeatures: [
        'Haptic technology details',
        'Sensor mapping',
        'Feedback calibration',
        'User experience design'
      ]
    },
    {
      id: 'safety',
      name: 'Safety Systems',
      path: '/safety',
      icon: <Shield className="h-5 w-5" />,
      description: 'Comprehensive safety measures and failsafe protocols for KAAL.',
      color: 'kaal-green',
      position: { x: '62%', y: '60%' },
      connections: ['flowcharts'],
      keyFeatures: [
        'Emergency protocols',
        'Safety certification',
        'Risk assessment',
        'User safety guidelines'
      ]
    },
    {
      id: 'cost',
      name: 'Cost Comparison',
      path: '/cost-comparison',
      icon: <DollarSign className="h-5 w-5" />,
      description: 'Cost analysis comparing KAAL to traditional training methods.',
      color: 'kaal-yellow',
      position: { x: '85%', y: '60%' },
      connections: [],
      keyFeatures: [
        'ROI calculations',
        'Implementation costs',
        'Maintenance expenses',
        'Cost-saving benefits'
      ]
    },
    {
      id: 'flowcharts',
      name: 'Detailed Flowcharts',
      path: '/detailed-flowcharts',
      icon: <LayoutDashboard className="h-5 w-5" />,
      description: 'Interactive technical flowcharts showing various subsystems of KAAL.',
      color: 'kaal-blue',
      position: { x: '50%', y: '80%' },
      connections: [],
      keyFeatures: [
        'System interaction diagrams',
        'Process flows',
        'Component relationships',
        'Signal pathways'
      ]
    },
    {
      id: 'site-map',
      name: 'Website Map',
      path: '/site-map',
      icon: <Menu className="h-5 w-5" />,
      description: 'Visual guide to navigate the website structure with interactive elements.',
      color: 'kaal-red',
      position: { x: '50%', y: '95%' },
      connections: [],
      keyFeatures: [
        'Site navigation guide',
        'Page relationships',
        'Content structure',
        'Interactive website map'
      ]
    }
  ];

  const handlePageClick = (pageId: string) => {
    setActivePage(pageId === activePage ? null : pageId);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 1.8));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.6));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const getPageSubsections = (pageId: string): SubSection[] => {
    switch(pageId) {
      case 'architecture':
        return [
          { name: 'Gun-to-Suit System', description: 'Feedback mechanism between training weapons and the haptic suit' },
          { name: 'Terrain Engine', description: 'Advanced simulation system for environmental rendering' },
          { name: 'System Flowchart', description: 'Comprehensive diagram showing system interactions' }
        ];
      case 'technical':
        return [
          { name: 'API Documentation', description: 'Technical interfaces for system integration' },
          { name: 'Hardware Specs', description: 'Detailed hardware requirements and specifications' },
          { name: 'Implementation Guide', description: 'Step-by-step guide for system setup and deployment' }
        ];
      case 'terrain':
        return [
          { name: 'Rendering System', description: 'Visual processing components for terrain display' },
          { name: 'Environmental FX', description: 'Weather and time-of-day simulation features' },
          { name: 'Control System', description: 'Instructor interface for terrain management' }
        ];
      case 'feedback':
        return [
          { name: 'Haptic Components', description: 'Physical feedback generation technologies' },
          { name: 'Calibration System', description: 'Tools for adjusting feedback intensity and targeting' },
          { name: 'Feedback Flowcharts', description: 'Signal routing diagrams for the feedback system' }
        ];
      case 'safety':
        return [
          { name: 'Emergency Systems', description: 'Rapid shutdown and safety override mechanisms' },
          { name: 'Certification', description: 'Safety standards compliance information' },
          { name: 'User Guidelines', description: 'Safety protocols for system operators and trainees' }
        ];
      case 'cost':
        return [
          { name: 'Implementation Costs', description: 'Initial setup and procurement expenses' },
          { name: 'Operational Savings', description: 'Long-term cost benefits compared to traditional methods' },
          { name: 'ROI Calculator', description: 'Interactive tool for estimating return on investment' }
        ];
      case 'flowcharts':
        return [
          { name: 'Feedback Subsystems', description: 'Detailed diagrams of feedback components' },
          { name: 'Terrain Pipeline', description: 'Data flow for terrain generation and rendering' },
          { name: 'Safety Protocols', description: 'Flowcharts of safety systems and procedures' }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end gap-2 mb-2">
        <button 
          onClick={handleZoomOut} 
          className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Zoom out"
        >
          -
        </button>
        <button 
          onClick={handleResetZoom} 
          className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Reset zoom"
        >
          Reset
        </button>
        <button 
          onClick={handleZoomIn} 
          className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Zoom in"
        >
          +
        </button>
      </div>

      <div className="relative h-[700px] border border-border rounded-lg bg-card/50 overflow-hidden">
        {/* Flowchart legend */}
        <div className="absolute top-2 left-2 z-10 bg-background/80 p-2 rounded-md border border-border backdrop-blur-sm">
          <div className="text-xs font-medium mb-1">Legend:</div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-kaal-blue"></div>
              <span className="text-xs">Interface System</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-kaal-green"></div>
              <span className="text-xs">Core System</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-kaal-yellow"></div>
              <span className="text-xs">Documentation</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-kaal-red"></div>
              <span className="text-xs">Safety & Navigation</span>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 w-full h-full" style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}>
          {/* Draw connections between pages */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
            {pages.map(page => 
              page.connections.map((targetId, idx) => {
                const targetPage = pages.find(p => p.id === targetId);
                if (!targetPage) return null;
                
                const sourcePage = page;
                const sourceX = sourcePage.position.x;
                const sourceY = sourcePage.position.y;
                const targetX = targetPage.position.x;
                const targetY = targetPage.position.y;
                
                const isActive = activePage === page.id || activePage === targetId;
                const strokeColor = isActive ? `var(--${page.color})` : 'rgba(128, 128, 128, 0.3)';
                const strokeWidth = isActive ? 2 : 1;
                
                return (
                  <line 
                    key={`${page.id}-${targetId}-${idx}`}
                    x1={sourceX}
                    y1={sourceY}
                    x2={targetX}
                    y2={targetY}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={isActive ? "none" : "4 2"}
                  />
                );
              })
            )}
          </svg>
          
          {/* Draw page nodes */}
          {pages.map(page => (
            <div
              key={page.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all 
                        border ${activePage === page.id ? `border-${page.color} bg-${page.color}/10` : 'border-border bg-card'} 
                        rounded-lg p-3 w-48 text-center`}
              style={{ left: page.position.x, top: page.position.y }}
              onClick={() => handlePageClick(page.id)}
            >
              <div className={`flex justify-center mb-2 text-${page.color}`}>
                {page.icon}
              </div>
              <div className="text-sm font-medium">{page.name}</div>
              <div className="text-xs text-muted-foreground mt-1 truncate">{page.description.split('.')[0]}</div>
              
              {activePage === page.id && (
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <Badge className={`bg-${page.color}`}>Active</Badge>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Page details panel */}
        <div className="absolute bottom-4 left-4 right-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-h-[300px] overflow-y-auto">
          {activePage ? (
            <div className="space-y-4">
              {(() => {
                const page = pages.find(p => p.id === activePage);
                if (!page) return <p>Select a page to view details</p>;
                
                return (
                  <>
                    <div className="flex items-center gap-2">
                      <div className={`text-${page.color} p-2 rounded-full bg-${page.color}/10`}>
                        {page.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{page.name}</h3>
                        <p className="text-sm text-muted-foreground">{page.description}</p>
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    {page.keyFeatures && page.keyFeatures.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {page.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs">
                              <CircleDot className="h-3 w-3 mt-0.5 text-muted-foreground" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Subsections */}
                    {getPageSubsections(page.id).length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-2">Page Sections</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {getPageSubsections(page.id).map((section, idx) => (
                            <div key={idx} className="bg-muted/20 p-2 rounded-md">
                              <div className="font-medium text-sm">{section.name}</div>
                              <div className="text-xs text-muted-foreground">{section.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <Link 
                      to={page.path}
                      className={`block mt-4 text-sm text-${page.color} hover:underline flex items-center gap-1`}
                    >
                      <span>Visit this page</span>
                      <BookOpen className="h-4 w-4" />
                    </Link>
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Click on any page in the map to view its details and description
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <Book className="h-6 w-6 text-kaal-blue mb-2" />
                  <p className="text-xs text-center">Detailed Content</p>
                </div>
                <div className="flex flex-col items-center">
                  <Cpu className="h-6 w-6 text-kaal-green mb-2" />
                  <p className="text-xs text-center">Technical Systems</p>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="h-6 w-6 text-kaal-red mb-2" />
                  <p className="text-xs text-center">Safety Features</p>
                </div>
                <div className="flex flex-col items-center">
                  <LayoutDashboard className="h-6 w-6 text-kaal-yellow mb-2" />
                  <p className="text-xs text-center">Interactive Diagrams</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Instructions for using the map */}
      <div className="kaal-card p-4 mt-4 text-sm">
        <h4 className="font-semibold mb-2">How to Use This Interactive Map</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Click on any page node to see detailed information about that section</li>
          <li>Lines show connections between related pages</li>
          <li>Use the zoom controls to adjust the view as needed</li>
          <li>Click on "Visit this page" to navigate directly to the selected section</li>
          <li>Colors represent different types of content (see legend)</li>
        </ul>
      </div>
    </div>
  );
};

export default WebsiteFlowchart;

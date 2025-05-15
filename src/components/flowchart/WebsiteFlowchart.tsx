
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
  Menu
} from 'lucide-react';

interface Page {
  id: string;
  name: string;
  path: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  position: { x: string; y: string };
  connections: string[];
}

const WebsiteFlowchart = () => {
  const [activePage, setActivePage] = useState<string | null>(null);
  
  const pages: Page[] = [
    {
      id: 'home',
      name: 'Home Page',
      path: '/',
      icon: <Home className="h-5 w-5" />,
      description: 'Overview of Project KAAL with sections explaining what it is, its benefits, and navigation to other pages.',
      color: 'kaal-blue',
      position: { x: '50%', y: '20%' },
      connections: ['architecture', 'technical', 'safety', 'terrain', 'feedback', 'cost']
    },
    {
      id: 'architecture',
      name: 'System Architecture',
      path: '/architecture',
      icon: <Cpu className="h-5 w-5" />,
      description: 'Detailed overview of KAAL\'s dual system architecture with interactive diagrams.',
      color: 'kaal-green',
      position: { x: '25%', y: '40%' },
      connections: ['technical', 'flowcharts']
    },
    {
      id: 'technical',
      name: 'Technical Documentation',
      path: '/technical',
      icon: <FileText className="h-5 w-5" />,
      description: 'Comprehensive technical specifications and documentation for the KAAL system.',
      color: 'kaal-yellow',
      position: { x: '75%', y: '40%' },
      connections: ['terrain', 'feedback', 'safety', 'flowcharts']
    },
    {
      id: 'terrain',
      name: 'Terrain Engine',
      path: '/terrain-simulation',
      icon: <Mountain className="h-5 w-5" />,
      description: 'Detailed information about the advanced terrain simulation engine.',
      color: 'kaal-blue',
      position: { x: '15%', y: '60%' },
      connections: ['flowcharts']
    },
    {
      id: 'feedback',
      name: 'Feedback System',
      path: '/feedback-system',
      icon: <Zap className="h-5 w-5" />,
      description: 'Information about the tactile feedback system that provides realistic training.',
      color: 'kaal-red',
      position: { x: '38%', y: '60%' },
      connections: ['flowcharts']
    },
    {
      id: 'safety',
      name: 'Safety Systems',
      path: '/safety',
      icon: <Shield className="h-5 w-5" />,
      description: 'Comprehensive safety measures and failsafe protocols for KAAL.',
      color: 'kaal-green',
      position: { x: '62%', y: '60%' },
      connections: ['flowcharts']
    },
    {
      id: 'cost',
      name: 'Cost Comparison',
      path: '/cost-comparison',
      icon: <DollarSign className="h-5 w-5" />,
      description: 'Cost analysis comparing KAAL to traditional training methods.',
      color: 'kaal-yellow',
      position: { x: '85%', y: '60%' },
      connections: []
    },
    {
      id: 'flowcharts',
      name: 'Detailed Flowcharts',
      path: '/detailed-flowcharts',
      icon: <LayoutDashboard className="h-5 w-5" />,
      description: 'Interactive technical flowcharts showing various subsystems of KAAL.',
      color: 'kaal-blue',
      position: { x: '50%', y: '80%' },
      connections: []
    }
  ];

  const handlePageClick = (pageId: string) => {
    setActivePage(pageId === activePage ? null : pageId);
  };

  return (
    <div className="relative h-[600px] border border-border rounded-lg bg-card/50 overflow-hidden">
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
                    rounded-lg p-4 w-36 text-center`}
          style={{ left: page.position.x, top: page.position.y }}
          onClick={() => handlePageClick(page.id)}
        >
          <div className={`flex justify-center mb-2 text-${page.color}`}>
            {page.icon}
          </div>
          <div className="text-sm font-medium">{page.name}</div>
        </div>
      ))}
      
      {/* Page details panel */}
      <div className="absolute bottom-4 left-4 right-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 min-h-[100px]">
        {activePage ? (
          <div className="space-y-2">
            {(() => {
              const page = pages.find(p => p.id === activePage);
              if (!page) return <p>Select a page to view details</p>;
              
              return (
                <>
                  <div className="flex items-center gap-2">
                    <div className={`text-${page.color}`}>{page.icon}</div>
                    <h3 className="font-semibold">{page.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{page.description}</p>
                  <Link 
                    to={page.path}
                    className={`block mt-4 text-sm text-${page.color} hover:underline`}
                  >
                    Visit this page →
                  </Link>
                </>
              );
            })()}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Click on any page in the map to view its details and description
          </p>
        )}
      </div>
    </div>
  );
};

export default WebsiteFlowchart;

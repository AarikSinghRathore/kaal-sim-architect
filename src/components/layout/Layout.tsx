
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft, FileText, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  heroTitle?: string;
  heroSubtitle?: string;
  showToggleButton?: boolean;
  heroBackground?: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  heroTitle = "Project KAAL", 
  heroSubtitle = "India's Immersive Military Simulation System", 
  showToggleButton = true,
  heroBackground = "from-kaal-navy to-black",
  className = ""
}) => {
  const location = useLocation();
  const isArchitectureView = location.pathname === '/architecture' || 
                             location.pathname === '/technical' ||
                             location.pathname === '/safety' ||
                             location.pathname === '/cost-comparison';

  const togglePath = isArchitectureView ? '/' : '/architecture';
  const toggleText = isArchitectureView ? 'Switch to Overview' : 'Switch to Architecture View';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section */}
      <div className={`relative min-h-[40vh] md:min-h-[50vh] flex items-center overflow-hidden ${className}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${heroBackground} z-0`}>
          {/* Holographic terrain background effect */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTgtMS4wNjQgMS44NzgtMi4xOTJDMzYuNTYgOC43NCAzMC4zMDQgMyAzMC4zMDQgM3MtNi4yNTQgNS43NC03LjU3NCAxMi44MDhDMjIuNDA4IDE2LjkzNiAyMy4zNzcgMTggMjQuNjA1IDE4SDM2eiIgZmlsbD0icmdiYSg3NiwxNzUsODAsLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
          
          {/* Grid lines overlay */}
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(76, 175, 80, .05) 25%, rgba(76, 175, 80, .05) 26%, transparent 27%, transparent 74%, rgba(76, 175, 80, .05) 75%, rgba(76, 175, 80, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(76, 175, 80, .05) 25%, rgba(76, 175, 80, .05) 26%, transparent 27%, transparent 74%, rgba(76, 175, 80, .05) 75%, rgba(76, 175, 80, .05) 76%, transparent 77%, transparent)",
                 backgroundSize: "50px 50px"
               }}>
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {heroTitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {heroSubtitle}
            </p>
            
            {showToggleButton && (
              <div className="space-y-4">
                <Link to={togglePath}>
                  <Button variant="outline" size="lg" className="border-kaal-blue hover:bg-kaal-blue/20">
                    <ArrowRightLeft className="h-4 w-4 mr-2" />
                    {toggleText}
                  </Button>
                </Link>
                
                <div>
                  <Link to="/technical">
                    <Button variant="outline" size="lg" className="border-kaal-green hover:bg-kaal-green/20">
                      <FileText className="h-4 w-4 mr-2" />
                      Technical Documentation
                    </Button>
                  </Link>
                </div>
                
                <div>
                  <Link to="/site-map">
                    <Button variant="outline" size="lg" className="border-kaal-yellow hover:bg-kaal-yellow/20">
                      <Menu className="h-4 w-4 mr-2" />
                      Website Map
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

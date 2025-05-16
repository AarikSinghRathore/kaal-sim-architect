
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronRight,
  Mountain,
  Zap,
  LucideIcon,
  Home
} from 'lucide-react';
import Logo from '@/components/ui/logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex justify-between items-center h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Logo size="md" />
          <span className="text-lg font-bold tracking-tight">
            PROJECT <span className="text-kaal-green">KAAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" icon={Home} label="Overview" />
          <NavLink to="/architecture" icon={ChevronRight} label="Architecture" />
          <NavLink to="/feedback-system" icon={Zap} label="Feedback System" />
          <NavLink to="/terrain-simulation" icon={Mountain} label="Terrain Engine" />
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animated-fade-in">
          <div className="container py-4 px-4 space-y-2">
            <MobileNavLink to="/" label="Overview" onClick={toggleMobileMenu} />
            <MobileNavLink to="/architecture" label="System Architecture" onClick={toggleMobileMenu} />
            <MobileNavLink to="/feedback-system" label="Feedback System" onClick={toggleMobileMenu} />
            <MobileNavLink to="/terrain-simulation" label="Terrain Engine" onClick={toggleMobileMenu} />
            <MobileNavLink to="/technical" label="Technical Details" onClick={toggleMobileMenu} />
            <MobileNavLink to="/safety" label="Safety Systems" onClick={toggleMobileMenu} />
            <MobileNavLink to="/cost-comparison" label="Cost Comparison" onClick={toggleMobileMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  icon: LucideIcon;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, icon: Icon }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, onClick }) => {
  return (
    <Link
      to={to}
      className="block py-2 px-3 text-foreground hover:bg-muted/20 rounded-md"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;

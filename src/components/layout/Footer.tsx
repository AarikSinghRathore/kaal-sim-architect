
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-kaal-green" />
              <span className="font-bold tracking-tight">
                PROJECT <span className="text-kaal-green">KAAL</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Next-generation military training system using immersive terrain environments
              and feedback-enabled gear.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="/architecture" className="hover:text-foreground transition-colors">
                  System Architecture
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Classified Access</h3>
            <p className="text-sm text-muted-foreground mb-4">
              For authorized personnel only. Security clearance required.
            </p>
            <div className="inline-flex items-center text-xs bg-muted/30 px-3 py-1 rounded-md text-muted-foreground">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-kaal-green"></span>
              SECURE CONNECTION
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Project KAAL. All rights reserved.</p>
          <p>CLASSIFIED - For demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

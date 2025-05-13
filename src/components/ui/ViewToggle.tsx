
import React from 'react';
import { Code, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ViewToggleProps {
  isTechnicalView: boolean;
  setIsTechnicalView: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const ViewToggle: React.FC<ViewToggleProps> = ({
  isTechnicalView,
  setIsTechnicalView,
  className
}) => {
  return (
    <div className={cn("flex rounded-md border border-border overflow-hidden", className)}>
      <button
        className={cn(
          "tech-toggle-btn group flex-1",
          isTechnicalView && "active"
        )}
        onClick={() => setIsTechnicalView(true)}
      >
        <Code className="h-4 w-4 mr-2" />
        <span>Technical View</span>
      </button>
      <button
        className={cn(
          "tech-toggle-btn group flex-1",
          !isTechnicalView && "active"
        )}
        onClick={() => setIsTechnicalView(false)}
      >
        <Eye className="h-4 w-4 mr-2" />
        <span>Non-Technical View</span>
      </button>
    </div>
  );
};

export default ViewToggle;


import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FlowchartNodeProps {
  id: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  color: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  tooltipContent?: React.ReactNode;
}

const FlowchartNode: React.FC<FlowchartNodeProps> = ({
  id,
  title,
  description,
  icon,
  color,
  isActive = false,
  onClick,
  className,
  tooltipContent
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseClasses = "transition-all duration-300 cursor-pointer rounded-md flex flex-col items-center justify-center p-3 text-center";
  const activeClass = isActive ? `bg-${color}/20 border border-${color} shadow-lg` : 'bg-card hover:bg-muted/20 border border-border';
  const pulseClass = isHovered ? `animate-pulse border-${color}` : '';
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            id={id}
            className={cn(baseClasses, activeClass, pulseClass, className)}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`p-2 rounded-full bg-${color}/20 text-${color}`}>
              {icon}
            </div>
            <div className="mt-2 text-sm font-medium">{title}</div>
            {description && <div className="text-xs text-muted-foreground mt-1">{description}</div>}
            {isActive && <ChevronDown className={`h-4 w-4 mt-1 transition-transform ${isActive ? 'rotate-180' : ''}`} />}
          </div>
        </TooltipTrigger>
        {tooltipContent && (
          <TooltipContent side="right" className="max-w-md">
            {tooltipContent}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default FlowchartNode;

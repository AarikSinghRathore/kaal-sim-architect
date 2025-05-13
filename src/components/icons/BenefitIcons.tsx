
import React from 'react';
import { 
  Clock, 
  DollarSign, 
  Lightbulb, 
  ShieldCheck, 
  Eye
} from 'lucide-react';

interface BenefitIconProps {
  type: 'speed' | 'cost' | 'immersion' | 'safety' | 'realism';
  size?: number;
  className?: string;
}

export const BenefitIcon: React.FC<BenefitIconProps> = ({ type, size = 24, className = '' }) => {
  const iconClasses = `${className} animate-pulse-glow`;

  switch (type) {
    case 'speed':
      return <Clock size={size} className={`${iconClasses} text-kaal-blue`} />;
    case 'cost':
      return <DollarSign size={size} className={`${iconClasses} text-kaal-green`} />;
    case 'immersion':
      return <Lightbulb size={size} className={`${iconClasses} text-kaal-yellow`} />;
    case 'safety':
      return <ShieldCheck size={size} className={`${iconClasses} text-kaal-red`} />;
    case 'realism':
      return <Eye size={size} className={`${iconClasses} text-kaal-blue`} />;
    default:
      return null;
  }
};

export const BenefitsIcons = () => {
  return (
    <div className="grid grid-cols-5 gap-4 my-8">
      {['speed', 'cost', 'immersion', 'safety', 'realism'].map((benefit) => (
        <div 
          key={benefit} 
          className="flex flex-col items-center justify-center p-4 kaal-card hover:border-primary/50 transition-all duration-300"
        >
          <BenefitIcon 
            type={benefit as 'speed' | 'cost' | 'immersion' | 'safety' | 'realism'} 
            size={32} 
          />
          <span className="mt-2 text-sm font-medium capitalize">{benefit}</span>
        </div>
      ))}
    </div>
  );
};

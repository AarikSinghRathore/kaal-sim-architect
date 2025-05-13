
import React from 'react';
import { ArrowRight, Zap, Radio, CircuitBoard } from 'lucide-react';

const FeedbackSystemFlowchart = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] h-64 relative flex items-center justify-between px-8 py-4">
        {/* Flow steps */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-16">
          <svg className="w-full h-8" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="rgba(150, 150, 150, 0.8)" />
              </marker>
            </defs>
            <line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="rgba(150, 150, 150, 0.8)"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </div>

        {/* Step 1 - Trigger */}
        <div className="w-32 h-32 flex flex-col items-center justify-center rounded-lg bg-kaal-blue/20 border-2 border-kaal-blue z-10">
          <Zap className="h-8 w-8 text-kaal-blue mb-2" />
          <div className="text-sm font-medium text-center">Trigger</div>
          <div className="text-xs text-muted-foreground mt-1 text-center">1-3ms</div>
        </div>

        {/* Step 2 - Gun MCU */}
        <div className="w-32 h-32 flex flex-col items-center justify-center rounded-lg bg-muted/20 border border-muted z-10">
          <Radio className="h-8 w-8 text-kaal-green mb-2" />
          <div className="text-sm font-medium text-center">IR Signal</div>
          <div className="text-xs text-muted-foreground mt-1 text-center">5-15ms</div>
        </div>

        {/* Step 3 - Suit Receiver */}
        <div className="w-32 h-32 flex flex-col items-center justify-center rounded-lg bg-muted/20 border border-muted z-10">
          <Radio className="h-8 w-8 text-kaal-yellow mb-2" />
          <div className="text-sm font-medium text-center">Processing</div>
          <div className="text-xs text-muted-foreground mt-1 text-center">3-6ms</div>
        </div>

        {/* Step 4 - Electrodes */}
        <div className="w-32 h-32 flex flex-col items-center justify-center rounded-lg bg-muted/20 border border-muted z-10">
          <CircuitBoard className="h-8 w-8 text-kaal-red mb-2" />
          <div className="text-sm font-medium text-center">Feedback</div>
          <div className="text-xs text-muted-foreground mt-1 text-center">2-5ms</div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-muted-foreground">
        Total End-to-End Latency: <span className="font-medium text-kaal-green">11-29ms</span> (typical: ~18ms)
      </div>
    </div>
  );
};

export default FeedbackSystemFlowchart;

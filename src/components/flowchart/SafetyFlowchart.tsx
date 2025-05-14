
import React, { useState } from 'react';
import FlowchartNode from './FlowchartNode';
import { Shield, Zap, Cpu, AlertTriangle, Tablet, Monitor, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NodeData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  x: string;
  y: string;
  connects: string[];
  details: React.ReactNode;
}

const SafetyFlowchart = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const nodes: NodeData[] = [
    {
      id: 'tablet',
      title: 'User Tablet Command',
      description: 'Input control',
      icon: <Tablet className="h-5 w-5" />,
      color: 'kaal-blue',
      x: '15%',
      y: '20%',
      connects: ['blueprint'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Tablet Control Interface</h4>
          <ul className="text-sm space-y-1">
            <li>• iPad Pro with custom application</li>
            <li>• Multi-touch gesture control</li>
            <li>• Location awareness within sim space</li>
            <li>• Time-of-day/weather controls</li>
            <li>• Scenario launch and management</li>
          </ul>
        </div>
      )
    },
    {
      id: 'blueprint',
      title: 'UE5 Blueprint Response',
      description: 'Logic handling',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-green',
      x: '40%',
      y: '20%',
      connects: ['scene'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Blueprint System</h4>
          <ul className="text-sm space-y-1">
            <li>• Event-driven programming model</li>
            <li>• Network message handlers</li>
            <li>• Command validation and sanitization</li>
            <li>• Multi-threaded task distribution</li>
            <li>• Command queueing for complex operations</li>
          </ul>
          
          <pre className="text-xs bg-muted p-2 rounded mt-2">
{`// Example Blueprint logic pseudocode
function OnTerrainModificationReceived(Vector3 location, 
                                      float radius, 
                                      float strength):
  // Validate parameters
  if (!IsValidLocation(location) || 
      radius > MAX_RADIUS ||
      strength > MAX_STRENGTH):
    SendErrorToTablet("Invalid modification parameters")
    return
    
  // Queue GPU task for terrain modification
  Task = CreateTerrainModificationTask(
    location, radius, strength)
  EnqueueGPUTask(Task)
  
  // Update client visualization
  BroadcastTerrainChange(location, radius, strength)`}
          </pre>
        </div>
      )
    },
    {
      id: 'scene',
      title: 'Scene Adjustments Applied',
      description: 'World updates',
      icon: <Database className="h-5 w-5" />,
      color: 'kaal-yellow',
      x: '65%',
      y: '20%',
      connects: ['render'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Scene Modification System</h4>
          <ul className="text-sm space-y-1">
            <li>• Runtime landscape deformation</li>
            <li>• Dynamic material parameter updates</li>
            <li>• Time-of-day transitions</li>
            <li>• Weather effect parameter control</li>
            <li>• Prop and entity placement/removal</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Scene Capabilities</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div><strong>Weather:</strong> Rain, Snow, Fog, Dust, Clear</div>
              <div><strong>Time:</strong> 24-hour cycle with accurate sun/moon</div>
              <div><strong>Environment:</strong> Water level, vegetation density</div>
              <div><strong>Structures:</strong> Damage states, urban density</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'render',
      title: 'GPU Render Triggered',
      description: 'Graphics processing',
      icon: <Cpu className="h-5 w-5" />,
      color: 'kaal-blue',
      x: '90%',
      y: '20%',
      connects: ['frame'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Rendering Process</h4>
          <ul className="text-sm space-y-1">
            <li>• Multi-GPU parallel rendering</li>
            <li>• Alternate frame rendering technique</li>
            <li>• DLSS/FSR upscaling for performance</li>
            <li>• Task graph optimization</li>
            <li>• Async compute utilization</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">GPU Specifications</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div><strong>Primary:</strong> NVIDIA RTX A6000 (48GB VRAM)</div>
              <div><strong>Secondary:</strong> NVIDIA RTX A6000 (48GB VRAM)</div>
              <div><strong>Interconnect:</strong> NVLink 3.0 (112.5 GB/s)</div>
              <div><strong>Driver:</strong> NVIDIA Studio Driver 535.98</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'frame',
      title: 'Frame Sync with LED Wall',
      description: 'Display output',
      icon: <Monitor className="h-5 w-5" />,
      color: 'kaal-green',
      x: '15%',
      y: '50%',
      connects: [],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Display Synchronization</h4>
          <ul className="text-sm space-y-1">
            <li>• NVIDIA Quadro Sync II for multi-GPU sync</li>
            <li>• Genlock for frame-perfect timing</li>
            <li>• DisplayPort 1.4a with DSC</li>
            <li>• 10-bit HDR signal path</li>
            <li>• 120Hz refresh with adaptive sync</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Performance Metrics</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div><strong>Frame time:</strong> 8.33ms target (120Hz)</div>
              <div><strong>System latency:</strong> {"<"}20ms end-to-end</div>
              <div><strong>Color accuracy:</strong> 100% Rec.2020</div>
              <div><strong>Module calibration:</strong> Auto-calibrated daily</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'safety',
      title: 'GPU Safety Thread',
      description: 'Monitoring system',
      icon: <Shield className="h-5 w-5" />,
      color: 'kaal-red',
      x: '50%',
      y: '50%',
      connects: ['check'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Safety Monitoring System</h4>
          <ul className="text-sm space-y-1">
            <li>• Dedicated CPU thread (real-time priority)</li>
            <li>• Python watchdog script using nvidia-smi</li>
            <li>• 1-second polling interval</li>
            <li>• Telemetry logging to disk</li>
            <li>• Automated alert system</li>
          </ul>
          
          <pre className="text-xs bg-muted p-2 rounded mt-2">
{`# GPU Safety Thread Pseudocode
def safety_monitor():
    while True:
        gpu_temps = get_gpu_temperatures()
        gpu_utilization = get_gpu_utilization()
        
        # Check temperature thresholds
        if any(temp > WARNING_TEMP for temp in gpu_temps):
            log_warning("GPU temperature high")
            send_alert_to_instructor()
        
        if any(temp > CRITICAL_TEMP for temp in gpu_temps):
            log_critical("GPU temperature critical")
            initiate_shutdown()
            
        # Check for GPU errors
        errors = check_gpu_errors()
        if errors:
            log_critical(f"GPU errors detected: {errors}")
            initiate_shutdown()
            
        time.sleep(1)  # Poll every second`}
          </pre>
        </div>
      )
    },
    {
      id: 'check',
      title: 'Temp > 90°C?',
      description: 'Condition check',
      icon: <AlertTriangle className="h-5 w-5" />,
      color: 'kaal-yellow',
      x: '50%',
      y: '70%',
      connects: ['shutdown', 'continue'],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Temperature Monitoring</h4>
          <ul className="text-sm space-y-1">
            <li>• Critical temperature threshold: 90°C</li>
            <li>• Warning temperature threshold: 80°C</li>
            <li>• Multiple temperature sensors per GPU</li>
            <li>• VRAM temperature monitoring</li>
            <li>• Historical trend analysis</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Monitoring Parameters</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div><strong>Core Temp:</strong> GPU core temperature (°C)</div>
              <div><strong>Memory Temp:</strong> VRAM temperature (°C)</div>
              <div><strong>Power Draw:</strong> Total board power (W)</div>
              <div><strong>Fan Speed:</strong> Cooling fan RPM</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'shutdown',
      title: 'Auto Shutdown',
      description: 'Safety action',
      icon: <Shield className="h-5 w-5" />,
      color: 'kaal-red',
      x: '35%',
      y: '90%',
      connects: [],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">System Shutdown Procedure</h4>
          <ul className="text-sm space-y-1">
            <li>• Graceful UE5 engine shutdown request</li>
            <li>• Scene state saved to disk</li>
            <li>• GPU workloads cancelled</li>
            <li>• All LED panels set to standby</li>
            <li>• Notification sent to all tablets</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Failsafe Actions</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div><strong>Step 1:</strong> Save session state</div>
              <div><strong>Step 2:</strong> Kill UE5 process</div>
              <div><strong>Step 3:</strong> Power down GPUs</div>
              <div><strong>Step 4:</strong> Fan override to 100%</div>
              <div><strong>Step 5:</strong> Notify administrators</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'continue',
      title: 'Continue Rendering',
      description: 'Normal operation',
      icon: <Zap className="h-5 w-5" />,
      color: 'kaal-green',
      x: '65%',
      y: '90%',
      connects: [],
      details: (
        <div className="space-y-2">
          <h4 className="font-medium">Normal Operations</h4>
          <ul className="text-sm space-y-1">
            <li>• Regular performance monitoring</li>
            <li>• Dynamic clock speed adjustment</li>
            <li>• Memory management optimizations</li>
            <li>• Frame pacing algorithms</li>
            <li>• Load balancing between GPUs</li>
          </ul>
          
          <div className="mt-2">
            <h5 className="text-sm font-medium">Performance Tuning</h5>
            <div className="bg-muted/20 p-2 rounded-md mt-1 text-xs">
              <div><strong>Power Target:</strong> 80% of TDP (300W)</div>
              <div><strong>Voltage:</strong> Optimized curve</div>
              <div><strong>Cooling:</strong> Liquid cooling loop</div>
              <div><strong>Memory:</strong> ECC enabled</div>
            </div>
          </div>
        </div>
      )
    },
  ];

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(nodeId === activeNode ? null : nodeId);
  };

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-center">Control & Safety Logic Flow</h3>
      
      <div className="relative h-[500px] border border-border rounded-lg bg-card/50 overflow-hidden p-4">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Top row */}
          <line
            x1="15%"
            y1="20%"
            x2="40%"
            y2="20%"
            stroke={activeNode === 'tablet' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={activeNode ? "none" : "5,5"}
            className={cn(activeNode === 'tablet' && "animate-pulse")}
          />
          <line
            x1="40%"
            y1="20%"
            x2="65%"
            y2="20%"
            stroke={activeNode === 'blueprint' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={activeNode ? "none" : "5,5"}
            className={cn(activeNode === 'blueprint' && "animate-pulse")}
          />
          <line
            x1="65%"
            y1="20%"
            x2="90%"
            y2="20%"
            stroke={activeNode === 'scene' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={activeNode ? "none" : "5,5"}
            className={cn(activeNode === 'scene' && "animate-pulse")}
          />
          
          {/* Connect to middle row */}
          <path
            d="M 90% 20% C 90% 35%, 15% 35%, 15% 50%"
            fill="none"
            stroke={activeNode === 'render' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={activeNode ? "none" : "5,5"}
            className={cn(activeNode === 'render' && "animate-pulse")}
          />
          
          {/* Safety thread */}
          <line
            x1="50%"
            y1="50%"
            x2="50%"
            y2="70%"
            stroke={activeNode === 'safety' ? "rgba(255, 100, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={activeNode ? "none" : "5,5"}
            className={cn(activeNode === 'safety' && "animate-pulse")}
          />
          
          {/* Decision branches */}
          <path
            d="M 50% 70% L 35% 90%"
            fill="none"
            stroke={activeNode === 'check' ? "rgba(255, 100, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={activeNode ? "none" : "5,5"}
            className={cn(activeNode === 'check' && "animate-pulse")}
          />
          <path
            d="M 50% 70% L 65% 90%"
            fill="none"
            stroke={activeNode === 'check' ? "rgba(100, 220, 100, 0.8)" : "rgba(128, 128, 128, 0.5)"}
            strokeWidth="2"
            strokeDasharray={activeNode ? "none" : "5,5"}
            className={cn(activeNode === 'check' && "animate-pulse")}
          />
          
          {/* Yes/No labels */}
          <text x="38%" y="78%" fill={activeNode === 'check' ? "#ff6464" : "#888888"} fontSize="12" textAnchor="middle">Yes</text>
          <text x="62%" y="78%" fill={activeNode === 'check' ? "#64dc64" : "#888888"} fontSize="12" textAnchor="middle">No</text>
        </svg>
        
        {/* Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            style={{
              position: 'absolute',
              left: node.x,
              top: node.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <FlowchartNode
              id={node.id}
              title={node.title}
              description={node.description}
              icon={node.icon}
              color={node.color}
              isActive={activeNode === node.id}
              onClick={() => handleNodeClick(node.id)}
              className="w-40"
              tooltipContent={node.details}
            />
          </div>
        ))}
      </div>
      
      {/* Details panel */}
      {activeNode && (
        <div className="mt-4">
          <div className={`kaal-card p-4 border border-${nodes.find(n => n.id === activeNode)?.color || 'border'}/50 bg-${nodes.find(n => n.id === activeNode)?.color || 'card'}/5`}>
            {nodes.find(n => n.id === activeNode)?.details}
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyFlowchart;

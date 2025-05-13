
import React from "react";
import Layout from "@/components/layout/Layout";
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  XCircle,
  FileText 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CostComparison = () => {
  return (
    <Layout 
      heroTitle="Cost Comparison" 
      heroSubtitle="Long-Term Value Analysis of Project KAAL"
      heroBackground="from-kaal-green/30 to-black"
    >
      <div className="container mx-auto py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <section className="opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8">
              <TrendingUp className="inline-block mr-2 text-kaal-green" />
              Cost Comparison Over 5 Years
            </h2>
            
            <div className="overflow-x-auto kaal-card">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left">Training System</th>
                    <th className="p-4 text-left">Cost over 5 Years</th>
                    <th className="p-4 text-center">Flexibility</th>
                    <th className="p-4 text-center">Scalability</th>
                    <th className="p-4 text-center">Safety</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Traditional Sand Models</td>
                    <td className="p-4">₹15 Cr+</td>
                    <td className="p-4 text-center text-kaal-red">
                      <span className="flex justify-center">
                        <XCircle className="h-5 w-5" />
                        <span className="sr-only">Low</span>
                      </span>
                    </td>
                    <td className="p-4 text-center text-kaal-red">
                      <span className="flex justify-center">
                        <XCircle className="h-5 w-5" />
                        <span className="sr-only">Low</span>
                      </span>
                    </td>
                    <td className="p-4 text-center text-kaal-yellow">
                      <span className="flex justify-center items-center">
                        Manual Only
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border bg-kaal-green/5">
                    <td className="p-4 font-medium text-kaal-green">KAAL System</td>
                    <td className="p-4 text-kaal-green">₹6–11 Cr</td>
                    <td className="p-4 text-center text-kaal-green">
                      <span className="flex justify-center">
                        <CheckCircle className="h-5 w-5" />
                        <span className="sr-only">High</span>
                      </span>
                    </td>
                    <td className="p-4 text-center text-kaal-green">
                      <span className="flex justify-center">
                        <CheckCircle className="h-5 w-5" />
                        <span className="sr-only">High</span>
                      </span>
                    </td>
                    <td className="p-4 text-center text-kaal-green">
                      <span className="flex justify-center items-center">
                        Manual + Auto
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Detailed Cost Breakdown</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="kaal-card p-6">
                  <h4 className="font-medium mb-4">Traditional War Room</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-kaal-red mr-2">•</span>
                      <span><strong>Initial Setup:</strong> ₹3-5 Cr</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-red mr-2">•</span>
                      <span><strong>Annual Maintenance:</strong> ₹75L-1.2 Cr</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-red mr-2">•</span>
                      <span><strong>Scenario Updates:</strong> ₹30-50L per major update</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-red mr-2">•</span>
                      <span><strong>Personnel:</strong> 5-7 dedicated operators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-red mr-2">•</span>
                      <span><strong>Space Requirements:</strong> 1,500-3,000 sq ft</span>
                    </li>
                  </ul>
                </div>
                
                <div className="kaal-card p-6 border-kaal-green/20">
                  <h4 className="font-medium mb-4 text-kaal-green">KAAL System</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2">•</span>
                      <span><strong>Initial Setup:</strong> ₹4-5 Cr</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2">•</span>
                      <span><strong>Annual Maintenance:</strong> ₹20-40L</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2">•</span>
                      <span><strong>Scenario Updates:</strong> ₹5-10L per major update</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2">•</span>
                      <span><strong>Personnel:</strong> 1-2 dedicated operators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kaal-green mr-2">•</span>
                      <span><strong>Space Requirements:</strong> 300-800 sq ft</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section className="opacity-0 animate-fade-in animate-delay-100">
            <h3 className="text-xl font-semibold mb-6">Long-Term Value Analysis</h3>
            
            <div className="kaal-card p-6 border-kaal-green/30">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium flex items-center">
                    <ArrowRight className="h-5 w-5 text-kaal-green mr-2" /> 
                    Cost Efficiency
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    KAAL typically saves 50-70% in cost over 5 years compared to traditional war room setups, 
                    with most savings realized in maintenance, scenario updates, and personnel costs.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium flex items-center">
                    <ArrowRight className="h-5 w-5 text-kaal-green mr-2" /> 
                    Training Effectiveness
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    Beyond cost savings, KAAL delivers 3-4x more training scenarios per year with higher 
                    retention rates and improved skill transfer to real-world operations.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium flex items-center">
                    <ArrowRight className="h-5 w-5 text-kaal-green mr-2" /> 
                    Operational Advantages
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    Reduced setup time (hours vs weeks), rapid scenario switching, and minimal space requirements
                    enable more frequent training cycles and improved force readiness.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <div className="flex justify-center gap-4">
            <Link to="/technical">
              <Button variant="outline">
                Back to Technical Documentation
              </Button>
            </Link>
            
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Download Full Analysis (PDF)
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CostComparison;

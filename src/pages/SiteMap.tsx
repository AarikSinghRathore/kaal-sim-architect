
import React from "react";
import Layout from "@/components/layout/Layout";
import WebsiteFlowchart from "@/components/flowchart/WebsiteFlowchart";

const SiteMap = () => {
  return (
    <Layout 
      heroTitle="Website Structure" 
      heroSubtitle="A visual guide to navigate Project KAAL's website" 
      heroBackground="from-kaal-navy/90 to-black"
    >
      <div className="container mx-auto py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Website Navigation Map</h2>
          <p className="text-center text-muted-foreground mb-12">
            This interactive flowchart shows how the Project KAAL website is structured and where to find specific information.
          </p>
          
          <div className="kaal-card p-4 md:p-8">
            <WebsiteFlowchart />
          </div>
          
          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold">How to Use This Map</h3>
            <p className="text-muted-foreground">
              Click on any page in the flowchart to see what content it contains. The connections 
              between pages show the navigation paths available throughout the site.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SiteMap;

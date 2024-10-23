import React from 'react';
import { Calculator } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';

export default function AccountingServices() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <ServiceSection
        id="accounting"
        title="Accounting Services"
        description="Transform your financial management with our comprehensive accounting solutions designed to streamline operations and ensure compliance."
        Icon={Calculator}
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
        features={[
          {
            title: "Financial Statement Preparation",
            description: "Accurate preparation of balance sheets, income statements, and cash flow statements."
          },
          {
            title: "Tax Planning & Compliance",
            description: "Strategic tax planning and timely filing to maximize benefits and ensure regulatory compliance."
          },
          {
            title: "Bookkeeping Services",
            description: "Daily transaction recording, reconciliation, and maintenance of financial records."
          },
          {
            title: "Financial Analysis",
            description: "In-depth analysis of financial data to support informed business decisions."
          }
        ]}
      />
    </div>
  );
}
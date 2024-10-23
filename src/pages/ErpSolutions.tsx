import React from 'react';
import { Database } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';

export default function ErpSolutions() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <ServiceSection
        id="erp"
        title="ERP Implementation"
        description="Streamline your business processes with our cutting-edge ERP solutions tailored to your specific industry needs."
        Icon={Database}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        features={[
          {
            title: "Custom ERP Solutions",
            description: "Tailored ERP systems designed to match your unique business requirements."
          },
          {
            title: "Seamless Integration",
            description: "Smooth integration with existing systems and databases for unified operations."
          },
          {
            title: "Training & Support",
            description: "Comprehensive training programs and ongoing technical support for your team."
          },
          {
            title: "Performance Optimization",
            description: "Regular system optimization to ensure peak performance and efficiency."
          }
        ]}
      />
    </div>
  );
}
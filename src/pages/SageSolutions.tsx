import React from 'react';
import { BookOpen } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';

export default function SageSolutions() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <ServiceSection
        id="sage"
        title="SAGE Solutions"
        description="Leverage the power of SAGE applications with our expert installation and configuration services."
        Icon={BookOpen}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        features={[
          {
            title: "SAGE Installation",
            description: "Professional installation and setup of SAGE accounting and business management software."
          },
          {
            title: "Custom Configuration",
            description: "Tailored configuration to match your business processes and requirements."
          },
          {
            title: "Data Migration",
            description: "Secure and accurate transfer of existing data to your new SAGE system."
          },
          {
            title: "Ongoing Support",
            description: "Continuous technical support and system maintenance services."
          }
        ]}
      />
    </div>
  );
}
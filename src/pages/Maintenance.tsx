import React from 'react';
import { Wrench } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';

export default function Maintenance() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <ServiceSection
        id="maintenance"
        title="IT Maintenance"
        description="Keep your systems running smoothly with our comprehensive IT maintenance and support services."
        Icon={Wrench}
        image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80"
        features={[
          {
            title: "Preventive Maintenance",
            description: "Regular system checks and updates to prevent technical issues."
          },
          {
            title: "Network Security",
            description: "Advanced security measures to protect your business data and systems."
          },
          {
            title: "Hardware Support",
            description: "Professional maintenance and repair of computer hardware and peripherals."
          },
          {
            title: "24/7 Technical Support",
            description: "Round-the-clock support for urgent technical issues and emergencies."
          }
        ]}
      />
    </div>
  );
}
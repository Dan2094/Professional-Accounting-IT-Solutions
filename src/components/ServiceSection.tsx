import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  features: FeatureProps[];
  image: string;
  reversed?: boolean;
}

export default function ServiceSection({ 
  id, 
  title, 
  description, 
  Icon, 
  features, 
  image, 
  reversed = false 
}: ServiceSectionProps) {
  return (
    <section id={id} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
import { Calculator, Database, BookOpen, Wrench } from 'lucide-react';
import ServiceSection from './ServiceSection';

export default function DetailedServices() {
  return (
    <div className="bg-gray-50">
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

      <ServiceSection
        id="erp"
        title="ERP Implementation"
        description="Streamline your business processes with our cutting-edge ERP solutions tailored to your specific industry needs."
        Icon={Database}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        reversed={true}
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

      <ServiceSection
        id="maintenance"
        title="IT Maintenance"
        description="Keep your systems running smoothly with our comprehensive IT maintenance and support services."
        Icon={Wrench}
        image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80"
        reversed={true}
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
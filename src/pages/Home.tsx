import React from 'react';
import { Calculator, Database, BookOpen, Wrench } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-xl mb-8">
                {t('hero.subtitle')}
              </p>
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                {t('hero.cta')}
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                alt="Business Analytics"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/accounting">
              <ServiceCard
                Icon={Calculator}
                title={t('services.accounting.title')}
                description={t('services.accounting.description')}
              />
            </Link>
            <Link to="/erp">
              <ServiceCard
                Icon={Database}
                title={t('services.erp.title')}
                description={t('services.erp.description')}
              />
            </Link>
            <Link to="/sage">
              <ServiceCard
                Icon={BookOpen}
                title={t('services.sage.title')}
                description={t('services.sage.description')}
              />
            </Link>
            <Link to="/maintenance">
              <ServiceCard
                Icon={Wrench}
                title={t('services.maintenance.title')}
                description={t('services.maintenance.description')}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
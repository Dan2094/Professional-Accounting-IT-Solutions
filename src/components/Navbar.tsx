import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                Daniel Corp Solutions
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/accounting"
              className="text-gray-600 hover:text-blue-600"
            >
              {t('nav.accounting')}
            </Link>
            <Link to="/erp" className="text-gray-600 hover:text-blue-600">
              {t('nav.erp')}
            </Link>
            <Link to="/sage" className="text-gray-600 hover:text-blue-600">
              {t('nav.sage')}
            </Link>
            <Link
              to="/maintenance"
              className="text-gray-600 hover:text-blue-600"
            >
              {t('nav.maintenance')}
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/accounting" className="block py-2 text-gray-600">
              {t('nav.accounting')}
            </Link>
            <Link to="/erp" className="block py-2 text-gray-600">
              {t('nav.erp')}
            </Link>
            <Link to="/sage" className="block py-2 text-gray-600">
              {t('nav.sage')}
            </Link>
            <Link to="/maintenance" className="block py-2 text-gray-600">
              {t('nav.maintenance')}
            </Link>
            <Link to="/contact" className="block py-2 text-blue-600">
              {t('nav.contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

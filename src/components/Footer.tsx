import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslations';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-400 mb-2">{t('followUs')}</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/liverpoolbarlisboa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/barliverpoolpinkstreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            <a
              href="mailto:geral@barliverpool.pt"
              className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors mb-2"
            >
              <Mail size={16} />
              geral@barliverpool.pt
            </a>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Liverpool Bar. {t('rights')}
            </p>
            <p className="text-gray-500 text-xs">
              {t('drinkResponsibly')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
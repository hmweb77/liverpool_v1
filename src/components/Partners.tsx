"use client"
import React from 'react';
import { Instagram } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslations';

const partners = [
  {
    name: 'Malt Club',
    logo: '../Screenshot 2024-11-12 at 00.25.08.png',
    instagram: 'https://www.instagram.com/maltclublisbon'
  },
  {
    name: 'Cais Bar',
    logo: '../Screenshot 2024-11-12 at 00.23.25.png',
    instagram: 'https://www.instagram.com/liverpoolbarlisboa/'
  },
  {
    name: 'Copenhagen Bar',
    logo: '../Screenshot 2024-11-12 at 00.24.20.png',
    instagram: 'https://www.instagram.com/copenhagen_bar_cph'
  }
];

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section id="partners" className="py-16 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            {t('ourPartners')}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden p-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain   group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-sm font-medium text-gray-300 mb-2">{partner.name}</h3>
                <a
                  href={partner.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
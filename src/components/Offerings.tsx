"use client"
import React from 'react';
import { Music2, Tv2, Speaker, Users } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslations';

const Offerings = () => {
  const { t } = useTranslation();

  const offerings = [
    {
      icon: <Music2 className="w-8 h-8" />,
      title: t('liveMusic'),
      description: t('liveMusicDesc')
    },
    {
      icon: <Tv2 className="w-8 h-8" />,
      title: t('sportsEvents'),
      description: t('sportsEventsDesc')
    },
    {
      icon: <Speaker className="w-8 h-8" />,
      title: t('premiumSound'),
      description: t('premiumSoundDesc')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('privateEvents'),
      description: t('privateEventsDesc')
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-gradient-to-b from-black to-red-950 animated-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            {t('whatWeOffer')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('offeringsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-950 to-black p-6 rounded-lg transform hover:scale-105 transition-all duration-300 animated-gradient-fast"
            >
              <div className="text-red-600 mb-4">{offering.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
              <p className="text-gray-400">{offering.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src="../2.jpeg"
              alt="Liverpool Bar Atmosphere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950 to-transparent animated-gradient" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <p className="text-2xl font-bold text-white">
              {t('unforgettableNight')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
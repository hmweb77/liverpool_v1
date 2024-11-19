"use client";
import React, { useState, useEffect } from 'react';
import { Music2, Tv2, Speaker, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslations';
import { sanityClient } from '@/sanityClient';

const Offerings = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [images, setImages] = useState<{ img1: string; img2: string }>({ img1: '', img2: '' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await sanityClient.fetch(`*[_type == "offeringsImages"][0]{
        "img1": img1.asset->url,
        "img2": img2.asset->url
      }`);
      setImages({ img1: data?.img1 || '', img2: data?.img2 || '' });
    };
    fetchImages();
  }, []);

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

        {/* First unforgettable section */}
        <div className="mt-16 relative h-[600px] group perspective">
          <div 
            className="absolute inset-0 rounded-lg overflow-hidden transform-gpu transition-transform duration-500 ease-out"
            style={{ 
              transform: `
                perspective(1000px)
                rotateX(${mousePosition.y * 0.02}deg)
                rotateY(${mousePosition.x * 0.02}deg)
                scale3d(1.05, 1.05, 1.05)
              `
            }}
          >
            <img
              src={images.img1}
              alt="Offerings Image 1"
              className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950 to-transparent animated-gradient opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
          <div 
            className="absolute bottom-8 left-8 right-8 text-center transform-gpu transition-transform duration-500 ease-out"
            style={{ 
              transform: `
                perspective(1000px)
                translateZ(50px)
                rotateX(${mousePosition.y * 0.01}deg)
                rotateY(${mousePosition.x * 0.01}deg)
              `
            }}
          >
            <p className="text-3xl font-bold text-white/60 text-glow group-hover:text-white/90 transition-opacity duration-500">
              {t('unforgettableSportsNight')}
            </p>
          </div>
        </div>

        {/* Second unforgettable section */}
        <div className="mt-16 relative h-[600px] group perspective">
          <div 
            className="absolute inset-0 rounded-lg overflow-hidden transform-gpu transition-transform duration-500 ease-out"
            style={{ 
              transform: `
                perspective(1000px)
                rotateX(${mousePosition.y * 0.02}deg)
                rotateY(${mousePosition.x * 0.02}deg)
                scale3d(1.05, 1.05, 1.05)
              `
            }}
          >
            <img
              src={images.img2}
              alt="Offerings Image 2"
              className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950 to-transparent animated-gradient opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
          <div 
            className="absolute bottom-8 left-8 right-8 text-center transform-gpu transition-transform duration-500 ease-out"
            style={{ 
              transform: `
                perspective(1000px)
                translateZ(50px)
                rotateX(${mousePosition.y * 0.01}deg)
                rotateY(${mousePosition.x * 0.01}deg)
              `
            }}
          >
            <p className="text-3xl font-bold text-white/60 text-glow group-hover:text-white/90 transition-opacity duration-500">
              {t('unforgettableNight')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;

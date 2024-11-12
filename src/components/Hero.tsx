import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import ReservationModal from '@/components/ReservationsModal';
import { useTranslation } from '@/hooks/useTranslations';
import { sanityClient } from '../sanityClient';


const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState('Liverpool Bar - Lisbon\'s Iconic Nightspots for Over 40 Years');

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const query = `*[_type == "heroDescription"][0]{description}`;
        const data = await sanityClient.fetch(query);
        if (data) {
          setDescription(data.description);
        } else {
          console.error("No data found for heroDescription.");
        }
      } catch (error) {
        console.error("Error fetching hero description:", error);
      }
    };
    fetchDescription();
  }, []);

  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/90 via-black/70 to-black z-10 animated-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-red-900/30 z-10 animated-gradient-fast" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/492834881.sd.mp4?s=1a0c5531e2c6f4c73a32b9f7cc5d00c0e0f0f05e&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center gap-2 mb-6 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          <MapPin size={16} className="text-red-600" />
          <span className="text-sm font-medium text-gray-200">{t('pinkStreet')}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 animated-gradient">
          {t('tagline')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#about"
            className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animated-gradient-fast"
          >
            {t('discoverStory')}
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Calendar size={20} />
            {t('makeReservation')}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={32} className="text-red-600" />
      </div>

      {/* Reservation Modal */}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import ReservationModal from './ReservationsModal';
import { useTranslation } from '../hooks/useTranslations';

const Hero = () => {
  const { t } = useTranslation();
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient layer with increased movement */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-red-900 animated-gradient-intense opacity-80" />
        
        {/* Dynamic pulsing overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-800/30 via-transparent to-red-900/30 animated-gradient-pulse" />
        
        {/* Mouse-following gradient */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-red-600/10 to-transparent animated-gradient-fast"
          style={{
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
            transition: 'transform 0.15s ease-out'
          }}
        />
        
        {/* Additional subtle wave effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 to-transparent animated-gradient-wave" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div>
          <h1 className="text-[4rem] md:text-[5rem] font-bold mb-6 leading-tight tracking-tight text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">
            {t('tagline')}
          </h1>
          <p className="text-xl md:text-2xl text-white font-light mb-12 tracking-wide">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 fade-in-up">
          <a
            href="#about"
            className="px-8 py-4 border-2 border-white/10 hover:border-red-500/50 text-white rounded-full transition-all duration-500 hover:scale-110 hover:text-red-500"
          >
            {t('discoverStory')}
          </a>
          <a
            href="#menu"
            className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-110"
          >
            <span className="relative flex items-center justify-center gap-2">
              <FileText size={20} />
              {t('discoverMenu')}
            </span>
          </a>
        </div>

        {/* Special Event Announcement */}
        <div className="absolute bottom-32 left-0 right-0 flex justify-center">
          <div className="bg-red-600/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            <p className="text-white text-lg font-medium">
              {t('specialEvent')}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <ChevronDown size={32} className="text-white/30 animate-bounce" />
        </div>

        {/* Reservation Modal */}
        <ReservationModal isOpen={isReservationModalOpen} onClose={() => setIsReservationModalOpen(false)} />
      </div>
    </div>
  );
};

export default Hero;

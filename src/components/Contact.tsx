"use client"
import React from 'react';
import { Phone, Instagram, Clock, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslations';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              {t('findUs')}
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t('location')}</h3>
                  <p className="text-gray-300">
                    {t('addressFull')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t('openingHours')}</h3>
                  <p className="text-gray-300">
                    {t('openingTime')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t('phone')}</h3>
                  <p className="text-gray-300">916 452 754</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Instagram className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t('social')}</h3>
                  <a
                    href="https://instagram.com/liverpoolbarlisboa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-600 transition-colors"
                  >
                    @liverpoolbarlisboa
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194.71636851550093!2d-9.144930!3d38.707260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19347f3e5f4f01%3A0x4b0c71d8751c7d85!2sLiverpool%20Bar!5e0!3m2!1sen!2spt!4v1710337200000!5m2!1sen!2spt"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg animated-gradient pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
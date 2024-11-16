import React, { useState } from 'react';
import { Phone, Instagram, Clock, MapPin, Send } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslations';

const Contact = () => {
  const { t } = useTranslation();
  const [eventType, setEventType] = useState('privatization');

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[4.8rem] font-bold text-red-600 mb-12 tracking-tighter hover-tilt glow-text text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info and Image */}
          <div className="space-y-8">
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
                  <div className="text-gray-300">
                    <p className="mb-2">Mon-Fri: 5PM-12AM</p>
                    <hr className="border-gray-700 my-2" />
                    <p>Sat-Sun: 11AM-12AM</p>
                  </div>
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

            <div className="relative h-[400px] rounded-lg overflow-hidden group">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczPHQNIkdhF90MfuohiUGWTHY3HEo6m6EQJm48bLNaTXTBia_Qu7YWbDgCB1vwbN1EjZ3rFLAzJNR1FdKBEp_-jhLeKwsdrX2frGXxLsr9nu2geNRFP1RKq8hlztChXIwvZnXFK8hp4ap1wofPwIp80=w1600-h1064-s-no-gm"
                alt="Liverpool Bar Atmosphere"
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6">Special Events</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="privatization">Privatization</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="bachelor">Bachelor Party</option>
                  <option value="other">Other Special Request</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
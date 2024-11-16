"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Offerings from '@/components/Offerings';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import LanguageContext from '@/context/languageContext';

function App() {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="bg-black text-white min-h-screen">
        <Navbar isScrolled={isScrolled} />
        <main>
          <Hero />
          <About />
          <Offerings />
          <Menu />
          <Gallery />
          <Partners />
          <Contact />
          <Map />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;

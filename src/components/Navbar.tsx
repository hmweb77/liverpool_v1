"use client";
import React, { useContext } from "react";
import { Menu, X, Globe, Calendar } from "lucide-react";
import LanguageContext from "../context/languageContext";

import ReservationModal from "./ReservationsModal";
interface NavbarProps {
  isScrolled: boolean;
}

const navItemsTranslations = {
  en: ["About", "Offerings", "Menu", "Gallery", "Partners", "Contact"],
  pt: ["Sobre", "Ofertas", "Menu", "Galeria", "Parceiros", "Contacto"],
};

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] =
    React.useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const navItems = navItemsTranslations[language];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Liverpool Bar Logo"
              className="h-14 w-14 object-contain transition-transform duration-300 hover:scale-110"
            />
            <span className="text-red-600 font-bold text-xl">
              LIVERPOOL BAR
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-red-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setIsReservationModalOpen(true)}
                className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition-colors"
              >
                <Calendar size={18} />
                {language === "en" ? "Make a Reservation" : "Reservar"}
              </button>
              <button
                onClick={() => setLanguage(language === "en" ? "pt" : "en")}
                className="text-gray-300 hover:text-red-600 transition-colors px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Globe size={18} />
                {language.toUpperCase()}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                setIsReservationModalOpen(true);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition-colors w-full"
            >
              <Calendar size={18} />
              {language === "en" ? "Make a Reservation" : "Reservar"}
            </button>
            <button
              onClick={() => {
                setLanguage(language === "en" ? "pt" : "en");
                setIsOpen(false);
              }}
              className="text-gray-300 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-2"
            >
              <Globe size={18} />
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      )}

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;

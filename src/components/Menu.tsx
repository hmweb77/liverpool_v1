"use client";
import React, { useEffect, useState, useContext } from 'react';
import { GlassWater, UtensilsCrossed, Star } from 'lucide-react';
import { sanityClient } from '@/sanityClient';
import MenuModal from './MenuModal';
import DrinkModal from './DrinkModal';
import LanguageContext from '@/context/languageContext'; // Update the path to your context file

type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuSection = {
  category: string;
  items: MenuItem[];
};

const fetchDrinksData = async (lang: 'en' | 'pt'): Promise<MenuSection[]> => {
  const query = `*[_type == "drink"] | order(sortOrder asc){
    "category": coalesce(category_${lang}, category_en),
    items[]{
      "name": coalesce(name_${lang}, name_en),
      price,
      "description": coalesce(description_${lang}, description_en)
    }
  }`;

  try {
    const data = await sanityClient.fetch(query) as MenuSection[];
    return data;
  } catch (error) {
    console.error("Error fetching drinks data:", error);
    return [];
  }
};

const fetchFoodsData = async (lang: 'en' | 'pt'): Promise<MenuSection[]> => {
  const query = `*[_type == "food"] | order(sortOrder asc){
    "category": coalesce(category_${lang}, category_en),
    items[]{
      "name": coalesce(name_${lang}, name_en),
      price,
      "description": coalesce(description_${lang}, description_en)
    }
  }`;

  try {
    const data = await sanityClient.fetch(query) as MenuSection[];
    return data;
  } catch (error) {
    console.error("Error fetching foods data:", error);
    return [];
  }
};

const Menu = () => {
  const { language } = useContext(LanguageContext); // Access the language from context
  const [activeTab, setActiveTab] = useState<'drinks' | 'food'>('drinks');
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isDrinkModalOpen, setIsDrinkModalOpen] = useState(false);
  const [menuData, setMenuData] = useState<{ drinks: MenuSection[]; food: MenuSection[] }>({
    drinks: [],
    food: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const drinks = await fetchDrinksData(language);
      const food = await fetchFoodsData(language);
      setMenuData({ drinks, food });
    };
    fetchData();
  }, [language]);

  const menuItems = activeTab === 'drinks' ? menuData.drinks : menuData.food;

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-black to-red-950 animated-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] font-bold text-red-600 mb-4 tracking-tighter hover-tilt glow-text">
            {language === 'en' ? 'Our Bestsellers' : 'Os Mais Vendidos'}
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('drinks')}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'drinks'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 animated-gradient-fast text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <GlassWater className="mr-2" size={20} />
              {language === 'en' ? 'Drinks' : 'Bebidas'}
            </button>
            <button
              onClick={() => setActiveTab('food')}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'food'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 animated-gradient-fast text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <UtensilsCrossed className="mr-2" size={20} />
              {language === 'en' ? 'Food' : 'Comida'}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((section, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-lg animated-gradient-fast">
              <h3 className="text-xl font-bold mb-6 text-red-600 flex items-center gap-2">
                {section.category}
                <Star className="text-yellow-500" size={24} />
              </h3>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start group menu-item">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-white group-hover:text-red-500 transition-colors">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                    </div>
                    <span className="text-red-600 font-semibold ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={() => setIsMenuModalOpen(true)}
  
            className="px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            {language === 'en' ? 'Discover Food Menu' : 'Descubra o Menu de Comidas'}
          </button>
          <button
            onClick={() => setIsDrinkModalOpen(true)}

            className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors"
          >
            {language === 'en' ? 'Discover Drinks Menu' : 'Descubra o Menu de Bebidas'}
          </button>
        </div>
      </div>

      <MenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
      <DrinkModal isOpen={isDrinkModalOpen} onClose={() => setIsDrinkModalOpen(false)} />
    </section>
  );
};

export default Menu;

"use client";
import React, { useEffect, useState } from 'react';
import { GlassWater, UtensilsCrossed, Star } from 'lucide-react';
import { sanityClient } from '@/sanityClient';
import { useTranslation } from '../hooks/useTranslations';
import MenuModal from './MenuModal';

type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuSection = {
  category: string;
  items: MenuItem[];
};

const fetchMenuData = async (type: 'drink' | 'food', t: (key: string) => string): Promise<MenuSection[]> => {
  const query = `*[_type == "${type}"] | order(sortOrder asc){
    "category": coalesce(category_${t('lang')}, category_en),
    items[]{
      "name": coalesce(name_${t('lang')}, name_en),
      price,
      "description": coalesce(description_${t('lang')}, description_en)
    }
  }`;

  try {
    const data = await sanityClient.fetch(query) as MenuSection[];
    return data;
  } catch (error) {
    console.error(`Error fetching ${type} data:`, error);
    return [];
  }
};

  




const Menu = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'drinks' | 'food'>('drinks');
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [menuData, setMenuData] = useState<{ drinks: MenuSection[]; food: MenuSection[] }>({
    drinks: [],
    food: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const drinks = await fetchMenuData('drink', t);
      const food = await fetchMenuData('food', t);
      setMenuData({ drinks, food });
    };
    fetchData();
  }, [t]);

  const menuItems = activeTab === 'drinks' ? menuData.drinks : menuData.food;

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-black to-red-950 animated-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[4.8rem] font-bold text-red-600 mb-4 tracking-tighter hover-tilt glow-text">
            {t('ourBestsellers')}
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
              {t('drinks')}
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
              {t('food')}
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
            {t('discoverFoodMenu')}
          </button>
          <button
            onClick={() => setIsMenuModalOpen(true)}
            className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors"
          >
            {t('discoverDrinksMenu')}
          </button>
        </div>
      </div>

      <MenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
    </section>
  );
};

export default Menu;

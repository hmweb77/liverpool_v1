"use client"
import React, { useState } from 'react';
import { GlassWater, UtensilsCrossed, Star } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslations';

const Menu = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'drinks' | 'food'>('drinks');

  const menuItems = {
    drinks: [
      {
        category: t('signatureCocktails'),
        items: [
          { name: 'Red Glory', price: '€9', description: t('caipirinhaDesc'), bestseller: true },
          { name: 'Mermaid parade', price: '€9', description: t('sexOnTheBeachDesc'), bestseller: true },
          { name: 'Mexican connection', price: '€9', description: t('espressoMartiniDesc'), bestseller: true },
          { name: 'Summer Punch', price: '€9', description: t('moscowMuleDesc'), bestseller: true }
        ]
      },
      {
        category: t('premiumSpirits'),
        items: [
          { name: 'Caipirinha', price: '€8', description: t('beefeaterDesc'), bestseller: true },
          { name: 'Sex on the Beach', price: '€9', description: t('jamesonDesc'), bestseller: true },
          { name: 'Espresso Martini', price: '€10', description: t('havanaDesc'), bestseller: true },
          { name: 'Moscow Mule', price: '€9', description: t('absolutDesc'), bestseller: true }
        ]
      }
    ],
    food: [
      {
        category: t('barSnacks'),
        items: [
          { name: t('BBQ chicken wings'), price: '€9', description: t('bbqWingsDesc'), bestseller: true },
          { name: t('Crispy fries with cheddar and bacon'), price: '€8', description: t('loadedFriesDesc'), bestseller: true },
          { name: t('Sweet chilli chicken nuggets'), price: '€8', description: t('sweetChilliNuggetsDesc'), bestseller: true },
          { name: t('Petit gateau'), price: '€4', description: t('Petitgateau'), bestseller: true },
        ]
      },
      {
        category: t('lateNightSpecials'),
        items: [
          { name: 'Number #1', price: '€12', description: t('number1Desc'), bestseller: true },
          { name: 'G.O.A.T. SALAH', price: '€14', description: t('goatSalahDesc'), bestseller: true },
          { name: "You'll Never Walk Alone", price: '€16', description: t('ynwaDesc'), bestseller: true },
          { name: "Salada ceasar", price: '€8.5', description: t('salada'), bestseller: true }
        ]
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-black to-red-950 animated-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            {t('menu')}
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
          {menuItems[activeTab].map((section, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-lg animated-gradient-fast">
              <h3 className="text-xl font-bold mb-6 text-red-600 flex items-center gap-2">
                {section.category}
                <Star className="text-yellow-500 fill-yellow-500" size={20} />
              </h3>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start group">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-white group-hover:text-red-500 transition-colors">
                          {item.name}
                        </h4>
                        {item.bestseller}
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

      </div>
    </section>
  );
};

export default Menu;
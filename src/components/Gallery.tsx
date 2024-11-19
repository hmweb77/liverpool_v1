"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslations';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczMd6mq4Turvv6BnAKWNU2yB8PcUgsQfHXhTivtksua6RF6tjXSSgMy3EzHmUjFjzsRGyrfszOQuxHfTcmpJxBMyFbEjVzZ2VhWQMSsbpsx4dVzIZGVop95FHBDO54TAXib8xxl8kEWr3p5e3HmyIWI=w1340-h1331-s-no-gm?authuser=0",
      alt: "Liverpool Bar Atmosphere"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczPnwjSqucVxcCfQhjc5Muef98_kiAaiv1pLFRDYvy1ST7OHckHlhDQ97fvrHMjqvb63k6HPDGRyOSdEX8dbGJgXrTEJLPULaToo2bw1-PA1WvO32o2RBJ_3yoMf5GxVKwEEedduhRABboFyCI2WWG4=w969-h1335-s-no-gm?authuser=0",
      alt: "Liverpool Bar Interior View"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczNR4HKT7kXI7VRKZoga2Uz63ns1jPQgfGoYGFwlTc6Psbaf9fFE4J3EbAdvsoNK0hlFklpWfz7PyFt1UJVkSHJgqQ96ZPc0VmUmgY20MvZBvgILYNTaOxawJNUt1aWtxTj2NfppqxjD12P0GQbvQeI=w1132-h1331-s-no-gm?authuser=0",
      alt: "Liverpool Bar Night View"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczOKKGsN3P4mqW3BNcpbJtX6VI_3xvM1qPhBcp_-7XK23niYFshD6DlAX3z2hQGQIVGzlcz9tTF8P6HKIaXOwP1UI4ZNftqqPPQUfydSZIJq3dWb9jqW5K_TSRWymvmQSIeesoCeJHi8wlIU1riWrmM=w1080-h1620-s-no-gm?authuser=0",
      alt: "Liverpool Bar Events"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczO2YZsahAYDMt0Ws7UkqIWpFFTUOeWcX8yTgQyB5odK-UaAo0TvTWmjRkzhgbFb4t1_OnLefbLaUpZCGm5Pj4B1z4FWm2X_XSNHPDpFD5HO3pZxHVknthoiN_VftMY6PpBzyqmBfEJJX6h_hhlDzWg=w1114-h1980-s-no-gm?authuser=0",
      alt: "Liverpool Bar Cocktails"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczOANN0fNKP3km9OkEzNTetu3cDsyUocXC--NssPH6B9g-b_f5-e0zEZdejsumyCbmshOlneneNvgZQYkdk3DW6afiXu7IR1O_mYp17XNhHvfoi8xJDpSmXQE612NQfxFqZxxxiEisGqg8Yoetzt7I4=w1114-h1980-s-no-gm?authuser=0",
      alt: "Liverpool Bar Special Drinks"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczOSGSCnarAwTqmIi-p8DmWwVdMz7UhHtlgyDROXKqoldcnaU5frL0LsEWR3hLU2MSsqKBnLqZLnBihszisOL1sQe50wFtRuYTA1tEmdaYa5ZMugGKLVORKJ_sttnCOn8urHeK_93T0LNtlgn7H5Zh8=w1114-h1980-s-no-gm?authuser=0",
      alt: "Liverpool Bar Drinks"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczMk6mVY81dTV6w8OZ-d_hJXkEYHNOSeS5tP2bL6hScM5WSBLkBJUTZ4aYyHyBmA4VPRFAgDboqbagIae0oAYysQ4KAMIhck2mq2gBVHR0nT9CKEMZtFBIIC1LoHSNKCEVs2sjkXOCLDOZ7jdXj6iF0=w1384-h2076-s-no-gm?authuser=0",
      alt: "Liverpool Bar Ambiance"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[2rem] font-bold text-red-600 mb-12 tracking-tighter hover-tilt glow-text text-center">
          {t('ourGallery')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
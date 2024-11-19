"use client";
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { sanityClient } from '@/sanityClient';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [dynamicLink, setDynamicLink] = useState<{ label: string; url: string }>({
    label: '',
    url: '',
  });

  useEffect(() => {
    const fetchLink = async () => {
      const query = `*[_type == "dynamicLink"][0]{
        label,
        url
      }`;

      try {
        const data = await sanityClient.fetch(query);
        setDynamicLink({
          label: data?.label || 'Default Label',
          url: data?.url || '',
        });
      } catch (error) {
        console.error('Error fetching dynamic link:', error);
      }
    };

    fetchLink();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative inline-block w-full max-w-6xl px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-black rounded-lg shadow-xl sm:my-8 sm:align-middle sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="w-full h-[80vh]">
            {dynamicLink.url ? (
              <iframe
                src={dynamicLink.url}
                width="100%"
                height="100%"
                className="rounded-lg"
                allow="autoplay"
              />
            ) : (
              <p className="text-center text-gray-400">Loading...</p>
            )}
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-300">{dynamicLink.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;

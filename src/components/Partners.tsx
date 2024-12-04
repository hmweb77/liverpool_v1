"use client";
import React, { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslations";

const Partners = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const partners = [
    {
      name: "Malt Club",
      logo: "https://lh3.googleusercontent.com/pw/AP1GczMHJFe86Ld11MrLW8s91PIigh730orW6DPB3Pu6ZV037rp8xL9mdVisPCXUwgjEwk9_PjQPOPJuKttTGt9rr33qIE6JSUQPwhJOS5ZMJEOHGzwq7OC0cwoZ-qDwCR29jw3aj_Kjjib2X995KKxCuTs=w500-h500-s-no-gm",
      instagram: "https://www.instagram.com/maltclublisbon/",
    },
    {
      name: "Cais Bar",
      logo: "https://lh3.googleusercontent.com/pw/AP1GczOKwlWrhakJsJQA4Mq4y9liAhDqYeASHVkZ69OsQ5je_Gf3O4EbSU7Z2qqipdA250EO95i-EdHCWJWdXEh8Yn0ZcElGZnqvw7Elk3SYydetwQtaP1UyC7trYr3h_zI7zdWSwzXVg_LW1gkbHhJRKrE=w545-h457-s-no-gm",
      instagram: "https://www.instagram.com/caisbar_pt/",
    },
    {
      name: "Copenhagen Bar",
      logo: "https://lh3.googleusercontent.com/pw/AP1GczOBdG0ly2E1kX81xlpDemLy7kTGbxUGwFN-Cn8mhlUvGc4o7kweMB9InYTbAlLjjKopMeswJFIZ4gk_hgC1Z53xnDLFJfcCl36s-MDBJcxWJs5HtF4jqeCmkQJcpw98V707lvCir6Aa3-E34XGirb0=w589-h424-s-no-gm",
      instagram: "https://www.instagram.com/copenhagen_bar_cph",
    },
  ];

  return (
    <section
      id="partners"
      className="py-16 bg-gradient-to-b from-black to-red-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-[2rem] font-bold text-red-600 mb-4 tracking-tighter hover-tilt glow-text"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {t("ourPartners")}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden bg-black/50 backdrop-blur-sm p-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-sm font-medium text-gray-300 mb-2">
                  {partner.name}
                </h3>
                <a
                  href={partner.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

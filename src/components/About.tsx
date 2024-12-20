"use client";
import React from "react";
import { Clock, MapPin, Music } from "lucide-react";
import { useTranslation } from "../hooks/useTranslations";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black via-black/95 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
              {t("legacyTitle")}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("legacyText")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <Clock className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{t("openingHours")}</h3>
                  <div className="text-gray-400">
                    <p className="mb-2">
                      {t("monFri")}: {t("monFriHours")}
                    </p>
                    <p>
                      {t("satSun")}: {t("satSunHours")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{t("location")}</h3>
                  <p className="text-gray-400">{t("address")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczPNmGgOexTc6wAlOxVf5lcxNGi6qM_dqkv5Qbj7qNwmR36jRaxSNQleLY4UBXwefR5Mfwlmw9mMMmjoEky9OCIoT0IYusXgOX9HD23lxzc2ObuaUCJnItxTawddmu1vIpAtnH7dVH6DIpjt0SoKGgg=w950-h633-s-no"
              alt="Liverpool Bar Interior"
              className="rounded-lg shadow-2xl hover-lift"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 p-6 rounded-lg shadow-xl hover-tilt">
              <Music size={32} className="text-white" />
              <p className="text-white mt-2 font-semibold">{t("liveDjSets")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

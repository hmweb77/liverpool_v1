"use client";
import React, { useContext, useState } from "react";
import { Phone, Instagram, Clock, MapPin, Send } from "lucide-react";
import { useTranslation } from "../hooks/useTranslations";
import LanguageContext from "@/context/languageContext";

const form = {
  en: {
    contact: "Contact Us",
    eventType: "Event Type",
    options: ["Private Event", "Birthday Party", "Bachelor Party", "Other"],
    name: "Name",
    phone: "Phone Number",
    email: "Email",
    message: "Message",
    submit: "Send Message",
    submitting: "Sending...",
    success: "Message sent successfully!",
    error: "Error sending message. Please try again.",
  },
  pt: {
    contact: "Contacto",
    eventType: "Tipo de Evento",
    options: ["Evento privado", "Festa de aniversário", "Despedida de solteiro", "Outro"],
    name: "Nome",
    phone: "Telefone",
    email: "Email",
    message: "Mensagem",
    submit: "Enviar Mensagem",
    submitting: "A enviar...",
    success: "Mensagem enviada com sucesso!",
    error: "Erro ao enviar mensagem. Por favor tente novamente.",
  },
};

const Contact = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const [eventType, setEventType] = useState("privatization");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });
      
      if (response.ok) {
        alert("Submit Successfully");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(form[language].error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-red-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[2rem] font-bold text-red-600 mb-12 tracking-tighter hover-tilt glow-text text-center">
          {form[language].contact}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info and Image */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t("location")}</h3>
                  <p className="text-gray-300">{t("addressFull")}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t("openingHours")}</h3>
                  <div className="text-gray-300">
                    <p className="mb-2">
                      {t("monFri")}: {t("monFriHours")}
                    </p>
                    <hr className="border-gray-700 my-2" />
                    <p>
                      {t("satSun")}: {t("satSunHours")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t("phone")}</h3>
                  <p className="text-gray-300">916 452 754</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Instagram className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t("social")}</h3>
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
            <form
              action="https://formsubmit.co/amartinez@grupocais.pt"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit.co configuration fields */}
              <input type="hidden" name="_subject" value="New Event Request - Liverpool Bar" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              {/* <input type="hidden" name="_next" value={window.location.href} /> */}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {form[language].eventType}
                </label>
                <select
                  name="event_type"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                >
                  {form[language].options.map((option, index) => (
                    <option key={index} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {form[language].name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder={form[language].name}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {form[language].phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder={form[language].phone}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {form[language].email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {form[language].message}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder={language === 'en' ? "Tell us about your event..." : "Conte-nos sobre o seu evento..."}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isSubmitting ? form[language].submitting : form[language].submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

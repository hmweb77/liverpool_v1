"use client";
import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const Map = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const element = document.getElementById("map");
    if (element) observer.observe(element);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (element) observer.unobserve(element);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="map" className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194.5917195166223!2d-9.143266788486965!3d38.7070741289624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19347dce782005%3A0x60f0123521cb1854!2sBar%20Liverpool!5e0!3m2!1sen!2spt!4v1733323270297!5m2!1sen!2spt"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Overlay with gradient and hover effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 z-20 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />

      {/* Floating location marker
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 floating pointer-events-none ${
          isVisible ? "fade-in-up" : "opacity-0"
        }`}
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 0.5}px), calc(-50% + ${mousePosition.y * 0.5}px))`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="bg-red-600 p-4 rounded-full shadow-lg pulse">
          <MapPin className="w-8 h-8 text-white" />
        </div>
      </div> */}
    </section>
  );
};

export default Map;

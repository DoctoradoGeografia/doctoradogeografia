import { Helmet } from 'react-helmet-async';
import { useRef } from "react";
import TestimonialCard from "../components/TestimonialCard";
import ContactSection from "../components/ContactSection";

const Contacto = () => {
  
  
  //function for carousel
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // width of card + gap
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Contacto - Doctorado en Geografía UNSJ</title>
        <meta name="description" content="Contáctanos para resolver tus dudas sobre el Doctorado en Geografía de la UNSJ. Dirección, teléfono, email y formulario de contacto." />
        <meta name="keywords" content="contacto, UNSJ, doctorado geografía, consultas, información, San Juan, Argentina" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doctorado-geografia.unsj.edu.ar/contacto" />
        <meta property="og:title" content="Contacto - Doctorado en Geografía UNSJ" />
        <meta property="og:description" content="Contáctanos para resolver tus dudas sobre el Doctorado en Geografía" />
        <meta property="og:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://doctorado-geografia.unsj.edu.ar/contacto" />
        <meta property="twitter:title" content="Contacto - Doctorado en Geografía UNSJ" />
        <meta property="twitter:description" content="Contáctanos para resolver tus dudas sobre el Doctorado en Geografía" />
        <meta property="twitter:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://doctorado-geografia.unsj.edu.ar/contacto" />
      </Helmet>

      {/* Trust Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block bg-blue-9 dark:bg-purple-9 text-white px-5 py-2 rounded-full text-sm font-semibold">
              Escribinos
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            {/* Left Content */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 items-center text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                "Resolvamos tus inquietudes sobre el Doctorado en Geografía"
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                "Tu próxima pregunta, nuestra próxima respuesta"
              </p>
            </div>
            
            {/* Testimonials Carousel */}
            <div className="relative">
              {/* Carousel Container */}
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide scroll-smooth"
              >
                <div className="flex gap-4 pb-4">
                  <div className="flex-shrink-0 w-[300px]">
                    <TestimonialCard
                      image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                      quote="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                      name="Dr. Castro Jorge"
                      role="Secretario"
                      
                    />
                  </div>
                  <div className="flex-shrink-0 w-[300px]">
                    <TestimonialCard
                      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                      quote="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                      name="Dra. María González"
                      role="Investigadora"
                      
                    />
                  </div>
                  <div className="flex-shrink-0 w-[300px]">
                    <TestimonialCard
                      image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                      quote="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                      name="Dr. Carlos Martínez"
                      role="Director"
                      
                    />
                  </div>
                  <div className="flex-shrink-0 w-[300px]">
                    <TestimonialCard
                      image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      quote="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                      name="Dr. Juan Pérez"
                      role="Coordinador"
                    />
                  </div>
                  <div className="flex-shrink-0 w-[300px]">
                    <TestimonialCard
                      image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                      quote="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                      name="Dr. Luis Fernández"
                      role="Profesor"
                    />
                  </div>
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full dark:bg-purple-6  bg-blue-6 text-white flex items-center justify-center hover:bg-blue-7 dark:hover:bg-purple-7 transition-colors duration-200 shadow-md"
                  aria-label="Previous"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-12 h-12 rounded-full dark:bg-purple-6  bg-blue-6 text-white flex items-center justify-center hover:bg-blue-7 dark:hover:bg-purple-7 transition-colors duration-200 shadow-md"
                  aria-label="Next"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Button */}
          <div className="mt-12">
            <button className="bg-blue-4 dark:bg-purple-4 dark:text-purple-9 text-blue-9 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-7  dark:hover:bg-purple-7 transition-colors duration-200">
              Más acerca de nosotros...
            </button>
          </div>
        </div>
         
        {/* Contact Section */}
        <ContactSection />
      </section>
    </div>
  );
};

export default Contacto;
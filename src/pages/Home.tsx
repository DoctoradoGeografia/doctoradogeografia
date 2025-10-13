
import ArticleCard from '../components/Home/ArticleCard';
import FeaturedArticleCard from '../components/Home/FeaturedArticleCard';
import TestimonialCard from '../components/TestimonialCard';
import { useCursos } from '../hooks/useCurso';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import NextCourses from '../components/Courses/NextCourses';
import StatsSection from '../components/Home/StatsSection';
import ArticleSection from '../components/Home/ArticleSection';

const Home = () => {

  const { cursos, loading, error, formatFirebaseDate } = useCursos();
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-white py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-left lg:text-left">
              {/* Small text above title */}
              <p className="text-sm text-gray-600 uppercase tracking-wide">
                Una nueva forma científica de administrar el conocimiento
              </p>
              
              {/* Main Title */}
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  FORMA <span className="text-blue-9 dark:text-purple-9">PARTE</span>
                </h1>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  del cambio
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Únete a una comunidad científica para generar conocimiento sobre los espacios geográficos donde se desarrolla la vida.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-60 h-14 bg-blue-9 dark:bg-purple-9 text-white px-8 py-3 rounded-lg hover:bg-blue-10 dark:hover:bg-purple-10 transition-colors duration-200 font-semibold">
                  INSCRÍBETE
                </button>
                <button className="w-60 h-14 bg-white border-[1px] border-solid border-text text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors duration-200 font-semibold">
                  MÁS INFORMACIÓN
                </button>
              </div>
              
              {/* University Logos */}
              <div className="flex items-center gap-8 lg:gap-16 !mt-16 pt-4 flex-wrap">
                <div className="flex items-center">
                  <img 
                    src="https://i.imghippo.com/files/YcG2905iHw.png" 
                    alt="Facultad de Filosofía, Humanidades y Artes"
                    className="h-20 lg:h-24 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center">
                  <img 
                    src="https://i.imghippo.com/files/dlt1615to.png" 
                    alt="Facultad de Filosofía, Humanidades y Artes"
                    className="h-20 lg:h-24 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Right Content - Globe */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
                {/* Globe image */}
                <img 
                  src="https://i.imghippo.com/files/uMk2150UsA.png" 
                  alt="Globe"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection></StatsSection>
       
       {/* Articles Section */}
      <ArticleSection></ArticleSection>


      {/* Trust Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block bg-blue-9 dark:bg-purple-9 text-white px-5 py-2 rounded-full text-sm font-semibold">
              Lo que nos distingue
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
            {/* Left Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Confianza en más de 20 países
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Formamos profesionales junto a docentes que piensan, investigan y actúan sobre los territorios que habitamos.
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
                      logo="https://i.imghippo.com/files/lod9197EmM.png"
                    
                    />
                  </div>
                  <div className="flex-shrink-0 w-[300px]">
                    <TestimonialCard
                      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                      quote="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                      name="Dra. María González"
                      role="Investigadora"
                      logo="https://i.imghippo.com/files/lod9197EmM.png"
                      
                    />
                  </div>
                  <div className="flex-shrink-0 w-[300px]">
                    <TestimonialCard
                      image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                      quote="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                      name="Dr. Carlos Martínez"
                      role="Director"
                      logo="https://i.imghippo.com/files/lod9197EmM.png"
                      
                    />
                  </div>
                  <div className="flex-shrink-0 w-[300px]">
                    <TestimonialCard
                      image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      quote="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                      name="Dr. Juan Pérez"
                      role="Coordinador"
                      logo="https://i.imghippo.com/files/lod9197EmM.png"
                      
                    />
                  </div>
                  <div className="flex-shrink-0 w-[300px]">
                    <TestimonialCard
                      image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                      quote="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                      name="Dr. Luis Fernández"
                      role="Profesor"
                      logo="https://i.imghippo.com/files/lod9197EmM.png"
                      
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
            <Link to="/doctorado">
              <button className="bg-blue-4 dark:bg-purple-4 dark:text-purple-9 text-blue-9 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-7  dark:hover:bg-purple-7 transition-colors duration-200">
                Más acerca de nosotros...
              </button>
            </Link>
          </div>
        </div>
      </section>

      <NextCourses cursos={cursos} formatFirebaseDate={formatFirebaseDate} />
    </div>
  );
};

export default Home;
import { Helmet } from 'react-helmet-async';
import FeatureCard from '../components/Doctorado/FeatureCard';
import AuthorityCard from '../components/Doctorado/AuthorityCard';
import { useRef, useState } from 'react';
import BannerDoctorado from '../components/Doctorado/BannerDoctorado';

const Doctorado = () => {
  const [activeTab, setActiveTab] = useState<'basico' | 'perfeccionamiento'>('basico');
  const [activeAuthority, setActiveAuthority] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 150; // width of card + gap
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Autoridades data
  const authorities = [
    {
      id: 1,
      name: "Dr. Manuel Torres",
      position: "Director del Doctorado",
      description: "Inició su camino en la Geografía con una licenciatura orientada al análisis territorial. Durante más de veinte años desarrolló investigaciones sobre ambiente y ordenamiento del territorio, publicando en revistas nacionales e internacionales. Ha dirigido proyectos interdisciplinarios y acompañado la formación de jóvenes investigadores. En la actualidad, continúa aportando su experiencia al desarrollo académico.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
    },
    {
      id: 2,
      name: "Dra. Ana Martínez",
      position: "Co-directora Académica",
      description: "Especialista en geografía humana con más de 15 años de experiencia en investigación territorial. Ha publicado numerosos artículos en revistas científicas de prestigio y dirigido múltiples tesis doctorales.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
    },
    {
      id: 3,
      name: "Dr. Carlos Rodríguez",
      position: "Coordinador de Investigación",
      description: "Doctor en Ciencias Geográficas, especializado en sistemas de información geográfica y análisis espacial. Líder de proyectos de investigación nacional e internacional.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
    },
    {
      id: 4,
      name: "Dr. Carlos Rodríguez",
      position: "Coordinador de Investigación",
      description: "Doctor en Ciencias Geográficas, especializado en sistemas de información geográfica y análisis espacial. Líder de proyectos de investigación nacional e internacional.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
    },
    {
      id: 5,
      name: "Dr. Carlos Rodríguez",
      position: "Coordinador de Investigación",
      description: "Doctor en Ciencias Geográficas, especializado en sistemas de información geográfica y análisis espacial. Líder de proyectos de investigación nacional e internacional.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
    },
    
  ];

  const handleNext = () => {
    setActiveAuthority((prev) => (prev + 1) % authorities.length);
    scroll('right');
  };

  const handlePrev = () => {
    setActiveAuthority((prev) => (prev - 1 + authorities.length) % authorities.length);
    scroll('left');
  };

  return (
   <>
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Sobre el Doctorado - Doctorado en Geografía UNSJ</title>
      <meta name="description" content="Conoce nuestro programa de Doctorado en Geografía: requisitos de admisión, plan de estudios, autoridades y ventajas de estudiar en la UNSJ." />
      <meta name="keywords" content="doctorado geografía, plan de estudios, UNSJ, requisitos admisión, autoridades, San Juan, Argentina" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://doctorado-geografia.unsj.edu.ar/doctorado" />
      <meta property="og:title" content="Sobre el Doctorado - Geografía UNSJ" />
      <meta property="og:description" content="Programa de Doctorado en Geografía de la Universidad Nacional de San Juan" />
      <meta property="og:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://doctorado-geografia.unsj.edu.ar/doctorado" />
      <meta property="twitter:title" content="Sobre el Doctorado - Geografía UNSJ" />
      <meta property="twitter:description" content="Programa de Doctorado en Geografía de la Universidad Nacional de San Juan" />
      <meta property="twitter:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
      
      {/* Canonical */}
      <link rel="canonical" href="https://doctorado-geografia.unsj.edu.ar/doctorado" />
    </Helmet>

    {/* Hero Banner */}
    <BannerDoctorado />

   {/* Offers Section */}
   <section className="w-full py-16 bg-gray-50">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Title */}
       <div className="text-center mb-12">
         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
           ¿Que ofrece nuestro Doctorado?
         </h2>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
         {/* Left Side - Images Grid */}
         <div className="grid grid-cols-2 gap-4">
           {/* Top Left Image */}
           <div className="col-span-1">
             <img 
               src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop" 
               alt="Persona trabajando en laptop"
               className="w-full h-full object-cover rounded-lg shadow-md"
             />
           </div>
           
           {/* Top Right Image */}
           <div className="col-span-1">
             <img 
               src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop" 
               alt="Estudiante en biblioteca"
               className="w-full h-full object-cover rounded-lg shadow-md"
             />
           </div>
           
           {/* Bottom Image - Full Width */}
           <div className="col-span-2">
             <img 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop" 
               alt="Grupo de estudiantes estudiando"
               className="w-full h-full object-cover rounded-lg shadow-md"
             />
           </div>
         </div>

         {/* Right Side - Feature Cards */}
         <div className="space-y-6">
           <FeatureCard
             icon={
               <svg className="text-blue-9 dark:text-purple-9" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                 <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,148Zm0-40a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,108Z"/>
               </svg>
             }
             title="¿Duracion de la Carrera?"
             description="Tiene un desarrollo formal de cuatro años reales con defensa final de tesis. En los dos primeros se cursarán módulos en un ciclo básico integrado y otro de perfeccionamiento complementados por un curso de inglés técnico"
             layout="row"
           />

           <FeatureCard
             icon={
               <svg className="text-blue-9 dark:text-purple-9" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                 <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM216,64V96H40V64ZM40,160H80v32H40Zm176,32H96V160H216v32Z"/>
               </svg>
             }
             title="Recursos"
             description="Los doctorandos contarán con un aula informática y recursos combinados del Departamento de Estudios de Posgrado, el Departamento de Geografía y el Instituto de Geografía Aplicada (IGA)."
             layout="row"
           />

           <FeatureCard
             icon={
               <svg className="text-blue-9 dark:text-purple-9" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                 <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"/>
               </svg>
             }
             title="Publicacion"
             description="En el IGA se desarrollan los programas de investigación donde se genera la producción académica a través de proyectos. Asimismo, se favorece la publicación de resultados a través de la Revista de Geografía de su dependencia."
             layout="row"
           />
         </div>
       </div>
     </div>
   </section>

   {/*Admision */}
   <section className="w-full py-16 bg-white bg-gradient-to-b from-blue-2 via-blue-3 to-white dark:bg-gradient-to-b dark:from-purple-2 dark:via-purple-3 dark:to-white">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Title */}
       <div className="text-center mb-12">
         <h2 className="text-3xl lg:text-4xl font-bold text-text mb-2">
           Requisitos de Admisión
         </h2>
       </div>

       {/* Admission Cards Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <FeatureCard
           icon={
             <svg className="text-blue-9 dark:text-purple-9" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
               <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"/>
             </svg>
           }
           title="Estudios previos"
           description="Título de Licenciado en Geografía"
           layout="column"
         />

         <FeatureCard
           icon={
             <svg className="text-blue-9 dark:text-purple-9" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
               <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"/>
             </svg>
           }
           title="Estudios previos"
           description="Para los aspirantes que posean título de Profesor o de Licenciado en otra especialidad afín, su ingreso al Programa de Doctorado, será decidido por el Comité Académico de la carrera."
           layout="column"
         />

         <FeatureCard
           icon={
             <svg className="text-blue-9 dark:text-purple-9" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
               <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Zm-24,0a80,80,0,1,0-80,80A80.09,80.09,0,0,0,208,128Zm-72,0a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h32A8,8,0,0,1,136,128Zm0-32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h32A8,8,0,0,1,136,96Zm32,32a8,8,0,0,1-8,8h-8a8,8,0,0,1,0-16h8A8,8,0,0,1,168,128Z"/>
             </svg>
           }
           title="Informes"
           description="Santa Fe 205 Oeste. Tel: 4214513 interno:221 posgrado@ffha.unsj.edu.ar"
           layout="column"
         />
       </div>
     </div>
   </section>

   {/* Plan de Estudios Section */}
   <section className="w-full py-16 bg-gray-50">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Title */}
       <div className="text-center mb-12">
         <h2 className="text-3xl lg:text-4xl font-bold text-text mb-8">
           Plan de estudios
         </h2>

         {/* Tabs */}
         <div className="flex justify-center gap-8 mb-8">
           <button
             onClick={() => setActiveTab('basico')}
             className={`pb-2 px-4 font-semibold transition-colors ${
               activeTab === 'basico'
                 ? 'text-blue-9 dark:text-purple-9 border-b-2 border-blue-9 dark:border-purple-9'
                 : 'text-gray-400 hover:text-gray-600'
             }`}
           >
             Ciclo Básico
           </button>
           <button
             onClick={() => setActiveTab('perfeccionamiento')}
             className={`pb-2 px-4 font-semibold transition-colors ${
               activeTab === 'perfeccionamiento'
                 ? 'text-blue-9 dark:text-purple-9 border-b-2 border-blue-9 dark:border-purple-9'
                 : 'text-gray-400 hover:text-gray-600'
             }`}
           >
             Ciclo de Perfeccionamiento
           </button>
         </div>
       </div>

       {/* Tab Content */}
       {activeTab === 'basico' && (
         <div className="max-w-2xl mx-auto">
           <ul className="space-y-4">
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Teoría de la Geografía</span>
             </li>
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Geomática</span>
             </li>
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Metodología</span>
             </li>
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Lógica Simbólica</span>
             </li>
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Naturaleza y Ambiente</span>
             </li>
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Espacio y Sociedad</span>
             </li>
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Inglés</span>
             </li>
           </ul>
         </div>
       )}

       {activeTab === 'perfeccionamiento' && (
         <div className="max-w-2xl mx-auto">
           <ul className="space-y-4">
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Estadística Avanzada</span>
             </li>
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Geografía de la Salud</span>
             </li>
             <li className="flex items-start gap-3 text-gray-11">
               <span className="w-2 h-2 rounded-full bg-blue-9 dark:bg-purple-9 mt-2 flex-shrink-0"></span>
               <span>Hidroclimatología</span>
             </li>
           </ul>
         </div>
       )}
     </div>
   </section>

   {/* Autoridades Doctorado */}
   <section className="w-full py-16 bg-white">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Title */}
       <div className="mb-4 sm:mb-12">
         <h2 className="text-center sm:text-left text-3xl lg:text-4xl font-bold text-text mb-1 sm:mb-8">
           Autoridades de nuestro Doctorado
         </h2>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
         {/* Left Side - Image */}
         <div className="flex justify-center lg:justify-start order-2 lg:order-1">
           <img 
             src={authorities[activeAuthority].image} 
             alt={authorities[activeAuthority].name}
             className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg"
           />
         </div>

         {/* Right Side - Info, Controls and Thumbnails */}
         <div className="space-y-6 order-1 lg:order-2">
           {/* Info */}
           <div className="bg-gray-5 rounded-lg p-6">
             <h3 className="text-2xl font-bold text-text mb-2">
               {authorities[activeAuthority].name}
             </h3>
             <p className="text-gray-11 font-semibold mb-4">
               {authorities[activeAuthority].position}
             </p>
             <p className="text-gray-11 text-sm leading-relaxed">
               {authorities[activeAuthority].description}
             </p>
           </div>

           {/* Navigation Controls */}
           <div className="flex items-center justify-center sm:justify-start gap-4">
             <button
               onClick={handlePrev}
               className="w-10 h-10 rounded-full bg-blue-6 dark:bg-purple-6 text-white flex items-center justify-center hover:bg-blue-7 dark:hover:bg-purple-7 transition-colors duration-200 shadow-md"
               aria-label="Previous"
             >
               <svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M9.66934 0.484306C9.97753 0.807177 10.1255 1.19731 10.1131 1.65471C10.0998 2.11211 9.93901 2.50224 9.63082 2.82511L5.27769 7.38565L22.4591 7.38565C22.8957 7.38565 23.2619 7.54063 23.5578 7.85058C23.8526 8.15946 24 8.5426 24 9C24 9.4574 23.8526 9.84108 23.5578 10.151C23.2619 10.4599 22.8957 10.6144 22.4591 10.6144H5.27769L9.66934 15.2152C9.97753 15.5381 10.1316 15.9218 10.1316 16.3663C10.1316 16.8097 9.97753 17.1928 9.66934 17.5157C9.36116 17.8386 8.99493 18 8.57066 18C8.14742 18 7.7817 17.8386 7.47352 17.5157L0.423759 10.13C0.269667 9.96861 0.160257 9.79372 0.0955391 9.60538C0.031847 9.41704 0 9.21525 0 9C0 8.78475 0.031847 8.58296 0.0955391 8.39462C0.160257 8.20628 0.269667 8.03139 0.423759 7.86996L7.51204 0.443949C7.79454 0.147984 8.14742 0 8.57066 0C8.99493 0 9.36116 0.161436 9.66934 0.484306Z" fill="currentColor"/>
               </svg>
             </button>
             
             <button
               onClick={handleNext}
               className="w-10 h-10 rounded-full bg-blue-6 dark:bg-purple-6 text-white flex items-center justify-center hover:bg-blue-7 dark:hover:bg-purple-7 transition-colors duration-200 shadow-md"
               aria-label="Next"
             >
               <svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M14.3307 17.5157C14.0225 17.1928 13.8745 16.8027 13.8869 16.3453C13.9002 15.8879 14.061 15.4978 14.3692 15.1749L18.7223 10.6143L1.54093 10.6143C1.10433 10.6143 0.738106 10.4594 0.442247 10.1494C0.147416 9.84054 0 9.4574 0 9C0 8.5426 0.147416 8.15892 0.442247 7.84897C0.738106 7.54009 1.10433 7.38565 1.54093 7.38565L18.7223 7.38565L14.3307 2.78475C14.0225 2.46188 13.8684 2.07821 13.8684 1.63372C13.8684 1.19031 14.0225 0.807174 14.3307 0.484304C14.6388 0.161435 15.0051 0 15.4293 0C15.8526 0 16.2183 0.161435 16.5265 0.484304L23.5762 7.86996C23.7303 8.03139 23.8397 8.20628 23.9045 8.39462C23.9682 8.58296 24 8.78475 24 9C24 9.21525 23.9682 9.41704 23.9045 9.60538C23.8397 9.79372 23.7303 9.96861 23.5762 10.13L16.488 17.5561C16.2055 17.852 15.8526 18 15.4293 18C15.0051 18 14.6388 17.8386 14.3307 17.5157Z" fill="currentColor"/>
               </svg>
             </button>
           </div>

           {/* Thumbnail Gallery Carousel - Hidden on mobile */}
           <div className="hidden sm:block relative">
             <div 
               ref={scrollContainerRef}
               className="overflow-x-auto scrollbar-hide scroll-smooth"
             >
               <div className="flex gap-4 pb-4">
                 {authorities.map((authority, index) => (
                   <div key={authority.id} className="flex-shrink-0">
                     <AuthorityCard
                       image={authority.image}
                       name={authority.name}
                       isActive={false}
                       onClick={() => setActiveAuthority(index)}
                     />
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   </>
  );
};

export default Doctorado;
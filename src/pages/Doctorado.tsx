import FeatureCard from '../components/FeatureCard';
import AuthorityCard from '../components/AuthorityCard';
import { useState } from 'react';

const Doctorado = () => {
  const [activeTab, setActiveTab] = useState<'basico' | 'perfeccionamiento'>('basico');
  const [activeAuthority, setActiveAuthority] = useState(0);

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
    }
  ];

  const handleNext = () => {
    setActiveAuthority((prev) => (prev + 1) % authorities.length);
  };

  const handlePrev = () => {
    setActiveAuthority((prev) => (prev - 1 + authorities.length) % authorities.length);
  };

  return (
   <>
   {/* Hero Banner */}
   <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-blue-2 via-blue-3 to-white dark:bg-gradient-to-b dark:from-purple-2 dark:via-purple-3 dark:to-white">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         {/* Left Content - Text */}
         <div className="space-y-6 text-left order-2 lg:order-1">
           <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight">
             Formate en el máximo nivel académico en Geografía
           </h1>
           
           <p className="text-text text-base leading-relaxed">
             Conocé el plan de estudios, los docentes responsables y completá el formulario de inscripción para iniciar tu camino doctoral.
           </p>
           
           {/* Call to Action Button */}
           <div className="flex items-center flex-col gap-4 pt-4">
             <span className="text-text font-medium">Aplica ahora</span>
             <div className="w-8 h-8 flex items-center justify-center">
               <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-9 dark:text-purple-9">
                <path d="M47.2363 36.3821C46.8112 35.5345 45.9463 34.9996 44.9988 34.9996H37.4987V24.9995C37.4987 23.6195 36.3812 22.4995 34.9987 22.4995H24.9986C23.6186 22.4995 22.4986 23.6195 22.4986 24.9995V34.9996H14.9985C14.0535 34.9996 13.1886 35.5345 12.7635 36.3821C12.3411 37.2296 12.4311 38.2421 13.0011 38.9996L28.0012 58.9999C28.4713 59.6299 29.2138 59.9998 29.9987 59.9998C30.7862 59.9998 31.5287 59.6299 31.9988 58.9999L46.999 38.9996C47.5689 38.2421 47.6589 37.2296 47.2363 36.3821Z" fill="currentColor"/>
                <path d="M35.0001 15.0005H25C23.6175 15.0005 22.5 16.118 22.5 17.5005C22.5 18.883 23.6175 20.0005 25 20.0005H35.0001C36.3825 20.0005 37.5001 18.883 37.5001 17.5005C37.5001 16.118 36.3825 15.0005 35.0001 15.0005Z" fill="currentColor"/>
                <path d="M35.0001 7.5H25C23.6175 7.5 22.5 8.61751 22.5 9.99999C22.5 11.3825 23.6175 12.5 25 12.5H35.0001C36.3825 12.5 37.5001 11.3825 37.5001 9.99999C37.5001 8.61751 36.3825 7.5 35.0001 7.5Z" fill="currentColor"/>
                <path d="M35.0002 0H25C23.6175 0 22.5 1.11751 22.5 2.49999C22.5 3.88258 23.6175 5.0001 25 5.0001H35.0001C36.3825 5.0001 37.5001 3.88258 37.5001 2.50011C37.5002 1.11751 36.3827 0 35.0002 0Z" fill="currentColor"/>
              </svg>
             </div>
           </div>
         </div>
         
         {/* Right Content - Image Grid */}
         <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
           {/* Top Left - Large Image */}
           <div className="col-span-1 row-span-2">
             <img 
               src="https://images.unsplash.com/photo-1730314737142-2f6bb293f893?w=400&h=600&fit=crop" 
               alt="Mapa antiguo"
               className="w-full h-full object-cover rounded-lg shadow-md"
             />
           </div>
           
           {/* Top Right - Small Image */}
           <div className="col-span-1">
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop" 
               alt="Mapa vintage"
               className="w-full h-full object-cover rounded-lg shadow-md"
             />
           </div>
           
           {/* Middle Right - Small Image */}
           <div className="col-span-1">
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop" 
               alt="Vista satelital ciudad"
               className="w-full h-full object-cover rounded-lg shadow-md"
             />
           </div>
           
           {/* Bottom Left - Medium Image */}
           <div className="col-span-1">
             <img 
               src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop" 
               alt="Imagen espacial América"
               className="w-full h-full object-cover rounded-lg shadow-md"
             />
           </div>
           
           {/* Bottom Right - Small Image */}
           <div className="col-span-1">
             <img 
               src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop" 
               alt="Vista aérea urbana"
               className="w-full h-full object-cover rounded-lg shadow-md"
             />
           </div>
         </div>
       </div>
     </div>
   </section>

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
       <div className="mb-12">
         <h2 className="text-3xl lg:text-4xl font-bold text-text mb-8">
           Autoridades de nuestro Doctorado
         </h2>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-start">
         {/* Left Side - Image */}
         <div className="flex justify-center lg:justify-start">
           <img 
             src={authorities[activeAuthority].image} 
             alt={authorities[activeAuthority].name}
             className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg grayscale"
           />
         </div>

         {/* Right Side - Info, Controls and Thumbnails */}
         <div className="space-y-11 ">
           {/* Info */}
           <div className="bg-gray-2 rounded-lg p-6">
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
           <div className="flex items-center justify-left gap-4">
             <button
               onClick={handlePrev}
               className="w-10 h-10 rounded-full bg-blue-6 dark:bg-purple-6 text-white flex items-center justify-center hover:bg-blue-7 dark:hover:bg-purple-7 transition-colors duration-200 shadow-md"
               aria-label="Previous"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                 <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
               </svg>
             </button>
             
             <button
               onClick={handleNext}
               className="w-10 h-10 rounded-full bg-blue-6 dark:bg-purple-6 text-white flex items-center justify-center hover:bg-blue-7 dark:hover:bg-purple-7 transition-colors duration-200 shadow-md"
               aria-label="Next"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                 <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
               </svg>
             </button>
           </div>

           {/* Thumbnail Gallery */}
           <div className="flex justify-left gap-3 flex-wrap">
             {authorities.map((authority, index) => (
               <AuthorityCard
                 key={authority.id}
                 image={authority.image}
                 name={authority.name}
                 position={authority.position}
                 description={authority.description}
                 isActive={false}
                 onClick={() => setActiveAuthority(index)}
               />
             ))}
           </div>
         </div>
       </div>
     </div>
   </section>
   </>
  );
};

export default Doctorado;
import { Helmet } from 'react-helmet-async';
import CourseData from '../components/Courses/CourseData';
import { useCursos } from '../hooks/useCurso';
import NextCourses from '../components/Courses/NextCourses';

import BannerCourses from '../components/Courses/BannerCourses';

const Cursos = () => {
  // Usar el hook personalizado para obtener cursos

  const { cursos, loading, error, formatFirebaseDate } = useCursos();

  // Función para manejar la inscripción (simulada)
  const handleInscribe = (courseId: string) => {
    console.log(`Inscribing to course ${courseId}`);
    // Lógica de inscripción
  };

  return (
    <>
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Cursos y Materias - Doctorado en Geografía UNSJ</title>
      <meta name="description" content="Explora los cursos, seminarios y materias ofrecidas en el Doctorado en Geografía de la UNSJ. Información sobre contenidos, fechas e inscripciones." />
      <meta name="keywords" content="cursos geografía, seminarios, materias doctorado, UNSJ, inscripciones, San Juan, Argentina" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://doctorado-geografia.unsj.edu.ar/cursos" />
      <meta property="og:title" content="Cursos - Doctorado en Geografía UNSJ" />
      <meta property="og:description" content="Cursos y seminarios del Doctorado en Geografía de la UNSJ" />
      <meta property="og:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://doctorado-geografia.unsj.edu.ar/cursos" />
      <meta property="twitter:title" content="Cursos - Doctorado en Geografía UNSJ" />
      <meta property="twitter:description" content="Cursos y seminarios del Doctorado en Geografía de la UNSJ" />
      <meta property="twitter:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
      
      {/* Canonical */}
      <link rel="canonical" href="https://doctorado-geografia.unsj.edu.ar/cursos" />
    </Helmet>
    
    {/*Banner Hero courses */}
    <BannerCourses />

    {/* Courses Grid Section */}
    <section className="w-full py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {cursos.map((course) => (
            <CourseData
              key={course.id}
              id={course.id}
              imageUrl={course.imagen}
              title={course.titulo}
              description={course.cuerpo}
              date={formatFirebaseDate(course.fecha).dia + " " + formatFirebaseDate(course.fecha).mes + ", " + formatFirebaseDate(course.fecha).año}
              enrolledCount={course.inscriptos}
              onInscribe={() => handleInscribe(course.id)}
            />
          ))}
        </div>
      </div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center '>
        <button className="bg-blue-9 hover:bg-blue-10 text-white px-4 py-2  w-72 rounded-lg shadow-md  transition flex flex-row justify-center items-center gap-6 mx-auto dark:bg-purple-9 dark:hover:bg-purple-10">
          Ver todos los cursos
          <svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3307 17.5157C14.0225 17.1928 13.8745 16.8027 13.8869 16.3453C13.9002 15.8879 14.061 15.4978 14.3692 15.1749L18.7223 10.6143L1.54093 10.6143C1.10433 10.6143 0.738106 10.4594 0.442247 10.1494C0.147416 9.84054 0 9.4574 0 9C0 8.5426 0.147416 8.15892 0.442247 7.84897C0.738106 7.54009 1.10433 7.38565 1.54093 7.38565L18.7223 7.38565L14.3307 2.78475C14.0225 2.46188 13.8684 2.07821 13.8684 1.63372C13.8684 1.19031 14.0225 0.807174 14.3307 0.484304C14.6388 0.161435 15.0051 0 15.4293 0C15.8526 0 16.2183 0.161435 16.5265 0.484304L23.5762 7.86996C23.7303 8.03139 23.8397 8.20628 23.9045 8.39462C23.9682 8.58296 24 8.78475 24 9C24 9.21525 23.9682 9.41704 23.9045 9.60538C23.8397 9.79372 23.7303 9.96861 23.5762 10.13L16.488 17.5561C16.2055 17.852 15.8526 18 15.4293 18C15.0051 18 14.6388 17.8386 14.3307 17.5157Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
    
    {/* Courses Section */}
      <NextCourses cursos={cursos} formatFirebaseDate={formatFirebaseDate}/>
    </>
  );
};

export default Cursos;
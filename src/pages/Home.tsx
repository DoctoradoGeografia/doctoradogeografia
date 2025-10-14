import { Helmet } from 'react-helmet-async';

import { useCursos } from '../hooks/useCurso';

import NextCourses from '../components/Courses/NextCourses';
import StatsSection from '../components/Home/StatsSection';
import ArticleSection from '../components/Home/ArticleSection';
import BannerHome from '../components/Home/BannerHome';
import TrustSection from '../components/Home/TrustSection';

const Home = () => {

  const { cursos, formatFirebaseDate } = useCursos();

  return (
    <div className="w-full">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Doctorado en Geografía - UNSJ | Universidad Nacional de San Juan</title>
        <meta name="description" content="Doctorado en Geografía de la Universidad Nacional de San Juan, Argentina. Formación avanzada en investigación geográfica." />
        <meta name="keywords" content="doctorado geografía, UNSJ, San Juan, Argentina, investigación, Facultad de Filosofía, Humanidades y Artes" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doctorado-geografia.unsj.edu.ar/" />
        <meta property="og:title" content="Doctorado en Geografía - UNSJ" />
        <meta property="og:description" content="Doctorado en Geografía de la Universidad Nacional de San Juan, Argentina. Formación avanzada en investigación geográfica." />
        <meta property="og:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://doctorado-geografia.unsj.edu.ar/" />
        <meta property="twitter:title" content="Doctorado en Geografía - UNSJ" />
        <meta property="twitter:description" content="Doctorado en Geografía de la Universidad Nacional de San Juan, Argentina." />
        <meta property="twitter:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://doctorado-geografia.unsj.edu.ar/" />
      </Helmet>
      {/* Hero Section */}
      <BannerHome></BannerHome>

      {/* Stats Cards Section */}
      <StatsSection></StatsSection>
       
       {/* Articles Section */}
      <ArticleSection></ArticleSection>

       {/* Trust Section */}
      <TrustSection></TrustSection>

      {/* Next Courses Section */}
      <NextCourses cursos={cursos} formatFirebaseDate={formatFirebaseDate} />
    </div>
  );
};

export default Home;
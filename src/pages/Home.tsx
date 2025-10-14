

import { useCursos } from '../hooks/useCurso';

import NextCourses from '../components/Courses/NextCourses';
import StatsSection from '../components/Home/StatsSection';
import ArticleSection from '../components/Home/ArticleSection';
import BannerHome from '../components/Home/BannerHome';
import TrustSection from '../components/Home/TrustSection';

const Home = () => {

  const { cursos, loading, error, formatFirebaseDate } = useCursos();

  return (
    <div className="w-full">
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
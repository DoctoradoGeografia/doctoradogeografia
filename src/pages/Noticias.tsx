import { Helmet } from 'react-helmet-async';
import ArticleCard from '../components/Home/ArticleCard.tsx';
import BannerNoticias from '../components/Noticias/BannerNoticias.tsx';
import SubscribeSection from '../components/SubscribeSection';
import { useNoticias } from '../hooks/useNoticias';

const Noticias = () => {

  const { noticias, loading, error, formatFirebaseDate } = useNoticias();

  
  return (
    <div className="w-full">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Noticias y Novedades - Doctorado en Geografía UNSJ</title>
        <meta name="description" content="Últimas noticias, eventos y novedades del Doctorado en Geografía de la UNSJ. Mantente informado sobre investigaciones, seminarios y actividades académicas." />
        <meta name="keywords" content="noticias geografía, eventos académicos, UNSJ, investigaciones, seminarios, San Juan, Argentina" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doctorado-geografia.unsj.edu.ar/noticias" />
        <meta property="og:title" content="Noticias - Doctorado en Geografía UNSJ" />
        <meta property="og:description" content="Últimas noticias y eventos del Doctorado en Geografía de la UNSJ" />
        <meta property="og:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://doctorado-geografia.unsj.edu.ar/noticias" />
        <meta property="twitter:title" content="Noticias - Doctorado en Geografía UNSJ" />
        <meta property="twitter:description" content="Últimas noticias y eventos del Doctorado en Geografía de la UNSJ" />
        <meta property="twitter:image" content="https://doctorado-geografia.unsj.edu.ar/og-image.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://doctorado-geografia.unsj.edu.ar/noticias" />
      </Helmet>

      <BannerNoticias />

       {/* Articles Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <p className="text-gray-600">
              Ver todo los artículos de la geografía nacional e internacional
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-2">
              Ultimas Noticias
            </h2>
          </div>
          
          <div className="space-y-8">
            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-9 dark:border-purple-9"></div>
                <p className="mt-4 text-gray-600">Cargando noticias...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-12">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-red-600">Error al cargar las noticias: {error}</p>
                </div>
              </div>
            )}

            {/* Article Grid */}
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {noticias.length > 0 ? (
                  noticias.map((noticia) => (
                    <ArticleCard
                      key={noticia.id}
                      id={noticia.id}
                      image={noticia.imagencentral}
                      category={noticia.categoria}
                      title={noticia.titulo}
                      author={noticia.autor}
                      authorImage={noticia.imagenautor}
                      date={formatFirebaseDate(noticia.fecha)}
                    />
                  ))
                ) : (
                  // Mostrar cards de ejemplo si no hay noticias en la base de datos
                  <>
                    <ArticleCard
                      image="https://i.imghippo.com/files/YcG2905iHw.png"
                      category="Ipsum reading"
                      title="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam."
                      author="MATIAS, ALVARADO"
                      authorImage="https://i.pravatar.cc/150?img=1"
                      date="12 AGO, 2025"
                    />
                    <ArticleCard
                      image="https://i.imghippo.com/files/kjk1668jw.webp"
                      category="Ipsum reading"
                      title="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam."
                      author="MARIA, GONZALEZ"
                      authorImage="https://i.pravatar.cc/150?img=2"
                      date="15 JUL, 2025"
                    />
                    <ArticleCard
                      image="https://i.imghippo.com/files/Bod3628ch.jpg"
                      category="Ipsum reading"
                      title="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam."
                      author="CARLOS, MARTINEZ"
                      authorImage="https://i.pravatar.cc/150?img=3"
                      date="20 JUN, 2025"
                    />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

       {/* Subscribe Section */}
       <SubscribeSection />

    </div>
  );
};

export default Noticias;
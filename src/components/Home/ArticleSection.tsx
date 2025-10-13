import { useNoticias } from "../../hooks/useNoticias";
import ArticleCard from "./ArticleCard";
import FeaturedArticleCard from "./FeaturedArticleCard";

    
const ArticleSection = () => {

  const { noticias, loading, error, formatFirebaseDate } = useNoticias();
  const noticia = noticias[0];
  //console.log(noticia);

return (
    <>
{/* Articles Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Artículos que se renuevan
            </h2>
            <p className="text-gray-600">
              Ver todo los artículos de la geografía nacional e internacional
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Featured Article - Hidden on mobile */}
            <div className='hidden md:block'>
            {noticias.length > 0 ? (
              <FeaturedArticleCard
                      //key={noticia.id}
                      description={noticia.subtitulo}
                      image={noticia.imagencentral}
                      category={noticia.categoria}
                      title={noticia.titulo}
                      author={noticia.autor}
                      authorImage={noticia.imagenautor}
                      date={formatFirebaseDate(noticia.fecha)}
              />
            ) : (
              <div>No hay noticias disponibles</div>
            )}
            </div>

            {/* Article Grid */}
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {noticias.length > 0 ? (
                  noticias.map((noticia) => (
                    <ArticleCard
                      key={noticia.id}
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

                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
);
};

export default ArticleSection;

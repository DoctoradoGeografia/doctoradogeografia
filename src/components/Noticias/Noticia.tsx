import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase/firebase';
import type { Noticia as NoticiaType } from '../../hooks/useNoticias';
import { formatFirebaseDate } from '../../hooks/useNoticias';

const Noticia = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState<NoticiaType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      if (!id) {
        setError('ID de noticia no proporcionado');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'noticias', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNoticia({ id: docSnap.id, ...docSnap.data() } as NoticiaType);
        } else {
          setError('Noticia no encontrada');
        }
      } catch (err) {
        console.error('Error al cargar noticia:', err);
        setError('Error al cargar la noticia');
      } finally {
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-9 dark:border-purple-9"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando noticia...</p>
        </div>
      </div>
    );
  }

  if (error || !noticia) {
    return (
      <div className="min-h-screen bg-background dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
              {error || 'Noticia no encontrada'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              La noticia que buscas no existe o fue eliminada.
            </p>
            <button
              onClick={() => navigate('/noticias')}
              className="bg-blue-9 dark:bg-purple-9 text-white px-6 py-2 rounded-lg hover:bg-blue-10 dark:hover:bg-purple-10 transition-colors"
            >
              Volver a Noticias
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{noticia.titulo} - Doctorado en Geografía UNSJ</title>
        <meta name="description" content={noticia.subtitulo || noticia.cuerpo.substring(0, 160)} />
        <meta name="author" content={noticia.autor} />
        <meta name="keywords" content={`${noticia.categoria}, noticias geografía, UNSJ, San Juan, Argentina`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={noticia.titulo} />
        <meta property="og:description" content={noticia.subtitulo || noticia.cuerpo.substring(0, 200)} />
        <meta property="og:image" content={noticia.imagencentral} />
        <meta property="og:url" content={`https://doctorado-geografia.unsj.edu.ar/noticias/${id}`} />
        <meta property="article:published_time" content={noticia.fecha.toISOString()} />
        <meta property="article:author" content={noticia.autor} />
        <meta property="article:section" content={noticia.categoria} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={noticia.titulo} />
        <meta property="twitter:description" content={noticia.subtitulo || noticia.cuerpo.substring(0, 200)} />
        <meta property="twitter:image" content={noticia.imagencentral} />
        <meta property="twitter:url" content={`https://doctorado-geografia.unsj.edu.ar/noticias/${id}`} />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://doctorado-geografia.unsj.edu.ar/noticias/${id}`} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link to="/noticias" className="hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
              Noticias
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium line-clamp-1">{noticia.titulo}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Social Share Sidebar - Fixed en desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 flex flex-col items-center gap-4">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                Compartir
              </span>
              
              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                aria-label="Compartir en Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(noticia.titulo)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 text-white transition-colors"
                aria-label="Compartir en Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${encodeURIComponent(noticia.titulo)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors"
                aria-label="Compartir en LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(noticia.titulo + ' ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
                aria-label="Compartir en WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Main Content */}
          <article className="lg:col-span-11">
            {/* Hero Section with Image and Title */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Featured Image */}
              {noticia.imagencentral && (
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={noticia.imagencentral}
                    alt={noticia.titulo}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
              )}

              {/* Title and Meta Info */}
              <div className="flex flex-col justify-center">
                {/* Category Badge */}
                <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-9 dark:bg-purple-9 text-white w-fit mb-4">
                  {noticia.categoria}
                </span>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {noticia.titulo}
                </h1>

                {/* Subtitle */}
                {noticia.subtitulo && (
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {noticia.subtitulo}
                  </p>
                )}

                {/* Author Info */}
                <div className="flex items-center space-x-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                  {noticia.imagenautor && (
                    <img
                      src={noticia.imagenautor}
                      alt={noticia.autor}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-9 dark:border-purple-9"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-lg">
                      {noticia.autor}
                    </p>
                    {noticia.posicionautor && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {noticia.posicionautor}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"></path>
                      </svg>
                      {formatFirebaseDate(noticia.fecha)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="max-w-4xl">
              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {noticia.cuerpo}
                </div>
              </div>

              {/* Quote destacada */}
              {noticia.frasedestacada && (
                <div className="my-12 relative">
                  <div className="absolute -left-4 top-0 text-6xl text-blue-9 dark:text-purple-9 opacity-20 font-serif">"</div>
                  <blockquote className="relative pl-8 border-l-4 border-blue-9 dark:border-purple-9 py-4">
                    <p className="text-2xl lg:text-3xl font-medium italic text-gray-900 dark:text-white leading-relaxed">
                      {noticia.frasedestacada}
                    </p>
                  </blockquote>
                </div>
              )}

              {/* Secondary Image */}
              {noticia.imagensecundaria && (
                <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={noticia.imagensecundaria}
                    alt="Imagen secundaria"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Conclusion */}
              {noticia.conlusion && (
                <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl border border-blue-200 dark:border-purple-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-9 dark:text-purple-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Conclusión
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                    {noticia.conlusion}
                  </p>
                </div>
              )}
            </div>

            {/* Mobile Social Share */}
            <div className="lg:hidden mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Compartir este artículo:
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(noticia.titulo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${encodeURIComponent(noticia.titulo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(noticia.titulo + ' ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => navigate('/noticias')}
                className="inline-flex items-center text-blue-9 dark:text-purple-9 hover:text-blue-10 dark:hover:text-purple-10 font-semibold transition-colors group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a Noticias
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
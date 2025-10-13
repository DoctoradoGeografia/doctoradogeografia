import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase/firebase';
import type { Curso } from '../../hooks/useCurso';
import { formatFirebaseDate } from '../../hooks/useCurso';

const CursoDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [curso, setCurso] = useState<Curso | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurso = async () => {
      if (!id) {
        setError('ID de curso no proporcionado');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'cursos', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCurso({ id: docSnap.id, ...docSnap.data() } as Curso);
        } else {
          setError('Curso no encontrado');
        }
      } catch (err) {
        console.error('Error al cargar curso:', err);
        setError('Error al cargar el curso');
      } finally {
        setLoading(false);
      }
    };

    fetchCurso();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-9 dark:border-purple-9"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando curso...</p>
        </div>
      </div>
    );
  }

  if (error || !curso) {
    return (
      <div className="min-h-screen bg-background dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
              {error || 'Curso no encontrado'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              El curso que buscas no existe o fue eliminado.
            </p>
            <button
              onClick={() => navigate('/cursos')}
              className="bg-blue-9 dark:bg-purple-9 text-white px-6 py-2 rounded-lg hover:bg-blue-10 dark:hover:bg-purple-10 transition-colors"
            >
              Volver a Cursos
            </button>
          </div>
        </div>
      </div>
    );
  }

  const fechaFormateada = formatFirebaseDate(curso.fecha);

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link to="/cursos" className="hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
              Cursos
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">{curso.titulo}</span>
          </nav>
        </div>
      </div>

      {/* Course Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge and Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-purple-100 text-blue-800 dark:text-purple-800">
            {curso.categoria}
          </span>
          {fechaFormateada && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"></path>
              </svg>
              <span className="text-2xl font-bold text-blue-9 dark:text-purple-9">{fechaFormateada.dia}</span>
              <span className="text-sm uppercase">{fechaFormateada.mes} {fechaFormateada.año}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {curso.titulo}
        </h1>

        {/* Subtitle */}
        {curso.subtitulo && (
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {curso.subtitulo}
          </p>
        )}

        {/* Stats */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-blue-9 dark:text-purple-9">
              <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              <span className="font-bold">{curso.inscriptos}</span> inscriptos
            </span>
          </div>
        </div>

        {/* Course Image */}
        {curso.imagen && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {curso.cuerpo}
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-9 to-blue-10 dark:from-purple-9 dark:to-purple-10 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-2">¿Te interesa este curso?</h3>
          <p className="mb-6 text-blue-100 dark:text-purple-100">
            Contacta con nosotros para más información sobre inscripciones y requisitos.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-blue-9 dark:text-purple-9 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactar
          </Link>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => navigate('/cursos')}
            className="inline-flex items-center text-blue-9 dark:text-purple-9 hover:text-blue-10 dark:hover:text-purple-10 font-semibold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Cursos
          </button>
        </div>
      </article>
    </div>
  );
};

export default CursoDetalle;

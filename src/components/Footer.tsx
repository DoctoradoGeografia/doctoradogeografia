import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="w-full mt-16">
      {/* Sección de Contacto - Fondo Oscuro */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white pb-12 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab de Contacto */}
          <div className="flex justify-center mb-8">
            <div className="bg-white text-blue-9 dark:text-purple-9 px-8 py-3 rounded-b-2xl font-semibold">
              Contactanos
            </div>
          </div>

          {/* Título y Subtítulo */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Te quedaste con alguna duda?</h2>
            <p className="text-gray-400 text-lg">Dejanos tu telefono y te llamamos...</p>
          </div>

          {/* Formulario */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto items-center sm:items-end ">
            <div className="flex-1">
              <label htmlFor="nombre" className="block text-xs text-gray-400 uppercase mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-9 dark:focus:border-purple-9 transition-colors"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="telefono" className="block text-xs text-gray-400 uppercase mb-2">
                Número de Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-9 dark:focus:border-purple-9 transition-colors"
              />
            </div>
            <button className="bg-blue-9 dark:bg-purple-9 hover:bg-blue-10 dark:hover:bg-purple-10 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
              ENVIAR
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sección de Información - Fondo Blanco */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* INFORMACIÓN */}
            <div>
              <h3 className="text-blue-9 dark:text-purple-9 font-bold text-sm uppercase mb-4">Información</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/becas" className="text-gray-700 hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/doctorado" className="text-gray-700 hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
                    Doctorado
                  </Link>
                </li>
                <li>
                  <Link to="/cursos" className="text-gray-700 hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link to="/post" className="text-gray-700 hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
                    Post
                  </Link>
                </li>
                <li>
                  <Link to="/becas" className="text-gray-700 hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
                    Becas
                  </Link>
                </li>
              </ul>
            </div>

            {/* ACERCA DE NOSOTROS */}
            <div>
              <h3 className="text-blue-9 dark:text-purple-9 font-bold text-sm uppercase mb-4">Acerca de Nosotros</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/personal" className="text-gray-700 hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
                    Personal
                  </Link>
                </li>
                <li>
                  <Link to="/preguntas-frecuentes" className="text-gray-700 hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-gray-700 hover:text-blue-9 dark:hover:text-purple-9 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTÁCTANOS */}
            <div>
              <h3 className="text-blue-9 dark:text-purple-9 font-bold text-sm uppercase mb-4">Contáctanos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>+54 26422333</li>
                <li>doctorado@unsj.com</li>
                <li>Argentina</li>
              </ul>
            </div>
          </div>

          {/* Suscripción */}
          <div className="mt-12">
            <h3 className="text-blue-9 dark:text-purple-9 font-bold text-sm uppercase mb-4">Suscripción</h3>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Correo"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-9 dark:focus:border-purple-9 transition-colors"
              />
              <button className="text-blue-9 dark:text-purple-9 hover:text-blue-10 dark:hover:text-purple-10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Iconos de Redes Sociales */}
          <div className="mt-8 flex items-center gap-4">
            <SocialIcons />
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-right">
            <p className="text-gray-500 text-sm">
              © 2025 — Derechos Reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
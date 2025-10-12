import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-700 text-white h-16 pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            {/* Language Selector */}
            <div className="flex items-center">
              <select className="bg-gray-700 text-white border-none outline-none cursor-pointer text-xs sm:text-sm">
                <option>🌐 Idioma</option>
                <option>Español</option>
                <option>English</option>
              </select>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden sm:flex flex-1 max-w-md mx-4 sm:mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Búsqueda"
                  className="w-full px-3 sm:px-4 py-1 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                />
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Login Button */}
            <div>
              <Link
                to="/login"
                className="bg-white text-text hover:text-white hover:bg-blue-9 dark:hover:bg-purple-9 dark:hover:text-white px-3 sm:px-4 py-1 rounded text-xs sm:text-sm transition-colors"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
                <a href="/">
                <img 
                src="https://i.imghippo.com/files/Elb9238oo.png" 
                className="w-[30px] h-full object-contain"
                alt="Logo">
                </img>
                </a>
              
              <div>
                <a href="/">
                <h1 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">
                  DOCTORADO<br />
                  <span className="text-sm sm:text-base font-normal">EN GEOGRAFÍA</span>
                </h1>
                </a>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8 ">
              <Link
                to="/doctorado"
                className="text-text hover:text-blue-9 dark:hover:text-purple-9 transition-colors font-medium"
              >
                Doctorado
              </Link>
              <Link
                to="/noticias"
                className="text-text hover:text-blue-9 dark:hover:text-purple-9 transition-colors font-medium"
              >
                Noticias
              </Link>
              <Link
                to="/cursos"
                className="text-text hover:text-blue-9 dark:hover:text-purple-9 transition-colors font-medium"
              >
                Cursos
              </Link>
              <Link
                to="/contacto"
                className="text-text hover:text-blue-9 dark:hover:text-purple-9 transition-colors font-medium"
              >
                Contacto
              </Link>
            </div>

            {/* Right Side - Social Icons and FAQ (Desktop only) */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Icons */}
              <SocialIcons />

              {/* FAQ Link */}
              <Link
                to="/faq"
                className="flex items-center text-text hover:text-blue-9 dark:hover:text-purple-9 transition-colors font-medium"
              >
                <span className="mr-1">Preguntas Frecuentes</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 hover:text-accent p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            <Link
              to="/doctorado"
              className="block text-text hover:text-blue-9 hover:bg-blue-4 dark:hover:bg-purple-4 dark:hover:text-purple-9 transition-colors font-medium py-2 pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Doctorado
            </Link>
            <Link
              to="/noticias"
              className="block text-text hover:text-blue-9 hover:bg-blue-4 dark:hover:bg-purple-4 dark:hover:text-purple-9 transition-colors font-medium py-2 pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Noticias
            </Link>
            <Link
              to="/cursos"
              className="block text-text hover:text-blue-9 hover:bg-blue-4 dark:hover:bg-purple-4 dark:hover:text-purple-9 transition-colors font-medium py-2 pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cursos
            </Link>
            <Link
              to="/contacto"
              className="block text-text hover:text-blue-9 hover:bg-blue-4 dark:hover:bg-purple-4 dark:hover:text-purple-9 transition-colors font-medium py-2 pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
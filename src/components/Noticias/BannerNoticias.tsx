import { useState } from "react";



const BannerNoticias = () => {

    const [searchQuery, setSearchQuery] = useState('');
    
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Búsqueda:', searchQuery);
    };

return (

        <>
        
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-2 via-blue-3 to-white dark:bg-gradient-to-b dark:from-purple-2 dark:via-purple-3 dark:to-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Globe */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Globe with orbits */}
                <div className="absolute inset-0">
                  <img 
                    src="https://i.imghippo.com/files/f2143ts.webp" 
                    alt="Globe"
                    className="w-full h-full object-contain opacity-80"
                  />
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-2">
              {/* Badge */}
              <div className="inline-block">
                <span className="bg-white text-text px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">
                  Noticias de Actualidad
                </span>
              </div>
              
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-5xl font-bold text-text leading-tight">
                  "Historias, logros y próximos pasos". Actualidad académica y científica
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-lg text-text leading-relaxed italic">
                "Enterate de los últimos eventos, investigaciones y actividades del Doctorado en Geografía."
              </p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative max-w-md mx-auto lg:mx-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Búsqueda"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Buscar"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        </>    

      );
};

export default BannerNoticias;
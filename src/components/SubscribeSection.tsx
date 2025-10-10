import { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Suscripción:', email);
    // Implementar lógica de suscripción
    setEmail('');
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-blue-9  dark:text-purple-9 font-semibold italic text-xl">
              ¡No te pierdas ninguna novedad!
            </h3>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-text">
              Suscríbete a las noticias del Doctorado en Geografía
            </h2>
            
            <p className="text-text text-base leading-relaxed">
              Recibí actualizaciones periódicas sobre actividades, publicaciones y novedades académicas.
            </p>
            
            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="email@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-blue-9 hover:bg-blue-6 dark:bg-purple-9 dark:hover:bg-purple-6 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 uppercase text-sm whitespace-nowrap"
              >
                Suscribirse
              </button>
            </form>
          </div>
          
          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="https://i.imghippo.com/files/OCN9302VEo.png" 
              alt="Suscripción newsletter" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default SubscribeSection;

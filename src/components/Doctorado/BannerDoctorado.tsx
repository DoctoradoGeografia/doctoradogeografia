


const BannerDoctorado = () => {


return (

        <>
        {/* Hero Banner */}
            <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-blue-2 via-blue-3 to-white dark:bg-gradient-to-b dark:from-purple-2 dark:via-purple-3 dark:to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content - Text */}
                    <div className="space-y-6 text-left order-2 lg:order-1">
                    <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight">
                        Formate en el máximo nivel académico en Geografía
                    </h1>
                    
                    <p className="text-text text-base leading-relaxed">
                        Conocé el plan de estudios, los docentes responsables y completá el formulario de inscripción para iniciar tu camino doctoral.
                    </p>
                    
                    {/* Call to Action Button */}
                    <div className="flex items-center flex-col gap-4 pt-4">
                        <span className="text-text font-medium">Aplica ahora</span>
                        <div className="w-8 h-8 flex items-center justify-center">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-9 dark:text-purple-9">
                            <path d="M47.2363 36.3821C46.8112 35.5345 45.9463 34.9996 44.9988 34.9996H37.4987V24.9995C37.4987 23.6195 36.3812 22.4995 34.9987 22.4995H24.9986C23.6186 22.4995 22.4986 23.6195 22.4986 24.9995V34.9996H14.9985C14.0535 34.9996 13.1886 35.5345 12.7635 36.3821C12.3411 37.2296 12.4311 38.2421 13.0011 38.9996L28.0012 58.9999C28.4713 59.6299 29.2138 59.9998 29.9987 59.9998C30.7862 59.9998 31.5287 59.6299 31.9988 58.9999L46.999 38.9996C47.5689 38.2421 47.6589 37.2296 47.2363 36.3821Z" fill="currentColor"/>
                            <path d="M35.0001 15.0005H25C23.6175 15.0005 22.5 16.118 22.5 17.5005C22.5 18.883 23.6175 20.0005 25 20.0005H35.0001C36.3825 20.0005 37.5001 18.883 37.5001 17.5005C37.5001 16.118 36.3825 15.0005 35.0001 15.0005Z" fill="currentColor"/>
                            <path d="M35.0001 7.5H25C23.6175 7.5 22.5 8.61751 22.5 9.99999C22.5 11.3825 23.6175 12.5 25 12.5H35.0001C36.3825 12.5 37.5001 11.3825 37.5001 9.99999C37.5001 8.61751 36.3825 7.5 35.0001 7.5Z" fill="currentColor"/>
                            <path d="M35.0002 0H25C23.6175 0 22.5 1.11751 22.5 2.49999C22.5 3.88258 23.6175 5.0001 25 5.0001H35.0001C36.3825 5.0001 37.5001 3.88258 37.5001 2.50011C37.5002 1.11751 36.3827 0 35.0002 0Z" fill="currentColor"/>
                        </svg>
                        </div>
                    </div>
                    </div>
                    
                    {/* Right Content - Image Grid */}
                    <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
                    {/* Top Left - Large Image */}
                    <div className="col-span-1 row-span-2">
                        <img 
                        src="https://images.unsplash.com/photo-1730314737142-2f6bb293f893?w=400&h=600&fit=crop" 
                        alt="Mapa antiguo"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    
                    {/* Top Right - Small Image */}
                    <div className="col-span-1">
                        <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop" 
                        alt="Mapa vintage"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    
                    {/* Middle Right - Small Image */}
                    <div className="col-span-1">
                        <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop" 
                        alt="Vista satelital ciudad"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    
                    {/* Bottom Left - Medium Image */}
                    <div className="col-span-1">
                        <img 
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop" 
                        alt="Imagen espacial América"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    
                    {/* Bottom Right - Small Image */}
                    <div className="col-span-1">
                        <img 
                        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop" 
                        alt="Vista aérea urbana"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </section>
      
        </>    

      );
};

export default BannerDoctorado;
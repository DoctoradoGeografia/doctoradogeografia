import { Link } from "react-router-dom";


const BannerHome = () => {
return (

        <>
        {/* Hero Section */}
        <section className="w-full bg-white py-12 lg:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 text-left lg:text-left">
                {/* Small text above title */}
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                    Una nueva forma científica de administrar el conocimiento
                </p>
                
                {/* Main Title */}
                <div className="space-y-2">
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    FORMA <span className="text-blue-9 dark:text-purple-9">PARTE</span>
                    </h1>
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    del cambio
                    </h2>
                </div>
                
                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Únete a una comunidad científica para generar conocimiento sobre los espacios geográficos donde se desarrolla la vida.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="w-60 h-14 bg-blue-9 dark:bg-purple-9 text-white px-8 py-3 rounded-lg hover:bg-blue-10 dark:hover:bg-purple-10 transition-colors duration-200 font-semibold">
                    INSCRÍBETE
                    </button>
                    
                    <Link to="/doctorado">
                        <button   className="w-60 h-14 bg-white border-[1px] border-solid border-text text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors duration-200 font-semibold">
                            MÁS INFORMACIÓN
                        </button>
                    </Link>
                </div>
                
                {/* University Logos */}
                <div className="flex items-center gap-8 lg:gap-16 !mt-16 pt-4 flex-wrap">
                    <div className="flex items-center">
                    <img 
                        src="https://i.imghippo.com/files/YcG2905iHw.png" 
                        alt="Facultad de Filosofía, Humanidades y Artes"
                        className="h-20 lg:h-24 w-auto object-contain"
                    />
                    </div>
                    <div className="flex items-center">
                    <img 
                        src="https://i.imghippo.com/files/dlt1615to.png" 
                        alt="Facultad de Filosofía, Humanidades y Artes"
                        className="h-20 lg:h-24 w-auto object-contain"
                    />
                    </div>
                </div>
                </div>
                
                {/* Right Content - Globe */}
                <div className="hidden lg:flex justify-center lg:justify-end">
                <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
                    {/* Globe image */}
                    <img 
                    src="https://i.imghippo.com/files/uMk2150UsA.png" 
                    alt="Globe"
                    className="w-full h-full object-contain"
                    />
                </div>
                </div>
            </div>
            </div>
        </section>
        </>    

      );
};

export default BannerHome;
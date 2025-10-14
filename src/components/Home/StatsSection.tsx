import StatsCard from "./StatsCard";


const StatsSection = () => {

    return (
        <>
        
    {/* Stats Cards Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              value="15"
              label="AÑOS DE EXPERIENCIA"
              textColor="text-background"
              valueColor="text-blue-9 dark:text-purple-9"
              image="https://i.imghippo.com/files/Bod3628ch.jpg"
              
            />
            
            <StatsCard
              value="Más de 1000"
              label="CURSOS BRINDADOS"
              bgColor="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"
              textColor="text-background"
              valueColor="text-background"
              showPlusIcon={true}
            />
            
            <StatsCard
              value="22"
              label="Especialidades disponibles"
              textColor="text-background"
              valueColor="text-blue-9 dark:text-purple-9"
              image='https://i.imghippo.com/files/kjk1668jw.webp'
            />
          </div>
        </div>
      </section>
    
    </>

    );
};

export default StatsSection;
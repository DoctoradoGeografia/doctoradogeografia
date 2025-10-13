import CourseCard from "./CourseCard";

interface NextCoursesProps {
  cursos: { id: string; fecha: any; titulo: string;  }[];
  formatFirebaseDate: (date: Date) => { dia: number; mes: string; año: number };
}


const NextCourses = ({ cursos, formatFirebaseDate }: NextCoursesProps) => {
  // Usar el hook personalizado para obtener cursos

  // Find closest course

  const closestCourse = () =>{
    const curso =  cursos.length > 0 
    ? cursos[0].id
    : cursos[0].id;
    return curso
  }

  return (
    <>
    {/* Courses Section */}
      <section className="w-full py-16 bg-white bg-gradient-to-b from-blue-2 via-blue-3 to-white dark:bg-gradient-to-b dark:from-purple-2 dark:via-purple-3 dark:to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 items-start mb-12">
            {/* Left Content */}
            <div className="text-center lg:text-left w-full">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 italic">
                Próximos Cursos
              </h2>
            </div>
          </div>
          
          <div className='flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-0 '>
                {/* Right Content */}
                <div className='w-full lg:w-[400px] text-center lg:text-left'>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    "Marca tu calendario y preparate para el próximo desafio académico
                  </p>
                  <button className=" text-blue-9 dark:text-purple-9 font-semibold text-sm hover:underline uppercase tracking-wide">
                    VER TODOS
                  </button>
                </div>
                
                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-24 w-full lg:w-[600px] justify-items-center lg:justify-items-start">
                  {cursos.map((course, index) => (
                    <CourseCard
                      key={index}
                      day={formatFirebaseDate(course.fecha).dia}
                      month={formatFirebaseDate(course.fecha).mes}
                      title={course.titulo}
                      isClosest={course.id === closestCourse()}
                    />
                  ))}
                </div>
            </div>
          
        </div>
      </section>
    </>
  );
};

export default NextCourses;
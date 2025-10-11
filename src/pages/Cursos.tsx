import CourseCard from '../components/CourseCard';
import CourseData from '../components/CourseData';

const Cursos = () => {
  const courses = [
    {
      id: 1,
      imageUrl: "https://i.imghippo.com/files/AGm3730xy.webp",
      title: "Ipsum reading",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam elit ut massa sapien.",
      date: "12 AGO, 2025",
      enrolledCount: 180
    },
    // Agrega más cursos aquí
  ];

  const handleInscribe = (courseId: number) => {
    console.log(`Inscribing to course ${courseId}`);
    // Lógica de inscripción
  };

  // Courses data
  const courses2 = [
    {
      day: "11",
      month: "AGO",
      title: "Metodología de la investigación",
      time: "10am a 12pm",
      date: new Date(2025, 7, 11) // Agosto es mes 7 (0-indexed)
    },
    {
      day: "20",
      month: "AGO",
      title: "Geografía regional y planificación territorial",
      time: "2pm a 4pm",
      date: new Date(2025, 7, 20)
    },
    {
      day: "03",
      month: "SEP",
      title: "Análisis de sistemas ambientales",
      time: "10am a 12pm",
      date: new Date(2025, 8, 3) // Septiembre es mes 8
    }
  ];

  // Find closest course
  const now = new Date();
  const futureCourses = courses2.filter(course => course.date >= now);
  const closestCourse = futureCourses.length > 0 
    ? futureCourses.reduce((closest, current) => 
        current.date < closest.date ? current : closest
      )
    : courses[0]; // If no future courses, use first one


  return (
    <>
    {/*Banner Hero courses */}
    <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-blue-6 via-blue-3 to-blue-7 dark:bg-gradient-to-r dark:from-purple-7 dark:via-purple-3 dark:to-purple-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-text text-center sm:text-left">
        <span className="bg-white text-text px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">
          Expandi tus Horizontes
        </span>
      </div>
      <div className="flex justify-center flex-col mx-auto  lg:flex-row items-center gap-1">
        <div className='lg:w-[500px]'>
          <h1 className="text-2xl lg:text-5xl font-bold text-text leading-tight p-8 text-center sm:text-left"> 
                  Participá de nuestros cursos y enriquecé tu mirada profesional y académica.
          </h1>
        </div>
        <div className="hidden  lg:w-[400px] lg:h-[500px] lg:justify-center lg:items-center lg:flex relative">
          <img 
            src="https://i.imghippo.com/files/lsCM6149js.png" 
            alt=""
            className="w-full h-full object-cover" />
        </div>
        <div className='lg:w-[500px]'>
          <p className="text-lg text-text leading-relaxed italic text-center justify-start">
                "Descubrí los cursos que te ayudarán a perfeccionarte en el campo de la geografía."
          </p>
        </div>
      </div>
      </div>
    </section>
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* Call to Action Button */}
           <div className="flex items-center flex-col gap-4 pt-4">
             <div className="w-8 h-8 flex items-center justify-center">
               <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-9 dark:text-purple-9">
                <path d="M47.2363 36.3821C46.8112 35.5345 45.9463 34.9996 44.9988 34.9996H37.4987V24.9995C37.4987 23.6195 36.3812 22.4995 34.9987 22.4995H24.9986C23.6186 22.4995 22.4986 23.6195 22.4986 24.9995V34.9996H14.9985C14.0535 34.9996 13.1886 35.5345 12.7635 36.3821C12.3411 37.2296 12.4311 38.2421 13.0011 38.9996L28.0012 58.9999C28.4713 59.6299 29.2138 59.9998 29.9987 59.9998C30.7862 59.9998 31.5287 59.6299 31.9988 58.9999L46.999 38.9996C47.5689 38.2421 47.6589 37.2296 47.2363 36.3821Z" fill="currentColor"/>
                <path d="M35.0001 15.0005H25C23.6175 15.0005 22.5 16.118 22.5 17.5005C22.5 18.883 23.6175 20.0005 25 20.0005H35.0001C36.3825 20.0005 37.5001 18.883 37.5001 17.5005C37.5001 16.118 36.3825 15.0005 35.0001 15.0005Z" fill="currentColor"/>
                <path d="M35.0001 7.5H25C23.6175 7.5 22.5 8.61751 22.5 9.99999C22.5 11.3825 23.6175 12.5 25 12.5H35.0001C36.3825 12.5 37.5001 11.3825 37.5001 9.99999C37.5001 8.61751 36.3825 7.5 35.0001 7.5Z" fill="currentColor"/>
                <path d="M35.0002 0H25C23.6175 0 22.5 1.11751 22.5 2.49999C22.5 3.88258 23.6175 5.0001 25 5.0001H35.0001C36.3825 5.0001 37.5001 3.88258 37.5001 2.50011C37.5002 1.11751 36.3827 0 35.0002 0Z" fill="currentColor"/>
              </svg>
             </div>
             <div className="text-text text-center">
              <span className="bg-white text-text px-4 py-2 rounded-lg border-solid border-2 border-gray-7 text-sm font-semibold shadow-sm">
                Ultimos cursos
              </span>
              <h1 className="text-lg text-text italic  my-12">
                Sumate a las propuestas del Doctorado en Geografía
              </h1>
            </div>
           </div>
      </div>

    </section>
    {/* Courses Grid Section */}
    <section className="w-full py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {courses.map((course) => (
            <CourseData
              key={course.id}
              imageUrl={course.imageUrl}
              title={course.title}
              description={course.description}
              date={course.date}
              enrolledCount={course.enrolledCount}
              onInscribe={() => handleInscribe(course.id)}
            />
          ))}
        </div>
      </div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center '>
        <button className="bg-blue-9 hover:bg-blue-10 text-white px-4 py-2  w-72 rounded-lg shadow-md  transition flex flex-row justify-center items-center gap-6 mx-auto dark:bg-purple-9 dark:hover:bg-purple-10">
          Ver todos los cursos
          <svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3307 17.5157C14.0225 17.1928 13.8745 16.8027 13.8869 16.3453C13.9002 15.8879 14.061 15.4978 14.3692 15.1749L18.7223 10.6143L1.54093 10.6143C1.10433 10.6143 0.738106 10.4594 0.442247 10.1494C0.147416 9.84054 0 9.4574 0 9C0 8.5426 0.147416 8.15892 0.442247 7.84897C0.738106 7.54009 1.10433 7.38565 1.54093 7.38565L18.7223 7.38565L14.3307 2.78475C14.0225 2.46188 13.8684 2.07821 13.8684 1.63372C13.8684 1.19031 14.0225 0.807174 14.3307 0.484304C14.6388 0.161435 15.0051 0 15.4293 0C15.8526 0 16.2183 0.161435 16.5265 0.484304L23.5762 7.86996C23.7303 8.03139 23.8397 8.20628 23.9045 8.39462C23.9682 8.58296 24 8.78475 24 9C24 9.21525 23.9682 9.41704 23.9045 9.60538C23.8397 9.79372 23.7303 9.96861 23.5762 10.13L16.488 17.5561C16.2055 17.852 15.8526 18 15.4293 18C15.0051 18 14.6388 17.8386 14.3307 17.5157Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
    {/* Courses Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 items-start mb-12">
            {/* Left Content */}
            <div className="text-center lg:text-left w-full">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 italic">
                Próximos Cursos
              </h2>
            </div>
          </div>
          
          <div className='flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-0'>
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
                  {courses2.map((course, index) => (
                    <CourseCard
                      key={index}
                      day={course.day}
                      month={course.month}
                      title={course.title}
                      time={course.time}
                      date={course.date}
                      isClosest={course === closestCourse}
                    />
                  ))}
                </div>
            </div>
          
        </div>
      </section>
    </>
  );
};

export default Cursos;
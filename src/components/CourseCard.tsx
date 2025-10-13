interface CourseCardProps {
  day: number;
  month: string;
  title: string;

  isClosest?: boolean;
}

const CourseCard = ({ day, month, title, isClosest = false }: CourseCardProps) => {
  const isDark = isClosest;
  
  return (
    <div className={`rounded-xl min-h-[293px] w-[217px] p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${
      isDark ? 'bg-gray-800 text-white' : 'bg-blue-5 text-textd dark:bg-purple-5'
    }`}>
      <div className="flex flex-col items-start space-y-4 h-full">
        {/* Date Badge */}
        <div className={`rounded-lg px-4 py-2 ${
          isDark ? 'bg-gray-700' : 'bg-white'
        }`}>
          <div className="text-3xl font-bold dark:text-purple-9 text-blue-9">
            {day}
          </div>
          <div className={`text-xs uppercase tracking-wide ${
            isDark ? 'text-white' : 'text-gray-600'
          }`}>
            {month}
          </div>
        </div>
        
        {/* Course Info */}
        <div className="flex flex-col items-start gap-5 flex-grow">
          <h4 className={`font-semibold text-base leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h4>
          {/* Link */}
          <button className="text-sm font-medium mt-auto dark:text-purple-9 text-blue-9" >
            Ver más...
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CourseCard;

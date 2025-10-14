import React from 'react';
import { Link } from 'react-router-dom';

interface CourseDataProps {
  id?: string; // ID opcional para el enlace
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  enrolledCount: number;
  onInscribe?: () => void;
}

const CourseData: React.FC<CourseDataProps> = ({
  id,
  imageUrl,
  title,
  description,
  date,
  enrolledCount,
  onInscribe
}) => {
  
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative">
        {id ? (
          <Link to={`/cursos/${id}`} className="block">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-48 object-cover hover:opacity-90 transition-opacity cursor-pointer"
            />
          </Link>
        ) : (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
        {/* Enrolled Badge */}
        <div className="absolute bottom-3 left-3 bg-white rounded-full px-3 py-1 flex items-center gap-2 shadow-md">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-9 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-purple-9 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-blue-7 border-2 border-white"></div>
          </div>
          <span className="text-xs font-semibold text-text">
            +{enrolledCount} INSCRIPTOS
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-text mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          {/* Date */}
          <div className="flex items-center gap-2 text-gray-600">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500"
            >
              <path 
                d="M16.25 2.5H15V1.875C15 1.53125 14.7188 1.25 14.375 1.25C14.0312 1.25 13.75 1.53125 13.75 1.875V2.5H6.25V1.875C6.25 1.53125 5.96875 1.25 5.625 1.25C5.28125 1.25 5 1.53125 5 1.875V2.5H3.75C2.71875 2.5 1.875 3.34375 1.875 4.375V16.25C1.875 17.2812 2.71875 18.125 3.75 18.125H16.25C17.2812 18.125 18.125 17.2812 18.125 16.25V4.375C18.125 3.34375 17.2812 2.5 16.25 2.5ZM16.875 16.25C16.875 16.5938 16.5938 16.875 16.25 16.875H3.75C3.40625 16.875 3.125 16.5938 3.125 16.25V7.5H16.875V16.25Z" 
                fill="currentColor"
              />
            </svg>
            <span className="text-xs font-medium">
              {date}
            </span>
          </div>

          {/* Inscribe Button */}
          <button
            onClick={onInscribe}
            className=" bg-blue-9 hover:bg-blue-10 dark:bg-purple-9 dark:hover:bg-purple-10 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
          >
            INSCRIBITE
          </button>
        </div>
      </div>
    </div>
  );

 // Si tiene ID, envuelve en Link, sino devuelve el contenido directo

};

export default CourseData;
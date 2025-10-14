import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id?: string;
  image: string;
  category: string;
  title: string;
  author: string;
  authorImage: string;
  date: any;
}

const ArticleCard = ({ id, image, category, title, author, authorImage, date="any" }: ArticleCardProps) => {
  const content = (
    //<div className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="rounded-xl shadow-xl p-4 border-2 bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="h-48 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-medium mb-3">
          {category}
        </span>
        
        {/* Title */}
        <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-blue-9 dark:group-hover:text-purple-9 transition-colors line-clamp-2">
          {title}
        </h4>
        
        {/* Author and Date */}
        <div className="flex items-center justify-between text-sm">
          {/* Author */}
          <div className="flex items-center gap-2">
            <img 
              src={authorImage} 
              alt={author}
              className="w-8 h-8 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="text-gray-600 font-medium">{author}</span>
          </div>
          
          {/* Date */}
          <div className="flex items-center gap-1 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
              <path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"></path>
            </svg>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Si tiene ID, envuelve en Link, sino devuelve el contenido directo
  if (id) {
    return <Link to={`/noticias/${id}`}>{content}</Link>;
  }

  return content;
};

export default ArticleCard;

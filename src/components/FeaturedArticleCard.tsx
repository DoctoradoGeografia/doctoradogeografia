interface FeaturedArticleCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  date: string;
}

const FeaturedArticleCard = ({ 
  image, 
  category, 
  title, 
  description, 
  author, 
  authorImage, 
  date 
}: FeaturedArticleCardProps) => {
  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        {/* Category Badge */}
        <span className="inline-block bg-white text-gray-900 px-4 py-1.5 rounded-md text-sm font-medium mb-4">
          {category}
        </span>
        
        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-white/90 mb-6 text-base max-w-3xl">
          {description}
        </p>
        
        {/* Author, Date and Button */}
        <div className="flex items-center justify-between">
          {/* Author and Date */}
          <div className="flex items-center gap-6">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img 
                src={authorImage} 
                alt={author}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
              />
              <span className="font-semibold text-sm uppercase tracking-wide">{author}</span>
            </div>
            
            {/* Date */}
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"></path>
              </svg>
              <span className="text-sm font-medium">{date}</span>
            </div>
          </div>
          
          {/* Read More Button */}
          <button className="border-[1px] border-solid text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:text-blue-9 dark:hover:text-purple-9 transition-colors duration-200 uppercase tracking-wide">
            Leer más
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticleCard;

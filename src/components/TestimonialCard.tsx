interface TestimonialCardProps {
  image: string;
  quote: string;
  name: string;
  role: string;
  logo: string;
}

const TestimonialCard = ({ image, quote="", name, role="", logo="",}: TestimonialCardProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-[400px]">
      {/* Background Image */}
      <img 
        src={image} 
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end ">
        {/* Quote */}
        <p className="text-white text-sm leading-relaxed italic text-center mb-3">
          "{quote}"
        </p>
        
        {/* Bottom Section */}
        <div className="flex items-end justify-between  p-6">
          {/* Name and Role */}
          {/* Logo */}
          <img 
            src={logo} 
            alt="Logo"
            className="h-10 w-auto opacity-90"
          />
          <div className="text-left">
            <h4 className="text-white font-bold text-base mb-1">{name}</h4>
            <p className="text-white/80 text-xs ">{role}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

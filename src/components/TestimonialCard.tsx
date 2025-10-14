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
          <svg className="h-12 w-auto opacity-90" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="309px" height="332.945px" viewBox="0 0 309 332.945" enable-background="new 0 0 309 332.945" xml:space="preserve">
          <g id="Capa_6">
            <line fill="none" stroke="#FFFFFF" stroke-width="7.5" stroke-miterlimit="10" x1="156" y1="66.551" x2="156" y2="293.551"/>
            
              <line fill="none" stroke="#FFFFFF" stroke-width="7.5" stroke-miterlimit="10" x1="42.281" y1="179.844" x2="269.281" y2="179.844"/>
          </g>
          <g id="Capa_5">
            <polygon fill="#DDDDDD" points="145.672,81.891 145.672,169.734 57.859,169.734  "/>
            <polygon fill="#DDDDDD" points="166.104,81.953 166.104,169.797 253.916,169.797  "/>
            <polygon fill="#DDDDDD" points="145.625,278.021 145.625,190.178 57.813,190.178  "/>
            <polygon fill="#DDDDDD" points="166.091,277.959 166.091,190.115 253.903,190.115  "/>
          </g>
          <g id="Capa_4">
            <g id="Capa_2">
              <g>
                <path fill="#FFFFFF" d="M86.125,162.766V92.514h48.313l0.025,12.249h-34.156v16.487h29.271l0.021,11.763l-29.292-0.028v29.781     H86.125z"/>
              </g>
              <path fill="#FFFFFF" d="M201,195.833h15.375L246,269.959h-16l-6.5-16.795l-29.5-0.126l-6.375,16.921h-15.5L201,195.833z     M209.146,213.667l-10.333,26.667h20.5L209.146,213.667z"/>
              <polygon fill="#FFFFFF" points="80.667,195.833 95.667,195.833 95.667,225 124.917,225 124.969,195.833 139.5,195.833     139.5,269.959 124.833,269.959 124.875,237.583 95.583,237.5 95.583,269.959 80.667,269.959   "/>
              <g>
                <path fill="#FFFFFF" d="M185.164,162.766V92.514h48.313l0.025,12.249h-34.156v16.487h29.271l0.021,11.763l-29.293-0.028v29.781     H185.164z"/>
              </g>
            </g>
          </g>
          </svg>
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

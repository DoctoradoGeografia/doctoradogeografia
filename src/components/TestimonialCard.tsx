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
          {/* Logo className="h-12 w-auto opacity-90" */}
          <svg className="h-12 w-auto opacity-90" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="222.281px" height="215px" viewBox="0 0 222.281 215" enable-background="new 0 0 222.281 215" xmlSpace="preserve">
          <g id="Capa_6">
            <line fill="none" stroke="#FFFFFF" stroke-width="7.5" stroke-miterlimit="10" x1="109" y1="-5.449" x2="109" y2="221.551"/>
            
              <line fill="none" stroke="#FFFFFF" stroke-width="7.5" stroke-miterlimit="10" x1="-4.719" y1="107.844" x2="222.281" y2="107.844"/>
          </g>
          <g id="Capa_5">
            <polygon fill="#FAD7E9" points="98.672,9.891 98.672,97.734 10.859,97.734  "/>
            <polygon fill="#FAD7E9" points="119.104,9.953 119.104,97.797 206.916,97.797  "/>
            <polygon fill="#FAD7E9" points="98.625,206.021 98.625,118.178 10.813,118.178  "/>
            <polygon fill="#FAD7E9" points="119.091,205.959 119.091,118.115 206.903,118.115  "/>
          </g>
          <g id="Capa_4">
            <g id="Capa_2">
              <g>
                <path fill="#A6177A" d="M39.125,90.766V20.514h48.313l0.025,12.249H53.307V49.25h29.271l0.021,11.763l-29.292-0.028v29.781     H39.125z"/>
              </g>
              <path fill="#A6177A" d="M154,123.833h15.375L199,197.959h-16l-6.5-16.795l-29.5-0.126l-6.375,16.921h-15.5L154,123.833z     M162.146,141.667l-10.333,26.667h20.5L162.146,141.667z"/>
              <polygon fill="#A6177A" points="33.667,123.833 48.667,123.833 48.667,153 77.917,153 77.969,123.833 92.5,123.833 92.5,197.959     77.833,197.959 77.875,165.583 48.583,165.5 48.583,197.959 33.667,197.959   "/>
              <g>
                <path fill="#A6177A" d="M138.164,90.766V20.514h48.313l0.025,12.249h-34.156V49.25h29.271l0.021,11.763l-29.293-0.028v29.781     H138.164z"/>
              </g>
            </g>
          </g>
          </svg>
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

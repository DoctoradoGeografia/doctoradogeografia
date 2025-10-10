interface StatsCardProps {
  value: string;
  label: string;
  bgColor?: string;
  textColor?: string;
  valueColor?: string;
  showPlusIcon?: boolean;
  image?: string;
}

const StatsCard = ({ 
  value, 
  label, 
  bgColor = 'bg-gray-800',
  textColor = 'text-white',
  valueColor = 'text-white',
  showPlusIcon = false,
  image
}: StatsCardProps) => {
  return (
    <div className={`${bgColor} ${textColor} rounded-2xl p-8 relative overflow-hidden shadow-lg`}>
      {/* Plus Icon in top-left corner */}
      {showPlusIcon && (
        <div className="absolute top-0 left-0 bg-white rounded-br-2xl p-3">
          <svg 
            className="w-6 h-6 text-blue-9 dark:text-purple-9" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M12 4v16m8-8H4" 
            />
          </svg>
        </div>
      )}

      {/* Background Image if provided */}
      {image && (
        <div className="absolute inset-0 opacity-30">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[180px]">
        {/* Value */}
        <div className={`text-4xl lg:text-5xl font-bold ${valueColor} mb-4`}>
          {value}
        </div>
        
        {/* Divider Line */}
        <div className="w-24 h-0.5 bg-white/30 mb-4"></div>
        
        {/* Label */}
        <div className="text-sm font-semibold uppercase tracking-wider text-center">
          {label}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

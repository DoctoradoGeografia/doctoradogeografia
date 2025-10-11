interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  layout?: 'row' | 'column';
}

const FeatureCard = ({ icon, title, description, layout = 'row' }: FeatureCardProps) => {
  const isRow = layout === 'row';
  
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${
      isRow ? 'flex flex-col sm:flex-row items-start gap-4' : 'flex flex-col items-start gap-4'
    }`}>
      {/* Icon */}
      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-purple-100 flex items-center justify-center ${
        isRow ? '' : 'mb-2'
      }`}>
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-text mb-2">
          {title}
        </h3>
        <p className="text-gray-11 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;

interface AuthorityCardProps {
  image: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const AuthorityCard = ({ image, name, isActive, onClick }: AuthorityCardProps) => {
  if (isActive) {
    return null; // El card activo se renderiza de forma diferente en la página
  }

  return (
    <div 
      onClick={onClick}
      className="cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <img 
        src={image} 
        alt={name}
        className="w-32 h-40 object-cover rounded-lg shadow-md grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export default AuthorityCard;



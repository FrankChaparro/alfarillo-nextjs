interface CardProps {
  title: string;
  description: string;
  
}

function Card( { title, description}: CardProps) {
  return (
    <div className="p-10 h-80 bg-gray-800 flex flex-col  justify-center">
      
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
        </h5>
      
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {description}
      </p>
     
    </div>
  );
}

export default Card;

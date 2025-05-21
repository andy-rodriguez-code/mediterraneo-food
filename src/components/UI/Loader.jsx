import React from 'react';

const Loader = ({ size = 'md', color = 'primary' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  };

  const colorClasses = {
    primary: 'border-blue-500',
    secondary: 'border-gray-500',
    white: 'border-white'
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className={`animate-spin rounded-full border-t-2 ${sizeClasses[size]} ${colorClasses[color]}`}
      ></div>
    </div>
  );
};

export default Loader;
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-lg px-14 py-6 font-semibold text-xl';
  const variants = {
    primary: 'bg-[#933C24] text-gray-100',
    outline: 'bg-transparent text-amber-300 border border-amber-300',
    secondary: 'bg-amber-300 text-gray-900'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
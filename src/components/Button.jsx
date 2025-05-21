import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
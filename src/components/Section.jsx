import React from 'react';

const Section = ({ 
  children,
  bgImage,
  className = '',
  ...props 
}) => {
  const sectionStyle = bgImage 
    ? { backgroundImage: `url(${bgImage})` } 
    : {};

  return (
    <section 
      className={`${bgImage ? 'bg-cover' : ''} ${className}`}
      style={sectionStyle}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
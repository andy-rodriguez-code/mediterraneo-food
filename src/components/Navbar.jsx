import React from 'react';

const Navbar = ({ links = [], logo, ctaButton }) => {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-white">
      <div className="logo">
        <img src={logo} alt="Delicious Cafe Logo" className="h-12" />
      </div>
      <nav className="flex gap-8">
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className={`text-xl font-semibold ${link.active ? 'text-amber-300' : 'text-gray-100'}`}
          >
            {link.text}
          </a>
        ))}
      </nav>
      {ctaButton && (
        <button className="bg-[#933C24] text-gray-100 border border-black rounded-lg px-9 py-6 font-semibold text-xl">
          {ctaButton.text}
        </button>
      )}
    </header>
  );
};

export default Navbar;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Mediterráneo Food</h3>
            <p className="text-gray-400">Delicious pastries & breads</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300">About</a>
            <a href="#" className="hover:text-yellow-300">Contact</a>
            <a href="#" className="hover:text-yellow-300">Terms</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mediterráneo Food. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
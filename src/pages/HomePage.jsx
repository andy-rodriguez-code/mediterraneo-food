import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Mediterráneo Food
        </h1>
        <p className="text-lg mb-8">
          Discover our delicious selection of artisanal breads and pastries
        </p>
        <Link to="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image_url} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}</span>
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
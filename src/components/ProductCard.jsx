import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="font-['Inter'] text-2xl font-medium text-gray-900 mb-2">
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="font-['Inter'] text-2xl font-semibold text-gray-900">
            ${product.price}
          </span>
          <button className="bg-[#933C24] text-gray-100 rounded-md px-4 py-2 font-semibold text-lg">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
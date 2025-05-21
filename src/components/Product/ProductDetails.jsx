import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../services/products';
import { useParams } from 'react-router-dom';
import Button from '../Button';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <div>Loading product details...</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold mr-4">${product.price}</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {product.category}
              </span>
            </div>
            <p className="text-gray-700 mb-8">{product.description}</p>
            <Button className="w-full">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link 
          key={product.id} 
          to={`/products/${product.id}`}
          className="hover:scale-105 transition-transform duration-200"
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
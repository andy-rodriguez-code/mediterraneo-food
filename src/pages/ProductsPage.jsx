import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductList from '../components/Product/ProductList';
import { getProducts } from '../services/products';

const ProductsPage = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) return <div>Loading products...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
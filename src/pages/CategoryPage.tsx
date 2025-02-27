import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import Header from '../components/Header';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Format the category name for display
  const formatCategoryName = (cat: string) => {
    return cat
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Filter products by category
  const categoryProducts = products.filter(product => {
    const normalizedCategory = product.category.toLowerCase().replace("'s", "s");
    return normalizedCategory === category?.toLowerCase();
  });
  
  return (
    <div>
      <Header onSearch={() => {}} />
      
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">
            {formatCategoryName(category || '')}
          </h1>
          <p className="text-gray-600">
            {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>
      </div>
      
      <ProductGrid products={categoryProducts} />
    </div>
  );
};

export default CategoryPage;
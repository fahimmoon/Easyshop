import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Tag, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  discount?: number;
}

interface CategoryTemplateProps {
  title: string;
  description: string;
  subcategories: string[];
  featuredProducts: Product[];
  filters: {
    label: string;
    options: string[];
  }[];
  bannerImage: string;
  bannerColor: string;
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
  title,
  description,
  subcategories,
  featuredProducts,
  filters,
  bannerImage,
  bannerColor
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Banner */}
      <div className={`${bannerColor} py-12`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/80 max-w-2xl">{description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              {filters.map((filter, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-medium mb-2">{filter.label}</h4>
                  <div className="space-y-2">
                    {filter.options.map((option, idx) => (
                      <label key={idx} className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-600 mr-2" />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Subcategories */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {subcategories.map((subcat, index) => (
                <Link
                  key={index}
                  to={`/category/${title.toLowerCase()}/${subcat.toLowerCase()}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <span className="text-gray-800 font-medium">{subcat}</span>
                </Link>
              ))}
            </div>

            {/* Featured Products */}
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                        -{product.discount}%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center mt-2">
                      <span className="text-lg font-bold text-gray-800">
                        ${product.price}
                      </span>
                      <div className="ml-auto flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTemplate;

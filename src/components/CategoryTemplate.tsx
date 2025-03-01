import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  discount: number;
  description?: string;
  specifications?: Record<string, string>;
}

interface Filter {
  label: string;
  options: string[];
}

interface CategoryTemplateProps {
  title: string;
  description: string;
  bannerColor: string;
  bannerImage: string;
  subcategories: string[];
  filters: Filter[];
  featuredProducts: Product[];
  additionalFeatures?: Record<string, any>;
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
  title,
  description,
  bannerColor,
  bannerImage,
  subcategories,
  filters,
  featuredProducts,
  additionalFeatures
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className={`${bannerColor} h-48 relative`}>
        <img src={bannerImage} alt={title} className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-lg text-center max-w-2xl px-4">{description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Subcategories */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory}
                className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow text-center"
              >
                {subcategory}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              {filters.map((filter) => (
                <div key={filter.label} className="mb-4">
                  <h3 className="font-medium mb-2">{filter.label}</h3>
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <label key={option} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xl font-bold">${product.price}</span>
                      {product.discount > 0 && (
                        <span className="text-green-600">-{product.discount}%</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{product.rating}</span>
                    </div>
                    {product.description && (
                      <p className="text-gray-600 mt-2">{product.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        {additionalFeatures && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(additionalFeatures).map(([key, value]) => (
                <div key={key} className="text-center">
                  <span className="block font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-gray-600">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryTemplate;

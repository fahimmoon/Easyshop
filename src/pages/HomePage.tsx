import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import Header from '../components/Header';
import { ArrowRight, TrendingUp, Tag, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }
    
    const searchTerm = query.toLowerCase();
    const results = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm) || 
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
    
    setFilteredProducts(results);
  };
  
  // Featured products (just showing the highest rated ones)
  const featuredProducts = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);
  
  // Daily deals (random products with "discount")
  const dailyDeals = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
    
  // Filter by category
  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        product => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };
  
  // Categories for quick filter
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'jewelery', name: 'Jewelery' },
    { id: "men's clothing", name: "Men's Clothing" },
    { id: "women's clothing", name: "Women's Clothing" }
  ];
  
  return (
    <div>
      <Header onSearch={handleSearch} />
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Find Exactly What You're Looking For</h1>
            <p className="text-lg mb-6 text-blue-100">Shop millions of items with fast shipping and buyer protection.</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition shadow-md">
                Shop Now
              </button>
              <button className="bg-transparent text-white border border-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Sell Items
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
              <div className="grid grid-cols-2 gap-3">
                {categories.filter(c => c.id !== 'all').map(category => (
                  <Link 
                    key={category.id}
                    to={`/category/${category.id.replace("'s", "s")}`}
                    className="flex items-center bg-white/20 hover:bg-white/30 transition p-3 rounded-lg"
                  >
                    <span>{category.name}</span>
                    <ArrowRight size={16} className="ml-auto" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick category filter */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-3 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryFilter(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full mr-2 text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Value propositions */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <Award size={24} className="text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Authentic Items</h3>
              <p className="text-xs text-gray-500">Verified sellers and products</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <Tag size={24} className="text-green-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Best Prices</h3>
              <p className="text-xs text-gray-500">Deals and discounts every day</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-purple-100 p-3 rounded-full mb-3">
                <Clock size={24} className="text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Fast Delivery</h3>
              <p className="text-xs text-gray-500">Quick and reliable shipping</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-yellow-100 p-3 rounded-full mb-3">
                <TrendingUp size={24} className="text-yellow-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Trending Items</h3>
              <p className="text-xs text-gray-500">Discover what's popular now</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Daily Deals */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Daily Deals</h2>
          <Link to="/deals" className="text-blue-500 hover:text-blue-700 flex items-center text-sm font-medium">
            See all deals
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dailyDeals.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">
                    {product.title}
                  </h3>
                  <div className="flex items-center mb-1">
                    <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <span className="ml-2 text-xs text-gray-500 line-through">
                      ${(product.price * 1.25).toFixed(2)}
                    </span>
                  </div>
                  <div className="text-xs text-green-600 font-medium mb-2">
                    {Math.floor(Math.random() * 20) + 10}% OFF
                  </div>
                  <div className="text-xs text-gray-500">
                    {Math.floor(Math.random() * 100) + 10} sold in last 24 hours
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="bg-gray-50 py-8">
        <ProductGrid products={featuredProducts} title="Featured Products" />
      </div>
      
      {/* All Products or Search Results */}
      <ProductGrid 
        products={filteredProducts} 
        title={filteredProducts !== products ? "Search Results" : "All Products"} 
      />
      
      {/* Newsletter */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated on Deals</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Subscribe to our newsletter and never miss out on exclusive deals and promotions.</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 py-3 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
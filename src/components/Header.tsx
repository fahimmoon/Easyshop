import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart, Bell, HelpCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    navigate('/');
  };

  const categories = [
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
    "Home & Garden",
    "Sporting Goods",
    "Toys & Hobbies",
    "Business & Industrial"
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top navigation bar */}
      <div className="bg-gray-100 py-1 text-xs border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">Daily Deals</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Brand Outlet</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Help & Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500 flex items-center">
              <Bell size={14} className="mr-1" />
              Notifications
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 flex items-center">
              <Heart size={14} className="mr-1" />
              Watchlist
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 flex items-center">
              <User size={14} className="mr-1" />
              Sign in
            </a>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#e53238]">e</span>
            <span className="text-2xl font-bold text-[#0064d2]">b</span>
            <span className="text-2xl font-bold text-[#f5af02]">a</span>
            <span className="text-2xl font-bold text-[#86b817]">y</span>
          </Link>

          {/* Shop by category dropdown - desktop */}
          <div className="hidden md:block relative ml-4">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-500">
              <span>Shop by category</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Search bar - desktop */}
          <form 
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 mx-8"
          >
            <div className="relative w-full flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full py-2 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select className="border-t border-b border-r border-gray-300 bg-gray-100 text-gray-700 text-sm px-2">
                <option>All Categories</option>
                {categories.map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <button
                type="submit"
                className="px-6 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link to="/watchlist" className="hidden md:flex items-center text-gray-700 hover:text-blue-500">
              <Heart size={20} className="mr-1" />
              <span className="text-sm">Watchlist</span>
            </Link>
            
            <Link to="/cart" className="flex items-center text-gray-700 hover:text-blue-500">
              <div className="relative">
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="ml-1 text-sm hidden md:inline">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <form 
              onSubmit={handleSearchSubmit}
              className="mb-4"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full py-2 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
            
            <div className="border-t border-gray-200 pt-4 pb-2">
              <h3 className="font-semibold text-gray-800 mb-2">Categories</h3>
              <nav>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link 
                        to={`/category/${category.toLowerCase().replace("'s", "s").replace(/\s+&\s+/g, "-")}`}
                        className="block py-2 text-gray-600 hover:text-blue-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-2">
              <h3 className="font-semibold text-gray-800 mb-2">Account</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center py-2 text-gray-600 hover:text-blue-500">
                    <User size={16} className="mr-2" />
                    Sign in
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center py-2 text-gray-600 hover:text-blue-500">
                    <Heart size={16} className="mr-2" />
                    Watchlist
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center py-2 text-gray-600 hover:text-blue-500">
                    <HelpCircle size={16} className="mr-2" />
                    Help & Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Categories - desktop */}
      <div className="hidden md:block bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <nav>
            <ul className="flex space-x-8 py-2 text-sm">
              {categories.map((category) => (
                <li key={category}>
                  <Link 
                    to={`/category/${category.toLowerCase().replace("'s", "s").replace(/\s+&\s+/g, "-")}`}
                    className="text-gray-600 hover:text-blue-500"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
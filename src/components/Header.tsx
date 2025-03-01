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
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
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
      {/* Top navigation bar - desktop only */}
      <div className="hidden md:block bg-gray-100 py-1 text-xs border-b border-gray-200">
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
      
      {/* Main header - more compact on mobile */}
      <div className="container mx-auto px-2 md:px-4 py-1 md:py-3">
        <div className="flex items-center h-12 md:h-auto">
          {/* Compact Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-lg md:text-2xl font-bold text-blue-600">Easy</span>
            <span className="text-lg md:text-2xl font-bold text-green-500">Shop</span>
          </Link>

          {/* Mobile search button */}
          <button 
            className="md:hidden ml-3 p-2 text-gray-500 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)} // Add state for search modal if needed
          >
            <Search size={18} />
          </button>

          {/* Desktop search bar */}
          <form className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full flex group">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full py-2 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:border-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select className="border-t border-b border-r border-gray-300 bg-gray-100 text-gray-700 text-sm px-2">
                <option>All Categories</option>
                {categories.map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <button
                type="submit"
                className="px-6 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Search size={20} className="animate-bounce-slight" />
              </button>
            </div>
          </form>

          {/* Mobile menu button */}
          <button 
            className="md:hidden ml-auto p-2 text-gray-500 hover:text-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/watchlist" className="hidden md:flex items-center text-gray-700 hover:text-red-500 transition-colors duration-300">
              <Heart size={20} className="mr-1 transform hover:scale-110 transition-transform hover:animate-wiggle" />
              <span className="text-sm">Watchlist</span>
            </Link>
            
            {/* Cart icon - visible on both mobile and desktop */}
            <Link to="/cart" className="hidden md:flex items-center text-gray-700 hover:text-blue-500 transition-colors duration-300">
              <div className="relative transform hover:scale-110 transition-transform">
                <ShoppingCart size={22} className="hover:animate-wiggle" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-up">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="ml-1 text-sm hidden md:inline">Cart</span>
            </Link>

            {/* Login/Signup buttons - only visible on desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <User className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <User className="w-5 h-5" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Redesigned Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[48px] bg-white z-50 overflow-y-auto">
          {/* Mobile Search Bar */}
          <div className="sticky top-0 bg-white p-2 shadow-sm">
            <form onSubmit={handleSearchSubmit} className="flex">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 text-sm border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 bg-blue-500 text-white rounded-r-lg"
              >
                <Search size={16} />
              </button>
            </form>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-4 gap-1 p-2 bg-gray-50">
            <Link to="/cart" className="flex flex-col items-center p-2 bg-white rounded">
              <ShoppingCart size={16} />
              <span className="text-xs mt-1">Cart</span>
            </Link>
            <Link to="/wishlist" className="flex flex-col items-center p-2 bg-white rounded">
              <Heart size={16} />
              <span className="text-xs mt-1">Wishlist</span>
            </Link>
            <Link to="/orders" className="flex flex-col items-center p-2 bg-white rounded">
              <Bell size={16} />
              <span className="text-xs mt-1">Orders</span>
            </Link>
            <Link to="/account" className="flex flex-col items-center p-2 bg-white rounded">
              <User size={16} />
              <span className="text-xs mt-1">Account</span>
            </Link>
          </div>

          {/* Categories Accordion */}
          <div className="p-2">
            <div className="bg-white rounded-lg">
              <h3 className="font-medium px-3 py-2 text-sm border-b">Shop by Category</h3>
              <div className="grid grid-cols-2 gap-2 p-2">
                {categories.map((category) => (
                  <Link 
                    key={category}
                    to={`/category/${category.toLowerCase().replace("'s", "s").replace(/\s+&\s+/g, "-")}`}
                    className="text-xs p-2 border rounded bg-gray-50 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-2">
            <div className="bg-white rounded-lg">
              <h3 className="font-medium px-3 py-2 text-sm border-b">Quick Links</h3>
              <div className="p-2 space-y-2">
                <a href="#" className="flex items-center text-sm px-2 py-1.5 text-gray-600">
                  <HelpCircle size={14} className="mr-2" />
                  Help Center
                </a>
                <a href="#" className="flex items-center text-sm px-2 py-1.5 text-gray-600">
                  <Bell size={14} className="mr-2" />
                  Track Orders
                </a>
              </div>
            </div>
          </div>

          {/* Auth buttons */}
          <div className="fixed bottom-0 left-0 right-0 p-2 bg-white border-t">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full py-2 bg-red-50 text-red-600 rounded text-sm font-medium"
              >
                Logout
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  className="py-2 border border-blue-500 text-blue-500 rounded text-center text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="py-2 bg-blue-500 text-white rounded text-center text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Desktop Categories */}
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
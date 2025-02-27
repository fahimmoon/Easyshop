import React from 'react';
import { Product } from '../types';
import { Star, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  // Format price with commas for thousands
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
  };
  
  // Generate random shipping info for more realism
  const shippingCost = Math.random() > 0.3 ? 0 : 4.99 + Math.random() * 10;
  const shippingDays = Math.floor(Math.random() * 5) + 1;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 relative group">
      {/* Watchlist button */}
      <button className="absolute top-2 right-2 z-10 bg-white/80 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100">
        <Heart size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
      </button>
      
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
          {Math.random() > 0.7 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-800 mb-2 hover:text-blue-500 transition-colors line-clamp-2 h-10">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2 text-xs text-gray-500">
          <span className="capitalize">{product.category}</span>
          <span className="mx-1">•</span>
          <span className="text-yellow-400 flex items-center">
            <Star size={14} fill="currentColor" />
            <span className="ml-1">{product.rating.rate}</span>
          </span>
          <span className="ml-1">({product.rating.count})</span>
        </div>
        
        <div className="mb-2">
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          {Math.random() > 0.6 && (
            <span className="ml-2 text-xs text-gray-500 line-through">
              {formatPrice(product.price * 1.2)}
            </span>
          )}
        </div>
        
        <div className="flex items-center text-xs text-gray-600 mb-3">
          {shippingCost === 0 ? (
            <span className="text-green-600 font-medium">Free shipping</span>
          ) : (
            <span>+{formatPrice(shippingCost)} shipping</span>
          )}
          <span className="mx-1">•</span>
          <Clock size={12} className="mr-1" />
          <span>{shippingDays} day delivery</span>
        </div>
        
        <div className="flex justify-between items-center">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full bg-blue-500 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
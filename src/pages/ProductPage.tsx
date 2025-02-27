import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Star, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">The product you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }
  
  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div>
      <Header onSearch={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-blue-500 hover:underline mb-6">
          <ArrowLeft size={16} className="mr-1" />
          Back to products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto object-contain max-h-96"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < Math.floor(product.rating.rate) ? "currentColor" : "none"} 
                    className={i < Math.floor(product.rating.rate) ? "" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
            
            <div className="text-3xl font-bold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center hover:bg-blue-600 transition"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              
              <button className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition">
                Buy Now
              </button>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="font-semibold mb-2">Product Details:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Category: {product.category}</li>
                <li>ID: {product.id}</li>
                <li>In stock: Yes</li>
                <li>Free shipping available</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <ProductGrid products={relatedProducts} title="Related Products" />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
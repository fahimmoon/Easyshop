import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  
  if (cart.length === 0) {
    return (
      <div>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            <ArrowLeft size={16} className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">
                    {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
                  </h2>
                  <button 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <ul>
                {cart.map(item => (
                  <li key={item.id} className="border-b border-gray-200 last:border-b-0">
                    <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                      {/* Product Image */}
                      <Link to={`/product/${item.id}`} className="mb-4 sm:mb-0 sm:mr-6">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-20 h-20 object-cover rounded"
                        />
                      </Link>
                      
                      {/* Product Details */}
                      <div className="flex-1">
                        <Link 
                          to={`/product/${item.id}`}
                          className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-colors"
                        >
                          {item.title}
                        </Link>
                        <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                        
                        <div className="flex flex-wrap items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-1 border-l border-r border-gray-300">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          {/* Price and Remove */}
                          <div className="flex items-center mt-4 sm:mt-0">
                            <span className="font-bold text-lg mr-4">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium mt-6 hover:bg-blue-600 transition">
                Proceed to Checkout
              </button>
              
              <Link 
                to="/" 
                className="w-full block text-center text-blue-500 mt-4 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
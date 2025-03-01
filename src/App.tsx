import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Electronics from './pages/categories/Electronics';
import Jewelery from './pages/categories/Jewelery';
import MensClothing from './pages/categories/MensClothing';
import WomensClothing from './pages/categories/WomensClothing';
import HomeAndGarden from './pages/categories/HomeAndGarden';
import SportingGoods from './pages/categories/SportingGoods';
import ToysAndHobbies from './pages/categories/ToysAndHobbies';
import BusinessAndIndustrial from './pages/categories/BusinessAndIndustrial';

// Error Boundary Component
class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Oops! Something went wrong.
            </h1>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search functionality
  };

  return (
    <ErrorBoundary>
      <Suspense 
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
          </div>
        }
      >
        <Router>
          <CartProvider>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Header onSearch={handleSearch} />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/category/:categoryName" element={<CategoryPage />} />
                  <Route path="/category/electronics" element={<Electronics />} />
                  <Route path="/category/jewelery" element={<Jewelery />} />
                  <Route path="/category/mens-clothing" element={<MensClothing />} />
                  <Route path="/category/womens-clothing" element={<WomensClothing />} />
                  <Route path="/category/home-and-garden" element={<HomeAndGarden />} />
                  <Route path="/category/sporting-goods" element={<SportingGoods />} />
                  <Route path="/category/toys-and-hobbies" element={<ToysAndHobbies />} />
                  <Route 
                    path="/category/business-and-industrial" 
                    element={<BusinessAndIndustrial />} 
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
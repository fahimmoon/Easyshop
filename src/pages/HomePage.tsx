import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, Package, Award, Gift, Star, 
  Clock, Percent, TrendingUp, Heart,
  ShoppingBag, Zap, Coffee, Gem, Laptop,
  Shirt, Watch, Camera, Headphones,
  Apple, Smartphone, Monitor, Speaker, 
  Gamepad, Car, Plane, Baby, Dumbbell, 
  Music, Brush, Beef, BookOpen
} from 'lucide-react';

const HomePage = () => {
  const featuredCategories = [
    { 
      name: 'Electronics', 
      icon: <Laptop className="w-12 h-12 animate-float text-blue-500" />, 
      color: 'bg-gradient-to-br from-blue-100 to-blue-200',
      items: ['Laptops', 'Smartphones', 'Tablets'],
      description: 'Latest gadgets and tech',
      itemCount: 1234
    },
    { 
      name: 'Fashion', 
      icon: <Shirt className="w-12 h-12 animate-float text-pink-500" />, 
      color: 'bg-gradient-to-br from-pink-100 to-pink-200',
      items: ['Men', 'Women', 'Kids'],
      description: 'Trending styles for all',
      itemCount: 2547
    },
    { 
      name: 'Watches', 
      icon: <Watch className="w-12 h-12 animate-spin-slow text-purple-500" />, 
      color: 'bg-gradient-to-br from-purple-100 to-purple-200',
      items: ['Smart Watches', 'Luxury', 'Sports'],
      description: 'Timeless elegance',
      itemCount: 856
    },
    { 
      name: 'Cameras', 
      icon: <Camera className="w-12 h-12 animate-pulse text-green-500" />, 
      color: 'bg-gradient-to-br from-green-100 to-green-200',
      items: ['DSLR', 'Mirrorless', 'Accessories'],
      description: 'Capture moments',
      itemCount: 432
    },
    { 
      name: 'Audio', 
      icon: <Headphones className="w-12 h-12 animate-bounce-slight text-yellow-500" />, 
      color: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
      items: ['Headphones', 'Speakers', 'Microphones'],
      description: 'Premium sound gear',
      itemCount: 978
    },
  ];

  const benefits = [
    { 
      icon: <Truck className="w-6 h-6 text-blue-500 animate-float" />, 
      title: 'Free Shipping', 
      description: 'On orders over $100',
      color: 'bg-blue-100 hover:bg-blue-200'
    },
    { icon: <Package className="w-6 h-6" />, title: 'Easy Returns', description: '30-day return policy' },
    { icon: <Award className="w-6 h-6" />, title: 'Best Quality', description: 'Certified products' },
    { icon: <Gift className="w-6 h-6" />, title: 'Special Offers', description: 'Regular discounts' },
  ];

  const deals = [
    { 
      title: 'Flash Sales',
      subtitle: 'Limited time offers',
      icon: <Zap className="w-8 h-8 animate-pulse text-yellow-400" />, 
      color: 'bg-gradient-to-r from-yellow-500 to-yellow-400',
      stats: { discount: '70%', items: 156, timeLeft: '2h 45m' },
      bgPattern: 'bg-zigzag-yellow'
    },
    { 
      title: 'Daily Deals',
      subtitle: 'New deals every day',
      icon: <Clock className="w-8 h-8 animate-spin-slow text-blue-400" />, 
      color: 'bg-gradient-to-r from-blue-500 to-blue-400',
      stats: { discount: '50%', items: 284, timeLeft: '12h 30m' },
      bgPattern: 'bg-dots-blue'
    },
    { 
      title: 'Clearance',
      subtitle: 'End of season',
      icon: <Percent className="w-8 h-8 animate-bounce-slight text-red-400" />, 
      color: 'bg-gradient-to-r from-red-500 to-red-400',
      stats: { discount: '80%', items: 93, timeLeft: '3d 5h' },
      bgPattern: 'bg-squares-red'
    },
    { 
      title: 'Trending',
      subtitle: 'Most popular',
      icon: <TrendingUp className="w-8 h-8 animate-float text-green-400" />, 
      color: 'bg-gradient-to-r from-green-500 to-green-400',
      stats: { discount: '30%', items: 428, timeLeft: '5d' },
      bgPattern: 'bg-circles-green'
    },
  ];

  const brandPartners = [
    {
      name: 'Apple',
      logo: <Apple className="w-12 h-12 text-gray-800 animate-float" />,
      tagline: 'Think Different',
      items: ['iPhone 14 Pro', 'MacBook Air', 'iPad Pro', 'Apple Watch'],
      color: 'bg-gradient-radial from-gray-100 to-gray-200'
    },
    {
      name: 'Samsung',
      logo: <Smartphone className="w-12 h-12 text-blue-600 animate-pulse" />,
      tagline: 'Do What You Can\'t',
      items: ['Galaxy S23 Ultra', 'Galaxy Book', 'Smart TV', 'Galaxy Watch'],
      color: 'bg-gradient-radial from-blue-100 to-blue-200'
    },
    {
      name: 'Sony',
      logo: <Monitor className="w-12 h-12" />,
      tagline: 'Be Moved',
      items: ['PlayStation 5', 'WH-1000XM4', 'Bravia TV', 'Alpha Cameras'],
      color: 'bg-slate-100'
    },
    {
      name: 'Nike',
      logo: <Dumbbell className="w-12 h-12" />,
      tagline: 'Just Do It',
      items: ['Air Max', 'Tech Fleece', 'Training Gear', 'Basketball'],
      color: 'bg-orange-100'
    }
  ];

  const shopByCategory = [
    { 
      name: 'Electronics', 
      icon: <Monitor className="w-8 h-8 text-blue-500" />, 
      items: ['Laptops', 'Smartphones', 'Tablets'],
      color: 'from-blue-500 to-blue-600',
      itemCount: 1567,
      featured: ['MacBook Pro', 'iPhone 14', 'iPad Air']
    },
    { 
      name: 'Gaming', 
      icon: <Gamepad className="w-8 h-8 text-purple-500" />, 
      items: ['Consoles', 'Games', 'Accessories'],
      color: 'from-purple-500 to-purple-600',
      itemCount: 892,
      featured: ['PS5', 'Xbox Series X', 'Nintendo Switch']
    },
    { 
      name: 'Automotive', 
      icon: <Car className="w-8 h-8 text-green-500" />, 
      items: ['Parts', 'Tools', 'Accessories'],
      color: 'from-green-500 to-green-600',
      itemCount: 2341,
      featured: ['Car Care', 'Spare Parts', 'Interior']
    },
    { 
      name: 'Travel', 
      icon: <Plane className="w-8 h-8 text-cyan-500" />, 
      items: ['Luggage', 'Accessories', 'Gear'],
      color: 'from-cyan-500 to-cyan-600',
      itemCount: 567,
      featured: ['Suitcases', 'Backpacks', 'Travel Essentials']
    },
    { 
      name: 'Sports', 
      icon: <Dumbbell className="w-8 h-8 text-red-500" />, 
      items: ['Equipment', 'Clothing', 'Shoes'],
      color: 'from-red-500 to-red-600',
      itemCount: 1234,
      featured: ['Training Gear', 'Sports Wear', 'Accessories']
    },
    { 
      name: 'Music', 
      icon: <Music className="w-8 h-8 text-yellow-500" />, 
      items: ['Instruments', 'Accessories', 'Audio'],
      color: 'from-yellow-500 to-yellow-600',
      itemCount: 789,
      featured: ['Guitars', 'Keyboards', 'Recording']
    },
    { 
      name: 'Art', 
      icon: <Brush className="w-8 h-8 text-pink-500" />, 
      items: ['Supplies', 'Crafts', 'Tools'],
      color: 'from-pink-500 to-pink-600',
      itemCount: 645,
      featured: ['Paint Sets', 'Canvas', 'Art Tools']
    },
    { 
      name: 'Food', 
      icon: <Beef className="w-8 h-8 text-orange-500" />, 
      items: ['Groceries', 'Snacks', 'Drinks'],
      color: 'from-orange-500 to-orange-600',
      itemCount: 3456,
      featured: ['Organic', 'Beverages', 'Snacks']
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 1234,
      image: "/images/earbuds.jpg",
      badge: "New Release",
      discount: 20,
      stock: 15,
      sold: 150
    },
    {
      id: 2,
      name: "Smart Watch Series 7",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviews: 856,
      image: "/images/smartwatch.jpg",
      badge: "Best Seller",
      discount: 25,
      stock: 8,
      sold: 320
    },
    {
      id: 3,
      name: "Gaming Laptop Pro",
      price: 1299.99,
      originalPrice: 1499.99,
      rating: 4.7,
      reviews: 567,
      image: "/images/gaming-laptop.jpg",
      badge: "Hot Deal",
      discount: 13,
      stock: 5,
      sold: 89
    },
    {
      id: 4,
      name: "4K Drone Camera",
      price: 799.99,
      originalPrice: 999.99,
      rating: 4.6,
      reviews: 432,
      image: "/images/drone.jpg",
      badge: "Limited",
      discount: 20,
      stock: 3,
      sold: 76
    },
    {
      id: 5,
      name: "Noise Cancelling Headphones",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.8,
      reviews: 1123,
      image: "/images/headphones.jpg",
      badge: "Popular",
      discount: 17,
      stock: 12,
      sold: 230
    },
    {
      id: 6,
      name: "Smart Home Hub",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.5,
      reviews: 789,
      image: "/images/smart-hub.jpg",
      badge: "Trending",
      discount: 19,
      stock: 20,
      sold: 167
    }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[size:200%] animate-gradient-shift">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Discover Amazing <span className="text-yellow-300">Deals</span> Every Day
              </h1>
              <p className="text-xl text-white/90">
                Shop the latest trends with confidence. Free shipping on orders over $100.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/products"
                  className="group relative inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold overflow-hidden"
                >
                  <span className="absolute w-full h-full bg-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  <ShoppingBag className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Start Shopping</span>
                </Link>
                <Link 
                  to="/deals"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  <Percent className="w-5 h-5 mr-2" />
                  View Deals
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              {/* Add floating product images or illustrations here */}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Trending Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Trending Now</h2>
            <p className="text-gray-600">Discover our most popular products</p>
          </div>
          <Link 
            to="/trending" 
            className="group flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>View All</span>
            <TrendingUp className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Badge */}
              {product.badge && (
                <span className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">
                  {product.badge}
                </span>
              )}
              
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-xl aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                        Add to Cart
                      </button>
                      <button className="p-2 bg-white text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-3">
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-gray-800">${product.price}</span>
                      {product.discount && (
                        <span className="text-sm text-red-500 font-medium ml-2">-{product.discount}%</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  
                  {/* Stock Status */}
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-600">
                      {product.sold} sold
                    </div>
                    {product.stock < 10 && (
                      <div className="text-xs text-red-500">
                        Only {product.stock} left
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                      style={{ width: `${(product.sold / (product.sold + product.stock)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of products across various categories</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredCategories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name.toLowerCase()}`}
              className={`group relative ${category.color} p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-pop-up overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-pattern opacity-5"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/80 backdrop-blur rounded-xl transform group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {category.itemCount.toLocaleString()} items
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>
                
                {/* Popular Items */}
                <div className="space-y-1">
                  {category.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="text-sm px-2 py-1 rounded bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/80 transition-colors cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Hover Effect Arrow */}
                <div className="absolute bottom-4 right-4 transform translate-x-8 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Enhanced Special Deals Section */}
      <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Special Deals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't miss out on our amazing deals and limited-time offers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal, index) => (
              <Link
                key={index}
                to="/deals"
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 animate-pop-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${deal.bgPattern} opacity-5`}></div>
                
                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{deal.title}</h3>
                      <p className="text-sm text-gray-600">{deal.subtitle}</p>
                    </div>
                    <div className={`${deal.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                      {deal.icon}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Discount up to</span>
                      <span className="font-bold text-red-500">{deal.stats.discount}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Available items</span>
                      <span className="font-bold text-gray-800">{deal.stats.items}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Time left</span>
                      <span className="font-bold text-blue-600">{deal.stats.timeLeft}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${deal.color} animate-pulse`}
                        style={{ width: `${(deal.stats.items / 500) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-6 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    View Deals
                  </button>

                  {/* Floating Particles Effect */}
                  <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-white/0 to-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandPartners.map((brand, index) => (
            <div 
              key={index} 
              className={`${brand.color} rounded-lg p-6 hover:shadow-xl transition-all duration-500 animate-pop-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-800 animate-levitate">{brand.logo}</div>
                <h3 className="text-xl font-bold text-gray-800">{brand.name}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 italic">{brand.tagline}</p>
              <div className="space-y-2">
                {brand.items.map((item, idx) => (
                  <Link 
                    key={idx}
                    to={`/search?q=${item.toLowerCase().replace(' ', '+')}`}
                    className="block py-2 px-3 bg-white rounded hover:bg-gray-50 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Shop By Category Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide selection of products across various categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shopByCategory.map((category, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 transition-all duration-300`}>
                  <div className="flex items-center justify-between">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                      {category.icon}
                    </div>
                    <span className="text-white/80 text-sm font-medium">
                      {category.itemCount.toLocaleString()} Products
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4">{category.name}</h3>
                </div>

                {/* Category Content */}
                <div className="p-6">
                  {/* Featured Items */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-3">Featured</h4>
                    <div className="space-y-2">
                      {category.featured.map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/category/${category.name.toLowerCase()}/${item.toLowerCase().replace(' ', '-')}`}
                          className="block text-sm text-gray-800 hover:text-blue-600 transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Browse Categories */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-3">Browse</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/category/${category.name.toLowerCase()}/${item.toLowerCase()}`}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* View All Link */}
                  <Link
                    to={`/category/${category.name.toLowerCase()}`}
                    className="mt-6 inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    View All
                    <TrendingUp className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 bg-[size:200%] animate-gradient-shift">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter for exclusive deals and updates</p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-gray-800 w-full md:w-96"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 animate-glowing"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
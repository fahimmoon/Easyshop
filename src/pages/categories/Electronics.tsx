import React from 'react';
import CategoryTemplate from './CategoryTemplate';

const Electronics = () => {
  const categoryData = {
    title: "Electronics",
    description: "Discover the latest in consumer electronics with our wide selection of gadgets and devices.",
    bannerColor: "bg-gradient-to-r from-blue-600 to-purple-600",
    bannerImage: "/images/electronics-banner.jpg",
    subcategories: [
      "Smartphones",
      "Laptops",
      "Tablets",
      "Gaming",
      "Cameras",
      "Audio",
      "TV & Home Theater",
      "Wearables",
      "Computer Components"
    ],
    filters: [
      {
        label: "Brand",
        options: ["Apple", "Samsung", "Sony", "LG", "Dell", "HP", "Asus"]
      },
      {
        label: "Price Range",
        options: ["Under $100", "$100-$500", "$500-$1000", "Over $1000"]
      },
      {
        label: "Rating",
        options: ["4★ & up", "3★ & up", "2★ & up"]
      }
    ],
    featuredProducts: [
      {
        id: 1,
        name: "iPhone 14 Pro",
        price: 999.99,
        rating: 4.8,
        image: "/images/iphone.jpg",
        discount: 10
      },
      // Add more products...
    ]
  };

  return <CategoryTemplate {...categoryData} />;
};

export default Electronics;

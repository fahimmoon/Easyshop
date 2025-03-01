import React from 'react';
import CategoryTemplate from './CategoryTemplate';

const Jewelery = () => {
  const categoryData = {
    title: "Jewelery",
    description: "Discover our stunning collection of fine jewelry, from elegant necklaces to premium watches.",
    bannerColor: "bg-gradient-to-r from-yellow-600 to-pink-600",
    bannerImage: "/images/jewelery-banner.jpg",
    subcategories: [
      "Necklaces",
      "Rings",
      "Earrings",
      "Bracelets",
      "Watches",
      "Diamond Jewelry",
      "Gold Jewelry",
      "Silver Jewelry",
      "Wedding & Engagement"
    ],
    filters: [
      {
        label: "Material",
        options: ["Gold", "Silver", "Platinum", "Diamond", "Pearl", "Gemstone"]
      },
      {
        label: "Price Range",
        options: ["Under $100", "$100-$500", "$500-$1000", "Over $1000"]
      },
      {
        label: "Rating",
        options: ["4★ & up", "3★ & up", "2★ & up"]
      },
      {
        label: "Style",
        options: ["Classic", "Modern", "Vintage", "Minimalist", "Luxury"]
      }
    ],
    featuredProducts: [
      {
        id: 1,
        name: "Diamond Engagement Ring",
        price: 1499.99,
        rating: 4.9,
        image: "/images/diamond-ring.jpg",
        discount: 15
      },
      {
        id: 2,
        name: "Gold Chain Necklace",
        price: 699.99,
        rating: 4.7,
        image: "/images/gold-necklace.jpg",
        discount: 10
      },
      {
        id: 3,
        name: "Pearl Earrings",
        price: 299.99,
        rating: 4.8,
        image: "/images/pearl-earrings.jpg",
        discount: 20
      }
    ]
  };

  return <CategoryTemplate {...categoryData} />;
};

export default Jewelery;

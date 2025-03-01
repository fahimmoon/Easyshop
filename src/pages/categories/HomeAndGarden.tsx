import React from 'react';
import CategoryTemplate from './CategoryTemplate';

const HomeAndGarden = () => {
  const categoryData = {
    title: "Home & Garden",
    description: "Transform your living space with our extensive collection of home decor and garden essentials.",
    bannerColor: "bg-gradient-to-r from-green-600 to-emerald-600",
    bannerImage: "/images/home-garden-banner.jpg",
    subcategories: [
      "Furniture",
      "Home Decor",
      "Kitchen & Dining",
      "Bedding",
      "Bathroom",
      "Lighting",
      "Garden Tools",
      "Plants & Seeds",
      "Outdoor Furniture",
      "Storage & Organization"
    ],
    filters: [
      {
        label: "Room",
        options: ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Garden", "Patio"]
      },
      {
        label: "Price Range",
        options: ["Under $50", "$50-$200", "$200-$500", "Over $500"]
      },
      {
        label: "Material",
        options: ["Wood", "Metal", "Glass", "Plastic", "Fabric", "Ceramic"]
      },
      {
        label: "Style",
        options: ["Modern", "Traditional", "Rustic", "Industrial", "Coastal", "Farmhouse"]
      },
      {
        label: "Brand",
        options: ["IKEA", "Ashley", "Wayfair", "HomeDepot", "Pottery Barn"]
      }
    ],
    featuredProducts: [
      {
        id: 1,
        name: "Modern Sofa Set",
        price: 899.99,
        rating: 4.6,
        image: "/images/modern-sofa.jpg",
        discount: 15
      },
      {
        id: 2,
        name: "Garden Tool Set",
        price: 79.99,
        rating: 4.8,
        image: "/images/garden-tools.jpg",
        discount: 20
      },
      {
        id: 3,
        name: "Decorative Plant Pot",
        price: 34.99,
        rating: 4.7,
        image: "/images/plant-pot.jpg",
        discount: 10
      }
    ]
  };

  return <CategoryTemplate {...categoryData} />;
};

export default HomeAndGarden;

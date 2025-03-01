import React from 'react';
import CategoryTemplate from './CategoryTemplate';

const MensClothing = () => {
  const categoryData = {
    title: "Men's Clothing",
    description: "Shop the latest trends in men's fashion with our wide selection of clothing and accessories.",
    bannerColor: "bg-gradient-to-r from-blue-800 to-indigo-600",
    bannerImage: "/images/mens-clothing-banner.jpg",
    subcategories: [
      "T-Shirts",
      "Shirts",
      "Pants",
      "Jeans",
      "Suits",
      "Jackets",
      "Sportswear",
      "Underwear",
      "Accessories"
    ],
    filters: [
      {
        label: "Brand",
        options: ["Nike", "Adidas", "Levi's", "Tommy Hilfiger", "Ralph Lauren"]
      },
      {
        label: "Size",
        options: ["S", "M", "L", "XL", "XXL"]
      },
      {
        label: "Price Range",
        options: ["Under $50", "$50-$100", "$100-$200", "Over $200"]
      },
      {
        label: "Color",
        options: ["Black", "Blue", "White", "Gray", "Red"]
      }
    ],
    featuredProducts: [
      {
        id: 1,
        name: "Classic Fit Dress Shirt",
        price: 59.99,
        rating: 4.5,
        image: "/images/dress-shirt.jpg",
        discount: 20
      },
      // Add more products...
    ]
  };

  return <CategoryTemplate {...categoryData} />;
};

export default MensClothing;

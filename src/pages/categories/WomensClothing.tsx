import React from 'react';
import CategoryTemplate from './CategoryTemplate';

const WomensClothing = () => {
  const categoryData = {
    title: "Women's Clothing",
    description: "Explore our latest collection of women's fashion, from casual wear to elegant dresses.",
    bannerColor: "bg-gradient-to-r from-pink-600 to-purple-600",
    bannerImage: "/images/womens-clothing-banner.jpg",
    subcategories: [
      "Dresses",
      "Tops",
      "Pants & Leggings",
      "Skirts",
      "Jeans",
      "Activewear",
      "Outerwear",
      "Swimwear",
      "Accessories"
    ],
    filters: [
      {
        label: "Brand",
        options: ["Zara", "H&M", "Nike", "Adidas", "Gucci", "Forever 21"]
      },
      {
        label: "Size",
        options: ["XS", "S", "M", "L", "XL", "XXL"]
      },
      {
        label: "Price Range",
        options: ["Under $30", "$30-$70", "$70-$150", "Over $150"]
      },
      {
        label: "Color",
        options: ["Black", "White", "Pink", "Blue", "Red", "Multi"]
      },
      {
        label: "Style",
        options: ["Casual", "Formal", "Party", "Beach", "Work"]
      }
    ],
    featuredProducts: [
      {
        id: 1,
        name: "Floral Summer Dress",
        price: 59.99,
        rating: 4.7,
        image: "/images/floral-dress.jpg",
        discount: 20
      },
      {
        id: 2,
        name: "Classic Denim Jeans",
        price: 49.99,
        rating: 4.5,
        image: "/images/womens-jeans.jpg",
        discount: 15
      },
      {
        id: 3,
        name: "Cotton Blouse",
        price: 34.99,
        rating: 4.6,
        image: "/images/cotton-blouse.jpg",
        discount: 10
      }
    ]
  };

  return <CategoryTemplate {...categoryData} />;
};

export default WomensClothing;

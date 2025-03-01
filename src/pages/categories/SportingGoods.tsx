import React from 'react';
import CategoryTemplate from './CategoryTemplate';

const SportingGoods = () => {
  const categoryData = {
    title: "Sporting Goods",
    description: "Find all your sports and fitness equipment needs, from workout gear to team sports equipment.",
    bannerColor: "bg-gradient-to-r from-green-600 to-blue-600",
    bannerImage: "/images/sporting-goods-banner.jpg",
    subcategories: [
      "Exercise & Fitness",
      "Team Sports",
      "Outdoor Sports",
      "Athletic Clothing",
      "Running",
      "Cycling",
      "Golf",
      "Camping & Hiking",
      "Swimming",
      "Winter Sports"
    ],
    filters: [
      {
        label: "Sport Type",
        options: ["Baseball", "Basketball", "Football", "Soccer", "Tennis", "Golf"]
      },
      {
        label: "Brand",
        options: ["Nike", "Adidas", "Under Armour", "Wilson", "Callaway", "The North Face"]
      },
      {
        label: "Price Range",
        options: ["Under $25", "$25-$100", "$100-$500", "Over $500"]
      },
      {
        label: "Skill Level",
        options: ["Beginner", "Intermediate", "Advanced", "Professional"]
      },
      {
        label: "Age Group",
        options: ["Youth", "Adult", "Senior"]
      }
    ],
    featuredProducts: [
      {
        id: 1,
        name: "Premium Basketball",
        price: 29.99,
        rating: 4.7,
        image: "/images/basketball.jpg",
        discount: 15
      },
      {
        id: 2,
        name: "Yoga Mat Set",
        price: 49.99,
        rating: 4.8,
        image: "/images/yoga-mat.jpg",
        discount: 20
      },
      {
        id: 3,
        name: "Mountain Bike",
        price: 599.99,
        rating: 4.9,
        image: "/images/mountain-bike.jpg",
        discount: 10
      }
    ]
  };

  return <CategoryTemplate {...categoryData} />;
};

export default SportingGoods;

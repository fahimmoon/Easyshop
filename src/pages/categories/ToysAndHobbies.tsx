import React from 'react';
import CategoryTemplate from './CategoryTemplate';

const ToysAndHobbies = () => {
  const categoryData = {
    title: "Toys & Hobbies",
    description: "Discover a world of fun with our extensive collection of toys, games, and hobby supplies for all ages.",
    bannerColor: "bg-gradient-to-r from-yellow-500 to-red-500",
    bannerImage: "/images/toys-hobbies-banner.jpg",
    subcategories: [
      "Action Figures",
      "Building Toys",
      "Dolls & Accessories",
      "Educational Toys",
      "Games & Puzzles",
      "Model Kits",
      "Remote Control Toys",
      "Arts & Crafts",
      "Collectibles",
      "Outdoor Play"
    ],
    filters: [
      {
        label: "Age Range",
        options: ["0-2 Years", "3-5 Years", "6-8 Years", "9-12 Years", "12+ Years", "Adult"]
      },
      {
        label: "Brand",
        options: ["LEGO", "Hasbro", "Mattel", "Fisher-Price", "Nintendo", "Melissa & Doug"]
      },
      {
        label: "Price Range",
        options: ["Under $20", "$20-$50", "$50-$100", "Over $100"]
      },
      {
        label: "Category",
        options: ["Educational", "Creative", "Active Play", "Electronic", "Collectible"]
      },
      {
        label: "Material",
        options: ["Plastic", "Wood", "Metal", "Plush", "Electronic"]
      }
    ],
    featuredProducts: [
      {
        id: 1,
        name: "LEGO City Space Set",
        price: 79.99,
        rating: 4.8,
        image: "/images/lego-space.jpg",
        discount: 20
      },
      {
        id: 2,
        name: "Art Supply Kit",
        price: 39.99,
        rating: 4.6,
        image: "/images/art-kit.jpg",
        discount: 15
      },
      {
        id: 3,
        name: "RC Monster Truck",
        price: 129.99,
        rating: 4.7,
        image: "/images/rc-truck.jpg",
        discount: 10
      }
    ]
  };

  return <CategoryTemplate {...categoryData} />;
};

export default ToysAndHobbies;

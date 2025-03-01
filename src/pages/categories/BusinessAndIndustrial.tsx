import React from 'react';
import CategoryTemplate from './CategoryTemplate';

const BusinessAndIndustrial = () => {
  const categoryData = {
    title: "Business & Industrial",
    description: "Professional equipment, supplies, and tools for businesses and industrial applications.",
    bannerColor: "bg-gradient-to-r from-gray-700 to-gray-900",
    bannerImage: "/images/business-industrial-banner.jpg",
    subcategories: [
      "Office Supplies",
      "Industrial Equipment",
      "Manufacturing Tools",
      "Safety Equipment",
      "Packaging & Shipping",
      "Construction Equipment",
      "Electrical Equipment",
      "HVAC Systems",
      "Restaurant Supplies",
      "Wholesale Lots",
      "Commercial Cleaning",
      "Healthcare Supplies"
    ],
    filters: [
      {
        label: "Category Type",
        options: [
          "Manufacturing",
          "Construction",
          "Office",
          "Retail",
          "Healthcare",
          "Food Service",
          "Warehousing"
        ]
      },
      {
        label: "Brand",
        options: [
          "3M",
          "Grainger",
          "Uline",
          "Caterpillar",
          "Honeywell",
          "DeWalt",
          "Bosch"
        ]
      },
      {
        label: "Price Range",
        options: [
          "Under $100",
          "$100-$500",
          "$500-$2000",
          "$2000-$10000",
          "Over $10000"
        ]
      },
      {
        label: "Condition",
        options: ["New", "Refurbished", "Used"]
      },
      {
        label: "Certification",
        options: ["ISO", "CE", "UL", "OSHA Compliant", "Energy Star"]
      }
    ],
    featuredProducts: [
      {
        id: 1,
        name: "Industrial Safety Kit Pro",
        price: 299.99,
        rating: 4.8,
        image: "/images/safety-kit.jpg",
        discount: 15,
        description: "Complete safety equipment set for industrial use",
        specifications: {
          contents: "50+ pieces",
          certification: "OSHA Compliant",
          suitable: "Industrial Applications"
        }
      },
      {
        id: 2,
        name: "Commercial Grade Printer",
        price: 1299.99,
        rating: 4.7,
        image: "/images/commercial-printer.jpg",
        discount: 10,
        description: "High-volume commercial printing solution",
        specifications: {
          speed: "75 ppm",
          capacity: "10,000 sheets",
          connectivity: "Wireless/Ethernet"
        }
      },
      {
        id: 3,
        name: "Warehouse Management System",
        price: 2499.99,
        rating: 4.9,
        image: "/images/wms-system.jpg",
        discount: 20,
        description: "Complete warehouse automation solution",
        specifications: {
          type: "Cloud-based",
          users: "Unlimited",
          support: "24/7"
        }
      },
      {
        id: 4,
        name: "Industrial Tool Set",
        price: 799.99,
        rating: 4.6,
        image: "/images/industrial-tools.jpg",
        discount: 12,
        description: "Professional-grade industrial tool collection",
        specifications: {
          pieces: "200+",
          warranty: "Lifetime",
          material: "Chrome Vanadium Steel"
        }
      }
    ],
    additionalFeatures: {
      bulkOrdering: true,
      customQuotes: true,
      businessFinancing: true,
      installationServices: true,
      technicalSupport: true,
      warranty: "Extended warranties available",
      training: "Product training included",
      shipping: "Freight shipping available"
    }
  };

  return <CategoryTemplate {...categoryData} />;
};

export default BusinessAndIndustrial;

import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    title: "Sample Product 1",
    price: 99.99,
    description: "This is a sample product description",
    category: "electronics",
    image: "https://via.placeholder.com/200",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Sample Product 2",
    price: 149.99,
    description: "Another sample product description",
    category: "electronics",
    image: "https://via.placeholder.com/200",
    rating: { rate: 4.0, count: 85 }
  }
];
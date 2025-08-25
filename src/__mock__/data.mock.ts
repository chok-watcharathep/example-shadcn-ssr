import { Category } from "@/interfaces/category.interface";
import { Product, Shipping } from "@/interfaces/product.interface";

export const categories: Category[] = [
  { slug: "shirts", name: "Shirts", image: "/images/shirts.png" },
  { slug: "hoodies", name: "Hoodies", image: "/images/hoodies.png" },
  { slug: "pants", name: "Pants", image: "/images/pants.png" },
];

export const products: Product[] = [
  {
    id: 1,
    slug: "blue-t-shirt",
    name: "Blue T-Shirt",
    description: "A comfortable blue t-shirt",
    category: "shirts",
    price: 20,
  },
  {
    id: 2,
    slug: "red-hoodie",
    name: "Red Hoodie",
    description: "A comfortable red hoodie",
    category: "hoodies",
    price: 45,
  },
  {
    id: 3,
    slug: "black-jeans",
    name: "Black Jeans",
    description: "A comfortable black jeans",
    category: "pants",
    price: 60,
  },
  {
    id: 4,
    slug: "green-t-shirt",
    name: "Green T-Shirt",
    description: "A comfortable green t-shirt",
    category: "shirts",
    price: 22,
  },
  {
    id: 5,
    slug: "grey-hoodie",
    name: "Grey Hoodie",
    description: "A comfortable grey hoodie",
    category: "hoodies",
    price: 48,
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug);
}

export function getCategoryBySlug(categorySlug: string): Category | undefined {
  return categories.find((cat) => cat.slug === categorySlug);
}

export function getProductBySlug(productSlug: string): Product | undefined {
  return products.find((product) => product.slug === productSlug);
}

export function getShippingByProductSlug(
  productSlug: string
): Shipping | undefined {
  const product = getProductBySlug(productSlug);

  if (!product) {
    return undefined;
  }

  // Mock shipping logic based on price
  if (product.price >= 50) {
    return {
      rate: 0,
      deliveryTime: "3-5 business days",
      isFreeShipping: true,
    };
  } else {
    return {
      rate: 5.99,
      deliveryTime: "5-7 business days",
      isFreeShipping: false,
    };
  }
}

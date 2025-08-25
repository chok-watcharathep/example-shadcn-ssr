import { Product } from "@/interfaces/product.interface";

const API_URL = "http://localhost:3000";

export async function getProducts(categorySlug: string): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products?category=${categorySlug}`);
  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data;
}

export async function getProductBySlug(
  productSlug: string
): Promise<Product | undefined> {
  const res = await fetch(`${API_URL}/api/products/${productSlug}`);
  if (!res.ok) {
    return undefined;
  }

  const data = await res.json();

  return data;
}

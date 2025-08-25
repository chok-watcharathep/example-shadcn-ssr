import { Product, Shipping } from "@/interfaces/product.interface";

const API_URL = "http://localhost:3000";

export async function getProducts(categorySlug: string): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products?category=${categorySlug}`, {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data;
}

export async function getProductBySlug(
  productSlug: string
): Promise<Product | undefined> {
  const res = await fetch(`${API_URL}/api/products/${productSlug}`, {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    return undefined;
  }

  const data = await res.json();

  return data;
}

export async function getShippingByProductSlug(
  productSlug: string
): Promise<Shipping | undefined> {
  const res = await fetch(`${API_URL}/api/products/${productSlug}/shipping`, {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    return undefined;
  }

  const data = await res.json();

  return data;
}

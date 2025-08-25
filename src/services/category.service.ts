import { Category } from "@/interfaces/category.interface";

const API_URL = "http://localhost:3000";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data;
}

export async function getCategoryBySlug(
  categorySlug: string
): Promise<Category | undefined> {
  const res = await fetch(`${API_URL}/api/categories/${categorySlug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return undefined;
  }

  const data = await res.json();

  return data;
}

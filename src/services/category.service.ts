import { Category } from "@/interfaces/category.interface";
import axiosInstance from "@/lib/axios.lib";

export async function getCategories(): Promise<Category[]> {
  const { data } = await axiosInstance.get("/api/categories");

  return data;
}

export async function getCategoryBySlug(
  categorySlug: string
): Promise<Category | undefined> {
  const { data } = await axiosInstance.get(`/api/categories/${categorySlug}`);

  return data;
}

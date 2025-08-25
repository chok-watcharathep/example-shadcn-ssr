import { Product, Shipping } from "@/interfaces/product.interface";
import axiosInstance from "@/lib/axios.lib";

export async function getProducts(categorySlug: string): Promise<Product[]> {
  const { data } = await axiosInstance.get(
    `/api/products?category=${categorySlug}`
  );

  return data;
}

export async function getProductBySlug(
  productSlug: string
): Promise<Product | undefined> {
  const { data } = await axiosInstance.get(`/api/products/${productSlug}`);

  return data;
}

export async function getShippingByProductSlug(
  productSlug: string
): Promise<Shipping | undefined> {
  const { data } = await axiosInstance.get(
    `/api/products/${productSlug}/shipping`
  );

  return data;
}

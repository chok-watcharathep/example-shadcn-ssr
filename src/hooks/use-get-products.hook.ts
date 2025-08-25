import { useQuery } from "@tanstack/react-query";
import { Product } from "@/interfaces/product.interface";
import { getProducts } from "@/services/product.service";

export const useGetProducts = (categorySlug: string) => {
  return useQuery<Product[]>({
    queryKey: ["products", categorySlug],
    queryFn: () => getProducts(categorySlug),
  });
};

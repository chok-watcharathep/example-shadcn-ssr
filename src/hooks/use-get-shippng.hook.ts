import { useQuery } from "@tanstack/react-query";
import { getShippingByProductSlug } from "@/services/product.service";
import { Shipping } from "@/interfaces/product.interface";

export const useGetShipping = (productSlug: string) => {
  return useQuery<Shipping | undefined>({
    queryKey: ["shipping", productSlug],
    queryFn: () => getShippingByProductSlug(productSlug),
    enabled: !!productSlug,
  });
};

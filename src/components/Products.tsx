"use client";

import ProductCard from "@/components/ProductCard";
import { useGetProducts } from "@/hooks/use-get-products.hook";
import { notFound } from "next/navigation";
import Loading from "./Loading";

interface ProductsProps {
  categorySlug: string;
}

const Products = ({ categorySlug }: ProductsProps) => {
  const { data: products, isLoading, isError } = useGetProducts(categorySlug);

  if (isLoading) {
    return (
    <Loading />
    );
  }

  if (isError) {
    throw new Error("Failed to get products");
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

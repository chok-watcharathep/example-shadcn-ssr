"use client";

import ProductCard from "@/components/ProductCard";
import { useGetProducts } from "@/hooks/use-get-products.hook";

interface ProductsProps {
  categorySlug: string;
}

const Products = ({ categorySlug }: ProductsProps) => {
  const { data: products, isLoading, isError } = useGetProducts(categorySlug);

  if (isLoading) {
    return (
      <div className="mt-4 p-4 rounded-lg bg-gray-800 animate-pulse">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-4 p-4 rounded-lg bg-red-800">
        <p className="text-red-600">Failed to get products.</p>
      </div>
    );
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

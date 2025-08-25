import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getCategoryBySlug } from "@/services/category.service";
import { getProducts } from "@/services/product.service";
import ProductCard from "@/components/ProductCard";

interface CategoryPageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const requestParams = await params;
  const category = await getCategoryBySlug(requestParams.categorySlug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `Products in ${category.name}`,
    description: `Browse all ${category.name} available on our store.`,
    openGraph: {
      title: `Products in ${category.name}`,
      description: `Browse all ${category.name} available on our store.`,
      type: "website",
      url: `https://9fnx8qn4-3000.asse.devtunnels.ms/categories/${category.slug}`,
      images: [
        {
          url: `/images/${category.slug}.png`,
          width: 800,
          height: 600,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const requestParams = await params;
  const category = await getCategoryBySlug(requestParams.categorySlug);

  if (!category) {
    notFound();
  }

  const products = await getProducts(requestParams.categorySlug);

  return (
    <main className="container mx-auto p-4">
      <div className="relative h-64 w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={category.image}
          alt={`Category: ${category.name}`}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{category.name}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>
    </main>
  );
}

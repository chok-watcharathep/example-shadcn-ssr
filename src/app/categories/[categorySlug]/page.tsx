import Products from "@/components/Products";
import { NEXT_PUBLIC_APP_URL } from "@/constants/config.constant";
import { getCategoryBySlug } from "@/services/category.service";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

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
      url: `${NEXT_PUBLIC_APP_URL}/categories/${category.slug}`,
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

      <Products categorySlug={category.slug} />
    </main>
  );
}

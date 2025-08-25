import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { getProductBySlug } from "@/services/product.service";
import ShippingDetail from "./ShippngDetail";

interface ProductPageProps {
  params: Promise<{ productSlug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const requestParams = await params;
  const product = await getProductBySlug(requestParams.productSlug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: `/images/${product.slug}.png`,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
      url: `https://9fnx8qn4-3000.asse.devtunnels.ms/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const requestParams = await params;
  const product = await getProductBySlug(requestParams.productSlug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={`/images/${product.slug}.png`}
            alt={product.name}
            width={800}
            height={600}
            layout="responsive"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
          <ShippingDetail productSlug={product.slug} />
        </div>
      </div>
    </main>
  );
}

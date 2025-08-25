import Image from "next/image";
import Link from "next/link";
import { Product } from "@/interfaces/product.interface";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/products/${product.slug}`}>
        <Image
          src={`/images/${product.slug}.png`}
          alt={product.name}
          width={250}
          height={250}
          className="rounded-lg mb-4"
        />
      </Link>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link
        href={`/products/${product.slug}`}
        className="mt-4 text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;

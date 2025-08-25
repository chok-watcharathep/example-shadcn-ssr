import Image from "next/image";
import Link from "next/link";
import { Product } from "@/interfaces/product.interface";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="pt-0">
      <CardHeader className="px-0">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={`/images/${product.slug}.png`}
            alt={product.name}
            width={250}
            height={250}
            className="rounded-t-xl  w-full"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/products/${product.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

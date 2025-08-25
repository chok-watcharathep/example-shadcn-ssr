import { products, getProductsByCategory } from "@/__mock__/data.mock";
import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const url = new URL(req.url);
  const queryParams = Object.fromEntries(url.searchParams.entries());

  const categorySlug = queryParams.category;

  if (categorySlug) {
    return Response.json(getProductsByCategory(categorySlug));
  }

  return Response.json(products);
}

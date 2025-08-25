import {
  getProductBySlug,
  getShippingByProductSlug,
} from "@/__mock__/data.mock";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ productSlug: string }> }
) {
  const requestParams = await params;

  return Response.json(getShippingByProductSlug(requestParams.productSlug));
}

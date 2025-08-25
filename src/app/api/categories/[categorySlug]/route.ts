import { getCategoryBySlug, getProductBySlug } from "@/__mock__/data.mock";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ categorySlug: string }> }
) {
  const requestParams = await params;

  return Response.json(getCategoryBySlug(requestParams.categorySlug));
}

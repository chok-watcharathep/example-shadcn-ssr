import { categories } from "@/__mock__/data.mock";

export function GET() {
  return Response.json(categories);
}

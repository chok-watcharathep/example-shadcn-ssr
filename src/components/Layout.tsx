import { getCategories } from "@/services/category.service";
import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const categories = await getCategories();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto p-4 flex justify-between items-center flex-wrap">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            My Store
          </Link>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

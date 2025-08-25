"use client";

import { useGetCategories } from "@/hooks/use-get-categories.hook";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const TheMainHeader = () => {
  const { data: categories } = useGetCategories();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center flex-wrap">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          My Store
        </Link>
        <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
          {categories?.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default TheMainHeader;

import { ReactNode } from "react";
import TheMainHeader from "./TheMainHeader";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TheMainHeader />
      <main className="flex-grow">{children}</main>
      <footer className="bg-white dark:bg-gray-800 p-4 text-center">
        <p>&copy; 2024 My Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

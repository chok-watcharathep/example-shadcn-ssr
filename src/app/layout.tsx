import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import AppQueryClientProvider from "@/libs/query-client.lib";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Store",
  description: "The e-commerce store for all your needs",
  metadataBase: new URL("https://9fnx8qn4-3000.asse.devtunnels.ms"),
  openGraph: {
    title: "My Store",
    description: "The e-commerce store for all your needs",
    type: "website",
    images: [
      {
        url: "/images/store.png",
        width: 800,
        height: 600,
        alt: "My Store",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppQueryClientProvider>
          <Layout>{children}</Layout>
        </AppQueryClientProvider>
      </body>
    </html>
  );
}

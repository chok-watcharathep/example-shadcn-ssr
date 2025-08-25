"use client";

import { useGetShipping } from "@/hooks/use-get-shippng.hook";

interface ShippingDetailProps {
  productSlug: string;
}

export default function ShippingDetail({ productSlug }: ShippingDetailProps) {
  const { data: shipping, isLoading, isError } = useGetShipping(productSlug);

  if (isLoading) {
    return (
      <div className="mt-4 p-4 rounded-lg bg-gray-800 animate-pulse">
        <p className="text-gray-500">Calculating shipping...</p>
      </div>
    );
  }

  if (isError || !shipping) {
    return (
      <div className="mt-4 p-4 rounded-lg bg-red-800">
        <p className="text-red-600">Failed to get shipping details.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 rounded-lg bg-gray-800">
      <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
      <p>
        <span className="font-bold">Shipping Rate:</span>{" "}
        {shipping.isFreeShipping ? "Free" : `$${shipping.rate.toFixed(2)}`}
      </p>
      <p>
        <span className="font-bold">Estimated Delivery:</span>{" "}
        {shipping.deliveryTime}
      </p>
    </div>
  );
}

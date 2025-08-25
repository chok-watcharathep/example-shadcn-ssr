"use client";

import { useGetShipping } from "@/hooks/use-get-shippng.hook";
import { Card, CardContent } from "./ui/card";
import Loading from "./Loading";

interface ShippingDetailProps {
  productSlug: string;
}

export default function ShippingDetail({ productSlug }: ShippingDetailProps) {
  const { data: shipping, isLoading, isError } = useGetShipping(productSlug);

  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <Loading />
        </CardContent>
      </Card>
    );
  }

  if (isError || !shipping) {
    return (
      <Card>
        <CardContent>
          <p className="text-red-600">Failed to get shipping details.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold ">Shipping Information</h3>
        <p>
          <span className="font-bold">Shipping Rate:</span>{" "}
          {shipping.isFreeShipping ? "Free" : `$${shipping.rate.toFixed(2)}`}
        </p>
        <p>
          <span className="font-bold">Estimated Delivery:</span>{" "}
          {shipping.deliveryTime}
        </p>
      </CardContent>
    </Card>
  );
}

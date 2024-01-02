"use client";

import { useEffect, useState } from "react";
import ProductPlaceholder from "../atoms/ProductPlaceholder";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import ImageSlider from "../atoms/ImageSlider";

interface ProductListingProps {
  product: {
    name: string;
    category: string;
  } | null;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);
    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <ProductPlaceholder />;

  if (product && isVisible) {
    return (
      <Link
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
        href={`/product/${product.name}`}
      >
        <div className="flex flex-col w-full">
          <ImageSlider urls={['/nav/mixed.jpg', '/nav/mixed.jpg']} />
          <h3 className="mt-4 font-medium text-sm text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">Label</p>
          <p className="mt-1 font-medium text-sm text-gray-900">
            {formatPrice(12.55)}
          </p>
        </div>
      </Link>
    );
  }
};

export default ProductListing;

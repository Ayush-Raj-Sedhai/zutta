"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "ASIAN Men's INNOVO-01 Sports Shoes",
    brand: "Reebok",
    price: 4784,
    image: "/shoes/shoe1.png",
  },
  {
    id: 2,
    name: "New White & Black Running Shoes",
    brand: "Nike",
    price: 8885,
    image: "/shoes/shoe2.png",
    isFavorite: true,
  },
  {
    id: 3,
    name: "X Yoga Mat Puma Black Shoes",
    brand: "Reebok",
    price: 2500,
    image: "/shoes/shoe3.png",
  },
  {
    id: 4,
    name: "Hiking Mountain Adventure Shoes",
    brand: "Nike",
    price: 6835,
    originalPrice: 7516,
    image: "/shoes/shoe4.png",
    onSale: true,
  },
  {
    id: 5,
    name: "Campus Ignite Pro Running Shoes",
    brand: "Bata",
    price: 2735,
    image: "/shoes/shoe5.png",
  },
  {
    id: 6,
    name: "ES-21 Hockey Walking Shoes",
    brand: "Reebok",
    price: 5000,
    image: "/shoes/shoe6.png",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href="/productdetail"
          className="rounded-lg p-4 relative border hover:shadow-md transition"
        >
          {product.onSale && (
            <Badge className="absolute top-2 left-2 bg-red-600">Sale</Badge>
          )}
          {product.isFavorite && (
            <div className="absolute top-2 right-2 text-red-500 text-xl">❤️</div>
          )}

          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={200}
            className="mx-auto object-contain h-[150px]"
          />
          <div className="mt-4 text-center">
            <h3 className="text-sm font-medium">{product.brand}</h3>
            <p className="text-sm text-gray-600">{product.name}</p>
            <p className="text-red-600 font-bold text-base mt-1">
              Nrs. {product.price.toLocaleString()}
              {product.originalPrice && (
                <span className="text-gray-400 text-sm line-through ml-2">
                  Nrs. {product.originalPrice}
                </span>
              )}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

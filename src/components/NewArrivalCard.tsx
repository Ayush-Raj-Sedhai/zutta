'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export interface NewArrivalProps {
  title: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image1: string;
  image2: string;
  isOnSale?: boolean;
}

export default function NewArrivalCard({
  title,
  brand,
  price,
  oldPrice,
  image1,
  image2,
  isOnSale,
}: NewArrivalProps) {
  return (
    <Link href="/productdetail" className="no-underline">
      <div className="max-w-6xl mx-auto relative rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-all flex flex-col gap-3 cursor-pointer">
        {/* SALE badge */}
        {isOnSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
            Sale
          </div>
        )}

        {/* 🔼 Top Image */}
        <div className="w-full aspect-square relative">
          <Image
            src={image1}
            alt={title}
            fill
            className="object-contain rounded-md"
          />
        </div>

        {/* 🧾 MID Info */}
        <div className="flex flex-col gap-1 px-1">
          <p className="text-xs text-gray-400">{brand}</p>
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium leading-tight">{title}</h3>
            <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 mt-1" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-bold text-black">Nrs. {price}</p>
            {oldPrice && (
              <p className="text-sm line-through text-gray-500">Nrs. {oldPrice}</p>
            )}
          </div>
        </div>

        {/* 🔽 Bottom Image */}
        <div className="w-full aspect-square relative">
          <Image
            src={image2}
            alt={title}
            fill
            className="object-contain rounded-md"
          />
        </div>

        {/* 🔻 Bottom Description + Button */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-col">
            <p className="text-xs text-gray-400">{brand}</p>
            <h3 className="text-sm font-medium leading-tight">{title}</h3>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-base font-bold text-black">Nrs. {price}</p>
            {oldPrice && (
              <p className="text-sm line-through text-gray-500">Nrs. {oldPrice}</p>
            )}
          </div>

          <Button className="w-full text-sm py-2">Add to Cart</Button>
        </div>
      </div>
    </Link>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Heart, Trash } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
  const cartItems = [
    {
      name: 'New White & Black Running Shoes For Men',
      brand: 'Nike',
      price: 2200,
      oldPrice: 3999,
      quantity: 1,
      image: '/shoes/1.png',
    },
    {
      name: 'Hiking Trekking Climbing Mountain Adventure Shoes',
      brand: 'Nike',
      price: 6835,
      oldPrice: 7518,
      quantity: 1,
      image: '/shoes/2.png',
    },
    {
      name: "ASIAN Men's INNOVA-01 Sports Shoes",
      brand: 'Reebok',
      price: 4784,
      oldPrice: 5499,
      quantity: 1,
      image: '/shoes/3.png',
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <div
        className="relative w-full h-[240px] bg-cover bg-center"
        style={{ backgroundImage: `url('/banner-cart.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Your Shopping Cart</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
        {/* Product Table */}
        <div className="md:w-2/3 w-full">
          <div className="border rounded-md overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-12 bg-gray-100 px-4 py-3 font-semibold text-sm text-gray-700 border-b">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Price</div>
              <div className="col-span-3 text-center">Quantity</div>
            </div>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-center gap-4 p-4 border-b last:border-none"
              >
                {/* Product Info */}
                <div className="col-span-6 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="object-contain rounded"
                  />
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.brand}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-3 text-center">
                  <p className="text-red-600 font-semibold text-sm">Nrs. {item.price}</p>
                  <p className="line-through text-gray-400 text-xs">Nrs. {item.oldPrice}</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash className="w-4 h-4 text-gray-600" />
                    </Button>
                  </div>
                </div>

                {/* Quantity */}
                <div className="col-span-3 flex justify-center">
                  <div className="flex items-center rounded-md px-2">
                    <Button variant="ghost" size="icon">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-2 text-sm">{item.quantity}</span>
                    <Button variant="ghost" size="icon">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:w-1/3 w-full">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal (3 items)</span>
                <span>Rs. 16301</span>
              </div>
              <div className="flex justify-between">
                <span>Discount Amt</span>
                <span>Rs. 2482</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>Rs. 0</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-red-600">Rs. 13819</span>
            </div>

            {/* ✅ Checkout Button with Link */}
            <Link href="/checkout" className="block mt-6">
              <Button className="w-full bg-primary text-white">
                Proceed To Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

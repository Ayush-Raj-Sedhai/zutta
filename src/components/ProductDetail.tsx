'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Minus, Plus, CheckCircle, Heart, Star } from 'lucide-react';

const sizes = ['36', '37', '39', '40', '41'];
const colors = ['#1e293b', '#7f1d1d', '#a16207']; // Navy, Maroon, Brown

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div>
          <Image
            src="https://via.placeholder.com/500"
            alt="Product"
            width={500}
            height={500}
            className="rounded-xl border"
          />
          <div className="flex gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src="https://via.placeholder.com/100"
                alt="Thumb"
                width={80}
                height={80}
                className="rounded border cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div>
          <h1 className="text-2xl font-semibold">JAVIO Stylish Sports Casual Gym Cycling Shoes</h1>
          <p className="text-red-600 text-xl mt-2 font-bold">
            Nrs. <span className="line-through mr-1 text-gray-500">3999</span>2200
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <span className="bg-red-100 px-2 py-1 rounded-full text-red-600 text-xs font-medium">
              Hurry! Deal Ends In 4d : 7h : 53m : 12s
            </span>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <p><span className="font-medium">Brand Name:</span> Javio</p>
            <p><span className="font-medium">Category:</span> Flip Flops</p>

            <div className="flex gap-2 items-center mt-2">
              <span className="font-medium">Colors:</span>
              {colors.map((color, i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>

            <p className="flex items-center gap-2 mt-2">
              <CheckCircle className="w-4 h-4 text-green-500" /> 200 in Stock
            </p>

            <div className="mt-4">
              <p className="font-medium mb-1">Size:</p>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <Button key={s} variant="outline" size="sm">{s}</Button> // Updated size to "sm"
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center border rounded">
                <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 w-8 text-center">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Button>Add To Cart</Button>
              <Button variant="secondary">Buy It Now</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="mt-12">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="material">Material</TabsTrigger>
          <TabsTrigger value="care">Care Instruction</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <h3 className="text-lg font-semibold mt-4">About this Item</h3>
          <p className="text-sm mt-2 text-gray-700">
            Upper-Embrace the ultimate comfort with a breathable mesh upper that lets your feet breathe freely. The lace-up closure ensures a snug fit, making these shoes perfect for college, office days, or even casual dates. The Anti-Skid Outsole design enhances your natural movement, making every step smooth and secure.
          </p>
          <h4 className="font-semibold mt-4">Enhance your Workout Sessions</h4>
          <p className="text-sm text-gray-700">
            These running shoes feature a Memory Foam insole that adapts to your foot shape and provides optimal arch support. Whether you walk or run, the cushioned insole ensures comfort.
          </p>
        </TabsContent>
        <TabsContent value="material">Material details go here.</TabsContent>
        <TabsContent value="care">Care instructions go here.</TabsContent>
        <TabsContent value="shipping">Shipping and return policies go here.</TabsContent>
      </Tabs>

      {/* Recommendations */}
      <h2 className="text-xl font-bold mt-16 mb-6">You May Also Like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <Image
                src="https://via.placeholder.com/300"
                alt={`Product ${i}`}
                width={300}
                height={300}
                className="rounded mb-2"
              />
              <p className="text-sm">Sample Product Name</p>
              <p className="text-red-600 font-semibold">Nrs. 4,885</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

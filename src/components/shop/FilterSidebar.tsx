// components/shop/FilterSidebar.tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const productTypes = ["Casual Shoe", "Flip Flops", "Running Shoes", "Sneakers Shoes", "Sports Shoes"];
const brands = ["Nike", "Reebok", "Adidas", "Bata", "Puma", "Sketcher"];
const sizes = [32, 34, 35, 36, 37, 38, 40, 41];
const colors = ["#000000", "#4B5563", "#F59E0B", "#1D4ED8"];

export default function FilterSidebar() {
  return (
    <div className="space-y-6 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">Filter</h2>

      {/* Product Type */}
      <div>
        <h4 className="font-medium mb-2">Product Type</h4>
        {productTypes.map((type) => (
          <div key={type} className="flex items-center space-x-2">
            <Checkbox id={type} />
            <label htmlFor={type} className="text-sm">{type}</label>
          </div>
        ))}
      </div>

      {/* Brand */}
      <div>
        <h4 className="font-medium mb-2">Brand</h4>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox id={brand} />
            <label htmlFor={brand} className="text-sm">{brand}</label>
          </div>
        ))}
      </div>

      {/* Size */}
      <div>
        <h4 className="font-medium mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={`size-${size}`} />
              <label htmlFor={`size-${size}`} className="text-sm">{size}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h4 className="font-medium mb-2">Colors</h4>
        <div className="flex gap-2">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className="w-6 h-6 rounded-full border cursor-pointer"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>

      <Button className="w-full mt-4">Apply Filter</Button>
    </div>
  );
}

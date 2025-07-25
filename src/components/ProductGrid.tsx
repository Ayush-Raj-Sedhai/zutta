import Image from "next/image";
import { Product } from "@/types/product";

const mockProducts: Record<string, Product[]> = {
  "best-seller": [
    { name: "Running Shoes", price: 2725, image: "/shoes/1.png" },
    { name: "Classic Casual", price: 11320, image: "/shoes/2.png" },
    { name: "Rugged Trainer", price: 9300, image: "/shoes/3.png" },
    { name: "Mesh Sneaker", price: 9185, image: "/shoes/4.png" },
  ],
  "new-arrivals": [
    { name: "Sport Blaze", price: 4799, image: "/shoes/5.png" },
    { name: "Flex Street", price: 6285, image: "/shoes/6.png" },
    { name: "Cloud Runner", price: 3200, image: "/shoes/7.png" },
    { name: "Bold Track", price: 3450, image: "/shoes/8.png" },
  ],
  "weekly-deals": [
    { name: "Speed Pro", price: 2799, image: "/shoes/9.png", discount: "25%" },
    { name: "Retro Kicks", price: 4499, image: "/shoes/10.png", discount: "30%" },
    { name: "Balance Max", price: 6899, image: "/shoes/11.png", discount: "15%" },
    { name: "Energy Trail", price: 5825, image: "/shoes/12.png", discount: "20%" },
  ],
};

export default function ProductGrid({ category }: { category: keyof typeof mockProducts }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {mockProducts[category].map((product, i) => (
        <div key={i} className="border p-3 rounded hover:shadow">
          <div className="relative">
            {product.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                {product.discount} OFF
              </span>
            )}
            <Image src={product.image} alt={product.name} width={200} height={150} className="mx-auto" />
          </div>
          <p className="mt-3 text-sm text-gray-600">{product.name}</p>
          <p className="text-red-600 font-semibold">Nrs. {product.price}</p>
        </div>
      ))}
    </div>
  );
}
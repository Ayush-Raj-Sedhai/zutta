// app/shop/page.tsx
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <div className="p-4">
      <div
        className="relative h-[200px] w-full bg-cover bg-center flex items-center justify-center text-black text-4xl font-bold rounded-xl"
        style={{ backgroundImage: 'url(/banner.jpg)' }}
      >
        Shoes
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <div className="lg:col-span-1">
          <FilterSidebar />
        </div>
        <div className="lg:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

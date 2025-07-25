import NewArrivalCard from '@/components/NewArrivalCard';
import { newArrivals } from '@/app/data/newArrivals';

export default function NewArrivalPage() {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newArrivals.map((item, index) => (
          <NewArrivalCard key={index} {...item} />
        ))}
      </div>
    </main>
  );
}

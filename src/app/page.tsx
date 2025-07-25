import HeroBanner from '@/components/HeroBanner';
import BrandLogos from '@/components/BrandLogos';
import SectionTitle from '@/components/SectionTitle';
import ProductGrid from '@/components/ProductGrid';
import FooterFeatures from '@/components/FooterFeatures';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <BrandLogos />
      
      <section className="px-6 py-8">
        <SectionTitle title="Best Seller" link="/best-sellers" />
        <ProductGrid category="best-seller" />
      </section>

      <section className="px-6 py-8">
        <SectionTitle title="New Arrivals" link="/new-arrivals" />
        <ProductGrid category="new-arrivals" />
      </section>

      <section className="px-6 py-8">
        <SectionTitle title="Deal of the Week" />
        <ProductGrid category="weekly-deals" />
      </section>

      <FooterFeatures />
    </main>
  );
}

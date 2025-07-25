import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaShoePrints, FaGlobeAmericas } from "react-icons/fa"; // React Icons

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/about-banner.jpg"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Who Are We Section */}
      <section className="py-20 px-6 md:px-24 flex flex-col md:flex-row gap-14 items-center">
        <div className="flex-1 space-y-6">
          <Badge variant="outline" className="text-red-600 border-red-600 mb-2 uppercase tracking-wide">
            Who Are We
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Style that moves with you.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            At Zutta, we believe that great shoes do more than complete an outfit — they carry your personality,
            your confidence, and your journey. We offer a wide range of stylish, comfortable, and quality shoes
            for every step you take.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="border rounded-lg p-5 bg-white shadow-sm space-y-3">
              <FaShoePrints className="text-red-600 text-2xl" />
              <p className="text-sm">
                To deliver top-quality, fashion-forward shoes that meet the everyday needs of modern lifestyles.
              </p>
            </div>
            <div className="border rounded-lg p-5 bg-white shadow-sm space-y-3">
              <FaGlobeAmericas className="text-red-600 text-2xl" />
              <p className="text-sm">
                To become a trusted shoemaker for stylish and comfortable footwear around the globe.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/shoe-wall.jpg"
            alt="Shoes Wall"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-800 text-white py-12 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
        <div>
          <h3 className="text-3xl font-bold">14K+</h3>
          <p className="text-sm">Product Sold</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">6K+</h3>
          <p className="text-sm">Happy Customer</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">714K+</h3>
          <p className="text-sm">Product Variant</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-24 flex flex-col md:flex-row gap-14 items-center">
        <div className="flex-1">
          <Image
            src="/formal-shoes.jpg"
            alt="Why Choose Us"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-6">
          <Badge variant="outline" className="text-red-600 border-red-600 mb-2 uppercase tracking-wide">
            Why Choose Us ?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Timeless design. Unmatched comfort. Modern convenience.
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>
              <strong>Affordable Pricing</strong><br />
              Great style doesn’t have to break the bank.
            </li>
            <li>
              <strong>Premium Quality</strong><br />
              We source the best materials for long-lasting comfort and durability.
            </li>
            <li>
              <strong>Seamless Experience</strong><br />
              From browsing to delivery, we make your shopping journey smooth and stress-free.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

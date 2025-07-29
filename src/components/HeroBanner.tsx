import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative bg-blue-600 text-white py-24 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Blue circular background behind shoe */}
      <div className="relative left-80 w-56 h-56 md:w-92 md:h-92 flex-shrink-0">
        <div className="absolute top-30 left-30 w-35 h-35 md:w-35 md:h-35 bg-blue-300 rounded-full opacity-50"></div>
        <Image
          src="/hero-shoe.png"
          alt="Hero Shoe"
          fill
          sizes="(min-width: 768px) 288px, 224px"
          style={{ objectFit: "contain" }}
          className="relative z-10"
          priority
        />
      </div>

      {/* Text content */}
      <div className="mt-8 md:mt-0 md:ml-8 mr-50 max-w-lg text-center md:text-left">
        <p className="uppercase text-xs tracking-widest mb-2">2024 Training Shoe</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Men Round <br />
          Memory Foam <br />
          Sneakers
        </h1>

        <Link href="/shop">
          <button className="mt-6 px-6 py-2 border border-white rounded text-white font-semibold hover:bg-white hover:text-blue-600 transition">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="bg-blue-600 text-white py-10 px-6 text-center md:text-left md:flex md:items-center md:justify-between">
      <div className="mb-6 md:mb-0">
        <p className="uppercase text-sm">2024 Training Shoe</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
          Men Round <br /> Memory Foam <br /> Sneakers
        </h1>
        <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100">
          Shop Now
        </button>
      </div>
      <div className="flex justify-center">
        <Image
          src="/hero-shoe.png"
          alt="Hero Shoe"
          width={400}
          height={300}
          className="w-full max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
}
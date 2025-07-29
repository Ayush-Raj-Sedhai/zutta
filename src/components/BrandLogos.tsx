import Image from "next/image";

const brands = [
  "reebok.png",
  "adidas.png",
  "nike.png",
  "converse.png",
  "newbalance.png",
  "asics.png",
];

export default function BrandLogos() {
  return (
    <section className="flex justify-around items-center py-6 bg-white flex-wrap gap-4">
      {brands.map((logo, idx) => (
        <Image key={idx} src={`/${logo}`} alt="brand" width={90} height={50} />
      ))}
    </section>
  );
}
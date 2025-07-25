import { FaTruck, FaUndo, FaGlobe, FaLock } from "react-icons/fa";

const features = [
  { icon: <FaTruck />, label: "Free Shipping", desc: "on orders above Rs. 5000" },
  { icon: <FaUndo />, label: "Easy Return", desc: "within 7 days" },
  { icon: <FaGlobe />, label: "Worldwide Delivery", desc: "across 50+ countries" },
  { icon: <FaLock />, label: "100% Secure", desc: "safe payment guarantee" },
];

export default function FooterFeatures() {
  return (
    <section className="bg-gray-100 py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {features.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <div className="text-2xl text-red-600">{item.icon}</div>
          <p className="font-semibold text-sm">{item.label}</p>
          <p className="text-xs text-gray-500">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function SectionTitle({ title, link }: { title: string; link?: string }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      {link && (
        <Link href={link} className="text-sm text-blue-600 flex items-center gap-1">
          View All <FaArrowRight className="text-xs" />
        </Link>
      )}
    </div>
  );
}
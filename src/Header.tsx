"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
   const router = useRouter();

  const navLinks = (
    <>
      <Link href="/" className="hover:text-red-600 font-medium">Home</Link>
      <Link href="/shop" className="hover:text-red-600 font-medium">Shop</Link>
      <Link href="/newarrival" className="hover:text-red-600 font-medium">New Arrivals</Link>
      <Link href="/about" className="hover:text-red-600 font-medium">About Us</Link>
      <Link href="/contactUs" className="hover:text-red-600 font-medium">Contact Us</Link>
    </>
  );

  return (
    <header className="w-full border-b shadow-sm px-4 md:px-8 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 p-2 rounded-md">
          <Image src="/shoe.png" alt="logo" width={32} height={32} />
          <span className="text-lg font-semibold">Zutta</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
          {navLinks}
        </nav>

        {/* Right: Icons & Login */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">0</span>
          </div>
          <div className="relative">
            <FaHeart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">0</span>
          </div>
            <button
      className="border border-red-600 text-red-600 px-4 py-1 rounded-md text-sm hover:bg-red-50 transition"
      onClick={() => router.push("/login")}
    >
      Log in
    </button>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden ml-2">
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-3 mt-4 text-gray-600 text-sm">
          {navLinks}
        </div>
      )}
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen((open) => !open);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update login state from localStorage
  const updateLoginStatus = () => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  };

  useEffect(() => {
    updateLoginStatus();

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "isLoggedIn") {
        updateLoginStatus();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    const handleLoginChange = () => {
      updateLoginStatus();
    };
    window.addEventListener("loginChange", handleLoginChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("loginChange", handleLoginChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("rememberMe");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    toast.success("You have been logged out");
    router.push("/login");

    window.dispatchEvent(new Event("loginChange"));
  };

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
        <Link href="/" className="flex items-center space-x-2 p-2 rounded-md">
          <Image src="/shoe.png" alt="logo" width={32} height={32} />
          <span className="text-lg font-semibold">Zutta</span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
          {navLinks}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">0</span>
          </div>
          <div className="relative">
            <FaHeart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">0</span>
          </div>

          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 border border-gray-600 text-gray-600 px-4 py-1 rounded-md text-sm hover:bg-gray-100 transition"
              >
                <FaUser />
                <span>Profile</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-md z-50">
                  <button
                    onClick={() => {
                      router.push("/profile");
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="border border-red-600 text-red-600 px-4 py-1 rounded-md text-sm hover:bg-red-50 transition"
              onClick={() => router.push("/login")}
            >
              Log in
            </button>
          )}

          <button onClick={toggleMenu} className="md:hidden ml-2">
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-3 mt-4 text-gray-600 text-sm">
          {navLinks}
          {isLoggedIn && (
            <>
              <button
                onClick={() => {
                  router.push("/profile");
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-red-600 font-medium"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-red-600 font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}

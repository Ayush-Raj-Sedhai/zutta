'use client';

import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-[#7A0000] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="Zutta Logo" className="h-10" />
          </div>
          <p className="text-sm">
            At Zutta, we believe that great shoes do more than complete an outfit — they carry your personality, your confidence, and your journey. We offer a wide range of stylish, comfortable, and quality shoes for every step you take.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">New Arrivals</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-semibold mb-3">Customer Care</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">How To Buy</a></li>
            <li><a href="#" className="hover:underline">Return & Refunds</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact Information</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <span>Dillibazar Pipalbot, Kathmandu, Nepal</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-1" />
              <span>+977-9847562341, 98457623147</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-1" />
              <span>zuttapasal2025@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-1" />
              <span>
                Monday to Friday 09:30 - 17:30<br />
                Saturday & Sunday 10:00 - 15:00
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
        Copyright © 2024 by Zutta All Rights Reserved.
      </div>
    </footer>
  );
}

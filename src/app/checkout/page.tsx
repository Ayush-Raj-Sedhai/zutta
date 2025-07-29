'use client';

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="relative h-[200px] w-full bg-cover bg-center flex items-center justify-center text-black text-4xl font-semibold" style={{ backgroundImage: `url('/checkout-banner.jpg')` }}>
        Checkout
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 border-none">
        {/* Left Section */}
        <div className="col-span-2 space-y-6">
          {/* Step 1 */}
          <Card className="p-6 border-none">
            <p className="text-sm text-gray-500">Step 1 of 3</p>
            <h2 className="font-semibold text-lg mb-4">Personal Details</h2>
            <div className="space-y-4">
              <Input placeholder="Full Name" defaultValue="Tanisi Khulju" />
              <Input placeholder="Email Address" defaultValue="tkhulju@gmail.com" />
              <Input placeholder="Phone Number" defaultValue="987456322114" />
            </div>
          </Card>

          {/* Step 2 */}
          <Card className="p-6 border-none">
            <p className="text-sm text-gray-500">Step 2 of 3</p>
            <h2 className="font-semibold text-lg mb-4">Delivery Details</h2>
            <RadioGroup defaultValue="home" className="space-y-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="home" id="home" />
                <Label htmlFor="home">Home Address</Label>
                <span className="text-sm text-gray-400">+ Add Address</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="office" id="office" />
                <Label htmlFor="office">Office Address</Label>
                <span className="text-sm text-gray-400">+ Add Address</span>
              </div>
            </RadioGroup>
          </Card>

          {/* Step 3 */}
          <Card className="p-6 border-none">
            <p className="text-sm text-gray-500">Step 3 of 3</p>
            <h2 className="font-semibold text-lg mb-4">Select Payment Method</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Credit Card */}
              <Card className="flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-md transition border-none">
                <Image src="/credit-card.png" alt="Credit Card" width={40} height={40} />
                <p className="mt-2 text-sm">Credit/Debit Card</p>
              </Card>

              {/* Khalti */}
              <Card className="flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-md transition border-none">
                <Image src="/khalti.png" alt="Khalti" width={40} height={40} />
                <p className="mt-2 text-sm">Khalti</p>
              </Card>

              {/* Esewa */}
              <Card className="flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-md transition border-none">
                <Image src="/esewa.png" alt="Esewa" width={40} height={40} />
                <p className="mt-2 text-sm">Esewa</p>
              </Card>
            </div>
          </Card>
        </div>

        {/* Right Section - Order Summary */}
        <Card className="p-6 h-fit border-none">
          <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal (2 items)</span>
              <span>Rs. 16301</span>
            </div>
            <div className="flex justify-between">
              <span>Discount Amt</span>
              <span className="text-green-600">Rs. 2482</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span>Rs. 0</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-red-600">
              <span>Total</span>
              <span>Rs. 13819</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

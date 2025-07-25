// app/(auth)/login/page.tsx

import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center px-6 md:px-16">
        {/* Logo */}
        <div className="mb-6">
          <Image src="/images/logo.png" alt="Zutta Logo" width={80} height={80} />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6">Welcome To Zutta</h2>

        {/* Login Form */}
        <LoginForm />
      </div>

      {/* Right Side */}
      <div className="hidden md:flex justify-center items-center bg-gray-50">
        <Image
          src="/images/shoe-login.svg"
          alt="Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
}

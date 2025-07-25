'use client';

import Image from 'next/image';
import { SignupForm } from '@/components/SignupForm';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20">
        <div className="mb-8">
          <div className="flex items-center space-x-2">
            <div className="border p-2 rounded">
              <Image src="/shoe-icon.png" alt="Logo" width={40} height={40} />
            </div>
            <div className="font-bold text-xl">Zutta</div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <SignupForm />
        <p className="mt-4 text-sm text-muted-foreground">
          Already have an account?{' '}
          <a href="/login" className="underline text-primary">
            Sign In
          </a>
        </p>
      </div>

      {/* Right - Illustration */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-muted">
        <Image
          src="/shoe-illustration.png"
          alt="Illustration"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
}

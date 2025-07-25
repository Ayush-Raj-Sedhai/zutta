'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <Label>First Name</Label>
          <Input placeholder="Enter First Name" />
        </div>
        <div className="flex-1">
          <Label>Last Name</Label>
          <Input placeholder="Enter Last Name" />
        </div>
      </div>

      <div>
        <Label>Email Address</Label>
        <Input type="email" placeholder="Enter Email Address" />
      </div>

      <div>
        <Label>Phone Number</Label>
        <Input type="tel" placeholder="Enter your Number" />
      </div>

      <div className="relative">
        <Label>Password</Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter Password"
        />
        <button
          type="button"
          className="absolute right-3 top-9 text-gray-500"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <div className="relative">
        <Label>Confirm Password</Label>
        <Input
          type={showConfirm ? 'text' : 'password'}
          placeholder="Enter Password"
        />
        <button
          type="button"
          className="absolute right-3 top-9 text-gray-500"
          onClick={() => setShowConfirm((prev) => !prev)}
        >
          {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
}

'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      phone,
      password,
    };

    // Check if user already exists
    const existingUser = localStorage.getItem(`user:${email}`);
    if (existingUser) {
      alert('User already exists with this email.');
      return;
    }

    // Save user to localStorage
    localStorage.setItem(`user:${email}`, JSON.stringify(user));
    alert('Signup successful!');
    
    // Optionally reset the form
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <form className="space-y-4" onSubmit={handleSignup}>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label>First Name</Label>
          <Input
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <Label>Last Name</Label>
          <Input
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label>Email Address</Label>
        <Input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <Label>Phone Number</Label>
        <Input
          type="tel"
          placeholder="Enter your Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="relative">
        <Label>Password</Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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

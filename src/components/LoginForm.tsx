// components/auth/LoginForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"; // optional if using custom Input
import { Button } from "@/components/ui/button"; // optional
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <form className="w-full max-w-sm space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium">Email Address</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full px-4 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Password</label>
        <Input
          type="password"
          placeholder="Enter Password"
          className="w-full px-4 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Remember Me
        </label>
        <Link href="#" className="text-blue-600 hover:underline">Forgot Password?</Link>
      </div>

      <Button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
        Log In
      </Button>

      <p className="text-sm text-center mt-4">
        Don’t have an account yet?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}

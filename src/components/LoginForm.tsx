"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

    const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      router.push("/");
    }
  }, [router]);

   const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();


    const storedUser = localStorage.getItem(`user:${email}`);

    if (!storedUser) {
      toast.error("User not found.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.password !== password) {
      toast.error("Incorrect password.");
      return;
    }

    // Set login session
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", email);
    if (remember) {
      localStorage.setItem("rememberMe", "true");
    }

     window.dispatchEvent(new Event("loginChange"));

    toast.success("Login successful!", {
      description: "Redirecting to homepage...",
      duration: 2000,
        });

    // Redirect after short delay to let toast show (optional)
    setTimeout(() => {
      router.push("/");
    }, 800);

     };

  return (
    <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
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
        <Link href="#" className="text-blue-600 hover:underline">
          Forgot Password?
        </Link>

         </div>

      <Button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Log In
      </Button>

      <p className="text-sm text-center mt-4">
        Don’t have an account yet?{" "}
        <Link href="/login/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </form>

     );
}
// components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "danger";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyle = "px-4 py-2 rounded font-medium transition-colors";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-400 text-black hover:bg-gray-100",
    ghost: "text-black hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// components/ui/input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && <label className="text-sm font-medium">{label}</label>}
        <input
          ref={ref}
          className={`w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };

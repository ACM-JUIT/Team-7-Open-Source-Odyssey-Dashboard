import * as React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline"; // ✅ <-- This must include "outline"
}

export const Badge = ({ children, className = "", variant = "default" }: BadgeProps) => {
  const baseStyles = "inline-block text-sm px-2 py-1 rounded font-medium";
  const variants: Record<string, string> = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-700 border border-gray-300",
    outline: "border border-gray-400 text-gray-700" // ✅ make sure this is defined!
  };
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};


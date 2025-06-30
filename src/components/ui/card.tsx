import * as React from "react";

export const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white border rounded-xl p-6 shadow-sm ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }: any) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }: any) => (
  <h3 className={`text-xl font-bold text-gray-900 ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = "" }: any) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
);

export const CardContent = ({ children, className = "" }: any) => (
  <div className={className}>{children}</div>
);


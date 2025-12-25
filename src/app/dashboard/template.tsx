"use client";
import Link from "next/link";
import { useState } from "react";

export default function DashBoardTemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-dashed border-black p-4  mx-auto mt-10">
     
      <h2>Dashboard Template {count}</h2>
      <button
        className="bg-black text-white p-2 my-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>
  );
}

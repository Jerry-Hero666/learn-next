"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use, useState } from "react";

const linkData = [
  { href: "/dashboard/about", label: "About" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 mb-4 font-bold text-lg text-black ">
        {linkData.map(({ href, label }) => (
          <Link
            key={href}
            className={pathname === href ? "text-purple-500" : ""}
            href={href}
          >
            {label}
          </Link>
        ))}
      </div>
      <h2>Dashboard Layout {count}</h2>
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

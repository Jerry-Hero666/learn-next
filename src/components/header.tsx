"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
  { href: "/performance", label: "Performance" },
  { href: "/reliability", label: "Reliability" },
  { href: "/scale", label: "Scale" },
];

export default function Header() {
  const pathname = usePathname();
  const hrefs = [...linkData.map((link) => link.href), "/"];

  if (!pathname || !hrefs.includes(pathname)) {
    return null;
  }

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto p-8 text-white items-center">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "text-purple-500" : ""}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

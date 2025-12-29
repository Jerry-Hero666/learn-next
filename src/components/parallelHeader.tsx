"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
  { href: "/parallel", label: "parallel" },
  { href: "/parallel/visitors", label: "visitors" },
];

export default function Header() {
  const pathname = usePathname();

  return (
      <div className="text-black">
        <div className="text-xl flex justify-center gap-6 p-6">
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
  );
}

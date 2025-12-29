import Link from "next/link";

const linkData = [
  { href: "/blog", label: "博客列表页" },
  { href: "/parallel", label: "平行路由页面" },
];


export default function HomeContent() {
  return (
    <div className="p-4 h-full flex flex-col gap-2">
      {
        linkData.map((link) => (
          <Link
            key={link.href}
            className={`hover:text-purple-500 p-2 text-white cursor-pointer`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))
      }
    </div>
  );
}

import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <Link className="hover:text-sky-500 rounded-lg p-2 text-white cursor-pointer" href="/blog">点击去博客列表页</Link>
      <Link className="hover:text-sky-600 rounded-lg p-2 text-white cursor-pointer" href="/parallel">点击去平行路由页面</Link>
    </div>
  );
}

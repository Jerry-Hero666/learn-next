import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="w-200 bg-white">
      <Link href="/blog">去博客列表页</Link>
    </div>
  );
}

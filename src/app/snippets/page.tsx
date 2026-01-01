import { prisma } from "@/prisma";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "代码片段列表",
  description: "代码片段列表",
};

export default async function SnippetLists() {
  const snippetLists = await prisma.snippet.findMany();

  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <h1 className="font-bold text-lg">Snippets</h1>
        <Link
          className="p-2 border border-teal-500 rounded"
          href="/snippets/new"
        >
          新建
        </Link> 
      </div>
      <div className="flex flex-col gap-4 mt-2">
        {snippetLists.map((el) => {
          return (
            <Link
              className="flex justify-between items-center border border-teal-500 p-3 rounded"
              href={`/snippets/${el.id}`}
              key={el.id + ""}
            >
              <span>{el.title}</span>
              <span>查看</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

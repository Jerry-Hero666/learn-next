import { prisma } from "@/prisma";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "新建",
  description: "新建代码片段",
};

export default async function AddSnippets() {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    redirect("/snippets");
  }

  return (
    <form>
      <h3 className="font-bold m-3 text-center">创建代码片段</h3>
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex grap-4 justify-center ">
          <label className="w-12" htmlFor="title">
            标题
          </label>
          <input
            name="title"
            className="border border-teal-500 p-2 rounded w-full"
            type="text"
            id="title"
          />
        </div>
        {/* Code */}
        <div className="flex grap-4 justify-center ">
          <label className="w-12" htmlFor="code">
            代码
          </label>
          <input
            name="code"
            className="border border-teal-500 p-2 rounded w-full"
            type="text"
            id="code"
          />
        </div>
        <button
          formAction={createSnippet}
          className="rounded p-2 bg-blue-200"
          type="submit"
        >
          创建
        </button>
      </div>
    </form>
  );
}

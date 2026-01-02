"use client";
import { createSnippet } from "@/actions";
import { useActionState } from "react";

// export const metadata: Metadata = {
//   title: "新建",
//   description: "新建代码片段",
// };

const initialState ={
  message:''
}

export default function AddSnippets() {
  const [state, formAction] = useActionState(createSnippet, initialState);
  

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
        {
          state.message &&  <div className="my-2 p-2 border bg-red-100 border-red-400">{state.message}</div>
        }
        <button
          formAction={formAction}
          className="rounded p-2 bg-blue-200"
          type="submit"
        >
          创建
        </button>
      </div>
    </form>
  );
}

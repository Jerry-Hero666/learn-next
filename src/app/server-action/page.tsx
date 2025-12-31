import { addTodo, getTodos } from "@/actions";
import ClientButton from "@/components/client-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page description",
};

export default async function Home() {
  const data = await getTodos();
  const addTodoWithOthers = addTodo.bind(null);
  return (
    <div className="p-10">
      <div className="flex">
        <form action={addTodoWithOthers}>
          <input
            type="text"
            name="todo"
            className="border-gray-100 border p-2"
          />
          <button type="submit" className="border border-gray-100 p-2 ml-2">
            提交
          </button>
        </form>
        <ClientButton>添加</ClientButton>
      </div>

      <ul className="leading-8 mt-4">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

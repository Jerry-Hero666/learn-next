import { addTodo, getTodos } from "@/actions";
import ClientButton from "@/components/client-button";
import SubmitForm from "@/components/submit-form";
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
      
      <SubmitForm/>
      <ul className="leading-8 mt-4">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

"use client";
import { addTodo } from "@/actions";

const ClientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="border p-2 ml-2"
      onClick={async () => {
        const formData = new FormData();
        formData.append("todo", "打豆豆");
        await addTodo(formData);
      }}
    >
      {children}
    </button>
  );
};
export default ClientButton;

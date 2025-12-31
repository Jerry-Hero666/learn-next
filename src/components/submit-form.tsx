"use client";
import { addTodo } from "@/actions";
import { useFormState } from "react-dom";
import ClientButton from "./client-button";

const initialState = {
  message: "",
};

const SubmitForm = () => {
  const [state, formAction] = useFormState(addTodo, initialState);
  return (
    <>
      <div className="flex">
        <form action={formAction}>
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
      <p className="mt-2 text-teal-500 text-sm">{state.message}</p>
    </>
  );
};
export default SubmitForm;

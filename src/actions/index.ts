"use server";

import { revalidatePath } from "next/cache";

const data: string[] = ["吃饭", "学习"];

export async function getTodos() {
  return data;
}

export async function addTodo(prevState:{message:string}, formData: FormData) {
  //! 要想拿到所有的formData 
  //! Object.fromEntries(formData) 拿到所有值
  const todo = formData.get("todo") as string;
  data.push(todo)

  console.log(data,'data---');
  revalidatePath("/server-action");

  return {
    ...prevState,
    message:`add ${todo} success`
  }
}
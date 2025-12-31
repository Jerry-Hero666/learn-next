"use server";

import { revalidatePath } from "next/cache";

const data: string[] = ["吃饭", "学习"];

export async function getTodos() {
  return data;
}

export async function addTodo(formData: FormData) {
  const todo = formData.get("todo") as string;
  data.push(todo)

  console.log(data,'data---');
  revalidatePath("/server-action");
}
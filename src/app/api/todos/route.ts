import { NextResponse } from "next/server";

const data = ["Task 1", "Task 2", "Task 3"];

export async function GET() {
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const todo = formData.get("todo");
  data.push(todo as string);
  return NextResponse.json(data);
}

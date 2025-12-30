import db from "@/db";
import { NextResponse } from "next/server";

interface IParams {
  params: Promise<{ id: string }>;
}

// DELETE -> /api/articles/:id
export async function DELETE(request: Request, { params }: IParams) {
  const { id } = await params;

  await db.update(({ posts }) => {
    const index = posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      posts.splice(index, 1);
    }
  });

  return NextResponse.json({
    code: 0,
    message: `删除文章 ${id} 成功`,
    data: null,
  });
}

// PATCH -> /api/articles/:id
export async function PATCH(request: Request, { params }: IParams) {
  // ...
  const data = await request.json();
  const { id } = await params;
  let idx = -1;
  await db.update(({ posts }) => {
    idx = posts.findIndex((post) => post.id === id);
    posts[idx] = { ...posts[idx], ...data };
  });
  return NextResponse.json({
    code: 0,
    message: `更新文章 ${id} 成功`,
    data: db.data.posts[idx],
  });
}

// GET -> /api/articles/:id
export async function GET(request: Request, { params }: IParams) {
  const { id } = await params;
  const data = db.data.posts.find((post) => post.id === id);
  return NextResponse.json({
    code: 0,
    message: `查找文章 ${id} 成功`,
    data,
  });
}

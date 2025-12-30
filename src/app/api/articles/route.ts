import { NextRequest, NextResponse } from "next/server";
import db from "@/db";

// GET -> /api/articles
export async function GET(request: NextRequest) {
  // ...
  const searchParams = request.nextUrl.searchParams;
  const pageNum = parseInt(searchParams.get("pageNum") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "2");
  const query = searchParams.get("query") || "";
  const data = db.data.posts;

  let filterData = query
    ? data.filter((item) => {
        const { id, ...rest } = item;
        return Object.values(rest).some((value) =>
          String(value).toLowerCase().includes(query.toLowerCase())
        );
      })
    : data;

  const total = filterData.length;
  const startIndex = (pageNum - 1) * pageSize;

  const endIndex = Math.min(startIndex + pageSize, total);
  filterData =
    startIndex >= total ? [] : filterData.slice(startIndex, endIndex);

  return NextResponse.json({
    code: 0,
    message: "获取成功",
    data: {
      list: filterData,
      total,
      pageSize,
      pageNum,
    },
  });
}

// POST -> /api/articles
export async function POST(request: Request) {
  // ...
  const data = await request.json();
  await db.update(({ posts }) =>
    posts.unshift({
      id: Math.random().toString(36).slice(-8),
      ...data,
    })
  );
  return NextResponse.json({
    code: 0,
    message: "添加成功",
    data,
  });
}

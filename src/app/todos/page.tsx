"use client";
import { Form } from "antd";
// import { Metadata } from "next";
import React, { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Home page description",
// };

export default function Home() {
  const [dataList, setDataList] = useState<any[]>([]);
  const fetchData = async () => {
    const res = await (await fetch("http://localhost:3000/api/todos")).json();
    setDataList(res);
    return res;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    const data = await res.json();
    setDataList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-10">
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" className="border-gray-100 border p-2" />
        <button type="submit" className="border border-gray-100 p-2 ml-2">
          提交
        </button>
      </form>
      <ul className="leading-8 mt-4">
        {dataList?.map((item,idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

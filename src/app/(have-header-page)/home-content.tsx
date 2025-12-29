"use client";
import { data } from "@/data";
import { Avatar, List } from "antd";
import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="w-200 bg-white">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              className="!items-center"
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

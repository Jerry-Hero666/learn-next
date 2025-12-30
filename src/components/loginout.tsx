"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function LoginOut() {
  const route = useRouter();
  const onClick = async () => {
    const res = await fetch("/api/loginout", {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    route.push("/login");
  };
  return (
    <>
      <Button onClick={onClick}>登出</Button>
    </>
  );
}

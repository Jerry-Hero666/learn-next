
import Picture from "@/components/picture";
import { Button } from "antd";
import { Metadata } from "next";
import HomeContent from "./home-content";
import { prisma } from "@/prisma";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page description",
};

export default async function Home() {

  return (
    <div>
      <Picture
        imgUrl="/home.webp"
        altText="Home Image"
        contentComponent={<HomeContent/>}
      />
    </div>
  );
}
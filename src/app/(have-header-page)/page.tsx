
import Picture from "@/components/picture";
import { Button } from "antd";
import { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page description",
};

export default function Home() {
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

import homeSrc from "../../public/home.webp";
import Picture from "@/components/picture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page description",
};

export default function Home() {
  return (
    <Picture imgUrl={homeSrc} altText="Home Image" content="Home content" />
  );
}

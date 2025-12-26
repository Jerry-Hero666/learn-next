import homeSrc from "../../public/home.webp";
import Picture from "@/components/picture";

export default function Home() {
  return (
    <Picture imgUrl={homeSrc} altText="Home Image" content="Home content" />
  );
}

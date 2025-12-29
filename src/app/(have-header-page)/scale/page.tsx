import Picture from "@/components/picture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale",
  description: "Scale page description",
};
const Scale = () => {
  return (
    <Picture imgUrl="/scale.png" altText="Scale Image" content="Scale content" />
  );
};

export default Scale;

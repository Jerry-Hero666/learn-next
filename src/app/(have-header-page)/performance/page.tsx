import Picture from "@/components/picture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
  description: "Performance page description",
};
const Performance = () => {
  return (
    <Picture
      imgUrl="/perform.jpeg"
      altText="Performance Image"
      content="Performance content"
    />
  );
};

export default Performance;

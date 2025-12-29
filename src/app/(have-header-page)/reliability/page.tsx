import Picture from "@/components/picture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
  description: "Reliability page description",
};
const Reliability = () => {
  return (
    <Picture
      imgUrl="/reliablity.webp"
      altText="Reliability Image"
      content="Reliability content"
    />
  );
};

export default Reliability;

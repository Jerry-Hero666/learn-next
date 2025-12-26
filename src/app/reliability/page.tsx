import Picture from "@/components/picture";
import reliability from "../../../public/reliablity.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
  description: "Reliability page description",
};
const Reliability = () => {
  return (
    <Picture
      imgUrl={reliability}
      altText="Reliability Image"
      content="Reliability content"
    />
  );
};

export default Reliability;

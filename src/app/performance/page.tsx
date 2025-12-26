import Picture from "@/components/picture";
import performance from "../../../public/perform.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
  description: "Performance page description",
};
const Performance = () => {
  return (
    <Picture
      imgUrl={performance}
      altText="Performance Image"
      content="Performance content"
    />
  );
};

export default Performance;

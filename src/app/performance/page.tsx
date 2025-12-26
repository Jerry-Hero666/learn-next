import Picture from "@/components/picture";
import performance from "../../../public/perform.jpeg";

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

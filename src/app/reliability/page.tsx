import Picture from "@/components/picture";
import reliability from "../../../public/reliablity.webp";

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

import Picture from "@/components/picture";
import scale from "../../../public/scale.png";
const Scale = () => {
  return (
    <Picture
      imgUrl={scale}
      altText="Scale Image"
      content="Scale content"
    />
  );
};

export default Scale;

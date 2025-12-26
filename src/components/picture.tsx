import Image, { StaticImageData } from "next/image";

interface IProps {
    imgUrl: StaticImageData;
    altText: string;
    content: string;
}

export default function Picture(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgUrl}
          alt={props.altText || "Home Image"}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl">{props.content || "Home content"}</h1>
      </div>
    </div>
  );
}

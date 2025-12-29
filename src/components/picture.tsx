import Image, { StaticImageData } from "next/image";

interface IProps {
  imgUrl: StaticImageData | string;
  altText: string;
  content?: string;
  contentComponent?: React.ReactNode;
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
        {props.content && (
          <h1 className="text-white text-6xl">
            {props.content || "Home content"}
          </h1>
        )}
        {props.contentComponent}
      </div>
    </div>
  );
}

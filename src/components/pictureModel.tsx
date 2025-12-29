"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IParams {
  item: { src: string; alt: string } | undefined;
}

export default function PictureModel(props: IParams) {
  const { item } = props;
  const router = useRouter();

  return (
    <>
      {item?.src ? (
        <div
          className="flex justify-center items-center fixed inset-0 bg-gray-500/[.8]"
          onClick={router.back}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={400}
            height={400}
            className="rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : (
        <p>图片未找到</p>
      )}
    </>
  );
}

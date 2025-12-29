import { pictures } from "@/data";
import Image from "next/image";

interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  return {
    title: `图片详情-${id}`,
  };
}

export default async function PictureDetail({ params }: IParams) {
  const { id } = await params;
  const item = pictures.find((it) => it.id === +id);

  return (
    <div className="container mx-auto px-8">
      {item?.src ? (
        <div>
          <Image
            src={item.src}
            alt={item.alt}
            width={400}
            height={400}
            className="rounded-lg block mx-auto my-10"
          />
          <div className="border-2 border-dashed border-gray-500 rounded-lg p-3 leading-8">
            <p>
                <strong>Title:</strong> {item.name}
            </p>
             <p>
                <strong>Price:</strong> ${item.price}
            </p>
             <p>
                <strong>Description:</strong> {item.alt}
            </p>
          </div>
        </div>
      ) : (
        <p>图片未找到</p>
      )}
    </div>
  );
}

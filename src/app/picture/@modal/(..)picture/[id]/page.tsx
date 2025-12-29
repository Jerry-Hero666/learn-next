import PictureModel from "@/components/pictureModel";
import { pictures } from "@/data";

interface IParams {
  params: Promise<{ id: string }>;
}

export default async function PicturePage({ params }: IParams) {
  const { id } = await params;
  const item = pictures.find((it) => it.id === +id);

  return (
    <>
      <PictureModel item={item} />
    </>
  );
}

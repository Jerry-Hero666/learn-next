import { data } from "@/data";
import { Card } from "antd";

interface IParams {
  params: Promise<{ id: string }>
}

export async function generateMetadata({params}:IParams) {
const { id } = await params;
  return {
    title: `博客详情-${id}`
  }
}

const DetailPage = async ({ params }: IParams) => {
const { id } = await params;
  const item = data.find((it) => it.id === +id);

  return (
    <Card title={item?.title} variant="borderless">
      <p>{item?.body}</p>
    </Card>
  );
};
export default DetailPage;

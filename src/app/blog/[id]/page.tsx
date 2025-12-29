import { data } from "@/data";
import { Card } from "antd";

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const item = data.find((it) => it.id === +id);
  
  return (
    <Card title={item?.title} variant="borderless">
      <p>{item?.body}</p>
    </Card>
  );
};
export default DetailPage;

import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import EditorComponent from "@/components/editor";

interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  return {
    title: `片段详情-${id}`,
  };
}

const DetailPage = async ({ params }: IParams) => {
  const { id } = await params;
  const snippetsById = await prisma.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippetsById || isNaN(id as any)) {
    return notFound();
  }

  return (
    <div>
       <EditorComponent snippet={snippetsById} />
    </div>
    )
  
  
};
export default DetailPage;

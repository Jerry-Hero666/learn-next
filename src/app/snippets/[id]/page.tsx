import DelSnippetsButton from "@/components/del-snippets";
import { prisma } from "@/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  if (!snippetsById) {
    return notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <h1 className="font-bold text-3xl">{snippetsById.title}</h1>
        <div className="flex gap-4">
          <Link
            className="p-2 border border-teal-500 rounded"
            href={`/snippets/${id}/edit`}
          >
            编辑
          </Link>
          <DelSnippetsButton id={parseInt(id)} />
        </div>
      </div>
      <pre className="text-wrap p-3 border border-teal-500 rounded bg-gray-200 mt-6">
        <code>{snippetsById.code}</code>
      </pre>
    </div>
  );
};
export default DetailPage;

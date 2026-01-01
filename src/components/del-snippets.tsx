"use client";

import { deleteSnippet } from "@/actions";

interface IParms {
  id: number;
}

const DelSnippetsButton = ({ id }: IParms) => {
  const handleDelete = async () => {
    await deleteSnippet(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="p-2 border border-teal-500 rounded cursor-pointer"
    >
      删除
    </button>
  );
};
export default DelSnippetsButton;

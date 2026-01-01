"use client";

import { editSnippet } from "@/actions";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

interface IParams {
  snippet: {
    code: string;
    title: string;
    id: number;
  };
}

const EditorComponent = ({ snippet }: IParams) => {
  const [codeValue, setCodeValue] = useState(snippet.code);

  const handleChange = (value: string = "") => {
    setCodeValue(value);
  };
    const editSnippetBind = editSnippet.bind(null,snippet.id,codeValue)
  return (
    <div>
      <Editor
        height="90vh"
        theme="vs-dark"
        value={codeValue}
        language="javascript"
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleChange}
      />
      <form action={editSnippetBind}>
        <button className="p-2 border border-teal-500 rounded">保存</button>
      </form>
    </div>
  );
};
export default EditorComponent;

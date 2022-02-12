import React from "react";
import ReactMarkdown from "react-markdown";
import { useNote } from "../../../context/notes/notes.context";

export function MarkDownPreview() {
    const { state:{markdownText}} = useNote();
    const disallowed = ['image','imageRefrence'];
    
  return (
    <>
        <div className="markdown__preview">
        <ReactMarkdown children={markdownText} 
        disallowedElements={disallowed}
        />
      </div>
    </>
  );
}

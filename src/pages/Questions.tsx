import { marked } from "marked";
import source from "@/content/questions.md?raw";

const html = marked.parse(source, { async: false });
// Only HTML comments in the file means no questions have been written yet.
const isEmpty = source.replace(/<!--[\s\S]*?-->/g, "").trim() === "";

export const Questions = () => {
  return (
    <>
      <h1 className="font-medium">Questions</h1>
      <p className="muted mb-12">Things I find myself wondering about.</p>
      {isEmpty ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <article className="md" dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </>
  );
};

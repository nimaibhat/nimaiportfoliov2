// Each article is src/content/questions/<id>.md, served at /q/<id>. Start the file with:
//
//   ---
//   title: Why do some cities produce so many founders?
//   description: One short line shown under the title in the list.
//   ---
//
// then write the body in Markdown. Use the next unused number for a new file; never renumber.
export interface Question {
  id: number;
  title: string;
  description: string;
  body: string;
}

const files = import.meta.glob<string>("/src/content/questions/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const parse = (path: string, source: string): Question => {
  const id = Number(path.match(/(\d+)\.md$/)?.[1]);
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/);
  const fields = Object.fromEntries(
    (match?.[1] ?? "").split("\n").map((line) => {
      const i = line.indexOf(":");
      return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
    }),
  );
  return {
    id,
    title: fields.title ?? `Untitled ${id}`,
    description: fields.description ?? "",
    body: match ? source.slice(match[0].length) : source,
  };
};

// Newest first.
export const questions = Object.entries(files)
  .map(([path, source]) => parse(path, source))
  .sort((a, b) => b.id - a.id);

import { marked } from "marked";
import { useParams } from "react-router-dom";
import { projects } from "@/content/projects";
import { NotFound } from "@/pages/NotFound";

const pages = import.meta.glob<string>("/src/content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);
  const source = pages[`/src/content/projects/${id}.md`];
  if (!project || source === undefined) return <NotFound />;

  return (
    <>
      <h1 className="font-medium">{project.name}</h1>
      <p className="muted">{project.description}</p>
      {project.href && (
        <p className="mt-2 text-sm">
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="link muted">
            {new URL(project.href).hostname.replace("www.", "")} ↗
          </a>
        </p>
      )}
      <article className="md mt-12" dangerouslySetInnerHTML={{ __html: marked.parse(source, { async: false }) }} />
    </>
  );
};

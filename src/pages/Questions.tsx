import { marked } from "marked";
import { Link, useParams } from "react-router-dom";
import { questions } from "@/content/questions";
import { NotFound } from "@/pages/NotFound";

export const Questions = () => {
  return (
    <>
      <h1 className="font-medium">Questions</h1>
      <p className="muted mb-12">Things I find myself wondering about.</p>
      {questions.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        // Hovering one article dims the rest (see .hover-list in tailwind.css).
        <ul className="hover-list flex flex-col gap-6">
          {questions.map((q) => (
            <li key={q.id} className="hover-item">
              <Link to={`/q/${q.id}`} className="block">
                <span>{q.title}</span>
                <span className="muted block">{q.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export const QuestionArticle = () => {
  const { id } = useParams();
  const question = questions.find((q) => String(q.id) === id);
  if (!question) return <NotFound />;

  return (
    <>
      <h1 className="font-medium">{question.title}</h1>
      <p className="muted">{question.description}</p>
      <article className="md mt-12" dangerouslySetInnerHTML={{ __html: marked.parse(question.body, { async: false }) }} />
    </>
  );
};

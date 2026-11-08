import { Link } from "react-router-dom";
import { Column, Columns, Entry, Section } from "@/components/Section";
import { projects } from "@/content/projects";

const work = [
  { company: "Shopify", href: "https://www.shopify.com", role: "Engineering Intern", dates: "Jun 2026 – Aug 2026" },
  { company: "Scale", href: "https://scale.com", role: "GenAI Intern", dates: "Feb 2026 – Present" },
  { company: "Anthropic", href: "https://www.anthropic.com", role: "Claude Builder", dates: "Aug 2025 – Present" },
  { company: "Vertiv", href: "https://www.vertiv.com", role: "AI Engineering Intern", dates: "May 2025 – Dec 2025" },
];

// Pages that grow over time. Add a route in App.tsx and an entry here.
const thoughts = [
  { name: "Questions", href: "/questions", description: "Things I keep wondering about." },
  { name: "Music", href: "/music", description: "What I've been listening to." },
];

const connect = [
  { name: "GitHub", href: "https://github.com/nimaibhat" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nimai-bhat/" },
  { name: "Instagram", href: "https://www.instagram.com/nimai.bhat/" },
  { name: "Beli", href: "https://beliapp.co/profile/nimaibhat" },
];

export const Home = () => {
  return (
    <>
      <header>
        <h1 className="font-medium">Nimai Bhat</h1>
        <p className="muted">Lifelong learner. Computer Science at Ohio State.</p>
      </header>

      <Section title="Now">
        <p className="body-text">
          I grew up in Ohio and still live here. Right now I am trying to
          increase my surface area to new knowledge and in turn learn more
          about myself.
        </p>
        <p className="body-text">
          I wish for this site to be less a portfolio and more a brain dump of
          things I'm interested in. Lately that includes <Link to="/questions" className="link">questions</Link>{" "}
          I can't stop thinking about and the <Link to="/music" className="link">music</Link> I'm playing.
        </p>
      </Section>

      <Columns>
        <Column title="Work">
          {work.map((w) => (
            <Entry key={w.company} title={w.company} href={w.href}>
              {w.role}
              <br />
              {w.dates}
            </Entry>
          ))}
        </Column>
        <Column title="Projects" visible={3}>
          {projects.map((p) => (
            <Entry key={p.name} title={p.name} href={p.id ? `/p/${p.id}` : p.href} image={p.image}>
              {p.description}
            </Entry>
          ))}
        </Column>
        <Column title="Thoughts">
          {thoughts.map((t) => (
            <Entry key={t.name} title={t.name} href={t.href}>
              {t.description}
            </Entry>
          ))}
        </Column>
      </Columns>

      <Section title="Connect">
        <p className="body-text">
          {connect.map((c, i) => (
            <span key={c.name}>
              {i > 0 && <span className="muted">, </span>}
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="link">
                {c.name}
              </a>
            </span>
          ))}
          .
        </p>
      </Section>
    </>
  );
};

import { Fragment, type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { site } from "../content/site";
import { legalUpdated } from "../content/legal";
import Reveal from "./Reveal";
import { MailBtn } from "./Btn";

type Doc = { title: string; body: string | null; source: string };

// plain email addresses become mailto links; wording is never changed
const mail = (text: string, k: string) =>
  text.split(/([\w.+-]+@[\w-]+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={`${k}-${i}`} href={`mailto:${part}`}>{part}</a> : part,
  );
// **bold** runs from the documents, then email links inside them
const linkify = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{mail(part.slice(2, -2), `b${i}`)}</strong> : <Fragment key={i}>{mail(part, `t${i}`)}</Fragment>,
  );

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("## ")) return <h2>{text.slice(3)}</h2>;
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  return (
    <p>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

/** Legal page: huge centred title, effective date, one readable column. */
export default function LegalPage({ doc, other }: { doc: Doc; other: { to: string; label: string } }) {
  return (
    <>
      <section className="phero phero--legal" aria-labelledby="legal-title">
        <div className="hero__bg" aria-hidden="true" />
        <div className="wrap">
          <h1 className="h1" id="legal-title">{doc.title}</h1>
          <Reveal as="p" className="lead">
            {legalUpdated ? `Effective date: ${legalUpdated}. Publisher: ${site.operator}` : site.operator}
          </Reveal>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap wrap--legal legal">
          {doc.body ? (
            doc.body.split(/\n{2,}/).map((b, i) => <Block key={i} text={b} />)
          ) : (
            <Reveal className="legal__soon" y={16}>
              <p>
                The full {doc.title} for {site.fullName} will be published on this page. Until then, the current
                version is the document linked from our App Store listing.
              </p>
              <a className="btn btn--line" href={doc.source} target="_blank" rel="noopener noreferrer">
                <span>Read the current {doc.title}</span>
                <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </Reveal>
          )}

          <Reveal className="legal__q" y={16}>
            <h2>Questions?</h2>
            <p>Write to {site.operator} and we’ll answer about this document or your data.</p>
            <MailBtn />
            <p className="note">
              See also: <Link to={other.to} className="textlink">{other.label}</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

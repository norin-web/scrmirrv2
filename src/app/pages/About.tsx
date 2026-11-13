import { Link } from "react-router";
import { about, app, site } from "../content/site";
import Reveal from "../components/Reveal";
import { StoreBadge } from "../components/Btn";
import DuoSection from "../components/DuoSection";

export default function About() {
  return (
    <>
      <section className="phero" aria-labelledby="about-title">
        <div className="hero__bg" aria-hidden="true" />
        <div className="wrap">
          <h1 className="h1" id="about-title">About us</h1>
          <Reveal as="p" className="lead">{about.intro}</Reveal>
        </div>
      </section>

      <section className="sec" aria-labelledby="how-title">
        <div className="wrap">
          <div className="head">
            <Reveal as="h2" className="h2" id="how-title">How we build it</Reveal>
          </div>
          <Reveal y={64} className="pgrid">
            {about.principles.map((p) => (
              <article className="pcard" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <DuoSection />

      <section className="sec" aria-labelledby="facts-title">
        <div className="wrap wrap--faq">
          <div className="head">
            <Reveal as="h2" className="h2" id="facts-title">Who we are</Reveal>
          </div>
          <Reveal as="dl" className="specs" y={16}>
            <div>
              <dt>Company</dt>
              <dd>{site.operator}</dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>{site.address}</dd>
            </div>
            <div>
              <dt>App</dt>
              <dd>
                <a href={app.url} target="_blank" rel="noopener noreferrer">{site.fullName}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Support</dt>
              <dd>
                <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
              </dd>
            </div>
            <div>
              <dt>Feedback</dt>
              <dd>
                <Link to="/feedback">Write to us</Link>
              </dd>
            </div>
          </Reveal>
          <Reveal className="center" y={16}>
            <StoreBadge />
          </Reveal>
        </div>
      </section>
    </>
  );
}

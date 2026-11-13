import { Btn } from "../components/Btn";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <section className="phero phero--short">
      <div className="hero__bg" aria-hidden="true" />
      <div className="wrap">
        <h1 className="h1">Page not found</h1>
        <Reveal as="p" className="lead">This page doesn’t exist or has moved.</Reveal>
        <Reveal className="phero__cta">
          <Btn to="/">Back to home</Btn>
        </Reveal>
      </div>
    </section>
  );
}

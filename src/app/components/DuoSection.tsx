import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { duo } from "../content/site";
import { img } from "../utils/img";
import { reduced } from "../utils/motion";
import Reveal from "./Reveal";
import { StoreBadge } from "./Btn";

const STEP = 4500;

/**
 * Folded and Unfolded slide past on their own: text and device ride horizontal
 * tracks inside fixed-size windows, so nothing around them moves.
 */
export default function DuoSection() {
  const [mode, setMode] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // advance only while the block is on screen; reduced motion keeps it still
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    let timer = 0;
    const io = new IntersectionObserver(([e]) => {
      window.clearInterval(timer);
      if (e.isIntersecting) timer = window.setInterval(() => setMode((m) => (m + 1) % duo.modes.length), STEP);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="sec" id="duo" aria-labelledby="duo-title">
      <div className="wrap">
        <div className="head">
          <Reveal as="h2" className="h2" id="duo-title">{duo.title}</Reveal>
          <Reveal as="p" className="lead">{duo.lead}</Reveal>
        </div>

        <Reveal y={48} className="duo">
          <div className="duo__card" ref={ref}>
            <div className="duo__viewport">
              <div className="duo__track duo__track--text" style={{ transform: `translateX(calc(${-mode} * (100% + 48px)))` }}>
                {duo.modes.map((m, i) => (
                  <div key={m.key} className="duo__slide" aria-hidden={i !== mode}>
                    <h3 className="duo__name">{m.label}</h3>
                    <p className="duo__text">{m.text}</p>
                    <p className="duo__big">
                      <b>{m.big}</b>
                      <span>{m.small}</span>
                    </p>
                    <ul className="duo__list">
                      {m.points.map((p) => (
                        <li key={p}>
                          <Check size={20} strokeWidth={1.75} aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <StoreBadge className="duo__badge" />
          </div>

          <div className="duo__stage">
            <div className="duo__track" style={{ transform: `translateX(${-mode * 100}%)` }}>
              {duo.modes.map((d, i) => (
                <div key={d.key} className="duo__frame" aria-hidden={i !== mode}>
                  <img
                    src={img(d.shot)}
                    alt={`Screen Mirroring on iPhone Duo, ${d.label.toLowerCase()}`}
                    className={`duo__img duo__img--${d.key}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

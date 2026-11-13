import { useId, useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

/** Accordion: grey rows, white round "+" that turns into "×". */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();
  return (
    <div className="faq">
      {items.map((it, i) => {
        const on = open === i;
        const id = `${base}-${i}`;
        return (
          <Reveal key={it.q} y={16} delay={i * 60} className={`faq__item ${on ? "is-open" : ""}`}>
            <h3 className="faq__h">
              <button className="faq__q" aria-expanded={on} aria-controls={id} onClick={() => setOpen(on ? null : i)}>
                <span>{it.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  <Plus size={16} strokeWidth={2} />
                </span>
              </button>
            </h3>
            <div className="faq__a" id={id} role="region" aria-hidden={!on}>
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

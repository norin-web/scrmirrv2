import { createElement, type CSSProperties, type ReactNode } from "react";
import { useReveal } from "../utils/useReveal";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** ms */
  delay?: number;
  /** start offset in px: 48 for text, 64 for the feature grid, 16 for FAQ rows */
  y?: number;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: unknown;
};

/** Fades in and rises `y` px when it enters the viewport (CSS transition, never JS-held). */
export default function Reveal({ as = "div", className = "", delay = 0, y = 48, style, children, ...rest }: Props) {
  const { ref, shown } = useReveal<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: `rv ${className} ${shown ? "is-in" : ""}`.trim(),
      style: { ["--rv-y" as string]: `${y}px`, transitionDelay: delay ? `${delay}ms` : undefined, ...style },
      ...rest,
    },
    children,
  );
}

/** Section heading pair: League Gothic h2 + Inter lead, each rising on its own. */
export function Head({ title, lead, as = "h2" }: { title: ReactNode; lead?: ReactNode; as?: "h1" | "h2" }) {
  return (
    <div className="head">
      <Reveal as={as} className={as === "h1" ? "h1" : "h2"}>{title}</Reveal>
      {lead && <Reveal as="p" className="lead">{lead}</Reveal>}
    </div>
  );
}

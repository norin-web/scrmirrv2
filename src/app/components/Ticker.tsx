import { useLayoutEffect, useRef } from "react";
import { img } from "../utils/img";

/**
 * Endless strip of app screens in mockups, ~100 px/s,
 * with soft fades on both edges. Pure CSS animation; the duration is derived
 * from the track width so the speed stays the same on every screen.
 */
export default function Ticker({ items }: { items: { src: string; alt: string }[] }) {
  const track = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = track.current;
    if (!el) return;
    const set = () => el.style.setProperty("--dur", `${Math.max(20, el.scrollWidth / 2 / 100)}s`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const loop = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker__track" ref={track}>
        {loop.map((s, i) => (
          <img
            key={i}
            src={img(s.src)}
            alt={i < items.length ? s.alt : ""}
            aria-hidden={i >= items.length || undefined}
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

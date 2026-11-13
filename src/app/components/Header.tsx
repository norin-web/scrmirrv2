import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { app, duoNotice, nav, site } from "../content/site";
import { img } from "../utils/img";
import { DownloadBtn, StoreBadge } from "./Btn";

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label={`${site.brand}, home`}>
      <img src={img(app.icon)} alt="" width={30} height={30} />
      <span>{site.brand}</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => setOpen(false), [pathname, hash]);
  // lock the page behind the mobile menu (on <html>, so the sticky header stays put)
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    return () => document.documentElement.classList.remove("menu-open");
  }, [open]);

  const isActive = (to: string) => (to.includes("#") ? pathname === "/" && hash === to.slice(1) : undefined);

  return (
    <>
      <div className="notice">
        <div className="notice__in">
          <span className="notice__tag">New</span>
          <span className="notice__txt">{duoNotice.text}</span>
          <Link to={duoNotice.link} className="notice__link">
            {duoNotice.cta}
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <header className={`hdr ${open ? "is-open" : ""}`}>
        <div className="hdr__in">
          <Logo />
          <nav className="hdr__nav" aria-label="Main">
            {nav.map((n) =>
              n.to.includes("#") ? (
                <Link key={n.to} to={n.to} className={`hdr__link ${isActive(n.to) ? "active" : ""}`}>
                  {n.label}
                </Link>
              ) : (
                <NavLink key={n.to} to={n.to} end className="hdr__link">
                  {n.label}
                </NavLink>
              ),
            )}
          </nav>
          <DownloadBtn className="hdr__dl" />
          <button
            className="hdr__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mnav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} strokeWidth={1.75} /> : <Menu size={26} strokeWidth={1.75} />}
          </button>
        </div>
        <div className="mnav" id="mnav" hidden={!open}>
          <nav aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="mnav__link">
                {n.label}
              </Link>
            ))}
          </nav>
          <StoreBadge />
        </div>
      </header>
    </>
  );
}

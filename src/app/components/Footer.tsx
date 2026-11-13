import { Link } from "react-router";
import { app, site } from "../content/site";

const groups: { title: string; links: { to: string; label: string; ext?: boolean }[] }[] = [
  {
    title: "Product",
    links: [
      { to: "/app", label: "The App" },
      { to: "/about#duo", label: "iPhone Duo" },
      { to: app.url, label: "App Store", ext: true },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/support", label: "Support" },
      { to: "/feedback", label: "Feedback" },
      { to: "/about", label: "About" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Use" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr__in">
        {groups.map((g) => (
          <div className="ftr__row" key={g.title}>
            <span className="ftr__title">{g.title}</span>
            <nav className="ftr__links" aria-label={g.title}>
              {g.links.map((l) =>
                l.ext ? (
                  <a key={l.label} href={l.to} target="_blank" rel="noopener noreferrer">{l.label}</a>
                ) : (
                  <Link key={l.label} to={l.to}>{l.label}</Link>
                ),
              )}
            </nav>
          </div>
        ))}
        <div className="ftr__row">
          <span className="ftr__title">Contact</span>
          <nav className="ftr__links" aria-label="Contact">
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
        </div>

        <div className="ftr__bottom">
          <p>Copyright © {site.year} {site.operator}</p>
          <p className="ftr__fine">{site.address}</p>
          <p className="ftr__fine">{site.disclaimer}</p>
          <button className="ftr__top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

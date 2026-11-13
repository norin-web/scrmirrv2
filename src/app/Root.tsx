import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "./content/site";

const titles: Record<string, string> = {
  "/app": "The App",
  "/about": "About",
  "/support": "Support",
  "/contact": "Contact",
  "/feedback": "Feedback",
  "/terms": "Terms of Use",
  "/privacy": "Privacy Policy",
};

export default function Root() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const t = titles[pathname.replace(/\/$/, "")];
    // brand first, so a narrow browser tab still shows the app name
    document.title = t ? `${t} | ${site.brand}` : `${site.brand}: Air Cast TV for iPhone`;
  }, [pathname]);

  // new page → top; "/about#duo" style links → that section, below the sticky header
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    // web fonts change heading heights after the first jump, so settle again once they load
    let alive = true;
    const go = () => alive && document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    const t = setTimeout(go, 60);
    document.fonts?.ready.then(() => requestAnimationFrame(() => go()));
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main" className="page" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

import { Globe, Image, Music, Presentation, Smartphone, Video, type LucideIcon } from "lucide-react";
import { app, faq, features, hero, shots, site, sources } from "../content/site";
import { img } from "../utils/img";
import Reveal, { Head } from "../components/Reveal";
import { MailBtn, StoreBadge } from "../components/Btn";
import Faq from "../components/Faq";
import Ticker from "../components/Ticker";
import DuoSection from "../components/DuoSection";

const icons: Record<string, LucideIcon> = {
  screen: Smartphone,
  photo: Image,
  video: Video,
  slides: Presentation,
  music: Music,
  browser: Globe,
};

export default function Home() {
  return (
    <>
      {/* S01 Hero — heading, lead and badge rise 48px; the phone drops in from above with a soft spring */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__in">
          <h1 className="h1 hero__title" id="hero-title">
            {hero.title[0]}{" "}
            <br />
            {hero.title[1]}
          </h1>
          <Reveal as="p" className="lead hero__lead">{hero.lead}</Reveal>
          <Reveal className="hero__cta">
            <StoreBadge />
          </Reveal>
          <div className="hero__media">
            <img
              src={img(hero.phone)}
              alt="Screen Mirroring home screen on iPhone, connected to a Samsung TV"
              width={900}
              height={1862}
            />
          </div>
        </div>
      </section>

      {/* S02 Scene — the phone in hand and the same picture on the TV */}
      <section className="sec" id="scene" aria-labelledby="scene-title">
        <div className="wrap">
          <div className="head">
            <Reveal as="h2" className="h2" id="scene-title">Your game on the big screen</Reveal>
            <Reveal as="p" className="lead">Mirror your iPhone and the TV shows the same picture: games, videos, photos and apps.</Reveal>
          </div>
        </div>
        <div className="scene">
          <Reveal className="scene__tv" y={48}>
            <img src={img("/images/scene-tv.webp")} alt="A smart TV showing a racing game" loading="lazy" width={1400} height={1098} />
          </Reveal>
          <Reveal className="scene__hands" y={64} delay={200}>
            <img src={img("/images/scene-hands.webp")} alt="Hands holding an iPhone with the same racing game" loading="lazy" width={1600} height={700} />
            {/* blurred twin shows only where the sharp image fades: a progressive blur at the edges */}
            <img className="scene__soft" src={img("/images/scene-hands.webp")} alt="" aria-hidden="true" loading="lazy" width={1600} height={700} />
          </Reveal>
        </div>
      </section>

      {/* S03 Features — 2×2 grey cards, phone cropped by the card edge */}
      <section className="sec" id="features" aria-labelledby="features-title">
        <div className="wrap">
          <div className="head">
            <Reveal as="h2" className="h2" id="features-title">Built for the big screen</Reveal>
            <Reveal as="p" className="lead">Four things the app does, straight from its screens.</Reveal>
          </div>
          <Reveal y={64} className="fgrid">
            {features.map((f) => (
              <article className="fcard" key={f.title}>
                <h3 className="fcard__t">{f.title}</h3>
                <p className="fcard__p">{f.text}</p>
                <div className={`fcard__media fcard__media--${f.pos}`}>
                  <img src={img(f.img)} alt={`${f.title}: app screen`} loading="lazy" />
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* S04 Sources — masonry of white cards */}
      <section className="sec" id="sources" aria-labelledby="sources-title">
        <div className="wrap">
          <div className="head">
            <Reveal as="h2" className="h2" id="sources-title">Cast anything</Reveal>
            <Reveal as="p" className="lead">Every source in the app sits one tap away from your TV.</Reveal>
          </div>
          <div className="masonry">
            {sources.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <Reveal as="article" className="scard" key={s.name} delay={(i % 3) * 80}>
                  <div className="scard__top">
                    <span className="scard__ico" style={{ background: s.tint }} aria-hidden="true">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="scard__who">
                      <b>{s.name}</b>
                      <span>{s.sub}</span>
                    </span>
                  </div>
                  <p className="scard__p">{s.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* S05 iPhone Duo */}
      <DuoSection />

      {/* S06 FAQ */}
      <section className="sec" id="faq" aria-labelledby="faq-title">
        <div className="wrap wrap--faq">
          <Head title={<span id="faq-title">Frequently Asked Questions</span>} />
          <Faq items={faq.slice(0, 6)} />
          <Reveal className="faq__more" y={16}>
            <p>Can’t find your answer? Ask us directly.</p>
<div className="mailrow">
              <MailBtn email={site.supportEmail} />
              <MailBtn />
            </div>
          </Reveal>
        </div>
      </section>

      {/* S07 Last CTA — icon, headline, badge and the App Store screenshot ticker */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="cta__ctx">
          <Reveal className="cta__icon">
            <img src={img(app.icon)} alt="" width={72} height={72} />
          </Reveal>
          <Reveal as="h2" className="h2" id="cta-title">Your iPhone on the big screen</Reveal>
          <Reveal as="p" className="lead">Get {site.brand} on the App Store and cast in a few taps.</Reveal>
          <Reveal className="cta__btns">
            <StoreBadge />
          </Reveal>
        </div>
        <Ticker items={shots} />
      </section>
    </>
  );
}

import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { app, appShots, features, rating, site, specs, steps } from "../content/site";
import { img } from "../utils/img";
import Reveal from "../components/Reveal";
import { StoreBadge } from "../components/Btn";

export default function OurApp() {
  return (
    <>
      <section className="phero" aria-labelledby="app-title">
        <div className="hero__bg" aria-hidden="true" />
        <div className="wrap">
          <h1 className="h1" id="app-title">
            Screen Mirroring{" "}
            <br />
            Air Cast TV
          </h1>
          <Reveal as="p" className="lead">
            An iPhone app that puts your screen, photos, videos, music and websites on a smart TV over Wi-Fi.
          </Reveal>
          <Reveal className="phero__cta">
            <StoreBadge />
            <span className="hero__note">
              Rated {rating.value} out of 5 from {rating.count} App Store ratings
            </span>
          </Reveal>
        </div>
      </section>

      {/* App screens in mockups, one static row */}
      <section className="sec sec--tight" aria-label="App screens">
        <Reveal className="mockrow" y={64}>
          {appShots.map((s) => (
            <img key={s.src} src={img(s.src)} alt={s.alt} loading="lazy" />
          ))}
        </Reveal>
      </section>

      {/* Photo scene — the same picture on the phone and the TV */}
      <section className="sec" aria-labelledby="photo-title">
        <div className="wrap">
          <div className="head">
            <Reveal as="h2" className="h2" id="photo-title">Your photos, bigger</Reveal>
            <Reveal as="p" className="lead">Pick a picture in Cast Photo and the TV shows it full screen, in full colour.</Reveal>
          </div>
        </div>
        <div className="scene scene--photo">
          <Reveal className="scene__tv" y={48}>
            <img src={img("/images/photo-tv.webp")} alt="A smart TV showing a colourful leaf photo" loading="lazy" width={1400} height={1098} />
          </Reveal>
          <Reveal className="scene__phone" y={64} delay={200}>
            <img src={img("/images/photo-phone.webp")} alt="iPhone showing the same leaf photo" loading="lazy" width={1600} height={678} />
          </Reveal>
        </div>
      </section>

      {/* How to start */}
      <section className="sec" aria-labelledby="start-title">
        <div className="wrap">
          <div className="head">
            <Reveal as="h2" className="h2" id="start-title">Start in three steps</Reveal>
            <Reveal as="p" className="lead">From download to the first picture on your TV.</Reveal>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <Reveal as="li" className="step" key={s.title} delay={i * 80}>
                {i === 0 ? (
                  <img className="step__icon" src={img(app.icon)} alt="" width={56} height={56} />
                ) : (
                  <span className="step__n" aria-hidden="true">{i + 1}</span>
                )}
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Feature rows: phone + text */}
      <section className="sec" aria-labelledby="inside-title">
        <div className="wrap">
          <div className="head">
            <Reveal as="h2" className="h2" id="inside-title">Inside the app</Reveal>
          </div>
          <div className="rows">
            {features.map((f, i) => (
              <Reveal as="article" className={`row ${i % 2 ? "row--flip" : ""}`} key={f.title} y={64}>
                <div className="row__txt">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
                <div className={`row__media fcard__media--${f.pos}`}>
                  <img src={img(f.img)} alt={`${f.title}: app screen`} loading="lazy" />
                </div>
              </Reveal>
            ))}
            <Reveal as="article" className="row row--duo" y={64}>
              <div className="row__txt">
                <h3>Ready for iPhone Duo</h3>
                <p>Folded or open, the layout fits the screen you’re using: a compact home on the cover display, a sidebar with every source on the inner one.</p>
                <Link to="/about#duo" className="textlink">
                  See both layouts <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
              <div className="row__media row__media--duo">
                <img src={img("/images/duo-open-home.webp")} alt="Screen Mirroring on an unfolded iPhone Duo" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specs from the App Store */}
      <section className="sec" aria-labelledby="specs-title">
        <div className="wrap wrap--faq">
          <div className="head">
            <Reveal as="h2" className="h2" id="specs-title">Details</Reveal>
            <Reveal as="p" className="lead">As listed on the App Store.</Reveal>
          </div>
          <Reveal as="dl" className="specs" y={16}>
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
          <Reveal className="center" y={16}>
            <StoreBadge />
          </Reveal>
          <p className="sr-only">{site.fullName}</p>
        </div>
      </section>
    </>
  );
}

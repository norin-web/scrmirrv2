import { Link } from "react-router";
import { faq, site } from "../content/site";
import Reveal from "../components/Reveal";
import Faq from "../components/Faq";
import { MailBtn } from "../components/Btn";

export default function Support() {
  return (
    <>
      <section className="phero" aria-labelledby="support-title">
        <div className="hero__bg" aria-hidden="true" />
        <div className="wrap">
          <h1 className="h1" id="support-title">Support</h1>
          <Reveal as="p" className="lead">Connecting, casting, iPhone Duo and subscriptions: the common questions, answered.</Reveal>
        </div>
      </section>

      <section className="sec sec--tight" aria-label="Questions and answers">
        <div className="wrap wrap--faq">
          <Faq items={faq} />
          <Reveal className="faq__more" y={16}>
            <p>Still stuck? Tell us your iPhone model and TV brand and we’ll help.</p>
<div className="mailrow">
              <MailBtn email={site.supportEmail} />
              <MailBtn />
            </div>
            <p className="note">
              Or use the <Link to="/feedback" className="textlink">feedback form</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

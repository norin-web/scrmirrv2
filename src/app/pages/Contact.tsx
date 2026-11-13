import { useLocation } from "react-router";
import { site } from "../content/site";
import Reveal from "../components/Reveal";
import MailForm from "../components/MailForm";

export default function Contact() {
  const feedback = useLocation().pathname.includes("feedback");
  return (
    <>
      <section className="phero" aria-labelledby="contact-title">
        <div className="hero__bg" aria-hidden="true" />
        <div className="wrap">
          <h1 className="h1" id="contact-title">{feedback ? "Feedback" : "Contact us"}</h1>
          <Reveal as="p" className="lead">Questions, ideas or a TV that won’t connect: write to us at any time.</Reveal>
          <Reveal className="bigmail">
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
        </div>
      </section>

      <section className="sec sec--tight" aria-label="Message form">
        <div className="wrap wrap--faq">
          <Reveal className="formcard" y={64}>
            <MailForm
              subject={feedback ? "Screen Mirroring feedback" : "Screen Mirroring question"}
              submit="Send message"
              fields={[
                { name: "name", label: "Your name", required: true, auto: "name" },
                { name: "email", label: "Your email", type: "email", required: true, auto: "email" },
                { name: "topic", label: "Topic", options: ["Connecting to a TV", "iPhone Duo", "Subscription or purchase", "Feedback or idea", "Something else"] },
                { name: "device", label: "iPhone model and TV brand", auto: "off" },
                { name: "message", label: "Message", textarea: true, required: true },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { screens } from "../content/site";
import { Phone } from "../components/ui";
import { PageHero } from "../components/blocks";

export function About() {
  return (
    <main>
      <PageHero label="About" title="Built for staying in touch">
        <p>
          Unify Messenger is an iPhone app for people who keep in touch with someone in prison. It brings messages,
          visits and answers about prison rules into one place.
        </p>
      </PageHero>

      <div className="sheet">
        <section className="wrap sec about">
          <div className="about-copy">
            <h2 className="display h2 h2--left">One app instead of many.</h2>
            <p className="sec-sub sec-sub--left">
              Messages, visit dates and rule changes are easy to lose track of. Unify keeps them together, so you can
              focus on the conversation itself.
            </p>
          </div>
          <div className="about-art">
            <Phone src={screens.messages.src} alt={screens.messages.alt} className="about-phone" />
          </div>
        </section>

      </div>
    </main>
  );
}

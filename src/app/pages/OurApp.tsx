import { screens } from "../content/site";
import { Phone, StoreButton } from "../components/ui";
import { FeatureTabs, PageHero } from "../components/blocks";

const reel = [
  { s: screens.home, t: "Home" },
  { s: screens.messages, t: "Messages" },
  { s: screens.chat, t: "Chat" },
  { s: screens.ask, t: "Ask about rules" },
];

export function OurApp() {
  return (
    <main>
      <PageHero label="The app" title="Unify Messenger for iPhone">
        <p>Messages, visit dates and clear answers about prison rules, in one app.</p>
        <StoreButton />
      </PageHero>

      <div className="sheet">
        <section className="wrap sec">
          <div className="reel">
            {reel.map((r) => (
              <figure className="reel-item" key={r.t}>
                <Phone src={r.s.src} alt={r.s.alt} />
                <figcaption>{r.t}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      <section className="dark dark--last">
        <div className="wrap">
          <FeatureTabs />
        </div>
      </section>
    </main>
  );
}

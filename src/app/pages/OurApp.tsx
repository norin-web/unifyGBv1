import { features } from "../content/site";
import { img } from "../utils/img";
import { AppStoreButton } from "../components/AppStoreButton";

export function OurApp() {
  return (
    <main>
      <section className="wrap page-hero">
        <h1>The app</h1>
        <p className="lead">Messages, visit dates and answers about prison rules, in one app on iPhone.</p>
        <AppStoreButton />
      </section>

      <section className="wrap strip-compact">
        <img className="phone" src={img("/images/screen-home.png")} alt="Home screen" />
        <img className="phone" src={img("/images/screen-messages.png")} alt="Messages list" />
        <img className="phone" src={img("/images/screen-chat.png")} alt="Chat conversation" />
        <img className="phone" src={img("/images/screen-newchat.png")} alt="Ask about prison rules" />
      </section>

      <section className="wrap section narrow">
        <div className="rows">
          {features.map((f) => (
            <div className="row-item" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

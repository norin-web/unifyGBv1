import { useState } from "react";
import { app, steps, walkthrough } from "../content/site";
import { img } from "../utils/img";
import { AppStoreButton } from "../components/AppStoreButton";

export function Home() {
  const [active, setActive] = useState(walkthrough[0].id);

  return (
    <main>
      {/* Hero */}
      <section className="wrap hero">
        <div>
          <h1>Stay close to the people who matter most.</h1>
          <p className="lead">
            Message someone in prison, keep track of visits and ask about prison rules, in one app.
          </p>
          <AppStoreButton />
        </div>
        <div className="hero-art">
          <img className="phone" src={img("/images/screen-home.png")} alt="Unify Messenger home screen" />
        </div>
      </section>

      {/* Real screens */}
      <section className="strip" aria-label="App screens">
        <div className="wrap row">
          <img className="phone" src={img("/images/screen-messages.png")} alt="Messages list" />
          <img className="phone" src={img("/images/screen-chat.png")} alt="Chat conversation" />
          <img className="phone" src={img("/images/screen-newchat.png")} alt="Ask about prison rules" />
        </div>
      </section>

      {/* Walkthrough: tabs switch the phone screen */}
      <section className="wrap section tabs-block" id="walkthrough">
        <div>
          <h2 className="h2">See it in action.</h2>
          <div className="tabs" role="tablist" aria-label="App screens">
            {walkthrough.map((w) => (
              <button
                key={w.id}
                role="tab"
                className="tab"
                aria-selected={active === w.id}
                onClick={() => setActive(w.id)}
              >
                <strong>{w.title}</strong>
                {w.text}
              </button>
            ))}
          </div>
        </div>
        <div className="tab-screen">
          {walkthrough.map((w) => (
            <img
              key={w.id}
              className={active === w.id ? "on" : undefined}
              src={img(w.img)}
              alt={w.alt}
            />
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="wrap section narrow" id="start">
        <h2 className="h2">How to start</h2>
        <div className="rows">
          {steps.map((s) => (
            <div className="row-item" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrap">
        <div className="cta">
          <h2>Start with the app.</h2>
          <a className="btn btn--light" href={app.url}>Download on the App Store</a>
        </div>
      </section>
    </main>
  );
}

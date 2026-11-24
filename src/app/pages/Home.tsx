import { Fragment } from "react";
import { screens, statement, steps } from "../content/site";
import { img } from "../utils/img";
import { Label, Phone, StoreButton, Waves } from "../components/ui";
import { Faq, FeatureTabs, useScrollProgress } from "../components/blocks";

export function Home() {
  const { ref: stRef, p } = useScrollProgress<HTMLParagraphElement>();
  type Piece = { t?: string; chip?: string };
  const words: Piece[] = statement.flatMap((s: Piece): Piece[] =>
    s.chip ? [{ chip: s.chip }] : (s.t ?? "").split(" ").map((t) => ({ t }))
  );

  return (
    <main>
      {/* S01 Hero: gradient, phone with floating cards, big headline */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <Waves className="hero-waves" />
        <div className="hero-stage">
          <div className="hero-ring" aria-hidden="true" />
          <Phone src={screens.home.src} alt={screens.home.alt} className="hero-phone" />

          <div className="float float--a" aria-hidden="true">
            <span className="float-k">Messages</span>
            <span className="float-v">3 unread</span>
            <span className="float-s">last 2h ago</span>
          </div>
          <div className="float float--b" aria-hidden="true">
            <span className="float-k">Next visit</span>
            <span className="float-v">Sat 26 Apr</span>
            <span className="float-s">14:00</span>
          </div>
          <div className="float float--c" aria-hidden="true">
            <span className="avatar">JW</span>
            <span>
              <span className="float-v float-v--sm">James Williams</span>
              <span className="float-s">Connection approved. Say hello!</span>
            </span>
          </div>
          <div className="float float--d" aria-hidden="true">
            <span className="tick">✦</span>
            <span>
              <span className="float-v float-v--sm">Ask AI</span>
              <span className="float-s">Ask about prison rules…</span>
            </span>
          </div>
        </div>

        <div className="hero-copy">
          <h1 className="display hero-title">
            <span className="grad">Stay close to the people</span> <span>who matter most</span>
          </h1>
          <p className="hero-sub">
            Message someone in prison, keep track of visits and get clear answers about prison rules, all in one app
            for iPhone.
          </p>
          <div className="hero-actions">
            <StoreButton />
            <a className="ghost" href="#features">See how it works</a>
          </div>
        </div>
      </section>

      {/* Sheet that slides over the gradient */}
      <div className="sheet">
        {/* S02 Benefits */}
        <section className="wrap sec">
          <div className="sec-head">
            <Label n="01">Benefits</Label>
            <h2 className="display h2">Family contact, simplified.</h2>
            <p className="sec-sub">
              Messages, visits and the rules that affect them, in one app built around the person you are writing to.
            </p>
          </div>

          <div className="bento">
            <article className="tile tile--list">
              <p className="tile-k">Messages</p>
              <ul className="mini-list">
                <li><span className="avatar">OB</span><span><b>Oliver Bennett</b><em>Thanks for your letter. It really meant a lot…</em></span><i>3</i></li>
                <li><span className="avatar">GT</span><span><b>George Taylor</b><em>How did your interview go?</em></span><i>1</i></li>
                <li><span className="avatar">HC</span><span><b>Harry Clarke</b><em>You: Looking forward to seeing you…</em></span></li>
              </ul>
              <h3 className="tile-t">Every conversation in one list</h3>
            </article>

            <article className="tile tile--visit">
              <p className="tile-k">Next visit</p>
              <div className="visit">
                <span className="visit-day">26</span>
                <span className="visit-meta"><b>Saturday, April</b><em>14:00</em></span>
              </div>
              <h3 className="tile-t">Your next visit, always in view</h3>
            </article>

            <article className="tile tile--blue">
              <Waves className="tile-waves" />
              <p className="tile-k tile-k--light">Updates</p>
              <div className="notice">
                <b>Visit rules updated</b>
                <em>Rules for visits during the May holidays have changed</em>
                <span className="ask">✦ Ask AI</span>
              </div>
              <h3 className="tile-t tile-t--light">Rule changes, explained</h3>
            </article>

            <article className="tile tile--status">
              <p className="tile-k">Status</p>
              <div className="status">
                <span className="status-ring" aria-hidden="true"><span /></span>
                <span><b>Standard level</b><em>Next review in 14 days</em></span>
              </div>
              <div className="keydate"><span>Key date</span><b>Release · 12 Nov 2026</b></div>
              <h3 className="tile-t">Status and key dates</h3>
            </article>
          </div>
        </section>

        {/* S03 Statement with chips, lights up on scroll */}
        <section className="wrap statement-wrap">
          <p className="statement" ref={stRef} style={{ ["--p" as string]: p }}>
            {words.map((w, i) => {
              const lit = i / words.length < p * 1.05;
              return (
                <Fragment key={i}>
                  {w.chip ? (
                    <span className={`chip${lit ? " is-lit" : ""}`}>{w.chip}</span>
                  ) : (
                    <span className={`word${lit ? " is-lit" : ""}`}>{w.t}</span>
                  )}{" "}
                </Fragment>
              );
            })}
          </p>
        </section>

        {/* S04 Big words with stacked glass facts */}
        <section className="big" aria-label="Stay connected">
          <p className="display big-line" aria-hidden="true">Stay connected</p>
          <div className="big-stack">
            <div className="glass glass--1">
              <span className="glass-k">Delivered</span>
              <span className="glass-v">✓ 13:07</span>
              <span className="glass-s">Every message shows its delivery time.</span>
            </div>
            <div className="glass glass--2">
              <span className="glass-k">New connection</span>
              <span className="glass-v glass-v--sm">Connection approved. Say hello!</span>
              <span className="glass-s">New connections show up at the top of Messages.</span>
            </div>
            <div className="glass glass--3">
              <span className="glass-k">Source</span>
              <span className="glass-v glass-v--sm">HMPPS Incentives Policy Framework</span>
              <span className="glass-s">Answers about rules come with their source.</span>
            </div>
          </div>
        </section>
      </div>

      {/* S05 Features, dark */}
      <section className="dark" id="features">
        <div className="wrap">
          <div className="sec-head sec-head--dark">
            <Label n="02" dark>Key features</Label>
            <h2 className="display h2 h2--light">Everything in one place.</h2>
            <p className="sec-sub sec-sub--dark">
              Tap a feature to see the real screen from the app.
            </p>
          </div>
          <FeatureTabs />
        </div>
      </section>

      {/* S06 How to start */}
      <section className="wrap sec">
        <div className="sec-head">
          <Label n="03">How to start</Label>
          <h2 className="display h2">Up and running in three steps.</h2>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <article className={`step step--${i + 1}`} key={s.title}>
              {i === 0 ? (
                <img className="step-icon" src={img("/images/app-icon.webp")} alt="" width={64} height={64} />
              ) : (
                <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
              )}
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i === 0 && <StoreButton />}
              {i === 1 && (
                <div className="step-inset">
                  <span className="avatar">JW</span>
                  <span>
                    <b>James Williams</b>
                    <em>Connection approved. Say hello!</em>
                  </span>
                  <span className="new">New</span>
                </div>
              )}
              {i === 2 && (
                <div className="step-shot">
                  <img src={img(screens.chat.src)} alt="" />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* S07 FAQ, dark */}
      <section className="dark dark--faq">
        <div className="wrap">
          <div className="sec-head sec-head--dark">
            <Label n="04" dark>FAQs</Label>
            <h2 className="display h2 h2--light">Got questions? Here are clear answers.</h2>
          </div>
          <Faq />
        </div>
      </section>
    </main>
  );
}

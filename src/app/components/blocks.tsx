import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { faq, features, site } from "../content/site";
import { Phone, Waves } from "./ui";

/** Dark feature block: list on the right switches the phone on the left. */
export function FeatureTabs() {
  const [active, setActive] = useState(features[0].id);
  const index = features.findIndex((f) => f.id === active);
  const current = features[index];

  return (
    <div className="feat">
      <div className="feat-stage">
        <Waves className="feat-waves" />
        <div className="feat-glow" aria-hidden="true" />
        <div className="feat-window">
          <div className="feat-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {features.map((f) => (
              <div key={f.id} className="feat-slot" aria-hidden={f.id !== active}>
                <Phone src={f.screen.src} alt={f.screen.alt} className="feat-phone" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="feat-panel" role="tabpanel" id="feat-panel" aria-labelledby={`feat-tab-${current.id}`}>
        <p className="feat-kicker">{current.label}</p>
        <h3 className="feat-title">{current.title}</h3>
        <p className="feat-text">{current.text}</p>
        <div className="feat-list" role="tablist" aria-label="App features">
          {features.map((f) => (
            <button
              key={f.id}
              role="tab"
              id={`feat-tab-${f.id}`}
              aria-selected={f.id === active}
              aria-controls="feat-panel"
              className="feat-item"
              onClick={() => setActive(f.id)}
            >
              <span className="feat-name">{f.label}</span>
              <span className="feat-dot" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Numbered accordion on a dark panel, first item open. */
export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
            <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
              <span className="faq-text">{item.q}</span>
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div className="faq-a" hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
      <div className="faq-more">
        <p className="faq-more-title">Still have questions?</p>
        <p>
          Write to <a href={`mailto:${site.email}`}>{site.email}</a> or use the{" "}
          <Link to="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
}

/** Gradient band at the top of inner pages. */
export function PageHero({ title, children }: { label?: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="phero">
      <div className="wrap phero-in">
        <h1 className="display phero-title">{title}</h1>
        {children && <div className="phero-sub">{children}</div>}
      </div>
    </section>
  );
}

/** Words light up as the paragraph scrolls through the viewport. Text is always readable. */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const v = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
      setP(Math.max(0, Math.min(1, v)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return { ref, p };
}

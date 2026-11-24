import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { privacy, terms } from "../content/legal";
import { site } from "../content/site";
import { PageHero } from "../components/blocks";

type Kind = "privacy" | "terms";

// Turns URLs and the support email inside the verbatim text into links; the words stay unchanged.
function linkify(text: string): ReactNode[] {
  const re = /(https?:\/\/[^\s]+?)(?=[.,;)]?(?:\s|$))|([\w.+-]+@[\w-]+\.[\w.]+\w)/g;
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    out.push(text.slice(last, m.index));
    const v = m[0];
    out.push(
      m[1] ? (
        <a key={m.index} href={v} target="_blank" rel="noopener">{v}</a>
      ) : (
        <a key={m.index} href={`mailto:${v}`}>{v}</a>
      )
    );
    last = m.index + v.length;
  }
  out.push(text.slice(last));
  return out;
}

export function Legal({ kind }: { kind: Kind }) {
  const isPrivacy = kind === "privacy";
  const doc = isPrivacy ? privacy : terms;
  const total = doc.sections.length;

  // Sections fold like conversations. A section counts as read only once its last line
  // has been on screen while open, the way a message gets its double tick in the app.
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const [read, setRead] = useState<Set<number>>(() => new Set());
  const ends = useRef<(HTMLSpanElement | null)[]>([]);
  const bar = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  // While the bar is pinned under the header, it gets a solid backing so text never shows through.
  useEffect(() => {
    const onScroll = () => {
      const el = bar.current;
      if (!el) return;
      setStuck(el.getBoundingClientRect().top <= parseFloat(getComputedStyle(el).top) + 1 && window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  useEffect(() => {
    setOpen(new Set([0]));
    setRead(new Set());
  }, [kind]);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      const seen = entries.filter((e) => e.isIntersecting).map((e) => Number((e.target as HTMLElement).dataset.i));
      if (seen.length) setRead((prev) => new Set([...prev, ...seen]));
    });
    ends.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [open, kind]);

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  const allOpen = open.size === total;
  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(doc.sections.map((_, i) => i)));

  return (
    <main>
      <PageHero title={isPrivacy ? "Privacy Policy" : "Terms of Use"}>
        <p className="doc-links">
          {isPrivacy ? <Link to="/terms">Read the Terms of Use</Link> : <Link to="/privacy">Read the Privacy Policy</Link>}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </PageHero>

      <div className="sheet">
        <section className="wrap sec doc">
          <div className="doc-intro">
            {doc.intro.map((p, i) => (
              <p key={i}>{linkify(p)}</p>
            ))}
          </div>

          <div className={`doc-bar${stuck ? " is-stuck" : ""}`} ref={bar}>
            <div className="doc-progress" role="status" aria-live="polite">
              <span className="doc-count">
                <b>{read.size}</b> of {total} sections read
              </span>
              <span className="doc-track" aria-hidden="true">
                <span style={{ transform: `scaleX(${read.size / total})` }} />
              </span>
            </div>
            <button className="doc-all" onClick={toggleAll}>
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>

          <ol className="doc-list">
            {doc.sections.map((s, i) => {
              const isOpen = open.has(i);
              const isRead = read.has(i);
              const id = `${kind}-${s.n}`;
              return (
                <li className={`doc-sec${isOpen ? " is-open" : ""}`} key={id}>
                  <h2>
                    <button
                      className="doc-q"
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() => toggle(i)}
                    >
                      <span className="doc-n">{s.n}</span>
                      <span className="doc-t">{s.title}</span>
                      {isRead && (
                        <span className="doc-tick" aria-label="Read">
                          <svg viewBox="0 0 20 12" aria-hidden="true">
                            <path d="M1 6.5l3.5 3.5L11 2.5M8.5 10L15 2.5" />
                          </svg>
                        </span>
                      )}
                      <span className="doc-chev" aria-hidden="true" />
                    </button>
                  </h2>
                  <div className="doc-a" id={id} hidden={!isOpen}>
                    {s.body.map((p, j) => (
                      <p key={j}>{linkify(p)}</p>
                    ))}
                    <span
                      className="doc-end"
                      data-i={i}
                      ref={(el) => {
                        ends.current[i] = isOpen ? el : null;
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </main>
  );
}

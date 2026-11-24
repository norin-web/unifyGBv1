import { privacy, terms } from "../content/legal";

type Kind = "privacy" | "terms";

export function Legal({ kind }: { kind: Kind }) {
  const title = kind === "privacy" ? "Privacy Policy" : "Terms of Use";
  const body = kind === "privacy" ? privacy : terms;

  return (
    <main>
      <section className="wrap page-hero">
        <h1>{title}</h1>
      </section>

      <section className="wrap section narrow legal-body">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
    </main>
  );
}

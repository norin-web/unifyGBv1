import { Link } from "react-router";
import { privacy, terms } from "../content/legal";
import { site } from "../content/site";
import { PageHero } from "../components/blocks";

type Kind = "privacy" | "terms";

export function Legal({ kind }: { kind: Kind }) {
  const isPrivacy = kind === "privacy";
  const body = isPrivacy ? privacy : terms;

  return (
    <main>
      <PageHero label="Legal" title={isPrivacy ? "Privacy Policy" : "Terms of Use"}>
        <p>
          {isPrivacy ? <Link to="/terms">Read the Terms of Use</Link> : <Link to="/privacy">Read the Privacy Policy</Link>}
          {" · "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </PageHero>

      <div className="sheet">
        <section className="wrap sec legal">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      </div>
    </main>
  );
}

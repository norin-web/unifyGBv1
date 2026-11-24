import { site } from "../content/site";
import { Faq, PageHero } from "../components/blocks";

export function Support() {
  return (
    <main>
      <PageHero label="Support" title="How can we help?">
        <p>
          Answers to common questions are below. For anything else, write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </PageHero>

      <section className="dark dark--flush">
        <div className="wrap">
          <Faq />
        </div>
      </section>
    </main>
  );
}

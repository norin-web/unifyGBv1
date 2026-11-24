import { faq, site } from "../content/site";

export function Support() {
  return (
    <main>
      <section className="wrap page-hero">
        <h1>Support</h1>
        <p className="lead">
          Email <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>

      <section className="wrap section narrow">
        <div className="rows">
          {faq.map((item) => (
            <div className="row-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

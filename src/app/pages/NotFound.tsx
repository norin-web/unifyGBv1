import { Link } from "react-router";

export function NotFound() {
  return (
    <main>
      <section className="wrap page-hero">
        <h1>Page not found.</h1>
        <p className="lead">The page you are looking for does not exist.</p>
        <Link className="btn" to="/">Back to home</Link>
      </section>
    </main>
  );
}

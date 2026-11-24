import { Link } from "react-router";
import { PageHero } from "../components/blocks";

export function NotFound() {
  return (
    <main>
      <PageHero label="404" title="This page does not exist">
        <Link className="ghost ghost--dark" to="/">Back to home</Link>
      </PageHero>
    </main>
  );
}

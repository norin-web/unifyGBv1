import { useState, type FormEvent } from "react";
import { site } from "../content/site";

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // No backend: the form opens the visitor's mail app with the text filled in.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${site.name}: message from ${name || "visitor"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <section className="wrap page-hero">
        <h1>Contact</h1>
        <p className="lead">
          Write to <a className="link" href={`mailto:${site.email}`}>{site.email}</a>, or send a message below.
        </p>
      </section>

      <section className="wrap section narrow">
        <form className="form" onSubmit={submit}>
          <label>
            <span>Your name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </label>
          <label>
            <span>Message</span>
            <textarea
              rows={6}
              required
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button className="btn" type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}

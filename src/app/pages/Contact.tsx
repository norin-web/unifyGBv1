import { useState, type FormEvent } from "react";
import { site } from "../content/site";
import { PageHero } from "../components/blocks";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${site.name}: message from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n${name}${email ? ` <${email}>` : ""}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <PageHero label="Contact" title="Write to us">
        <p>Questions about the app, or something not working? Send us a message.</p>
      </PageHero>

      <div className="sheet">
        <section className="wrap sec contact">
          <div className="contact-mail">
            <p className="tile-k">Email</p>
            <a className="contact-addr" href={`mailto:${site.email}`}>{site.email}</a>
            <p className="sec-sub sec-sub--left">
              If something is not working, include your iPhone model and a short description of what happened.
            </p>
          </div>

          <form className="form" onSubmit={submit}>
            <label className="field">
              <span>Your name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
            <label className="field">
              <span>Your email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea
                rows={5}
                required
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button className="send" type="submit">
              Send message
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l16-8-6 16-2-6-8-2z" /></svg>
            </button>
            <p className="form-note">Sending opens your email app with the message filled in.</p>
          </form>
        </section>
      </div>
    </main>
  );
}

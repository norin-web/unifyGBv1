import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { app, nav, site } from "../content/site";
import { img } from "../utils/img";
import { AppleIcon, StoreButton } from "./ui";

export function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Once the page scrolls, the header gets its own glass bar so it never sits on top of text.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Each route starts at the top and closes the mobile menu.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`nav${scrolled || menuOpen ? " is-scrolled" : ""}`}>
        <div className="nav-row">
          <Link to="/" className="nav-logo" aria-label={`${site.name} home`}>
            <img src={img("/images/app-icon.webp")} alt="" width={40} height={40} />
          </Link>
          <nav className="nav-pill" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <a className="nav-cta" href={app.url} target="_blank" rel="noopener">
            <AppleIcon />
            Download
          </a>
          <button
            className="nav-burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="nav-sheet" aria-label="Mobile">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} onClick={() => setMenuOpen(false)}>
                {n.label}
              </NavLink>
            ))}
            <a href={app.url} target="_blank" rel="noopener" className="nav-sheet-cta">
              <AppleIcon /> Download on the App Store
            </a>
          </nav>
        )}
      </header>

      <Outlet />

      <footer className="end">
        <div className="end-glow" aria-hidden="true" />
        <div className="wrap end-cta">
          <p className="display end-words" aria-label="Messages. Visits. Answers.">
            <span>Messages.</span>
            <span>Visits.</span>
            <span>Answers.</span>
          </p>
          <StoreButton light />
        </div>

        <p className="end-mark display" aria-hidden="true">Unify</p>

        <div className="wrap end-panels">
          <div className="end-panel">
            <p className="display end-h">Main pages</p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/app">App</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="end-panel">
            <p className="display end-h">Help &amp; legal</p>
            <ul>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="end-panel">
            <p className="display end-h">Contact</p>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={app.url} target="_blank" rel="noopener">App Store</a></li>
            </ul>
          </div>
        </div>

        <p className="wrap end-legal">{site.disclaimer}</p>

        <div className="wrap end-bottom">
          <span>{site.copyright}</span>
          <button className="end-top" onClick={() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}>
            Back to top ↑
          </button>
        </div>
      </footer>
    </>
  );
}

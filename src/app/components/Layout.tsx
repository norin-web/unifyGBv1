import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { app, nav, site } from "../content/site";
import { img } from "../utils/img";
import { AppStoreButton } from "./AppStoreButton";

export function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Each route starts at the top and closes the mobile menu.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="head">
        <div className="wrap head-row">
          <Link to="/" className="brand">
            <img src={img("/images/app-icon.png")} alt="" />
            {site.name}
          </Link>
          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="head-actions">
            <AppStoreButton small />
            <button
              className="menu-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="wrap mobile-nav">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to}>
                {n.label}
              </NavLink>
            ))}
            <a href={app.url}>Download</a>
          </div>
        )}
      </header>

      <Outlet />

      <footer className="foot">
        <div className="wrap">
          <div className="foot-cols">
            <div>
              <p className="brand foot-brand">
                <img src={img("/images/app-icon.png")} alt="" />
                {site.name}
              </p>
            </div>
            <div>
              <h4>Help</h4>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><a href={app.url}>App Store</a></li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>{site.copyright}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { OurApp } from "./pages/OurApp";
import { About } from "./pages/About";
import { Support } from "./pages/Support";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/app", element: <OurApp /> },
        { path: "/about", element: <About /> },
        { path: "/support", element: <Support /> },
        { path: "/contact", element: <Contact /> },
        { path: "/feedback", element: <Contact /> },
        { path: "/privacy", element: <Legal kind="privacy" /> },
        { path: "/terms", element: <Legal kind="terms" /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  // Keeps deep links working when the site lives under /unifyGBv1/ on GitHub Pages.
  { basename: import.meta.env.BASE_URL }
);

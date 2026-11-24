import { useEffect, useRef, useState } from "react";
import { resumeUrl, sections } from "../data/profile";
import { Icon } from "./Icon";
import "./Navbar.css";

const root = document.documentElement;

// index.html sets the saved theme before first paint; read it back from the page
function currentTheme() {
  return root.getAttribute("data-theme") === "light" ? "light" : "dark";
}

// The section whose top has passed under the nav bar
function sectionInView() {
  let current = null;
  for (const { id } of sections) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 140) current = id;
  }
  return current;
}

const Navbar = () => {
  const [theme, setTheme] = useState(currentTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    root.setAttribute("data-theme", theme);
    // The phone's browser bar follows the page color
    const bg = getComputedStyle(root).getPropertyValue("--bg").trim();
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", bg);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // storage blocked: the theme still applies for this visit
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setActive(sectionInView());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc closes the open menu and puts focus back on the button that opened it
  const menuBtnRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      menuBtnRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isDark = theme === "dark";

  return (
    <header className="site">
      <div className="wrap">
        <div className="pill glass">
          <a className="brand" href="#top">
            azad<span>12614</span>
          </a>
          <nav aria-label="Main">
            <ul className="nav-links">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-actions">
            <a className="btn nav-resume" href={resumeUrl}>
              Resume
            </a>
            <button
              className="icon-btn"
              type="button"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              <Icon name={isDark ? "sun" : "moon"} />
            </button>
            <button
              ref={menuBtnRef}
              className="icon-btn menu-btn"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </div>
      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"} id="mobile-menu">
        <div className="wrap">
          <nav aria-label="Menu">
            {/* Any link closes the menu */}
            <ul onClick={(e) => e.target.closest("a") && setMenuOpen(false)}>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
              <li>
                <a href={resumeUrl} className="nav-file">
                  resume<span className="sr-only"> (PDF)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

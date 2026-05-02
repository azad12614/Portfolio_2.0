import { useCallback, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import DarkMode from "./DarkMode";
import "./Navbar.css";

const sections = [
  { id: "Hero", label: "Home" },
  { id: "About", label: "About" },
  { id: "Resume", label: "Journey" },
  { id: "Project", label: "Projects" },
  { id: "Awards", label: "Awards" },
  { id: "Blog", label: "Blog" },
  { id: "Contact", label: "Contact" },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");
  const sectionIds = sections.map((s) => s.id);

  const toggleMenu = useCallback(() => setShowMobileMenu((prev) => !prev), []);

  const handleLinkClick = useCallback(() => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  }, [showMobileMenu]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-logo">
        <a href="/" className="logo-link" aria-label="Home">
          <img src={logo} alt="Azad Logo" className="logo-img" />
        </a>
      </div>

      <div className={`navbar-links ${showMobileMenu ? "open" : ""}`}>
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                aria-current={activeSection === id ? "page" : undefined}
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <button
          className={`hamburger ${showMobileMenu ? "open" : ""}`} // Add conditional class
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={showMobileMenu}
        >
          <span className="bar top-bar"></span>
          <span className="bar middle-bar"></span>
          <span className="bar bottom-bar"></span>
        </button>
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;

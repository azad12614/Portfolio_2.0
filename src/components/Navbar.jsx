import React, { useEffect, useState, useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkMode from "./DarkMode";
import "./Navbar.css";
import logo from "../assets/logo.png";

const sections = [
  "Hero",
  // "About",
  "Resume",
  "Project",
  "Awards",
  "Blog",
  "Contact",
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  const toggleMenu = useCallback(() => setShowMobileMenu((prev) => !prev), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px" }
    );

    sections.forEach((id) => {
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
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
                aria-current={activeSection === section ? "page" : undefined}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={showMobileMenu}
        >
          <GiHamburgerMenu />
        </button>
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;

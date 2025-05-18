// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkMode from "./DarkMode";
import "./Navbar.css";

const sections = ["Hero", "About", "Resume", "Project", "Blog", "Contact"];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setShowMobileMenu((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" className="text-logo">
          <span className="glow">AZAD</span>
        </a>
      </div>

      <div className={`navbar-links ${showMobileMenu ? "open" : ""}`}>
        <ul>
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <button className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;

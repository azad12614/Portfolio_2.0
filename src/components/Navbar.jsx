// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/AZAD.png";
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
    <nav className="main-nav">
      {/* Logo */}
      <div className="logo">
        <a href="/">AZAD</a>
      </div>

      {/* Desktop & Mobile Menu */}
      <div className={`menu-link ${showMobileMenu ? "mobile-menu-link" : ""}`}>
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

      {/* Right Icons */}
      <div className="menu-right">
        <button className="hamburger-menu pointer" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <div className="theme-toggle">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

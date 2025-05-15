import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkMode from "./DarkMode.jsx";
import "./Navbar.css";

const sections = ["Hero", "About", "Resume", "Project", "Blog", "Contact"];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("In view:", entry.target.id); // 🐞 debug here
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="main-nav">
      {/* Logo */}
      <div className="logo">
        <a href="/">AZAD</a>
      </div>

      {/* Menu links */}
      <div
        className={showMobileMenu ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                data-text={` ${section} `}
                className={activeSection === section ? "active" : ""}
              >
                &nbsp;{section}&nbsp;
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Menu: Hamburger + Theme Toggle */}
      <div className="menu-3">
        <div className="hamburger-menu">
          <div
            className="pointer"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <GiHamburgerMenu />
          </div>
        </div>

        <div className="theme_box">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

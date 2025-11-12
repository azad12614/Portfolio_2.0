import React, { useState, useEffect } from "react";
import "./Hero.css";
import pdf from "../assets/Abdullah_Al_Azad.pdf";
import avater from "../assets/Abdullah_Al_Azad.png";
import git from "../assets/Social/Github.png";
import ln from "../assets/Social/Linkdin.png";
import fb from "../assets/Social/FB.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const floatingItems = [
    {
      type: "tech",
      content: "MERN",
      class: "mern",
    },
    {
      type: "tech",
      content: "NEXT",
      class: "nextjs",
    },
    {
      type: "tech",
      content: "<CP>",
      class: "cp",
    },
    {
      type: "social",
      content: git,
      class: "github",
      link: "https://github.com/azad12614",
      name: "GitHub",
    },
    {
      type: "social",
      content: ln,
      class: "linkedin",
      link: "https://www.linkedin.com/in/abdullah-al-azad-12614-jishan",
      name: "LinkedIn",
    },
    {
      type: "social",
      content: fb,
      class: "facebook",
      link: "https://www.facebook.com/abdullah.2003.azad/",
      name: "Facebook",
    },
  ];

  return (
    <section className="hero-section" id="Hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Text Content */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for opportunities
            </div>

            <h1 className="hero-title">
              <span className="title-gradient">Abdullah Al Azad</span>
            </h1>

            <div className="hero-subtitle">
              <span className="subtitle-text">
                <strong>Full-Stack Developer</strong>
                {!isMobile && (
                  <>
                    , <strong>MERN & NEXT.JS Specialist</strong>,{" "}
                    <strong>Competitive Programmer</strong>
                  </>
                )}
              </span>
            </div>

            {!isMobile ? (
              <p className="hero-description">
                Crafting digital experiences with modern web technologies.
                Passionate about building scalable applications and solving
                complex problems through code.
              </p>
            ) : (
              <p className="hero-description">
                Full-Stack Developer passionate about building scalable
                applications and solving complex problems through modern web
                technologies.
              </p>
            )}

            <div className="hero-actions">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
                View Resume
              </a>
              <a href="#Project" className="accent-btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22,8.5 12,15.5 2,8.5"></polyline>
                  <polyline points="12,15.5 12,8.5 22,8.5"></polyline>
                  <polyline points="12,15.5 2,8.5 12,8.5"></polyline>
                </svg>
                Explore Projects
              </a>
            </div>
          </div>

          {/* Avatar Section with Floating Bubbles */}
          <div className="hero-visual">
            <div className="avatar-container">
              <div className="avatar-wrapper">
                <img
                  loading="lazy"
                  src={avater}
                  alt="Abdullah Al Azad"
                  className="avatar-image"
                />
                <div className="avatar-glow"></div>
              </div>

              {/* Floating Bubbles - Both Tech and Social */}
              <div className="floating-elements">
                {floatingItems.map((item, index) =>
                  item.type === "tech" ? (
                    <div key={index} className={`floating-card ${item.class}`}>
                      <span>{item.content}</span>
                    </div>
                  ) : (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`floating-card social ${item.class}`}
                      title={item.name}
                    >
                      <img src={item.content} alt={item.name} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Desktop Only */}
        {!isMobile && (
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll to explore</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

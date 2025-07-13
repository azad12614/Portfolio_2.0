import React from "react";
import "./Hero.css";
import pdf from "../assets/Abdullah_Al_Azad.pdf";
import avater from "../assets/Abdullah_Al_Azad.jpg";
import logo from "../assets/AZAD.png";

const Hero = () => {
  return (
    <section className="hero-section" id="Hero">
      <div className="heros">
        <div className="hero-img-box">
          <div className="wrapper">
            <img
              loading="lazy"
              src={avater}
              alt="Azad Portrait"
              className="hero-img"
            />
            <img
              loading="lazy"
              src={logo}
              alt="Azad Logo"
              className="hero-img"
            />
          </div>
        </div>
        <div className="hero-text-box">
          <h1 className="heading-primary">Abdullah Al Azad</h1>
          <p className="hero-description">
            <strong>CSE Student</strong>,{" "}
            <strong>Competitive Programmer</strong>,{" "}
            <strong>MERN Stack Developer</strong>.
          </p>
          <div className="hero-btn">
            <a href={pdf} target="_blank" className="cv">
              View Resume
            </a>
            <a href="#Project" className="me">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

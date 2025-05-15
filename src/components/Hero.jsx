import React from "react";
import "./Hero.css";
import pdf from "../assets/Abdullah Al Azad.pdf";
import avater from "../assets/Abdullah Al Azad.jpg";
import logo from "../assets/AZAD (1).png";

const Hero = () => {
  return (
    <>
      <section class="section-hero" id="Hero">
        <div class="heros">
          <div class="hero-text-box">
            <h1 class="heading-primary">Abdullah Al Azad</h1>
            <p class="hero-description">
              A <strong>CSE Student</strong> |{" "}
              <strong>Competitive Programmer</strong> |{" "}
              <strong>Aspiring Web Developer</strong> From <b>Bangladesh</b>.
            </p>
            <div class="hero-btn">
              <a href={pdf} target="_blank" class="cv">
                Download CV
              </a>
              <a href="#Contact" class="me">
                Contact ME
              </a>
            </div>
          </div>
          <div class="hero-img-box">
            <div className="wrapper">
              <img loading="lazy" src={avater} alt="" className="hero-img" />
              <img loading="lazy" src={logo} alt="" className="hero-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

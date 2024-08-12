import React from 'react';
import "./Hero.css";
import pdf from "../assets/Resume.pdf";
import av from "../assets/Avatar.jpg";

const Hero = () => {
  return (
    <>
      <section class="section-hero" id="Hero">
        <div class="heros">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              Abdullah <br /> Al Azad
            </h1>
            <p class="hero-description">
              A computer science student passionate about programming and web development.
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
            <img
              src={av}
              alt=""
              className="hero-img"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;
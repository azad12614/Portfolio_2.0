import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="About">
      <h2 className="header">💫 About Me</h2>
      <p className="title">"Who I Am?"</p>
      <div className="about-content">
        <p className="about-description">
          I'm <strong>Abdullah Al Azad</strong>, a passionate{" "}
          <strong>Computer Science and Engineering student</strong> at{" "}
          <strong>International Islamic University Chittagong</strong>, with a
          deep love for solving complex problems through code. As a{" "}
          <strong>competitive programmer</strong>, I’ve honed my skills in
          algorithms and data structures on platforms like LeetCode, Codeforces,
          AtCoder, and CodeChef, and I’ve taken on leadership roles to guide
          others in this field. My expertise in{" "}
          <strong>MERN stack development</strong> allows me to build dynamic,
          scalable web applications with a focus on clean code.
        </p>
        <p className="about-description">
          Based in <strong>Chittagong, Bangladesh</strong>, I’m pursuing my{" "}
          <strong>B.Sc.</strong>, where I’ve contributed to educational
          initiatives, including mentoring and training peers in competitive
          programming. My projects, such as educational platforms and gaming
          sites, reflect my goal to blend creativity with technology. I also
          enjoy exploring new tech trends, which fuels my innovative mindset.
        </p>
        <p className="about-description">
          With a passion for collaboration, I’ve organized and supported
          learning experiences, and I’m eager to contribute to open-source
          projects. Check out my{" "}
          <a href="#Project" className="about-link">
            projects
          </a>{" "}
          or{" "}
          <a href="#Contact" className="about-link">
            reach out
          </a>{" "}
          to connect!
        </p>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-section" id="About">
        <h2 className="header">💫 About Me</h2>
        <p className="title">"Who I Am?"</p>
        <div className="about-content">
          <p className="about-description">
            I'm <strong>Abdullah Al Azad</strong>, a passionate{" "}
            <strong>Full-Stack Developer</strong> and{" "}
            <strong>Computer Science student</strong> at{" "}
            <strong>International Islamic University Chittagong</strong>. I
            specialize in building{" "}
            <strong>
              scalable, secure, and user-focused web applications{" "}
            </strong>
            with React, Next.js, Node.js, and MongoDB.
          </p>
          <ul className="about-description">
            <li>
              🚀 Delivered{" "}
              <strong>
                <p className="font-serif inline">10+</p> full-stack projects
              </strong>{" "}
              — from academic portals to productivity tools.
            </li>
            <li>
              💻 Skilled in <strong>MERN Stack, TypeScript, REST APIs</strong>{" "}
              with a focus on clean code & performance.
            </li>
            <li>
              🧑‍🏫 Mentored{" "}
              <strong>
                <p className="font-serif inline">200+</p> students
              </strong>{" "}
              as a Teaching Assistant, Bootcamp Coordinator, Bootcamp Mentor &
              Bootcamp Trainer.
            </li>
            <li>
              🏆 Competitive Programmer on{" "}
              <strong>Codeforces, CodeChef, LeetCode, AtCoder</strong>.
            </li>
            <li>
              ☁️ Experienced in deploying apps via{" "}
              <strong>Render, Vercel</strong>;
            </li>
            <li>
              🔍 Currently exploring <strong>Open Source Contribution</strong>{" "}
              to expand my expertise.
            </li>
          </ul>
          <p className="about-description">
            With a passion for collaboration and open-source, I enjoy building
            impactful projects. Check out my{" "}
            <a href="#Project" className="about-link">
              projects
            </a>{" "}
            or{" "}
            <a href="#Contact" className="about-link">
              connect with me
            </a>{" "}
            to learn more!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;

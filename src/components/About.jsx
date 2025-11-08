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
            <strong>Full-Stack Developer</strong> specializing in building{" "}
            <strong>scalable, secure, and user-focused web applications</strong>{" "}
            with <strong>MERN</strong> and <strong>Next.js</strong>.
          </p>
          <ul className="about-description">
            <li>
              💼 Currently, applying my expertise as a{" "}
              <strong>Web Developer Intern</strong> at <strong>UIAS</strong> and
              serving as the <strong>Assistant Web Secretary (Backend)</strong>{" "}
              for <strong>IIUCCPS</strong>.
            </li>
            <li>
              🚀 Successfully delivered <strong>10+ full-stack projects</strong>{" "}
              (MERN, Next.js) and completed a B.Sc. thesis, demonstrating
              versatility in Deep Learning.
            </li>
            <li>
              💻 Highly proficient in{" "}
              <strong>MERN Stack, Next.js, TypeScript, and REST APIs</strong>,
              with a sharp focus on clean code, performance, and robust
              architecture.
            </li>
            <li>
              🧠 Competitive Programmer{" "}
              <strong>(Codeforces Pupil, CodeChef 3 Star)</strong>: My
              background in algorithms strongly reinforces my analytical and
              problem-solving skills.
            </li>
            <li>
              🏆 Mentored 200+ students as a{" "}
              <strong>
                Teaching Assistant, Bootcamp Coordinator, Bootcamp Mentor &
                Trainer
              </strong>
              , actively sharing knowledge and boosting class performance.
            </li>
          </ul>
          <p className="about-description">
            With a passion for collaboration and open-source, I enjoy building
            impactful projects. Check out my
            <a href="#Project" className="about-link">
              {" "}
              projects{" "}
            </a>
            or
            <a href="#Contact" className="about-link">
              {" "}
              connect with me{" "}
            </a>
            to learn more!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;

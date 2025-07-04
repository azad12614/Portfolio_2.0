import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="About">
      <div className="about-container">
        <h2 className="header">💫 About Me</h2>
        <p className="title">
          "Tackling challenges with code and creativity fuels my passion."
        </p>
        <div className="about-content">
          <div className="about-card">
            <p className="about-detail">
              I'm <span className="highlight">Abdullah Al Azad</span>, a{" "}
              <span className="highlight">Programmer</span> and{" "}
              <span className="highlight">Web Developer</span>.
            </p>
            <p className="about-detail">
              🎓 Final-year <strong>B.Sc.</strong> in{" "}
              <strong>Computer Science Engineering</strong> at{" "}
              <strong>IIUC</strong>, Bangladesh.
            </p>
            <p className="about-detail">
              👨‍💻 Proficient in{" "}
              <span className="highlight">HTML, CSS, JavaScript</span>, and{" "}
              <span className="highlight">MERN stack</span>.
            </p>
            <p className="about-detail">
              💡 Skilled in <span className="highlight">C++</span> for
              competitive programming.
            </p>
            <p className="about-detail">
              🌱 Learning <span className="highlight">Python</span> and{" "}
              <span className="highlight">Machine Learning</span> with Pandas,
              NumPy, and TensorFlow.
            </p>
            <p className="about-detail">
              🔭 <strong>Teaching Assistant</strong> at IIUC, guiding students
              in Data Structures.
            </p>
            <p className="about-detail">
              🔭 <strong>Coordinator, Ex. Trainer, Ex. Mentor</strong> at IIUC
              Competitive Programming Society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

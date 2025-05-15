// src/components/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="About">
      <h2 className="header">💫 ABOUT ME</h2>
      <p className="title">
        “Facing challenges with strength, determination and confidence is what
        matters to me.”
      </p>
      <div className="about-info">
        <p className="about-detail">
          Hi there! I'm <span className="highlight">Abdullah Al Azad</span>, a{" "}
          <span className="highlight">Programmer</span> and{" "}
          <span className="highlight">Web Developer</span>.
        </p>
        <p className="about-detail">
          🎓 I'm a final-year student, pursuing a{" "}
          <strong>Bachelor of Science</strong> in{" "}
          <strong>Computer Science Engineering</strong> at the
          <strong> International Islamic University Chittagong (IIUC)</strong>,
          Bangladesh.
        </p>
        <p className="about-detail">
          👨‍💻 I build projects using{" "}
          <span className="highlight">HTML, CSS, JavaScript</span> and the{" "}
          <span className="highlight">MERN stack</span> (MongoDB, Express.js,
          React.js, Node.js).
        </p>
        <p className="about-detail">
          👨‍💻 I have experience with <span className="highlight">C++</span>{" "}
          through competitive programming.
        </p>
        <p className="about-detail">
          🌱 I’m learning Python, Matplotlib, NumPy, Pandas, Sci-Kit-Learn, and
          TensorFlow for my <span className="highlight">Machine Learning</span>{" "}
          project.
        </p>
        <p className="about-detail">
          🔭 I work as a <strong>Teaching Assistant</strong> at IIUC, assisting
          students with Data Structures.
        </p>
        <p className="about-detail">
          🔭 I'm a <strong>Coordinator</strong> of the IIUC Competitive
          Programming Society, guiding Trainers and Mentors.
        </p>
        <p className="about-detail">
          🔭 I also served as a <strong>Trainer and Mentor</strong>, helping
          students with algorithm development and problem-solving.
        </p>
      </div>
    </section>
  );
};

export default About;

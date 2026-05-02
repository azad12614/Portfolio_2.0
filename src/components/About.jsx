import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="About">
      <h2 className="header">💫 About Me</h2>
      <p className="title">&quot;Who I Am?&quot;</p>
      <div className="about-content">
        <div className="about-intro">
          <p className="about-description">
            I&apos;m <strong>Abdullah Al Azad</strong>, a passionate{" "}
            <strong>Full-Stack Developer</strong> specializing in building{" "}
            <strong>scalable, secure, and user-focused web applications</strong>{" "}
            with <strong>modern full-stack technologies</strong>.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">💼</span>
            <p className="highlight-text">
              <strong>Current Role</strong> — Assistant Web Secretary (Backend)
              for <strong>IIUCCPS</strong>, previously Web Developer Intern at{" "}
              <strong>UIAS</strong>.
            </p>
          </div>

          <div className="highlight-item">
            <span className="highlight-icon">🚀</span>
            <p className="highlight-text">
              <strong>Project Experience</strong> — Delivered{" "}
              <strong>10+ projects</strong> (MERN, TypeScript) and completed a
              B.Sc. thesis on{" "}
              <strong>
                Bangla Audio Deepfake Detection using CNN-BiGRU
              </strong>
              .
            </p>
          </div>

          <div className="highlight-item">
            <span className="highlight-icon">💻</span>
            <p className="highlight-text">
              <strong>Technical Expertise</strong> — Proficient in{" "}
              <strong>MERN Stack, TypeScript, and modern web stack</strong> with
              focus on clean code and robust architecture.
            </p>
          </div>

          <div className="highlight-item">
            <span className="highlight-icon">🧠</span>
            <p className="highlight-text">
              <strong>Competitive Programming</strong> —{" "}
              <strong>Codeforces Pupil, CodeChef 3 Star</strong>; solved{" "}
              <strong>1400+ problems</strong> across{" "}
              <strong>140+ contests</strong> on CF, CodeChef, LeetCode &amp;
              AtCoder.
            </p>
          </div>

          <div className="highlight-item">
            <span className="highlight-icon">🏆</span>
            <p className="highlight-text">
              <strong>Mentorship</strong> — Mentored{" "}
              <strong>200+ students</strong> as Teaching Assistant, Bootcamp
              Coordinator &amp; Trainer.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <p>
            With a passion for collaboration and open-source, I enjoy building
            impactful projects. Check out my <a href="#Project">projects</a> or{" "}
            <a href="#Contact">connect with me</a> to learn more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="About">
      <h2 className="header">💫 About Me</h2>
      <p className="title">"Who I Am?"</p>
      <div className="about-content">
        <div className="about-card">
          <div className="about-intro">
            <p className="about-description">
              I'm <strong>Abdullah Al Azad</strong>, a passionate{" "}
              <strong>Full-Stack Developer</strong> specializing in building{" "}
              <strong>
                scalable, secure, and user-focused web applications
              </strong>{" "}
              with <strong>MERN</strong> and <strong>Next.js</strong>.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">💼</div>
              <div className="highlight-content">
                <h3>Current Roles</h3>
                <p>
                  <strong>Web Developer Intern</strong> at <strong>UIAS</strong>{" "}
                  and <strong>Assistant Web Secretary (Backend)</strong> for{" "}
                  <strong>IIUCCPS</strong>.
                </p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <div className="highlight-content">
                <h3>Project Experience</h3>
                <p>
                  Delivered <strong>10+ full-stack projects</strong> (MERN,
                  Next.js) and completed a B.Sc. thesis in Deep Learning.
                </p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">💻</div>
              <div className="highlight-content">
                <h3>Technical Expertise</h3>
                <p>
                  Proficient in{" "}
                  <strong>
                    MERN Stack, Next.js, TypeScript, and REST APIs
                  </strong>
                  , with focus on clean code and robust architecture.
                </p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">🧠</div>
              <div className="highlight-content">
                <h3>Competitive Programming</h3>
                <p>
                  <strong>Codeforces Pupil, CodeChef 3 Star</strong> - Strong
                  analytical and problem-solving skills.
                </p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">🏆</div>
              <div className="highlight-content">
                <h3>Mentorship</h3>
                <p>
                  Mentored <strong>200+ students</strong> as{" "}
                  <strong>
                    Teaching Assistant, Bootcamp Coordinator & Trainer
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <p>
              With a passion for collaboration and open-source, I enjoy building
              impactful projects. Check out my <a href="#Project">projects</a>{" "}
              or <a href="#Contact">connect with me</a> to learn more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

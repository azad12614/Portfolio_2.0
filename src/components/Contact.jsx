import "./Contact.css";

import fb from "../assets/Social/FB.png";
import git from "../assets/Social/Github.png";
import ln from "../assets/Social/Linkdin.png";

function Contact() {
  return (
    <section className="contact-section" id="Contact">
      <h2 className="header">🌐 CONTACT ME</h2>
      <p className="title">&quot;Get in Touch, Don&apos;t Be Shy!!&quot;</p>

      <div className="contact-container">
        <div className="info-card">
          <h3 className="info-title">Let&apos;s Connect</h3>
          <p className="info-description">
            I&apos;m always open to discussing new opportunities, creative
            ideas, or opportunities to be part of your vision.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <span className="contact-label">Location</span>
                <a
                  href="https://maps.app.goo.gl/A8Bz35Qhx7oBV9RV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Oxygen, Chattogram-4213
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <span className="contact-label">Phone</span>
                <a href="tel:01630440005" className="contact-link">
                  +880 1630 440005
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <a
                  href="mailto:azad.jishan2003@gmail.com"
                  className="contact-link"
                >
                  azad.jishan2003@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <a
              href="mailto:azad.jishan2003@gmail.com?subject=Hiring%20Inquiry%20-%20Abdullah%20Al%20Azad"
              className="btn btn-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                <polyline points="16,3 12,7 8,3"></polyline>
              </svg>
              Hire Me
            </a>
            <a
              href="mailto:azad.jishan2003@gmail.com"
              className="btn btn-secondary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22,2 15,22 11,13 2,9"></polygon>
              </svg>
              Send Email
            </a>
          </div>

          <div className="contact-social-links">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-icons">
              <a
                href="https://github.com/azad12614"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                title="GitHub"
              >
                <img src={git} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-al-azad-12614-jishan"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                title="LinkedIn"
              >
                <img src={ln} alt="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/abdullah.2003.azad/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                title="Facebook"
              >
                <img src={fb} alt="Facebook" />
              </a>
            </div>
          </div>

          <div className="copyright">
            &copy; {new Date().getFullYear()} Abdullah Al Azad. All rights
            reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

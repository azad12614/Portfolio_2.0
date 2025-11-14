import React, { useState } from "react";
import "./Contact.css";

import git from "../assets/Social/Github.png";
import fb from "../assets/Social/FB.png";
import ln from "../assets/Social/Linkdin.png";

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmissionStatus("success");
      e.target.reset();
    } catch (error) {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setSubmissionStatus(null), 4000);
  };

  return (
    <section className="contact-section" id="Contact">
      <h2 className="header">🌐 CONTACT ME</h2>{" "}
      <p className="title">“Get in Touch, Don't Be Shy!!”</p>
      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  required
                />
                <label htmlFor="name" className="form-label">
                  Name
                </label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  placeholder="your.email@example.com"
                  name="email"
                  required
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>

              <div className="form-group">
                <textarea
                  className="form-input textarea"
                  rows="5"
                  placeholder="Your message here..."
                  name="message"
                  required
                ></textarea>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
              </div>

              <button
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
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
                    Send Message
                  </>
                )}
              </button>

              <div
                className={`submission-feedback ${
                  submissionStatus ? submissionStatus : ""
                }`}
              >
                {submissionStatus === "success" && (
                  <div className="feedback-message">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    Message sent successfully!
                  </div>
                )}
                {submissionStatus === "error" && (
                  <div className="feedback-message">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    Failed to send message. Please try again.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">Let's Connect</h3>
              <p className="info-description">
                I'm always open to discussing new opportunities, creative ideas,
                or opportunities to be part of your vision.
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
        </div>
      </div>
    </section>
  );
}

export default Contact;

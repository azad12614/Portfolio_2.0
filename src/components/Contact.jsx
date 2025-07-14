import React, { useState } from "react";
import "./Contact.css";

import git from "../assets/Social/Github.png";
import fb from "../assets/Social/FB.png";
import ln from "../assets/Social/Linkdin.png";

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate form submission (replace with actual API call if needed)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmissionStatus("success");
      e.target.reset(); // Clear form
    } catch (error) {
      setSubmissionStatus("error");
    }
    // Reset status after 3 seconds
    setTimeout(() => setSubmissionStatus(null), 3000);
  };

  return (
    <div className="d-flex flex-column max-w-full">
      <section id="Contact">
        <h2 className="header">🌐 CONTACT ME</h2>
        <p className="title">“Get in Touch, Don't Be Shy!!”</p>
        <div className="contact-wrapper">
          {/* Left contact page */}
          <form
            action="mailto:azad.jishan2003@gmail.com"
            id="contact-form"
            className="form-horizontal"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button className="send-button" id="submit" type="submit">
              SEND
            </button>
            <div
              className={`submission-feedback ${
                submissionStatus ? submissionStatus : ""
              }`}
            >
              {submissionStatus === "success" && "Message sent successfully!"}
              {submissionStatus === "error" &&
                "Failed to send message. Try again."}
            </div>
          </form>
          {/* Right contact page */}
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <span className="contact-text place">
                  <a
                    href="https://maps.app.goo.gl/A8Bz35Qhx7oBV9RV7"
                    title="Take me to a ride"
                    target="_blank"
                  >
                    Oxygen, Chattogram-4213
                  </a>
                </span>
              </li>

              <li className="list-item">
                <span className="contact-text phone">
                  <a
                    href="tel:01630440005"
                    title="Give me a call"
                    target="_blank"
                  >
                    01630440005
                  </a>
                </span>
              </li>

              <li className="list-item">
                <span className="contact-text gmail">
                  <a
                    href="mailto:azad.jishan2003@gmail.com"
                    title="Send me an email"
                    target="_blank"
                  >
                    azad.jishan2003@gmail.com
                  </a>
                </span>
              </li>
            </ul>

            <ul className="social-media-list">
              <a
                href="https://github.com/azad12614"
                target="_blank"
                className="contact-icon"
              >
                <li>
                  <img loading="lazy" src={git} />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-al-azad-12614-jishan"
                target="_blank"
                className="contact-icon"
              >
                <li>
                  <img loading="lazy" src={ln} />
                </li>
              </a>
              <a
                href="https://www.facebook.com/abdullah.2003.azad/"
                target="_blank"
                className="contact-icon"
              >
                <li>
                  <img loading="lazy" src={fb} />
                </li>
              </a>
            </ul>

            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED.</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

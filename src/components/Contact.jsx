import React from "react";
import "./Contact.css";

import git from "../assets/Social/Github.png";
import fb from "../assets/Social/FB.png";
import ln from "../assets/Social/Linkdin.png";

function Contact() {
  return (
    <div className="d-flex flex-column max-w-full">
      <section id="Contact">
        <h2 class="header">🌐 CONTACT ME</h2>
        <p class="title">“Get in Touch, Don't Be Shy!!”</p>
        <div class="contact-wrapper">
          {/* <!-- Left contact page --> */}

          <form
            action="mailto:azad.jishan2003@gmail.com"
            id="contact-form"
            class="form-horizontal"
            method="POST"
          >
            <div class="group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required="y"
                ></input>
              </div>
            </div>

            <div class="group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  required="y"
                ></input>
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required="y"
            ></textarea>

            <button class="send-button" id="submit" type="submit" value="SEND">
              SEND
            </button>
          </form>

          {/* <!-- Left contact page --> */}

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <span class="contact-text place">
                  <a
                    href="https://maps.app.goo.gl/A8Bz35Qhx7oBV9RV7"
                    title="Take me to a ride"
                    target="_blank"
                  >
                    Oxygen, Chattogram-4213
                  </a>
                </span>
              </li>

              <li class="list-item">
                <span class="contact-text phone">
                  <a
                    href="tel:01630440005"
                    title="Give me a call"
                    target="_blank"
                  >
                    01630440005
                  </a>
                </span>
              </li>

              <li class="list-item">
                <span class="contact-text gmail">
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

            <ul class="social-media-list">
              <a
                href="https://github.com/azad12614"
                target="_blank"
                class="contact-icon"
              >
                <li>
                  <img loading="lazy" src={git} />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-al-azad-12614-jishan"
                target="_blank"
                class="contact-icon"
              >
                <li>
                  <img loading="lazy" src={ln} />
                </li>
              </a>
              <a
                href="https://www.facebook.com/abdullah.2003.azad/"
                target="_blank"
                class="contact-icon"
              >
                <li>
                  <img loading="lazy" src={fb} />
                </li>
              </a>
            </ul>

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED.</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

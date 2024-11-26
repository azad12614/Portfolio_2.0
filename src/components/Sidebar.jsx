import React, { useState, useEffect } from "react";
import fb from "../assets/Social/FB.png";
import git from "../assets/Social/Github.png";
import ln from "../assets/Social/Linkdin.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
      if (
        window.scrollY <
        document.documentElement.scrollHeight - window.innerHeight * 1.5
      ) {
        // Adjust threshold for button visibility
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  return (
    <ul className="sidebar" style={{ display: showButton ? "block" : "none" }}>
      <a
        href="https://github.com/azad12614"
        target="_blank"
        class="contact-icon"
      >
        <li>
          <img src={git} />
        </li>
      </a>
      <a
        href="https://www.linkedin.com/in/abdullah-al-azad-12614-jishan"
        target="_blank"
        class="contact-icon"
      >
        <li>
          <img src={ln} />
        </li>
      </a>
      <a
        href="https://www.facebook.com/abdullah.2003.azad/"
        target="_blank"
        class="contact-icon"
      >
        <li>
          <img src={fb} />
        </li>
      </a>
    </ul>
  );
};

export default Sidebar;

import React, { useState, useEffect } from "react";
import fb from "../assets/Social/FB.png";
import git from "../assets/Social/Github.png";
import ln from "../assets/Social/Linkdin.png";
import "./Sidebar.css";

const LinksData = [
  {
    link: "https://github.com/azad12614",
    srcs: git,
  },
  {
    link: "https://www.linkedin.com/in/abdullah-al-azad-12614-jishan",
    srcs: ln,
  },
  {
    link: "https://www.facebook.com/abdullah.2003.azad/",
    srcs: fb,
  },
];

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
    <ul class="sidebar" style={{ display: showButton ? "block" : "none" }}>
      {LinksData.map((item) => (
        <a href={item.link} target="_blank" class="contact-icon">
          <li>
            <img loading="lazy" src={item.srcs} />
          </li>
        </a>
      ))}
    </ul>
  );
};

export default Sidebar;

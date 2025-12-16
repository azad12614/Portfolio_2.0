import { useEffect, useState } from "react";
import fb from "../assets/Social/FB.png";
import git from "../assets/Social/Github.png";
import ln from "../assets/Social/Linkdin.png";
import "./Sidebar.css";

const LinksData = [
  {
    link: "https://github.com/azad12614",
    srcs: git,
    name: "GitHub",
    color: "var(--text-main)",
  },
  {
    link: "https://www.linkedin.com/in/abdullah-al-azad-12614-jishan",
    srcs: ln,
    name: "LinkedIn",
    color: "var(--primary)",
  },
  {
    link: "https://www.facebook.com/abdullah.2003.azad/",
    srcs: fb,
    name: "Facebook",
    color: "var(--info)",
  },
];

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show sidebar when user scrolls past 20% of the page and not near bottom
      if (
        scrollPosition > windowHeight * 0.5 &&
        scrollPosition < documentHeight - windowHeight * 1.5
      ) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
        setIsHovered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`sidebar ${showSidebar ? "visible" : "hidden"} ${
        isHovered ? "expanded" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-content">
        <div className="social-links">
          {LinksData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="link-container">
                <img
                  loading="lazy"
                  src={item.srcs}
                  alt={item.name}
                  className="social-icon"
                />
                {isHovered && <span className="link-tooltip">{item.name}</span>}
              </div>
              <div
                className="link-glow"
                style={{ backgroundColor: item.color }}
              ></div>
            </a>
          ))}
        </div>

        <div className="sidebar-line"></div>
      </div>
    </div>
  );
};

export default Sidebar;

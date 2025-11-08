import React, { useState, useEffect, useRef } from "react";
import "./Blog.css";

import AI from "../assets/Blog/AI.png";
import Censorship from "../assets/Blog/Censorship.png";
import Energy from "../assets/Blog/Energy.png";
import Tech from "../assets/Blog/Tech.png";
import Win from "../assets/Blog/Win10.png";

const blogData = [
  {
    title: "The Countdown Is On",
    desc: "Navigating the Windows 10 End-of-Support Deadline",
    img: Win,
    link: "https://machineofmind.blogspot.com/2025/10/the-countdown-is-on.html",
    date: "October 09, 2025",
  },
  {
    title: "Tech Week Singapore 2025",
    desc: "Connecting Cloud, Code, and the Future of Intelligent Systems",
    img: Tech,
    link: "https://machineofmind.blogspot.com/2025/10/tech-week-singapore-2025.html",
    date: "October 03, 2025",
  },
  {
    title: "When AI Comes Home",
    desc: "The Unseen Impacts of Data Centers on Our Neighborhoods",
    img: AI,
    link: "https://machineofmind.blogspot.com/2025/09/when-ai-comes-home.html",
    date: "September 25, 2025",
  },
  {
    title: "The Hidden Cost of Intelligence",
    desc: "Is LLM Heading for an Energy Crisis",
    img: Energy,
    link: "https://machineofmind.blogspot.com/2025/08/the-hidden-cost-of-intelligence.html",
    date: "August 10, 2025",
  },
  {
    title: "The Digital Iron Curtain",
    desc: "How Sanctions and Censorship are Reshaping Russia's Tech-Stack",
    img: Censorship,
    link: "https://machineofmind.blogspot.com/2025/07/the-digital-iron-curtain.html",
    date: "July 30, 2025",
  },
];

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const infoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogData.length) % blogData.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="blog-section" id="Blog">
      <h2 className="header">✍️ My Blog Insights</h2>
      <p className="title">
        “Software is about empowering people with technology.”
      </p>

      <div className="info" ref={infoRef}>
        <div className="carousel">
          {blogData.map((item, index) => (
            <div
              className={`blog-card ${index === currentSlide ? "active" : ""}`}
              key={index}
            >
              <img
                loading="lazy"
                className="blog-img"
                src={item.img}
                alt={item.title}
              />
              <div className="blog-content">
                <h3 className="blog-title">{item.title}</h3>
                <p className="blog-date">{item.date}</p>
                <p className="blog-desc">{item.desc}</p>
                <div className="blog-footer">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Read Full Blog...
                  </a>
                  <span className="blog-tag">Blog</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="navigation">
        {/* <div className="arrow pointer">
          <div className="btn pointer" id="prev" onClick={handlePrevSlide}>
            <span className="material-symbols-outlined pointer">
              keyboard_double_arrow_left
            </span>
          </div>
          <div className="btn pointer" id="next" onClick={handleNextSlide}>
            <span className="material-symbols-outlined pointer">
              keyboard_double_arrow_right
            </span>
          </div>
        </div> */}
        <div className="dots">
          {blogData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React, { useState, useEffect, useRef } from "react";
import "./Blog.css";

import Top from "../assets/Blog/10.jpg";
import AI from "../assets/Blog/AI.jpg";
import LLM from "../assets/Blog/LLM.png";
import ML from "../assets/Blog/ML.png";

const blogData = [
  {
    title: "Kimi K2",
    desc: "Moonshot AI's Game-Changing Open Agentic Intelligence Model.",
    img: LLM,
    link: "https://machineofmind.blogspot.com/2025/07/kimi-k2-moonshot-ais-game-changing-open.html",
  },
  {
    title: "The AI Arms Race",
    desc: "Comparing the Latest Frontier LLMs in July 2025.",
    img: AI,
    link: "https://machineofmind.blogspot.com/2025/07/the-ai-arms-race-comparing-latest.html",
  },
  {
    title: "Programming",
    desc: "The Top 10 Programming Languages To Learn In 2025",
    img: Top,
    link: "https://machineofmind.blogspot.com/2025/01/programming-languages.html",
  },
  {
    title: "Machine Learning",
    desc: "From Sci-Fi Fantasy to Superheroes of Everyday Life",
    img: ML,
    link: "https://machineofmind.blogspot.com/2024/05/machine-learning.html",
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
              <div className="blog-content">
                <img
                  loading="lazy"
                  className="blogImg"
                  src={item.img}
                  alt={item.title}
                />
                <div className="blogDis">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="navigation">
        <div className="arrow pointer">
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
        </div>
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

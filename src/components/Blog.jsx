import React, { useState, useEffect, useRef } from "react";
import "./Blog.css";

import Top from "../assets/10.jpg";
import AI from "../assets/AI.jpg";
import Copyleaks from "../assets/Copyleaks.png";
import ML from "../assets/ML.png";

const blogData = [
  {
    title: "Programming",
    desc: "The Top 10 Programming Languages To Learn In 2025",
    img: Top,
    link: "https://machineofmind.blogspot.com/2025/01/programming-languages.html",
  },
  {
    title: "AI for Coders",
    desc: "Essential Tools and Libraries to Supercharge Your Workflow",
    img: AI,
    link: "https://machineofmind.blogspot.com/2024/05/ai-for-coders.html",
  },
  {
    title: "The Mystery of Copyleaks",
    desc: "Copyleaks is a cutting-edge plagiarism detection software.",
    img: Copyleaks,
    link: "https://machineofmind.blogspot.com/2025/05/copyleaks-beyond-plagiarism-detection.html",
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

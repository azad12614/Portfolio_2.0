import React, { useState, useRef } from "react";
import "./Blog.css";

import Top from "../assets/10.jpg";
import AI from "../assets/AI.png";
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

  const handleNextSlide = () => {
    if (currentSlide < blogData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="blog" id="Blog">
      <h2 className="header">✍️ BLOG</h2>
      <p className="title">
        “Software is really about humanity, that it’s really about helping
        people by using computer technology”
      </p>

      <div className="info" ref={infoRef}>
        {blogData.map((item, index) => (
          <div
            className="blogs"
            key={index}
            style={{ display: index === currentSlide ? "grid" : "none" }}
          >
            <div className="blogDis">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <p>{item.desc}</p>
            </div>
            <img className="blogImg" src={item.img} alt={item.title} />
          </div>
        ))}
      </div>

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
    </div>
  );
};

export default Blog;

import React, { useState, useRef } from "react";

import "./Blog.css";
import Top from "../assets/10.jpg";
import AI from "../assets/AI.png";
import Copyleaks from "../assets/Copyleaks.png";
import ML from "../assets/ML.png";

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const infoRef = useRef(null);

  const handleNextSlide = () => {
    const totalSlides = infoRef.current.children.length;

    if (currentSlide < totalSlides - 1) {
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
      <div className="arrow">
        <div className="btn" id="prev" onClick={handlePrevSlide}>
          <span class="material-symbols-outlined">
            keyboard_double_arrow_left
          </span>
        </div>
        <div className="btn" id="next" onClick={handleNextSlide}>
          <span class="material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </div>
      </div>
      <div class="info" ref={infoRef}>
        {
          // Render blog items based on currentSlide
          [...Array(4)].map((_, index) => (
            <div
              class="items"
              key={index} // Add key prop for performance
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <div className="dis">
                <a
                  href={
                    index === 0
                      ? "https://acoderbro.blogspot.com/2024/04/10programminglanguages.html"
                      : index === 1
                      ? "https://acoderbro.blogspot.com/2024/05/ai-for-coders.html"
                      : index === 2
                      ? "https://acoderbro.blogspot.com/2024/04/Copyleaks.html"
                      : "https://acoderbro.blogspot.com/2024/05/machine-learning.html"
                  }
                  target="_blank"
                >
                  {index === 0
                    ? "Programming"
                    : index === 1
                    ? "AI for Coders"
                    : index === 2
                    ? "The Mystery of Copyleaks"
                    : "Machine Learning"}
                </a>
                <p>
                  {index === 0
                    ? "The Top 10 Programming Languages To Learn In 2024"
                    : index === 1
                    ? "Essential Tools and Libraries to Supercharge Your Workflow"
                    : index === 2
                    ? "Copyleaks is a cutting-edge plagiarism detection software."
                    : "From Sci-Fi Fantasy to Superheroes of Everyday Life"}
                </p>
              </div>
              <div className="imgs">
                <img
                  src={
                    index === 0
                      ? Top
                      : index === 1
                      ? AI
                      : index === 2
                      ? Copyleaks
                      : ML
                  }
                  alt=""
                />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Blog;

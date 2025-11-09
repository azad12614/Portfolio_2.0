import React, { useState, useEffect } from "react";
import "./Coding.css";
const Coding = () => {
  const [activeProfile, setActiveProfile] = useState(0);
  const [animateProfile, setAnimateProfile] = useState(true);

  useEffect(() => {
    setAnimateProfile(false);
    setTimeout(() => setAnimateProfile(true), 50); // Adjusted delay for reliability
  }, [activeProfile]);

  const profiles = [
    {
      link: "https://codeforces.com/profile/azad12614",
      name: "Codeforces",
      rating: "1313",
      rank: "Pupil",
      solve: "1150+",
    },
    {
      link: "https://www.codechef.com/users/azad12614",
      name: "CodeChef",
      rating: "1625",
      rank: "3 Star",
      solve: "100+",
    },
    {
      link: "https://leetcode.com/u/azad12614/",
      name: "Leetcode",
      rating: "1573",
      rank: "Top 27%",
      solve: "90+",
    },
    {
      link: "https://atcoder.jp/users/azad12614",
      name: "Atcoder",
      rating: "316",
      rank: "37K+th",
      solve: "70+",
    },
  ];
  return (
    <div>
      <div className="profiles-slider">
        <div className="profiles-tabs">
          {profiles.map((item, index) => (
            <button
              key={index}
              className={`tab-button ${
                activeProfile === index ? "active" : ""
              }`}
              onClick={() => setActiveProfile(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="profile-content">
          <div
            className={`profile-card ${
              animateProfile ? "animate-on-load" : ""
            }`}
          >
            <h4>
              <a
                href={profiles[activeProfile].link}
                target="_blank"
                rel="noopener noreferrer"
                className="OJ"
              >
                {profiles[activeProfile].name}
              </a>
            </h4>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Rating (MAX)</span>
                <span className="info-value">
                  {profiles[activeProfile].rating}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Rank (MAX)</span>
                <span className="info-value">
                  {profiles[activeProfile].rank}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Problems Solved</span>
                <span className="info-value">
                  {profiles[activeProfile].solve}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;

import { useEffect, useState } from "react";
import AC from "../assets/Code/AC.png";
import CC from "../assets/Code/CC.png";
import CF from "../assets/Code/CF.png";
import LC from "../assets/Code/LC.png";
import "./Coding.css";

const Coding = () => {
  const [activeProfile, setActiveProfile] = useState(0);
  const [animateProfile, setAnimateProfile] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setAnimateProfile(false);
    const id = setTimeout(() => setAnimateProfile(true), 50);
    return () => clearTimeout(id);
  }, [activeProfile]);

  const profiles = [
    {
      link: "https://codeforces.com/profile/azad12614",
      name: "Codeforces",
      rating: "1229",
      maxRating: "1313",
      rank: "Pupil",
      maxRank: "Pupil",
      solve: "1150+",
      contests: "80+",
      logo: CF,
      description: "Competitive Programming Platform",
      maxScale: 2000,
    },
    {
      link: "https://www.codechef.com/users/azad12614",
      name: "CodeChef",
      rating: "1610",
      maxRating: "1625",
      rank: "3 Star",
      maxRank: "3 Star",
      solve: "100+",
      contests: "15+",
      logo: CC,
      description: "Monthly Coding Challenges",
      maxScale: 2200,
    },
    {
      link: "https://leetcode.com/u/azad12614/",
      name: "Leetcode",
      rating: "1573",
      maxRating: "1573",
      rank: "Top 27%",
      maxRank: "Top 27%",
      solve: "90+",
      contests: "25+",
      logo: LC,
      description: "Algorithm Challenges & Interviews",
      maxScale: 2500,
    },
    {
      link: "https://atcoder.jp/users/azad12614",
      name: "Atcoder",
      rating: "316",
      maxRating: "316",
      rank: "9 Kyu",
      maxRank: "9 Kyu",
      solve: "70+",
      contests: "20+",
      logo: AC,
      description: "Japanese Programming Contests",
      maxScale: 800,
    },
  ];

  const getRankColor = (rank) => {
    const rankColors = {
      pupil: "var(--success-dark)",
      "3 star": "var(--highlight)",
      "top 27%": "var(--warning-light)",
      "9 kyu": "var(--info-light)",
    };
    return rankColors[rank.toLowerCase()] || "var(--info-light)";
  };

  return (
    <div className="coding-profiles-section">
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
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="platform-logo"
              />
              <span className="platform-name">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="profile-content">
          <div
            className={`profile-card ${
              animateProfile ? "animate-on-load" : ""
            } ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="card-header">
              <div className="platform-badge">
                <img
                  src={profiles[activeProfile].logo}
                  alt={`${profiles[activeProfile].name} logo`}
                  className="platform-logo-lg"
                />
                <div className="platform-info">
                  <h4 className="platform-title">
                    {profiles[activeProfile].name}
                  </h4>
                  <p className="platform-desc">
                    {profiles[activeProfile].description}
                  </p>
                </div>
              </div>
              <div className="visit-button">
                <a
                  href={profiles[activeProfile].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-link"
                >
                  Visit Profile →
                </a>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card rating-card">
                <div className="stat-icon">📊</div>
                <div className="stat-info">
                  <span className="stat-label">Current Rating</span>
                  <span className="stat-value">
                    {profiles[activeProfile].rating}
                  </span>
                </div>
                <div className="stat-trend">
                  <span className="max-rating">
                    Max: {profiles[activeProfile].maxRating}
                  </span>
                </div>
              </div>

              <div className="stat-card rank-card">
                <div className="stat-icon">🏅</div>
                <div className="stat-info">
                  <span className="stat-label">Current Rank</span>
                  <span
                    className="stat-value rank-value"
                    style={{
                      color: getRankColor(profiles[activeProfile].rank),
                    }}
                  >
                    {profiles[activeProfile].rank}
                  </span>
                </div>
                <div className="stat-trend">
                  <span className="max-rank">
                    Best: {profiles[activeProfile].maxRank}
                  </span>
                </div>
              </div>

              <div className="stat-card solve-card">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <span className="stat-label">Problems Solved</span>
                  <span className="stat-value">
                    {profiles[activeProfile].solve}
                  </span>
                </div>
                <div className="stat-trend">
                  <span className="contests-count">
                    {profiles[activeProfile].contests} Contests
                  </span>
                </div>
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${Math.min(
                      (parseInt(profiles[activeProfile].rating) /
                        profiles[activeProfile].maxScale) *
                        100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="progress-labels">
                <span>0</span>
                <span>{profiles[activeProfile].maxScale}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;

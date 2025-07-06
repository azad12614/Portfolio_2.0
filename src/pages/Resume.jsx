import React, { useState } from "react";
import "./Resume.css";
import Skills from "../components/Skills";

const Resume = () => {
  const [activeProfile, setActiveProfile] = useState(0);

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
    <section className="resume" id="Resume">
      <div className="resume-container">
        <h2 className="header">📊 Resume</h2>
        <p className="title">
          "Solving real-world problems with code and continuous learning."
        </p>

        <h4>Coding Profiles 🎯</h4>
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
            <div className="profile-card">
              <h4>
                <a
                  href={profiles[activeProfile].link}
                  target="_blank"
                  rel="noopener noreferrer"
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

        <h4>My Skills 👩‍💻</h4>
        <Skills />

        <h4>Academic Engagements 💼</h4>
        <div className="gridedu">
          {[
            {
              date: "JAN 2025 - PRESENT",
              title: "Bootcamp Co-ordinator",
              org: "IIUCCPS",
              desc: "Serving as a Bootcamp Co-ordinator for the Competitive Programming Society at International Islamic University Chittagong.",
            },
            {
              date: "JUL 2024 - PRESENT",
              title: "Teaching Assistant",
              org: "IIUC",
              desc: "Serving as a Teaching Assistant at International Islamic University Chittagong.",
            },
            {
              date: "JUL 2023 - JAN 2025",
              title: "Mentor",
              org: "IIUCCPS",
              desc: "Served as a Mentor for the Competitive Programming Society at International Islamic University Chittagong.",
            },
            {
              date: "JUL 2023 - DEC 2023",
              title: "Trainer",
              org: "IIUCCPS",
              desc: "Served as a Trainer for the Competitive Programming Society at International Islamic University Chittagong.",
            },
          ].map((item, idx) => (
            <div className="gride" key={idx}>
              <p className="date">{item.date}</p>
              <p className="tittle">
                {item.title} <span>- {item.org}</span>
              </p>
              <p className="details">{item.desc}</p>
            </div>
          ))}
        </div>

        <h4>Programming Experiences 🏆</h4>
        <div className="gridedu">
          {[
            {
              date: "JUL 2024",
              title: "Inter University Programming Contest",
              link: "https://toph.co/contests/training/rxbqtb6/standings",
              org: "CUSS",
              desc: "Ranked 20th (Team - IIUC_ZeroPlan) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the Divisional Programming Contest organized by the Chittagong University Scientific Society.",
            },
            {
              date: "DEC 2024",
              title: "ICPC Preliminary Contest",
              org: "ICPC",
              desc: "Ranked 288th (Team - IIUC_ZeroPlan) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
            },
            {
              date: "MAR 2024",
              title: "NCPC Preliminary Contest",
              org: "JU",
              desc: "Ranked 241th (Team - IIUC_Groot) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the National Programming Contest organized by Jahangirnagar University.",
            },
            {
              date: "JAN 2024",
              title: "PU CSE IT FEST",
              org: "PU",
              desc: "Ranked 30th (Team - IIUC_Groot) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Divisional Programming Contest organized by Premier University.",
            },
            {
              date: "OCT 2023",
              title: "ICPC Preliminary Contest 2023",
              org: "ICPC",
              desc: "Participated (Team - IIUC_Groot) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
            },
            {
              date: "SEP 2023",
              title: "15th Inter University Programming Contest",
              link: "https://toph.co/c/15th-iiuc-inter-university-2023/standings",
              org: "IIUC",
              desc: "Ranked 35th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Divisional Programming Contest organized by the IIUC Computer Club & IIUCCPS.",
            },
            {
              date: "SEP 2023",
              title: "Intra University Programming Contest Aut'23 (Male)",
              link: "https://toph.co/contests/training/wf44wz8/standings",
              org: "IIUC",
              desc: "Ranked 19th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Intra University Programming Contest organized by the International Islamic University Chittagong (IIUC).",
            },
            {
              date: "MAR 2023",
              title: "ICPC Preliminary Contest 2022",
              org: "ICPC",
              desc: "Ranked 801th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
            },
            {
              date: "NOV 2022",
              title: "Intra University Programming Contest",
              link: "https://toph.co/contests/training/x2c4mne/standings",
              org: "IIUCCPS",
              desc: "Ranked 12th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Intra University Programming Contest of the International Islamic University Chittagong Competitive Programming Society.",
            },
            {
              date: "OCT 2022",
              title: "Intra University Programming Contest (Junior)",
              link: "https://toph.co/contests/training/mf23yf4/standings",
              org: "IIUC",
              desc: "Ranked 4th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Intra University Programming Contest of the International Islamic University Chittagong (IIUC).",
            },
            {
              date: "SEP 2022",
              title: "ICPC Preliminary Contest 2021",
              org: "ICPC",
              desc: "Ranked 361th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Abrar Yasir in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
            },
            {
              date: "AUG 2022",
              title:
                "Intra University Programming Contest Aut'22 (Junior/Solo)",
              link: "https://toph.co/contests/training/ctjhhnj/standings",
              org: "IIUCCPS",
              desc: "Ranked 5th in the Solo Programming Contest organized by the International Islamic University Chittagong Competitive Programming Society.",
            },
            {
              date: "AUG 2022",
              title: "CSE FEST Programming Contest (Solo)",
              org: "IIUC",
              desc: "Ranked 15th in the CSE FEST Programming Contest organized by the IIUC Computer Club & IIUCCPS.",
            },
          ].map((item, idx) => (
            <div className="gride" key={idx}>
              <p className="date">{item.date}</p>
              <p className="tittle">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}{" "}
                <span>- {item.org}</span>
              </p>
              <p className="details">{item.desc}</p>
            </div>
          ))}
        </div>

        <h4>Education 🎓</h4>
        <div className="gridedu">
          {[
            {
              date: "Jul 2021 - Jul 2025",
              title: "B.Sc. Degree",
              link: "https://www.iiuc.ac.bd/",
              school: "IIUC",
              details:
                "Pursuing my degree at International Islamic University Chittagong, expected graduation in 2025.",
            },
            {
              date: "Apr 2018 - Apr 2020",
              title: "H.S.C. Exam",
              link: "https://www.idc.w3schoolbd.org/",
              school: "Islamia Degree College",
              details:
                "Completed Higher Secondary Certificate Exam at Islamia Degree College.",
            },
            {
              date: "Jan 2015 - Feb 2018",
              title: "J.S.C. & S.S.C. Exam",
              link: "http://www.kascc.edu.bd/",
              school: "Kazem Ali High School",
              details:
                "Completed J.S.C. and S.S.C. Exams at Kazem Ali High School.",
            },
            {
              date: "Jan 2013 - Dec 2014",
              title: "7th Class",
              link: "https://www.facebook.com/Harualchari.h.school/",
              school: "Harualchari High School",
              details:
                "Studied at Harualchari High School from 6th to 7th class.",
            },
            {
              date: "Jan 2008 - Dec 2012",
              title: "P.S.C.",
              link: "https://www.facebook.com/people/%E0%A6%89%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A7%9F%E0%A6%BE%E0%A6%B2%E0%A6%9B%E0%A7%9C%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%A5%E0%A6%AE%E0%A6%BF%E0%A6%95-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F/100057411851391/",
              school: "North Harualchari Govt. Primary School",
              details:
                "Completed P.S.C. Exam and studied from 1st to 5th class at North Harualchari Govt. Primary School.",
            },
          ].map(({ date, title, link, school, details }, index) => (
            <div className="gride" key={index}>
              <p className="date">{date}</p>
              <p className="tittle">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {title}{" "}
                </a>
                <span>- {school}</span>
              </p>
              <p className="details">{details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;

import React, { useState, useEffect } from "react";
import "./Resume.css";
import Skills from "../components/Skills";
import Coding from "../components/Coding";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [animateGrid, setAnimateGrid] = useState(true);

  useEffect(() => {
    setAnimateGrid(false);
    setTimeout(() => setAnimateGrid(true), 50); // Adjusted delay for reliability
  }, [activeTab]);

  const job = [
    {
      date: "Oct 2025 - Present",
      title: "Web Developer Intern (Remote)",
      org: "Universal Institute for Advanced Studies (UIAS)",
      desc: "Officially joined the team to apply MERN/Next.js and competitive programming skills to solve technical challenges. ",
    },
  ];
  const academic = [
    {
      date: "Nov 2025 - Present",
      title: "Assistant Web Secretary (Backend)",
      org: "IIUCCPS",
      desc: "Serving as a Bootcamp Co-ordinator for the Competitive Programming Society at International Islamic University Chittagong.",
    },
    {
      date: "Jan 2025 - Aug 2025",
      title: "Bootcamp Co-ordinator",
      org: "IIUCCPS",
      desc: "Serving as a Bootcamp Co-ordinator for the Competitive Programming Society at International Islamic University Chittagong.",
    },
    {
      date: "Jul 2024 - Aug 2025",
      title: "Teaching Assistant",
      org: "IIUC",
      desc: "Serving as a Teaching Assistant at International Islamic University Chittagong.",
    },
    {
      date: "Jul 2023 - Jan 2025",
      title: "Mentor",
      org: "IIUCCPS",
      desc: "Served as a Mentor for the Competitive Programming Society at International Islamic University Chittagong.",
    },
    {
      date: "Jul 2023 - Dec 2023",
      title: "Trainer",
      org: "IIUCCPS",
      desc: "Served as a Trainer for the Competitive Programming Society at International Islamic University Chittagong.",
    },
  ];
  const programming = [
    {
      date: "Jul 2024",
      title: "Inter University Programming Contest",
      link: "https://toph.co/contests/training/rxbqtb6/standings",
      org: "CUSS",
      desc: "Ranked 20th (Team - IIUC_ZeroPlan) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the Divisional Programming Contest organized by the Chittagong University Scientific Society.",
    },
    {
      date: "Dec 2024",
      title: "ICPC Preliminary Contest",
      org: "ICPC",
      desc: "Ranked 288th (Team - IIUC_ZeroPlan) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Mar 2024",
      title: "NCPC Preliminary Contest",
      org: "JU",
      desc: "Ranked 241st (Team - IIUC_Groot) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the National Programming Contest organized by Jahangirnagar University.",
    },
    {
      date: "Jan 2024",
      title: "PU CSE IT FEST",
      org: "PU",
      desc: "Ranked 30th (Team - IIUC_Groot) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Divisional Programming Contest organized by Premier University.",
    },
    {
      date: "Oct 2023",
      title: "ICPC Preliminary Contest 2023",
      org: "ICPC",
      desc: "Participated (Team - IIUC_Groot) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Sep 2023",
      title: "15th Inter University Programming Contest",
      link: "https://toph.co/c/15th-iiuc-inter-university-2023/standings",
      org: "IIUC",
      desc: "Ranked 35th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Divisional Programming Contest organized by the IIUC Computer Club & IIUCCPS.",
    },
    {
      date: "Sep 2023",
      title: "Intra University Programming Contest Aut'23 (Male)",
      link: "https://toph.co/contests/training/wf44wz8/standings",
      org: "IIUC",
      desc: "Ranked 19th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the Intra University Programming Contest organized by the International Islamic University Chittagong (IIUC).",
    },
    {
      date: "Mar 2023",
      title: "ICPC Preliminary Contest 2022",
      org: "ICPC",
      desc: "Ranked 801st (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Nov 2022",
      title: "Intra University Programming Contest",
      link: "https://toph.co/contests/training/x2c4mne/standings",
      org: "IIUCCPS",
      desc: "Ranked 12th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Intra University Programming Contest of the International Islamic University Chittagong Competitive Programming Society.",
    },
    {
      date: "Oct 2022",
      title: "Intra University Programming Contest (Junior)",
      link: "https://toph.co/contests/training/mf23yf4/standings",
      org: "IIUC",
      desc: "Ranked 4th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Intra University Programming Contest of the International Islamic University Chittagong (IIUC).",
    },
    {
      date: "Sep 2022",
      title: "ICPC Preliminary Contest 2021",
      org: "ICPC",
      desc: "Ranked 361st (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Abrar Yasir in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Aug 2022",
      title: "Intra University Programming Contest Aut'22 (Junior/Solo)",
      link: "https://toph.co/contests/training/ctjhhnj/standings",
      org: "IIUCCPS",
      desc: "Ranked 5th in the Solo Programming Contest organized by the International Islamic University Chittagong Competitive Programming Society.",
    },
    {
      date: "Aug 2022",
      title: "CSE FEST Programming Contest (Solo)",
      org: "IIUC",
      desc: "Ranked 15th in the CSE FEST Programming Contest organized by the IIUC Computer Club & IIUCCPS.",
    },
  ];
  const education = [
    {
      date: "Jul 2021 - Expected Dec 2025",
      title: "B.Sc. Degree",
      link: "https://www.iiuc.ac.bd/",
      org: "IIUC",
      desc: "Pursuing my degree at International Islamic University Chittagong, expected graduation in 2025.",
    },
    {
      date: "Apr 2018 - Apr 2020",
      title: "H.S.C. Exam",
      link: "https://www.idc.w3schoolbd.org/",
      org: "Islamia Degree College",
      desc: "Completed Higher Secondary Certificate Exam at Islamia Degree College.",
    },
    {
      date: "Jan 2015 - Feb 2018",
      title: "J.S.C. & S.S.C. Exam",
      link: "http://www.kascc.edu.bd/",
      org: "Kazem Ali High School",
      desc: "Completed J.S.C. and S.S.C. Exams at Kazem Ali High School.",
    },
    {
      date: "Jan 2013 - Dec 2014",
      title: "7th Class",
      link: "https://www.facebook.com/Harualchari.h.school/",
      org: "Harualchari High School",
      desc: "Studied at Harualchari High School from 6th to 7th class.",
    },
    {
      date: "Jan 2008 - Dec 2012",
      title: "P.S.C.",
      link: "https://www.facebook.com/people/%E0%A6%89%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A7%9F%E0%A6%BE%E0%A6%B2%E0%A6%9B%E0%A7%9C%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%A5%E0%A6%AE%E0%A6%BF%E0%A6%95-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F/100057411851391/",
      org: "North Harualchari Govt. Primary School",
      desc: "Completed P.S.C. Exam and studied from 1st to 5th class at North Harualchari Govt. Primary School.",
    },
  ];

  return (
    <section className="resume" id="Resume">
      <h2 className="header">📊 My Journey</h2>
      <p className="title">"Showcasing my skills and achievements in tech."</p>

      <div className="resume-container">
        <h4 className="resume-subtitle">Experience Timeline</h4>
        <div className="experience-tabs">
          <button
            className={`tab-button ${activeTab === "jobs" ? "active" : ""}`}
            onClick={() => setActiveTab("jobs")}
          >
            <span className="tab-icon">💼</span> Jobs
          </button>
          <button
            className={`tab-button ${activeTab === "academic" ? "active" : ""}`}
            onClick={() => setActiveTab("academic")}
          >
            <span className="tab-icon">👨🏻‍🎓</span> Academic Roles
          </button>
          <button
            className={`tab-button ${
              activeTab === "programming" ? "active" : ""
            }`}
            onClick={() => setActiveTab("programming")}
          >
            <span className="tab-icon">🏆</span> Programming Achievements
          </button>
          <button
            className={`tab-button ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <span className="tab-icon">🎓</span> Education
          </button>
        </div>
        <div className="gridedu">
          {activeTab === "jobs" &&
            job.map((item, index) => (
              <div
                className={`gride ${animateGrid ? "animate-on-load" : ""}`}
                key={index}
              >
                <p className="date">{item.date}</p>
                <p className="tittle">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>{" "}
                  <span>- {item.org}</span>
                </p>
                <p className="details">{item.desc}</p>
              </div>
            ))}
          {activeTab === "academic" &&
            academic.map((item, index) => (
              <div
                className={`gride ${animateGrid ? "animate-on-load" : ""}`}
                key={index}
              >
                <p className="date">{item.date}</p>
                <p className="tittle">
                  {item.title} <span>- {item.org}</span>
                </p>
                <p className="details">{item.desc}</p>
              </div>
            ))}
          {activeTab === "programming" &&
            programming.map((item, index) => (
              <div
                className={`gride ${animateGrid ? "animate-on-load" : ""}`}
                key={index}
              >
                <p className="date">{item.date}</p>
                <p className="tittle">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
          {activeTab === "education" &&
            education.map((item, index) => (
              <div
                className={`gride ${animateGrid ? "animate-on-load" : ""}`}
                key={index}
              >
                <p className="date">{item.date}</p>
                <p className="tittle">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>{" "}
                  <span>- {item.org}</span>
                </p>
                <p className="details">{item.desc}</p>
              </div>
            ))}
        </div>

        <h4 className="resume-subtitle">My Skills 👩‍💻</h4>
        <Skills />

        <h4 className="resume-subtitle">Coding Profiles 🎯</h4>
        <Coding />
      </div>
    </section>
  );
};

export default Resume;

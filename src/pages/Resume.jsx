import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Coding from "../components/Coding";
import Skills from "../components/Skills";
import "./Resume.css";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [animateGrid, setAnimateGrid] = useState(true);

  useEffect(() => {
    setAnimateGrid(false);
    const id = setTimeout(() => setAnimateGrid(true), 50);
    return () => clearTimeout(id);
  }, [activeTab]);

  const job = [
    {
      date: "Oct 2025 - Feb 2026",
      title: "Web Developer",
      org: "Universal Institute for Advanced Studies (UIAS)",
      worktype: "Intern",
      workplace: "Remote",
      link: "https://www.linkedin.com/company/universal-institute-for-advanced-studies%C2%A0-uias?trk=public_post_feed-actor-name",
      desc: "Built and shipped multiple client-facing web projects including a brokerage firm website and a local business site, handling frontend development, UI improvements, and feature additions across the internship.",
    },
  ];
  const academic = [
    {
      date: "Nov 2025 - Present",
      title: "Assistant Web Secretary (Backend)",
      org: "IIUCCPS",
      worktype: "Volunteer",
      workplace: "Remote",
      desc: "Managing and enhancing backend infrastructure for IIUCCPS, supporting the society's web presence and technical operations.",
    },
    {
      date: "2024 - Present",
      title: "Open Source Contributor",
      org: "freeCodeCamp",
      worktype: "Volunteer",
      workplace: "Remote",
      link: "https://www.freecodecamp.org/",
      desc: "Contributed to freeCodeCamp, one of the world's largest open-source coding education platforms.",
    },
    {
      date: "Jan 2025 - Aug 2025",
      title: "Bootcamp Co-ordinator",
      org: "IIUCCPS",
      worktype: "Volunteer",
      workplace: "Remote",
      desc: "Organized weekly coding sessions for 100+ participants. Collaborated with 20+ trainers and mentors, scaling program reach by 50% year-over-year.",
    },
    {
      date: "Jul 2024 - Aug 2025",
      title: "Teaching Assistant",
      org: "IIUC",
      worktype: "PartTime",
      workplace: "Hybrid",
      desc: "Assisted in teaching Data Structures to 100+ students, boosting average class performance by 15%. Designed coding assignments, checked submissions, and organized marking.",
    },
    {
      date: "Jul 2023 - Jan 2025",
      title: "Bootcamp Mentor",
      org: "IIUCCPS",
      worktype: "Volunteer",
      workplace: "Remote",
      desc: "Mentored 30+ beginner and intermediate CP enthusiasts, guiding them through data structures, algorithms, and competitive problem-solving.",
    },
    {
      date: "Jul 2023 - Dec 2023",
      title: "Trainer",
      org: "IIUCCPS",
      worktype: "Volunteer",
      workplace: "Remote",
      desc: "Conducted problem-solving sessions on algorithms, data structures, and Codeforces problems for bootcamp participants.",
    },
  ];
  const programming = [
    {
      date: "Jul 2024",
      title: "Inter University Programming Contest",
      link: "https://toph.co/contests/training/rxbqtb6/standings",
      org: "CUSS",
      workplace: "Offline",
      desc: "Ranked 20th (Team - IIUC_ZeroPlan) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the Divisional Programming Contest organized by the Chittagong University Scientific Society.",
    },
    {
      date: "Dec 2024",
      title: "ICPC Preliminary Contest",
      org: "ICPC",
      workplace: "Online",
      desc: "Ranked 288th (Team - IIUC_ZeroPlan) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Mar 2024",
      title: "NCPC Preliminary Contest",
      org: "JU",
      workplace: "Online",
      desc: "Ranked 241st (Team - IIUC_Groot) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the National Programming Contest organized by Jahangirnagar University.",
    },
    {
      date: "Jan 2024",
      title: "PU CSE IT FEST",
      org: "PU",
      workplace: "Offline",
      desc: "Ranked 30th (Team - IIUC_Groot) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Divisional Programming Contest organized by Premier University.",
    },
    {
      date: "Oct 2023",
      title: "ICPC Preliminary Contest 2023",
      org: "ICPC",
      workplace: "Online",
      desc: "Ranked 191st (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC). Honorable Mention.",
    },
    {
      date: "Sep 2023",
      title: "15th Inter University Programming Contest",
      link: "https://toph.co/c/15th-iiuc-inter-university-2023/standings",
      org: "IIUC",
      workplace: "Offline",
      desc: "Ranked 35th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Divisional Programming Contest organized by the IIUC Computer Club & IIUCCPS.",
    },
    {
      date: "Sep 2023",
      title: "Intra University Programming Contest Aut'23 (Male)",
      link: "https://toph.co/contests/training/wf44wz8/standings",
      org: "IIUC",
      workplace: "Offline",
      desc: "Ranked 19th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Shehabudowlla Rakib in the Intra University Programming Contest organized by the International Islamic University Chittagong (IIUC).",
    },
    {
      date: "Mar 2023",
      title: "ICPC Preliminary Contest 2022",
      org: "ICPC",
      workplace: "Online",
      desc: "Ranked 801st (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Nov 2022",
      title: "Intra University Programming Contest",
      link: "https://toph.co/contests/training/x2c4mne/standings",
      org: "IIUCCPS",
      workplace: "Offline",
      desc: "Ranked 12th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Intra University Programming Contest of the International Islamic University Chittagong Competitive Programming Society.",
    },
    {
      date: "Oct 2022",
      title: "Intra University Programming Contest (Junior)",
      link: "https://toph.co/contests/training/mf23yf4/standings",
      org: "IIUC",
      workplace: "Offline",
      desc: "Ranked 4th (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Baizid Kamrurzaman in the Intra University Programming Contest of the International Islamic University Chittagong (IIUC).",
    },
    {
      date: "Sep 2022",
      title: "ICPC Preliminary Contest 2021",
      org: "ICPC",
      workplace: "Online",
      desc: "Ranked 361st (Team - IIUC_Synthroid) with teammates Toshifur Rhaman and Abrar Yasir in the Regional Programming Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Aug 2022",
      title: "Intra University Programming Contest Aut'22 (Junior/Solo)",
      link: "https://toph.co/contests/training/ctjhhnj/standings",
      org: "IIUCCPS",
      workplace: "Offline",
      desc: "Ranked 5th in the Solo Programming Contest organized by the International Islamic University Chittagong Competitive Programming Society.",
    },
    {
      date: "Aug 2022",
      title: "CSE FEST Programming Contest (Solo)",
      org: "IIUC",
      workplace: "Offline",
      desc: "Ranked 15th in the CSE FEST Programming Contest organized by the IIUC Computer Club & IIUCCPS.",
    },
  ];
  const education = [
    {
      date: "Jul 2021 - Dec 2025",
      title: "B.Sc. Degree",
      link: "https://www.iiuc.ac.bd/",
      org: "IIUC",
      desc: "Completed B.Sc. in Computer Science and Engineering at International Islamic University Chittagong. Thesis: A Hybrid CNN-BiGRU Approach for Bangla Audio Deepfake Detection.",
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
  const achievements = [
    {
      date: "Feb 2024, Jul 2025",
      title: "The Best Mentor Award",
      org: "IIUCCPS",
      workplace: "Offline",
      desc: "Awarded for contributions as a mentor in the IIUCCPS Bootcamp Program.",
    },
    {
      date: "Feb 2024",
      title: "Trainer Certificate",
      org: "IIUCCPS",
      workplace: "Offline",
      desc: "Received a certificate recognizing my role as a trainer at IIUCCPS Bootcamp Program Autumn 2023.",
    },
    {
      date: "Sep 2024",
      title: "Participation Certificate",
      org: "NASA",
      workplace: "Online",
      desc: "Participated in the NASA International Space Apps Challenge 2024.",
    },
    {
      date: "2022, 2023, 2024",
      title: "Certificate of Achievement",
      org: "ICPC",
      workplace: "Online",
      desc: "Awarded for achievements in the International Collegiate Programming Contest.",
    },
    {
      date: "May 2025",
      title: "Ostad Courses Certificate",
      org: "Ostad",
      workplace: "Online",
      desc: 'Certificate for courses: "Webflow Crash Course" and "Javascript Workshop for Beginners".',
    },
  ];

  return (
    <section className="resume" id="Resume">
      <h2 className="header">📊 My Journey</h2>
      <p className="title">
        &quot;Showcasing my skills and achievements in tech.&quot;
      </p>

      <div className="resume-container">
        <h4 className="resume-subtitle">Experience Timeline</h4>
        <div className="experience-tabs">
          <button
            className={`resume-tab-button ${activeTab === "jobs" ? "active" : ""}`}
            onClick={() => setActiveTab("jobs")}
          >
            <span className="tab-icon">💼</span> Jobs
          </button>
          <button
            className={`resume-tab-button ${activeTab === "academic" ? "active" : ""}`}
            onClick={() => setActiveTab("academic")}
          >
            <span className="tab-icon">👨🏻‍🎓</span> Academic Roles
          </button>
          <button
            className={`resume-tab-button ${
              activeTab === "programming" ? "active" : ""
            }`}
            onClick={() => setActiveTab("programming")}
          >
            <span className="tab-icon">🏆</span> Programming Achievements
          </button>
          <button
            className={`resume-tab-button ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <span className="tab-icon">🎓</span> Education
          </button>
          <button
            className={`resume-tab-button ${
              activeTab === "achievements" ? "active" : ""
            }`}
            onClick={() => setActiveTab("achievements")}
          >
            <span className="tab-icon">🏅</span> Awards & Certs
          </button>
        </div>
        <div className="gridedu">
          {activeTab === "jobs" &&
            job.map((item, index) => (
              <Cards
                key={index}
                item={item}
                animateGrid={animateGrid}
                type="job"
              />
            ))}
          {activeTab === "academic" &&
            academic.map((item, index) => (
              <Cards
                key={index}
                item={item}
                animateGrid={animateGrid}
                type="academic"
              />
            ))}
          {activeTab === "programming" &&
            programming.map((item, index) => (
              <Cards
                key={index}
                item={item}
                animateGrid={animateGrid}
                type="programming"
              />
            ))}
          {activeTab === "education" &&
            education.map((item, index) => (
              <Cards
                key={index}
                item={item}
                animateGrid={animateGrid}
                type="education"
              />
            ))}
          {activeTab === "achievements" &&
            achievements.map((item, index) => (
              <Cards
                key={index}
                item={item}
                animateGrid={animateGrid}
                type="programming"
              />
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

import { useState } from "react";
import Cards from "../components/Cards";
import Coding from "../components/Coding";
import Skills from "../components/Skills";
import "./Resume.css";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  const job = [
    {
      date: "Aug 2026 - Present",
      title: "Software Engineer (Contract)",
      org: "Independent",
      worktype: "Contract",
      workplace: "Remote",
      desc: "Contract full-stack engineer, working with a senior engineer on a client product, **mtacademy.au**: a production SaaS platform for corporate training sales, covering modular training sales, membership and quote-request flows, and workflow automation. Shipped **certificate/PDF generation**, **admin search and access-control fixes**, and **Playwright end-to-end coverage** across a **Next.js and FastAPI** stack.",
    },
    {
      date: "Oct 2025 - Feb 2026",
      title: "Web Developer Intern",
      org: "Universal Institute for Advanced Studies (UIAS)",
      worktype: "Part-time",
      workplace: "Remote",
      link: "https://www.linkedin.com/company/universal-institute-for-advanced-studies%C2%A0-uias?trk=public_post_feed-actor-name",
      desc: "Built and shipped multiple client-facing web projects including a **brokerage firm website** and a **local business site**, handling frontend development, UI improvements, and feature additions across the internship.",
    },
  ];
  const academic = [
    {
      date: "Nov 2025 - Jul 2026",
      title: "Assistant Web Secretary (Backend)",
      org: "IIUCCPS",
      worktype: "Volunteer",
      workplace: "Remote",
      desc: "Managing and enhancing **backend infrastructure** for IIUCCPS, supporting the society's web presence and technical operations.",
    },
    {
      date: "Nov 2025 - Jul 2026",
      title: "Full-Stack Engineering Training (Batch MB52)",
      org: "MentorBhai",
      worktype: "Part-time training",
      workplace: "Remote",
      desc: "Completed a structured full-stack engineering training program. Built **GhorBazar** and **Ticket Pipeline** as part of the curriculum, alongside a **HackerNews clone**, a **7GUIs benchmark implementation**, and a **static GenZ fashion website**. Contributed to the open-source **Bigcapital** accounting platform.",
    },
    {
      date: "2024 - Present",
      title: "Open Source Contributor",
      org: "freeCodeCamp",
      worktype: "Volunteer",
      workplace: "Remote",
      link: "https://www.freecodecamp.org/",
      desc: "Contributed to **freeCodeCamp**, one of the world's largest open-source coding education platforms.",
    },
    {
      date: "Jan 2025 - Aug 2025",
      title: "Bootcamp Co-ordinator",
      org: "IIUCCPS",
      worktype: "Volunteer",
      workplace: "Remote",
      desc: "Organized weekly coding sessions for **100+ participants**. Collaborated with **20+ trainers and mentors**, scaling program reach by **50% year-over-year**.",
    },
    {
      date: "Jul 2024 - Aug 2025",
      title: "Teaching Assistant",
      org: "IIUC",
      worktype: "Part-time",
      workplace: "Hybrid",
      desc: "Assisted in teaching **Data Structures** to **100+ students**, boosting average class performance by **15%**. Designed coding assignments, checked submissions, and organized marking.",
    },
    {
      date: "Jul 2023 - Dec 2024",
      title: "Bootcamp Mentor",
      org: "IIUCCPS",
      worktype: "Volunteer",
      workplace: "Remote",
      desc: "Mentored **30+ beginner and intermediate CP enthusiasts**, guiding them through data structures, algorithms, and competitive problem-solving.",
    },
    {
      date: "Jul 2023 - Dec 2023",
      title: "Trainer",
      org: "IIUCCPS",
      worktype: "Volunteer",
      workplace: "Remote",
      desc: "Conducted problem-solving sessions on algorithms, data structures, and **Codeforces problems** for bootcamp participants.",
    },
  ];
  const programming = [
    {
      date: "Nov 2024",
      title: "Inter University Programming Contest",
      link: "https://toph.co/contests/training/rxbqtb6/standings",
      org: "CUSS",
      workplace: "Offline",
      desc: "**Ranked 20th** (Team - IIUC_ZeroPlan) with teammates Md. Toshifur Rahman and Shehabudowlla Rakib in the Divisional Programming Contest organized by the Chittagong University Scientific Society.",
    },
    {
      date: "Nov 2024",
      title: "ICPC Preliminary Contest 2024",
      org: "ICPC",
      workplace: "Online",
      desc: "**Ranked 288th** (Team - IIUC_ZeroPlan) with teammates Md. Toshifur Rahman and Shehabudowlla Rakib in the Preliminary Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Jul 2024",
      title: "Inter University Programming Contest Preliminary",
      org: "CUSS",
      workplace: "Online",
      desc: "**Ranked 36th** (Team - IIUC_ZeroPlan) in the online Preliminary Round of the Inter University Programming Contest organized by the Chittagong University Scientific Society.",
    },
    {
      date: "Feb 2024",
      title: "NCPC Preliminary Contest",
      org: "JU",
      workplace: "Online",
      desc: "**Ranked 241st** (Team - IIUC_Groot) with teammates Md. Toshifur Rahman and Shehabudowlla Rakib in the National Programming Contest organized by Jahangirnagar University.",
    },
    {
      date: "Jan 2024",
      title: "PU CSE IT FEST",
      org: "PU",
      workplace: "Offline",
      desc: "**Ranked 30th** (Team - IIUC_Groot) with teammates Md. Toshifur Rahman and Baizid Kamruzzaman in the Divisional Programming Contest organized by Premier University.",
    },
    {
      date: "Oct 2023",
      title: "ICPC Preliminary Contest 2023",
      org: "ICPC",
      workplace: "Online",
      desc: "**Ranked 191st** (Team - IIUC_Synthroid) with teammates Md. Toshifur Rahman and Baizid Kamruzzaman in the Preliminary Contest of the International Collegiate Programming Contest (ICPC). **Honorable Mention**.",
    },
    {
      date: "Sep 2023",
      title: "15th Inter University Programming Contest",
      link: "https://toph.co/c/15th-iiuc-inter-university-2023/standings",
      org: "IIUC",
      workplace: "Offline",
      desc: "**Ranked 35th** (Team - IIUC_Synthroid) with teammates Md. Toshifur Rahman and Baizid Kamruzzaman in the Divisional Programming Contest organized by the IIUC Computer Club & IIUCCPS.",
    },
    {
      date: "Sep 2023",
      title: "Intra University Programming Contest Aut'23 (Male)",
      link: "https://toph.co/contests/training/wf44wz8/standings",
      org: "IIUC",
      workplace: "Offline",
      desc: "**Ranked 19th** (Team - IIUC_Synthroid) with teammates Md. Toshifur Rahman and Shehabudowlla Rakib in the Intra University Programming Contest organized by the International Islamic University Chittagong (IIUC).",
    },
    {
      date: "Feb 2023",
      title: "ICPC Preliminary Contest 2022",
      org: "ICPC",
      workplace: "Online",
      desc: "**Ranked 801st** (Team - IIUC_Synthroid) with teammates Md. Toshifur Rahman and Baizid Kamruzzaman in the Preliminary Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Nov 2022",
      title: "Intra University Programming Contest",
      link: "https://toph.co/contests/training/x2c4mne/standings",
      org: "IIUCCPS",
      workplace: "Offline",
      desc: "**Ranked 12th** (Team - IIUC_Synthroid) with teammates Md. Toshifur Rahman and Baizid Kamruzzaman in the Intra University Programming Contest of the International Islamic University Chittagong Competitive Programming Society.",
    },
    {
      date: "Oct 2022",
      title: "Intra University Programming Contest (Junior)",
      link: "https://toph.co/contests/training/mf23yf4/standings",
      org: "IIUC",
      workplace: "Offline",
      desc: "**Ranked 4th** (Team - IIUC_Synthroid) with teammates Md. Toshifur Rahman and Baizid Kamruzzaman in the Intra University Programming Contest of the International Islamic University Chittagong (IIUC).",
    },
    {
      date: "Sep 2022",
      title: "ICPC Preliminary Contest 2021",
      org: "ICPC",
      workplace: "Online",
      desc: "**Ranked 361st** (Team - IIUC_Synthroid) with teammates Md. Toshifur Rahman and Abrar Yasir in the Preliminary Contest of the International Collegiate Programming Contest (ICPC).",
    },
    {
      date: "Aug 2022",
      title: "CSE FEST Programming Contest (Solo)",
      org: "IIUC",
      workplace: "Offline",
      desc: "**Ranked 15th** in the CSE FEST Programming Contest organized by the IIUC Computer Club & IIUCCPS.",
    },
    {
      date: "Aug 2022",
      title: "Intra University Programming Contest Aut'22 (Junior/Solo)",
      link: "https://toph.co/contests/training/ctjhhnj/standings",
      org: "IIUCCPS",
      workplace: "Offline",
      desc: "**Ranked 5th** in the Solo Programming Contest organized by the International Islamic University Chittagong Competitive Programming Society.",
    },
  ];
  const education = [
    {
      date: "Jul 2026 - Jul 2028",
      title: "M.Eng. Degree",
      link: "https://www.cuet.ac.bd/",
      org: "CUET",
      desc: "Pursuing **M.Eng. in Computer Science and Engineering** (part-time) at Chittagong University of Engineering & Technology.",
    },
    {
      date: "Aug 2021 - Dec 2025",
      title: "B.Sc. Degree",
      link: "https://www.iiuc.ac.bd/",
      org: "IIUC",
      desc: "Completed **B.Sc. in Computer Science and Engineering** at International Islamic University Chittagong. Thesis: **A Hybrid CNN-BiGRU Approach for Bangla Audio Deepfake Detection**.",
    },
  ];
  const achievements = [
    {
      date: "Feb 2026",
      title: "Web Dev Intern Certificate",
      org: "UIAS & UAN",
      workplace: "Online",
      desc: "Received a certificate for the **Web Developer internship** at the Universal Institute for Advanced Studies (UIAS).",
    },
    {
      date: "Feb 2024, Jul 2025",
      title: "The Best Mentor Award",
      org: "IIUCCPS",
      workplace: "Offline",
      desc: "Awarded for contributions as a mentor in the **IIUCCPS Bootcamp Program**.",
    },
    {
      date: "May 2025",
      title: "Ostad Courses Certificate",
      org: "Ostad",
      workplace: "Online",
      desc: 'Certificate for courses: **"Webflow Crash Course"** and **"JavaScript Workshop for Absolute Beginners"**.',
    },
    {
      date: "Mar 2025",
      title: "Road to FAANG Seminar",
      org: "IIUCCPS",
      workplace: "Offline",
      desc: 'Certificate of participation for the seminar **"Road to FAANG Companies"**, organized by the IIUC Competitive Programming Society at the IIUC Central Auditorium.',
    },
    {
      date: "2021, 2022, 2023, 2024",
      title: "Certificate of Achievement",
      org: "ICPC",
      workplace: "Online",
      desc: "Awarded for achievements in the **International Collegiate Programming Contest**.",
    },
    {
      date: "Sep 2024",
      title: "Participation Certificate",
      org: "NASA",
      workplace: "Online",
      desc: "Participated in the **NASA International Space Apps Challenge 2024**.",
    },
    {
      date: "Feb 2024",
      title: "Trainer Certificate",
      org: "IIUCCPS",
      workplace: "Offline",
      desc: "Received a certificate recognizing my role as a trainer at **IIUCCPS Bootcamp Program Autumn 2023**.",
    },
    {
      date: "Jan 2024",
      title: "PU CSE IT FEST Certificate",
      org: "PU",
      workplace: "Offline",
      desc: "Certificate of participation for the Programming Contest at **PU-CSE IT FEST 2024**, organized by the Department of CSE, Premier University.",
    },
    {
      date: "Feb 2023",
      title: "Hult Prize Certificate",
      org: "Hult Prize",
      workplace: "Offline",
      desc: "Participated as a competitor (Innovators) in the **Hult Prize** at International Islamic University Chittagong.",
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
        <div className="pill-group">
          <button
            className={`pill-btn ${activeTab === "jobs" ? "active" : ""}`}
            onClick={() => setActiveTab("jobs")}
          >
            💼 Jobs
          </button>
          <button
            className={`pill-btn ${activeTab === "academic" ? "active" : ""}`}
            onClick={() => setActiveTab("academic")}
          >
            👨🏻‍🎓 Academic Roles
          </button>
          <button
            className={`pill-btn ${activeTab === "programming" ? "active" : ""}`}
            onClick={() => setActiveTab("programming")}
          >
            🏆 Programming
          </button>
          <button
            className={`pill-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            🎓 Education
          </button>
          <button
            className={`pill-btn ${activeTab === "achievements" ? "active" : ""}`}
            onClick={() => setActiveTab("achievements")}
          >
            🏅 Awards & Certs
          </button>
        </div>
        <div className="gridedu" key={activeTab}>
          {activeTab === "jobs" &&
            job.map((item) => (
              <Cards key={item.title} item={item} animateGrid type="job" />
            ))}
          {activeTab === "academic" &&
            academic.map((item) => (
              <Cards key={item.title} item={item} animateGrid type="academic" />
            ))}
          {activeTab === "programming" &&
            programming.map((item) => (
              <Cards key={item.title} item={item} animateGrid type="programming" />
            ))}
          {activeTab === "education" &&
            education.map((item) => (
              <Cards key={item.title} item={item} animateGrid type="education" />
            ))}
          {activeTab === "achievements" &&
            achievements.map((item) => (
              <Cards key={item.title} item={item} animateGrid type="programming" />
            ))}
        </div>

        <div id="Skills">
          <h4 className="resume-subtitle">My Skills 👩‍💻</h4>
          <Skills />
        </div>

        <div id="Coding">
          <h4 className="resume-subtitle">Coding Profiles 🎯</h4>
          <Coding />
        </div>
      </div>
    </section>
  );
};

export default Resume;

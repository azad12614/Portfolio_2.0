import React from "react";
import "./Resume.css";
import Skills from "../components/Skills";

const Resume = () => {
  return (
    <section className="resume" id="Resume">
      <h2 className="header">📊 RESUME</h2>
      <p className="title">
        "Passionate about solving real-world problems through code,
        collaboration, and continuous learning."
      </p>

      <h4>CODING PROFILES 🎯</h4>
      <div className="gridinfo">
        {[
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
        ].map((item) => (
          <div className="gridi">
            <h4>
              <a href={item.link} target="_blank">
                {item.name}
              </a>
            </h4>
            <div className="info_title">
              <h3>Rating (MAX)</h3>
              <h3>Rank (MAX)</h3>
              <h3>Problem Solved</h3>
            </div>
            <div className="info_value">
              <h3>{item.rating}</h3>
              <h3>{item.rank}</h3>
              <h3>{item.solve}</h3>
            </div>
          </div>
        ))}
      </div>

      <h4>MY SKILLS 👩‍💻</h4>
      <Skills></Skills>

      <h4>ACADEMIC ENGAGEMENTS 💼</h4>
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
            <p className="details">
              <strong>{item.desc}</strong>
            </p>
          </div>
        ))}
      </div>

      <h4>PROGRAMMING EXPERIENCES 🏆</h4>
      <div className="gridedu">
        <div className="gride">
          <p className="date">JUL 2024</p>
          <p className="tittle">
            <a
              href="https://toph.co/contests/training/rxbqtb6/standings"
              target="_blank"
            >
              Inter University Programming Contest
            </a>
            <span> - CUSS</span>
          </p>
          <p className="details">
            <strong>Ranked 20th (Team - IIUC_ZeroPlan)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Shehabudowlla Rakib</strong> in
            the Divisional Programming Contest organized by the{" "}
            <strong>Chittagong University Scientific Society.</strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">DEC 2024</p>
          <p className="tittle">
            ICPC Preliminary Contest <span>- ICPC</span>
          </p>
          <p className="details">
            <strong>Ranked 288th (Team - IIUC_ZeroPlan)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Shehabudowlla Rakib</strong> in
            the Regional Programming Contest of the{" "}
            <strong>
              International Collegiate Programming Contest (ICPC).
            </strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">MAR 2024</p>
          <p className="tittle">
            NCPC Preliminary Contest <span>- JU</span>
          </p>
          <p className="details">
            <strong>Ranked 241th (Team - IIUC_Groot)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Shehabudowlla Rakib</strong> in
            the Natioal Programming Contest organized by the{" "}
            <strong>Jahangirnagar University.</strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">JAN 2024</p>
          <p className="tittle">
            PU CSE IT FEST <span>- PU</span>
          </p>
          <p className="details">
            <strong>Ranked 30th (Team - IIUC_Groot)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Divisional Programming Contest organized by the{" "}
            <strong>Premier University.</strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">OCT 2023</p>
          <p className="tittle">
            ICPC Preliminary Contest 2023 <span>- ICPC</span>
          </p>
          <p className="details">
            Participated <strong>(Team - IIUC_Groot)</strong> with amazing
            teammate
            <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in the
            Regional Programming Contest of the{" "}
            <strong>
              International Collegiate Programming Contest (ICPC).
            </strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">SEP 2023</p>
          <p className="tittle">
            <a
              href="https://toph.co/c/15th-iiuc-inter-university-2023/standings"
              target="_blank"
            >
              15th Inter University Programming Contest
            </a>
            <span> - IIUC</span>
          </p>
          <p className="details">
            <strong>Ranked 35th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Divisional Programming Contest organized by the{" "}
            <strong>IIUC Computer Club & IIUCCPS.</strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">SEP 2023</p>
          <p className="tittle">
            <a
              href="https://toph.co/contests/training/wf44wz8/standings"
              target="_blank"
            >
              Intra University Programming Contest Aut'23 (Male)
            </a>
            <span> - IIUC</span>
          </p>
          <p className="details">
            <strong>Ranked 19th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Intra University Programming Contest organized by the{" "}
            <strong>International Islamic University Chittagong (IIUC).</strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">MAR 2023</p>
          <p className="tittle">
            ICPC Preliminary Contest 2022 <span>- ICPC</span>
          </p>
          <p className="details">
            <strong>Ranked 801th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Regional Programming Contest of the{" "}
            <strong>
              International Collegiate Programming Contest (ICPC).
            </strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">NOV 2022</p>
          <p className="tittle">
            <a
              href="https://toph.co/contests/training/x2c4mne/standings"
              target="_blank"
            >
              Intra University Programming Contest
            </a>
            <span> - IIUCCPS</span>
          </p>
          <p className="details">
            <strong>Ranked 12th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Intra University Programming Contest of the{" "}
            <strong>
              International Islamic University Chittagong Competitive
              Programming Society.
            </strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">OCT 2022</p>
          <p className="tittle">
            <a
              href="https://toph.co/contests/training/mf23yf4/standings"
              target="_blank"
            >
              Intra University Programming Contest (Junior)
            </a>
            <span> - IIUC</span>
          </p>
          <p className="details">
            <strong>Ranked 4th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Intra University Programming Contest of the{" "}
            <strong>International Islamic University Chittagong (IIUC).</strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">SEP 2022</p>
          <p className="tittle">
            ICPC Preliminary Contest 2021 <span>- ICPC</span>
          </p>
          <p className="details">
            <strong>Ranked 361th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Abrar Yasir</strong> in the
            Regional Programming Contest of the{" "}
            <strong>
              International Collegiate Programming Contest (ICPC).
            </strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">AUG 2022</p>
          <p className="tittle">
            <a
              href="https://toph.co/contests/training/ctjhhnj/standings"
              target="_blank"
            >
              Intra University Programming Contest Aut'22 (Junior/Solo)
            </a>
            <span> - IIUCCPS</span>
          </p>
          <p className="details">
            <strong>Ranked 5th</strong> in the Solo Programming Contest
            organized by the{" "}
            <strong>
              International Islamic University Chittagong Competitive
              Programming Society.
            </strong>
          </p>
        </div>
        <div className="gride">
          <p className="date">AUG 2022</p>
          <p className="tittle">
            CSE FEST Programming Contest (Solo)<span> - IIUC</span>
          </p>
          <p className="details">
            <strong>Ranked 15th</strong> in the CSE FEST Programming Contest
            organized by the <strong>IIUC Computer Club & IIUCCPS.</strong>
          </p>
        </div>
      </div>

      <h4>EDUCATION 🎓</h4>
      <div className="gridedu">
        {[
          {
            date: "Jul 2021 - Jul 2025",
            title: "B.Sc. DEGREE",
            link: "https://www.iiuc.ac.bd/",
            school: "IIUC",
            details:
              "I will get my degree from International Islamic University Chittagong in 2025.",
          },
          {
            date: "Apr 2018 - Apr 2020",
            title: "H.S.C. Exam",
            link: "https://www.idc.w3schoolbd.org/",
            school: "Islamia Degree College",
            details:
              "I registered for the Higher Secondary Certificate Exam at Islamia Degree College.",
          },
          {
            date: "Jan 2015 - Feb 2018",
            title: "J.S.C. & S.S.C. Exam",
            link: "http://www.kascc.edu.bd/",
            school: "Kazem Ali High School",
            details:
              "I took the J.S.C. & S.S.C. Exam from Kazem Ali High School.",
          },
          {
            date: "Jan 2013 - Dec 2014",
            title: "7th Class",
            link: "https://www.facebook.com/Harualchari.h.school/",
            school: "Harualchari High School",
            details:
              "I studied in Harualchari High School from 6th class to 7th class.",
          },
          {
            date: "Jan 2008 - Dec 2012",
            title: "P.S.C.",
            link: "https://www.facebook.com/people/%E0%A6%89%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A7%9F%E0%A6%BE%E0%A6%B2%E0%A6%9B%E0%A7%9C%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%A5%E0%A6%AE%E0%A6%BF%E0%A6%95-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F/100057411851391/",
            school: "North Harualchari Govt. Primary School",
            details:
              "I took the P.S.C. Exam from N.H.G.P. School and studied from 1st class to 5th class.",
          },
        ].map(({ date, title, link, school, details }, index) => (
          <div className="gride" key={index}>
            <p className="date">{date}</p>
            <p className="tittle">
              {title}{" "}
              <span>
                -{" "}
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {school}
                </a>
              </span>
            </p>
            <p className="details">{details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;

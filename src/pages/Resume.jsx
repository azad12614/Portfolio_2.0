import React from "react";
import "./Resume.css";
import Skills from "../components/Skills";

const Resume = () => {
  return (
    <div class="resume" id="Resume">
      <h2 class="header">📊 RESUME</h2>
      <p class="title">“Living, learning, & leveling up one day at a time.”</p>
      <h4>CODING PROFILES 🎯</h4>
      <div class="gridinfo">
        <div class="gridi">
          <h4>
            <a href="https://codeforces.com/profile/azad12614" target="_blank">
              Codeforces
            </a>
          </h4>
          <div class="info_title">
            <h3>Rating (MAX)</h3>
            <h3>Rank (MAX)</h3>
            <h3>Problem Solved</h3>
          </div>
          <div class="info_value">
            <h3>1313</h3>
            <h3>Pupil</h3>
            <h3>1145+</h3>
          </div>
        </div>
        <div class="gridi">
          <h4>
            <a href="https://www.codechef.com/users/azad12614" target="_blank">
              CodeChef
            </a>
          </h4>
          <div class="info_title">
            <h3>Rating (MAX)</h3>
            <h3>Rank (MAX)</h3>
            <h3>Problem Solved</h3>
          </div>
          <div class="info_value">
            <h3>1625</h3>
            <h3>3 Star</h3>
            <h3>100+</h3>
          </div>
        </div>
        <div class="gridi">
          <h4>
            <a href="https://leetcode.com/u/azad12614/" target="_blank">
              Leetcode
            </a>
          </h4>
          <div class="info_title">
            <h3>Rating (MAX)</h3>
            <h3>Rank (MAX)</h3>
            <h3>Problem Solved</h3>
          </div>
          <div class="info_value">
            <h3>1573</h3>
            <h3>Top 27%</h3>
            <h3>90+</h3>
          </div>
        </div>
        <div class="gridi">
          <h4>
            <a href="https://atcoder.jp/users/azad12614" target="_blank">
              Atcoder
            </a>
          </h4>
          <div class="info_title">
            <h3>Rating (MAX)</h3>
            <h3>Rank (MAX)</h3>
            <h3>Problem Solved</h3>
          </div>
          <div class="info_value">
            <h3>316</h3>
            <h3>37K+th</h3>
            <h3>70+</h3>
          </div>
        </div>
      </div>
      <h4>MY SKILLS 👩‍💻</h4>
      <Skills></Skills>
      <h4>ACADEMIC ENGAGEMENTS 💼</h4>
      <div class="gridedu">
        <div class="gride">
          <p class="date">JAN 2025 - PRESENT</p>
          <p class="tittle">
            Bootcamp Co-ordinator <span>- IIUCCPS</span>
          </p>
          <p class="details">
            Serving as a <strong>Bootcamp Co-ordinator</strong> for the
            Competitive Programming Society at{" "}
            <strong>International Islamic University Chittagong.</strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">JUL 2024 - PRESENT</p>
          <p class="tittle">
            Teaching Assistant <span>- IIUC</span>
          </p>
          <p class="details">
            Serving as a <strong>Teaching Assistant</strong> at{" "}
            <strong>International Islamic University Chittagong.</strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">JUL 2023 - JAN 2025</p>
          <p class="tittle">
            MENTOR <span>- IIUCCPS</span>
          </p>
          <p class="details">
            Serving as a <strong>Mentor</strong> for the Competitive Programming
            Society at{" "}
            <strong>International Islamic University Chittagong.</strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">JUL 2023 - DEC 2023</p>
          <p class="tittle">
            TRAINER <span>- IIUCCPS</span>
          </p>
          <p class="details">
            Serving as a <strong>Trainer</strong> for the Competitive
            Programming Society at{" "}
            <strong>International Islamic University Chittagong.</strong>
          </p>
        </div>
      </div>
      <h4>PROGRAMMING EXPERIENCES 🏆</h4>
      <div class="gridedu">
        <div class="gride">
          <p class="date">JUL 2024</p>
          <p class="tittle">
            <a
              href="https://toph.co/contests/training/rxbqtb6/standings"
              target="_blank"
            >
              Inter University Programming Contest
            </a>
            <span> - CUSS</span>
          </p>
          <p class="details">
            <strong>Ranked 20th (Team - IIUC_ZeroPlan)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Shehabudowlla Rakib</strong> in
            the Divisional Programming Contest organized by the{" "}
            <strong>Chittagong University Scientific Society.</strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">DEC 2024</p>
          <p class="tittle">
            ICPC Preliminary Contest <span>- ICPC</span>
          </p>
          <p class="details">
            <strong>Ranked 288th (Team - IIUC_ZeroPlan)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Shehabudowlla Rakib</strong> in
            the Regional Programming Contest of the{" "}
            <strong>
              International Collegiate Programming Contest (ICPC).
            </strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">MAR 2024</p>
          <p class="tittle">
            NCPC Preliminary Contest <span>- JU</span>
          </p>
          <p class="details">
            <strong>Ranked 241th (Team - IIUC_Groot)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Shehabudowlla Rakib</strong> in
            the Natioal Programming Contest organized by the{" "}
            <strong>Jahangirnagar University.</strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">JAN 2024</p>
          <p class="tittle">
            PU CSE IT FEST <span>- PU</span>
          </p>
          <p class="details">
            <strong>Ranked 30th (Team - IIUC_Groot)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Divisional Programming Contest organized by the{" "}
            <strong>Premier University.</strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">OCT 2023</p>
          <p class="tittle">
            ICPC Preliminary Contest 2023 <span>- ICPC</span>
          </p>
          <p class="details">
            Participated <strong>(Team - IIUC_Groot)</strong> with amazing
            teammate
            <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in the
            Regional Programming Contest of the{" "}
            <strong>
              International Collegiate Programming Contest (ICPC).
            </strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">SEP 2023</p>
          <p class="tittle">
            <a
              href="https://toph.co/c/15th-iiuc-inter-university-2023/standings"
              target="_blank"
            >
              15th Inter University Programming Contest
            </a>
            <span> - IIUC</span>
          </p>
          <p class="details">
            <strong>Ranked 35th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Divisional Programming Contest organized by the{" "}
            <strong>IIUC Computer Club & IIUCCPS.</strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">SEP 2023</p>
          <p class="tittle">
            <a
              href="https://toph.co/contests/training/wf44wz8/standings"
              target="_blank"
            >
              Intra University Programming Contest Aut'23 (Male)
            </a>
            <span> - IIUC</span>
          </p>
          <p class="details">
            <strong>Ranked 19th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Intra University Programming Contest organized by the{" "}
            <strong>International Islamic University Chittagong (IIUC).</strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">MAR 2023</p>
          <p class="tittle">
            ICPC Preliminary Contest 2022 <span>- ICPC</span>
          </p>
          <p class="details">
            <strong>Ranked 801th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Regional Programming Contest of the{" "}
            <strong>
              International Collegiate Programming Contest (ICPC).
            </strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">NOV 2022</p>
          <p class="tittle">
            <a
              href="https://toph.co/contests/training/x2c4mne/standings"
              target="_blank"
            >
              Intra University Programming Contest
            </a>
            <span> - IIUCCPS</span>
          </p>
          <p class="details">
            <strong>Ranked 12th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Intra University Programming Contest of the{" "}
            <strong>
              International Islamic University Chittagong Competitive
              Programming Society.
            </strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">OCT 2022</p>
          <p class="tittle">
            <a
              href="https://toph.co/contests/training/mf23yf4/standings"
              target="_blank"
            >
              Intra University Programming Contest (Junior)
            </a>
            <span> - IIUC</span>
          </p>
          <p class="details">
            <strong>Ranked 4th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Baizid Kamrurzaman</strong> in
            the Intra University Programming Contest of the{" "}
            <strong>International Islamic University Chittagong (IIUC).</strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">SEP 2022</p>
          <p class="tittle">
            ICPC Preliminary Contest 2021 <span>- ICPC</span>
          </p>
          <p class="details">
            <strong>Ranked 361th (Team - IIUC_Synthroid)</strong> with amazing
            teammate <strong>Thosifur Rhaman and Abrar Yasir</strong> in the
            Regional Programming Contest of the{" "}
            <strong>
              International Collegiate Programming Contest (ICPC).
            </strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">AUG 2022</p>
          <p class="tittle">
            <a
              href="https://toph.co/contests/training/ctjhhnj/standings"
              target="_blank"
            >
              Intra University Programming Contest Aut'22 (Junior/Solo)
            </a>
            <span> - IIUCCPS</span>
          </p>
          <p class="details">
            <strong>Ranked 5th</strong> in the Solo Programming Contest
            organized by the{" "}
            <strong>
              International Islamic University Chittagong Competitive
              Programming Society.
            </strong>
          </p>
        </div>
        <div class="gride">
          <p class="date">AUG 2022</p>
          <p class="tittle">
            CSE FEST Programming Contest (Solo)<span> - IIUC</span>
          </p>
          <p class="details">
            <strong>Ranked 15th</strong> in the CSE FEST Programming Contest
            organized by the <strong>IIUC Computer Club & IIUCCPS.</strong>
          </p>
        </div>
      </div>
      <h4>EDUCATION 🎓</h4>
      <div class="gridedu">
        <div class="gride">
          <p class="date">Jul 2021 - Jul 2025</p>
          <p class="tittle">
            B.Sc. DEGREE{" "}
            <span>
              - <a href="https://www.iiuc.ac.bd/">IIUC</a>
            </span>
          </p>
          <p class="details">
            I will get my degree from International Islamic University
            Chittagong in 2025.
          </p>
        </div>
        <div class="gride">
          <p class="date">Apr 2018 - Apr 2020</p>
          <p class="tittle">
            H.S.C. Exam{" "}
            <span>
              -{" "}
              <a href="https://www.idc.w3schoolbd.org/">
                Islamia Degree College
              </a>
            </span>
          </p>
          <p class="details">
            I registered for the Higher Secondary Certificate Exam at Islamia
            Degree College.
          </p>
        </div>
        <div class="gride">
          <p class="date">Jan 2015 - Feb 2018</p>
          <p class="tittle">
            J.S.C. & S.S.C. Exam{" "}
            <span>
              - <a href="http://www.kascc.edu.bd/">Kazem Ali High School</a>
            </span>
          </p>
          <p class="details">
            I took the J.S.C. & S.S.C. Exam from Kazem Ali High School.
          </p>
        </div>
        <div class="gride">
          <p class="date">Jan 2013 - Dec 2014</p>
          <p class="tittle">
            7th Class{" "}
            <span>
              -{" "}
              <a href="https://www.facebook.com/Harualchari.h.school/">
                Harualchari High School
              </a>
            </span>
          </p>
          <p class="details">
            I studied in Harualchari High School from 6th class to 7th class.
          </p>
        </div>
        <div class="gride">
          <p class="date">Jan 2008 - Dec 2012</p>
          <p class="tittle">
            P.S.C.{" "}
            <span>
              -{" "}
              <a href="https://www.facebook.com/people/%E0%A6%89%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A7%9F%E0%A6%BE%E0%A6%B2%E0%A6%9B%E0%A7%9C%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%A5%E0%A6%AE%E0%A6%BF%E0%A6%95-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F/100057411851391/">
                North Harualchari Govt. Primary School
              </a>
            </span>
          </p>
          <p class="details">
            I took the P.S.C. Exam from N.H.G.P. School and studied from 1st
            class to 5th class.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;

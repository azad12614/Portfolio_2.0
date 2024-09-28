import React from 'react'
import "./Resume.css"

import c from "../assets/Lang/c.svg"
import cp from "../assets/Lang/cp.svg"
import html from "../assets/Lang/html.svg"
import css from "../assets/Lang/css.svg"
import javascript from "../assets/Lang/javascript.svg"
import mongodb from "../assets/Lang/mongodb.svg"
import express from "../assets/Lang/express.svg"
import react from "../assets/Lang/react.svg"
import node from "../assets/Lang/node.svg"
import python from "../assets/Lang/python.svg"

const Resume = () => {
    return (
        <div class="resume" id="Resume">
            <h2 class="header">RESUME</h2>
            <p class="title">
                “Living, learning, & leveling up one day at a time.”
            </p>
            <h4>Coding Profiles 🎯</h4>
            <div class="gridinfo">
                <div class="gridi">
                    <h4><a href='https://codeforces.com/profile/azad12614' target='_blank'>Codeforces</a></h4>
                    <h3>Rating: 1313(Max)</h3>
                    <h2>Rank: Pupil</h2>
                    <p>
                        1100+ Problem Solves
                    </p>
                </div>
                <div class="gridi">
                    <h4><a href='https://www.codechef.com/users/azad12614' target='_blank'>CodeChef</a></h4>
                    <h3>Rating: 1526(Max)</h3>
                    <h2>Rank: 2 Star(Div 3)</h2>
                    <p>
                        90+ Problem Solves
                    </p>
                </div>
                <div class="gridi">
                    <h4><a href='https://leetcode.com/u/azad12614/' target='_blank'>Leetcode</a></h4>
                    <h3>Rating: 1567(Max)</h3>
                    <h2>Rank: Top 27%</h2>
                    <p>
                        70+ Problem Solves
                    </p>
                </div>
                <div class="gridi">
                    <h4><a href='https://atcoder.jp/users/azad12614' target='_blank'>Atcoder</a></h4>
                    <h3>Rating: 170(Max)</h3>
                    <h2>Rank: 46957th</h2>
                    <p>
                        50+ Problem Solves
                    </p>
                </div>
            </div>
            <h4>MY SKILLS 👩‍💻</h4>
            <div class="gridskills">
                <div class="gridlang">
                    {/* <img alt_text="Python" src="https://github.com/user-attachments/assets/7b411a54-df86-4218-b2eb-abd55264a87c" /> */}
                    <img alt_text="Python" src={python} />
                </div>
                <div class="gridlang">
                    {/* <img alt_text="Node" src="https://github.com/user-attachments/assets/a78d70ab-c4d8-4e46-99d4-595f22cf2a3b" /> */}
                    <img alt_text="Node" src={node} />
                </div>
                <div class="gridlang">
                    {/* <img alt_text="React" src="https://github.com/user-attachments/assets/07bd5999-2590-434a-9862-e21c5d215104" /> */}
                    <img alt_text="React" src={react} />
                </div>
                <div class="gridlang">
                    {/* <img alt_text="Express" src="https://github.com/user-attachments/assets/eadecbbb-3a35-41df-a939-b3dd4ee85ca6" /> */}
                    <img alt_text="Express" src={express} />
                </div>
                <div class="gridlang">
                    {/* <img alt_text="MongoDB" src="https://github.com/user-attachments/assets/94737655-f585-49d8-8ed9-aee058ba1f60" /> */}
                    <img alt_text="MongoDB" src={mongodb} />
                </div>
                <div class="gridlang">
                    {/* <img alt_text="JS" src="https://github.com/user-attachments/assets/4b6957fa-3842-4d77-8dc7-e085a8066b14" /> */}
                    <img alt_text="Javascript" src={javascript} />
                </div>
                <div class="gridlang">
                    {/* <img alt_text="CSS" src="https://github.com/user-attachments/assets/8e831534-e7ca-4fbb-a07a-7312f2491d4c" /> */}
                    <img alt_text="CSS" src={css} />
                </div>
                <div class="gridlang">
                    {/* <img alt_text="HTML" src="https://github.com/user-attachments/assets/d6a86e62-f8bf-48d5-a0e3-9b0e3deafbd1" /> */}
                    <img alt_text="HTML" src={html} />
                </div>
                <div class="gridlang">
                    {/* <img alt_text="C++" src="https://github.com/user-attachments/assets/3c887c96-38b2-479a-9286-ce8c56f084e4" /> */}
                    <img alt_text="C++" src={cp} />
                </div>
                <div class="gridlang">
                    {/* <img alt_text="C" src="https://github.com/user-attachments/assets/3aa3514b-019e-422e-bd8a-c19c637951a1" /> */}
                    <img alt_text="C" src={c} />
                </div>
            </div>
            <h4>EXPERIENCE 🚀</h4>
            <div class="gridedu">
                <div class="gride">
                    <p class="date">2023 - PRESENT</p>
                    <p class="tittle">MENTOR <span>- IIUCCPS</span></p>
                    <p class="details">This is a non-profit competitive programming society of International Islamic University
                        Chittagong.</p>
                </div>
                <div class="gride">
                    <p class="date">JUL 2023 - DEC 2023</p>
                    <p class="tittle">TRAINER <span>- IIUCCPS</span></p>
                    <p class="details">This is a non-profit competitive programming society of International Islamic University
                        Chittagong.</p>
                </div>
                <div class="gride">
                    <p class="date">JUL 2024</p>
                    <p class="tittle">Inter University Programming Contest<span>- CU</span></p>
                    <p class="details">This was a divisional programming contest by Chittagong University Scientific Society.</p>
                </div>
                <div class="gride">
                    <p class="date">JAN 2024</p>
                    <p class="tittle">PU CSE IT FEST<span>- PU</span></p>
                    <p class="details">This was a divisional programming contest by Premier University.</p>
                </div>
                <div class="gride">
                    <p class="date">SEP 2023</p>
                    <p class="tittle">Inter University Programming Contest<span>- IIUC</span></p>
                    <p class="details">This was a divisional programming contest by IIUC Computer Club & IIUCCPS.</p>
                </div>
                <div class="gride">
                    <p class="date">2022</p>
                    <p class="tittle">ICPC Preliminary Contest <span>- ICPC</span></p>
                    <p class="details">This was an international programming contest.</p>
                </div>
                <div class="gride">
                    <p class="date">2021</p>
                    <p class="tittle">ICPC Preliminary Contest <span>- ICPC</span></p>
                    <p class="details">This was an international programming contest.</p>
                </div>
            </div>
            <h4>EDUCATION 🎓</h4>
            <div class="gridedu">
                <div class="gride">
                    <p class="date">Jul 2021 - Jul 2025</p>
                    <p class="tittle">
                        B.Sc. DEGREE <span>- <a href='https://www.iiuc.ac.bd/'>IIUC</a></span>
                    </p>
                    <p class="details">I will get my degree from International Islamic University Chittagong in 2025.</p>
                </div>
                <div class="gride">
                    <p class="date">Apr 2018 - Apr 2020</p>
                    <p class="tittle">
                        H.S.C. Exam <span>- <a href='https://www.idc.w3schoolbd.org/'>Islamia Degree College</a></span>
                    </p>
                    <p class="details">I registered for the Higher Secondary Certificate Exam at Islamia Degree College.</p>
                </div>
                <div class="gride">
                    <p class="date">Jan 2015 - Feb 2018</p>
                    <p class="tittle">
                        J.S.C. & S.S.C. Exam <span>- <a href='http://www.kascc.edu.bd/'>Kazem Ali High School</a></span>
                    </p>
                    <p class="details">I took the J.S.C. & S.S.C. Exam from Kazem Ali High School.</p>
                </div>
                <div class="gride">
                    <p class="date">Jan 2013 - Dec 2014</p>
                    <p class="tittle">
                        7th Class <span>- <a href='https://www.facebook.com/Harualchari.h.school/'>Harualchari High School</a></span>
                    </p>
                    <p class="details">I studied in Harualchari High School from 6th class to 7th class.</p>
                </div>
                <div class="gride">
                    <p class="date">Jan 2008 - Dec 2012</p>
                    <p class="tittle">
                        P.S.C. <span>- <a href='https://www.facebook.com/people/%E0%A6%89%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A7%9F%E0%A6%BE%E0%A6%B2%E0%A6%9B%E0%A7%9C%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%A5%E0%A6%AE%E0%A6%BF%E0%A6%95-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F/100057411851391/'>North Harualchari Govt. Primary School</a></span>
                    </p>
                    <p class="details">I took the P.S.C. Exam from N.H.G.P. School and studied from 1st class to 5th class.</p>
                </div>
            </div>
        </div>
    )
}

export default Resume
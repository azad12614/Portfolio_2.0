import React from 'react'
import "./Project.css"

import Cloud_Campus from "../assets/Cloud_Campus.png";
import Gaming from "../assets/Gaming.png";
import Ladder from "../assets/Ladder.png";
import pic from "../assets/pic.png";
import Portfolio from "../assets/Portfolio.png";
import Rating from "../assets/Rating.png";

const Project = () => {
    return (
        <div class="project" id="Project">
            <h2 class="header">PROJECTS</h2>
            <p class="title">
                “My Projects keep expanding over time to better address even more
                challenges.”
            </p>
            <div class="info">
                <div class="items">
                    <img src={Cloud_Campus} alt="" />
                    <div class="dis">
                        <a href="https://cloud-campus.onrender.com/" target="_blank">Cloud Campus</a>
                        <span>WEBSITE</span>
                        <p>This is a website about the CSE dept. of IIUC.</p>

                    </div>
                </div><div class="items">
                    <img src={Ladder} alt="" />
                    <div class="dis">
                        <a href="https://cf-ladder.onrender.com/" target="_blank">CF Ladder</a>
                        <span>WEBSITE</span>
                        <p>This is a website of Codeforces Problemset.</p>

                    </div>
                </div>
                <div class="items">
                    <img src={Rating} alt="" />
                    <div class="dis">
                        <a href="https://azad12614.github.io/CF_Rating_IIUC/" target="_blank">CF Rating</a>
                        <span>WEBPAGE</span>
                        <p>This is a website on the CSE department students' rating at IIUC in Codeforces.</p>

                    </div>
                </div>
                <div class="items">
                    <img src={Gaming} alt="" />
                    <div class="dis">
                        <a href="https://azad12614.github.io/12614/game.html" target="_blank">Color Match</a>
                        <span>GAME</span>
                        <p>This is my first game project.</p>

                    </div>
                </div>
                <div class="items">
                    <img src={Portfolio} alt="" />
                    <div class="dis">
                        <a href="https://azad12614.github.io/Portfolio/" target="_blank">Portfolio</a>
                        <span>WEBSITE</span>
                        <p>This is my 2nd updated Portfolio Site.</p>

                    </div>
                </div>
                <div class="items">
                    <img src={Portfolio} alt="" />
                    <div class="dis">
                        <a href="https://azad12614.github.io/Portfolio/" target="_blank">Portfolio</a>
                        <span>WEBSITE</span>
                        <p>This is my first updated Portfolio Site.</p>

                    </div>
                </div>
                <div class="items">
                    <img src={pic} alt="" />
                    <div class="dis">
                        <a href="https://azad12614.github.io/islam/" target="_blank">Islam</a>
                        <span>WEBPAGE</span>
                        <p>Islam is a website with info on Islam.</p>

                    </div>
                </div>
                <div class="items">
                    <img src={pic} alt="" />
                    <div class="dis">
                        <a href="https://azad12614.github.io/12614/" target="_blank">Assignment</a>
                        <span>WEBPAGE</span>
                        <p>This is my first web project.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div class="about" id="About">
            <h2 class="header">ABOUT ME</h2>
            <p class="title">
                “Facing challenges with strength, determination and confidence is what
                matters to me.”
            </p>
            <div class="info">
                <div class="highlight">
                    Hi there! I'm Abdullah Al Azad, a Programmer and Web Developer with a strong foundation in computer science fundamentals.
                </div>
                <div class="details">
                    Currently, I'm pursuing a Bachelor of Science in Computer Science Engineering at the International Islamic University Chittagong (IIUC), Bangladesh. My passion for coding extends beyond academics, with a strong proficiency in the MERN stack (MongoDB, Express.js, React.js, and Node.js) and a solid grasp of the web development essentials – HTML, CSS, and JavaScript.
                </div>
                <div class="details">
                    But my interests don't stop there! I'm also well-versed in C++ for competitive programming and Python for delving into the world of machine learning. Platforms like Codeforces and LeetCode have been instrumental in honing my problem-solving skills and algorithmic thinking.
                </div>
                <div class="details">
                    Beyond technical expertise, I'm fluent in both Bangla and English, allowing me to effectively communicate across diverse audiences. When I'm not coding, you'll likely find me diving into exciting new projects.
                </div>
                <div class="details">
                    I've gained hands-on experience building projects using a variety of technologies, including C, C++, HTML, CSS, Javascript, MERN Stack, and Python.  Some of these projects are even available as open-source on GitHub! You can find more details about them in the portfolio section of this website or on my GitHub profile.
                </div>
                <div class="details">
                    I'm eager to leverage my technical skills and creative vision to bring unique online initiatives to life.
                </div>
                <div class="details">
                    Interested in collaborating? To reach me
                    <form action='mailto:azad.jishan2003@gmail.com' method='POST' class='highlight'>
                        <button type="submit" value="Click!" class="pointer">
                            click!
                        </button>
                    </form>
                </div>

                {/* <div class="highlight">
                    I am Abdullah Al Azad, a Programmer and Web Developer with a
                    solid background in the fundamentals of computer science.
                </div>
                <div class="details">
                    I am pursuing a B.Sc. degree in Computer Science Engineering at
                    the International Islamic University Chittagong (IIUC).
                </div>
                <div class="details">
                    I was born in 2003 and raised in Chittagong, Bangladesh. I got my S.S.C. in science from Kazam Ali High School and my H.S.C. in
                    science from Islamia Degree College. Then I was admitted to IIUC(International Islamic University Chittagong).
                </div>
                <div class="details">
                    I'm good at both Bangla and English. I spend most of my leisure time working on good projects. I have hands-on
                    experience working on several projects that use C++, MERN STACK, MySql, HTML,
                    CSS, JS, etc.
                </div>
                <div class="details">
                    Some of my projects were release as open-source on GitHub. You can find
                    more details about my projects in the portfolio section of this website or
                    my Github profile.
                </div>
                <div class="details">
                    I want to apply my technical expertise and creative design abilities to enhance unique online initiatives.
                </div>
                <div class="details">
                    Got an offer for me? To reach me
                    <form action='mailto:azad.jishan2003@gmail.com' method='POST' class='highlight'>
                        <button type="submit" value="Click!" class="pointer">
                            click!
                        </button>
                    </form>
                </div> */}
            </div>
        </div >
    )
}

export default About
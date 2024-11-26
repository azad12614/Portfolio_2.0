import React from 'react';
import "./Skills.css"

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

const Skills = () => {
    return (
        <>
            <div class="skills">
                <div class="lang">
                    {/* <img alt_text="Python" src="https://github.com/user-attachments/assets/7b411a54-df86-4218-b2eb-abd55264a87c" /> */}
                    <img alt_text="Python" src={python} />
                    <h1>Python</h1>
                </div>
                <div class="lang">
                    {/* <img alt_text="Node" src="https://github.com/user-attachments/assets/a78d70ab-c4d8-4e46-99d4-595f22cf2a3b" /> */}
                    <img alt_text="Node" src={node} />
                    <h1>Node JS</h1>
                </div>
                <div class="lang">
                    {/* <img alt_text="React" src="https://github.com/user-attachments/assets/07bd5999-2590-434a-9862-e21c5d215104" /> */}
                    <img alt_text="React" src={react} />
                    <h1>React JS</h1>
                </div>
                <div class="lang">
                    {/* <img alt_text="Express" src="https://github.com/user-attachments/assets/eadecbbb-3a35-41df-a939-b3dd4ee85ca6" /> */}
                    <img alt_text="Express" src={express} />
                    <h1>Express JS</h1>
                </div>
                <div class="lang">
                    {/* <img alt_text="MongoDB" src="https://github.com/user-attachments/assets/94737655-f585-49d8-8ed9-aee058ba1f60" /> */}
                    <img alt_text="MongoDB" src={mongodb} />
                    <h1>MongoDB</h1>
                </div>
                <div class="lang">
                    {/* <img alt_text="JS" src="https://github.com/user-attachments/assets/4b6957fa-3842-4d77-8dc7-e085a8066b14" /> */}
                    <img alt_text="Javascript" src={javascript} />
                    <h1>Javascript</h1>
                </div>
                <div class="lang">
                    {/* <img alt_text="CSS" src="https://github.com/user-attachments/assets/8e831534-e7ca-4fbb-a07a-7312f2491d4c" /> */}
                    <img alt_text="CSS" src={css} />
                    <h1>CSS</h1>
                </div>
                <div class="lang">
                    {/* <img alt_text="HTML" src="https://github.com/user-attachments/assets/d6a86e62-f8bf-48d5-a0e3-9b0e3deafbd1" /> */}
                    <img alt_text="HTML" src={html} />
                    <h1>HTML</h1>
                </div>
                <div class="lang">
                    {/* <img alt_text="C++" src="https://github.com/user-attachments/assets/3c887c96-38b2-479a-9286-ce8c56f084e4" /> */}
                    <img alt_text="C++" src={cp} />
                    <h1>C++</h1>
                </div>
                <div class="lang">
                    {/* <img alt_text="C" src="https://github.com/user-attachments/assets/3aa3514b-019e-422e-bd8a-c19c637951a1" /> */}
                    <img alt_text="C" src={c} />
                    <h1>C</h1>
                </div>
            </div>
            <div className="tools">
                {/* Frontend Technologies

                HTML (HyperText Markup Language): The backbone of web pages, defining the structure and content.
                CSS (Cascading Style Sheets): Used to style HTML elements, controlling layout, colors, fonts, and more.
                JavaScript (JS): A versatile scripting language for adding interactivity, dynamic behavior, and complex functionalities to web pages.

                Frameworks and Libraries:
                React: A popular JavaScript library for building user interfaces.
                Vue.js: A progressive JavaScript framework for building user interfaces.

                Backend Technologies

                Server-Side Programming Languages:
                Node.js: A JavaScript runtime environment for building server-side applications.
                Python: A versatile language used for backend development, data science, and machine learning.

                Frameworks and Libraries:
                Express.js: A minimalist Node.js framework for building web applications.

                Databases:
                MySQL: A popular open-source relational database management system.
                MongoDB: A popular NoSQL database for flexible data storage.

                Web Development Tools
                Version Control: Git

                Competitive Programming Languages
                C++: A powerful language for system programming and competitive coding.

                Machine Learning Languages
                Python: The most popular language for machine learning, with libraries like TensorFlow, PyTorch, and Scikit-learn. */}
            </div>
        </>
    )
}

export default Skills
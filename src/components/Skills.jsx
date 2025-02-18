import React from "react";
import "./Skills.css";

import c from "../assets/Lang/c.svg";
import cp from "../assets/Lang/cp.svg";
import html from "../assets/Lang/html.svg";
import css from "../assets/Lang/css.svg";
import javascript from "../assets/Lang/javascript.svg";
import mongodb from "../assets/Lang/mongodb.svg";
import express from "../assets/Lang/express.svg";
import react from "../assets/Lang/react.svg";
import node from "../assets/Lang/node.svg";
import python from "../assets/Lang/python.svg";
import next from "../assets/Lang/next.svg";
import git from "../assets/Lang/git.svg";

const Skills = () => {
  const skillsData = [
    // { name: "Next JS", image: next },
    { name: "Git", image: git },
    { name: "Python", image: python },
    { name: "Node JS", image: node },
    { name: "React JS", image: react },
    { name: "Express JS", image: express },
    { name: "MongoDB", image: mongodb },
    { name: "Javascript", image: javascript },
    { name: "CSS", image: css },
    { name: "HTML", image: html },
    { name: "C++", image: cp },
    { name: "C", image: c },
  ];
  return (
    <>
      <div class="skills">
        {skillsData.map((skill, index) => (
          <div class="lang">
            <img src={skill.image} alt={skill.name} />
            <h1>{skill.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

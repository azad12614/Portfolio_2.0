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
import github from "../assets/Social/Github.png";
import sql from "../assets/Lang/sql.svg";

const Skills = () => {
  const skillsData = [
    { name: "C", image: c, order: 0 },
    { name: "C++", image: cp, order: 1 },
    { name: "HTML", image: html, order: 2 },
    { name: "CSS", image: css, order: 3 },
    { name: "Javascript", image: javascript, order: 4 },
    { name: "MongoDB", image: mongodb, order: 5 },
    { name: "Express JS", image: express, order: 6 },
    { name: "React JS", image: react, order: 7 },
    { name: "Node JS", image: node, order: 8 },
    { name: "Next JS", image: next, order: 9 },
    { name: "Python", image: python, order: 10 },
    { name: "SQL", image: sql, order: 11 },
    { name: "Git", image: git, order: 12 },
    { name: "Github", image: github, order: 13 },
  ];
  return (
    <>
      <div className="skills">
        {skillsData.map((skill, index) => (
          <div className="lang" key={index} style={{ "--order": skill.order }}>
            <img loading="lazy" src={skill.image} alt={skill.name} />
            <h1>{skill.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

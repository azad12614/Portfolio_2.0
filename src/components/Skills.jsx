import React, { useState, useEffect } from "react";
import "./Skills.css";

import c from "../assets/Lang/c.svg";
import cp from "../assets/Lang/cp.svg";
import html from "../assets/Lang/html.svg";
import css from "../assets/Lang/css.svg";
import tailwind from "../assets/Lang/tailwind.svg";
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
import typescript from "../assets/Lang/typescript.svg";
import api from "../assets/Lang/api.svg";
import jwt from "../assets/Lang/jwt.svg";
import prisma from "../assets/Lang/prisma.svg";
import vite from "../assets/Lang/vite.svg";
import docker from "../assets/Lang/docker.svg";

const Skills = () => {
  const skillsData = [
    { name: "C", image: c, order: 0, color: "#6fa9e7" },
    { name: "C++", image: cp, order: 1, color: "#1d4d80" },
    { name: "HTML", image: html, order: 2, color: "#fa572a" },
    { name: "CSS", image: css, order: 3, color: "#1e7ecd" },
    { name: "Javascript", image: javascript, order: 4, color: "#ffde37" },
    { name: "MongoDB", image: mongodb, order: 5, color: "#62a53b" },
    { name: "Express JS", image: express, order: 6, color: "#70859d" },
    { name: "React JS", image: react, order: 7, color: "#6bf0ff" },
    { name: "Node JS", image: node, order: 8, color: "#62b74c" },
    { name: "Next JS", image: next, order: 9, color: "#ffffff" },
    { name: "Typescript", image: typescript, order: 10, color: "#3496da" },
    { name: "Tailwind CSS", image: tailwind, order: 11, color: "#20c4c7" },
    { name: "Prisma", image: prisma, order: 12, color: "#0f3c57" },
    { name: "Python", image: python, order: 13, color: "#ffea4c" },
    { name: "SQL", image: sql, order: 14, color: "#5485de" },
    { name: "Git", image: git, order: 15, color: "#ff5820" },
    { name: "Github", image: github, order: 16, color: "#646664" },
    { name: "Vite", image: vite, order: 17, color: "#9982ff" },
    { name: "Rest Api", image: api, order: 18, color: "#ffffff" },
    { name: "JWT", image: jwt, order: 19, color: "#c942e6" },
    { name: "Docker", image: docker, order: 20, color: "#009fc8" },
  ];

  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    setAnimateSkills(false);
    setTimeout(() => setAnimateSkills(true), 50);
  }, []);

  return (
    <div className="skills">
      {skillsData.map((skill, index) => (
        <div
          className={`lang ${animateSkills ? "animate-on-load" : ""}`}
          key={index}
          style={{ "--order": skill.order, "--skill-color": skill.color }}
        >
          <img loading="lazy" src={skill.image} alt={skill.name} />
          <h1>{skill.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Skills;

import { useEffect, useState } from "react";
import "./Skills.css";

import betterauth from "../assets/Lang/betterauth.svg";
import bun from "../assets/Lang/bun.svg";
import c from "../assets/Lang/c.svg";
import cp from "../assets/Lang/cp.svg";
import css from "../assets/Lang/css.svg";
import eslint from "../assets/Lang/eslint.svg";
import express from "../assets/Lang/express.svg";
import firebase from "../assets/Lang/firebase.svg";
import git from "../assets/Lang/git.svg";
import hono from "../assets/Lang/hono.svg";
import html from "../assets/Lang/html.svg";
import husky from "../assets/Lang/husky.png";
import javascript from "../assets/Lang/javascript.svg";
import jotai from "../assets/Lang/jotai.png";
import jwt from "../assets/Lang/jwt.svg";
import mongodb from "../assets/Lang/mongodb.svg";
import node from "../assets/Lang/node.svg";
import orpc from "../assets/Lang/orpc.png";
import restapi from "../assets/Lang/api.svg";
import prettier from "../assets/Lang/prettier.svg";
import react from "../assets/Lang/react.svg";
import sql from "../assets/Lang/sql.svg";
import tailwind from "../assets/Lang/tailwind.svg";
import tanstack from "../assets/Lang/tanstack.svg";
import typescript from "../assets/Lang/typescript.svg";
import vite from "../assets/Lang/vite.svg";
import zod from "../assets/Lang/zod.svg";
import github from "../assets/Social/Github.png";

const Skills = () => {
  const skillsData = [
    // Languages
    { name: "C", image: c, order: 0, color: "#5c85d6" },
    { name: "C++", image: cp, order: 1, color: "#1d4d80" },
    { name: "HTML", image: html, order: 2, color: "#e44d26" },
    { name: "CSS", image: css, order: 3, color: "#264de4" },
    { name: "Tailwind", image: tailwind, order: 4, color: "#38bdf8" },
    { name: "JavaScript", image: javascript, order: 5, color: "#ffde37" },
    { name: "TypeScript", image: typescript, order: 6, color: "#3496da" },

    // Frontend
    { name: "React", image: react, order: 7, color: "#6bf0ff" },
    { name: "TanStack", image: tanstack, order: 8, color: "#22c55e" },
    { name: "Vite", image: vite, order: 9, color: "#646cff" },

    // Backend
    { name: "Node.js", image: node, order: 10, color: "#62b74c" },
    { name: "Express", image: express, order: 11, color: "#70859d" },
    { name: "Hono", image: hono, order: 12, color: "#ff6b00" },
    { name: "Bun", image: bun, order: 13, color: "#f8f0e3" },
    { name: "ORPC", image: orpc, order: 14, color: "#ffffff" },
    { name: "REST API", image: restapi, order: 15, color: "#6ab04c" },

    // Database
    { name: "MongoDB", image: mongodb, order: 16, color: "#62a53b" },
    { name: "SQL", image: sql, order: 17, color: "#5485de" },

    // Auth
    { name: "Firebase", image: firebase, order: 18, color: "#ffca28" },
    { name: "Better Auth", image: betterauth, order: 19, color: "#ffffff" },
    { name: "JWT", image: jwt, order: 20, color: "#d63aff" },

    // State & Validation
    { name: "Jotai", image: jotai, order: 21, color: "#ffffff" },
    { name: "Zod", image: zod, order: 22, color: "#3066b4" },

    // DevOps & Tools
    { name: "Git", image: git, order: 23, color: "#ff5820" },
    { name: "GitHub", image: github, order: 24, color: "#646664" },
    { name: "ESLint", image: eslint, order: 25, color: "#4b32c3" },
    { name: "Prettier", image: prettier, order: 26, color: "#f7b93e" },
    { name: "Husky", image: husky, order: 27, color: "#4a4a4a" },
  ];

  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    setAnimateSkills(false);
    const id = setTimeout(() => setAnimateSkills(true), 50);
    return () => clearTimeout(id);
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

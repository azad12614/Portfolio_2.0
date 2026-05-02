import "./Skills.css";

import betterauth from "../assets/Lang/betterauth.svg";
import bun from "../assets/Lang/bun.svg";
import c from "../assets/Lang/c.svg";
import cp from "../assets/Lang/cp.svg";
import css from "../assets/Lang/css.svg";
import drizzle from "../assets/Lang/drizzle.svg";
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
import rpc from "../assets/Lang/rpc.svg";
import docker from "../assets/Lang/docker.svg";
import postgresql from "../assets/Lang/postgresql.svg";
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

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "C", image: c, color: "#5c85d6" },
      { name: "C++", image: cp, color: "#1d4d80" },
      { name: "HTML", image: html, color: "#e44d26" },
      { name: "CSS", image: css, color: "#264de4" },
      { name: "Tailwind", image: tailwind, color: "#38bdf8" },
      { name: "JavaScript", image: javascript, color: "#ffde37" },
      { name: "TypeScript", image: typescript, color: "#3496da" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", image: react, color: "#6bf0ff" },
      { name: "TanStack", image: tanstack, color: "#22c55e" },
      { name: "Vite", image: vite, color: "#646cff" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", image: node, color: "#62b74c" },
      { name: "Express", image: express, color: "#70859d" },
      { name: "Hono", image: hono, color: "#ff6b00" },
      { name: "Bun", image: bun, color: "#f8f0e3" },
      { name: "RPC", image: rpc, color: "#ffffff" },
      { name: "REST API", image: restapi, color: "#6ab04c" },
      { name: "Docker", image: docker, color: "#2496ed" },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MongoDB", image: mongodb, color: "#62a53b" },
      { name: "PostgreSQL", image: postgresql, color: "#336791" },
      { name: "MySQL", image: sql, color: "#5485de" },
      { name: "Drizzle ORM", image: drizzle, color: "#c5f74f" },
    ],
  },
  {
    label: "Auth & State",
    skills: [
      { name: "Firebase", image: firebase, color: "#ffca28" },
      { name: "Better Auth", image: betterauth, color: "#ffffff" },
      { name: "JWT", image: jwt, color: "#d63aff" },
      { name: "Jotai", image: jotai, color: "#ffffff" },
      { name: "Zod", image: zod, color: "#3066b4" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", image: git, color: "#ff5820" },
      { name: "GitHub", image: github, color: "#646664" },
      { name: "ESLint", image: eslint, color: "#4b32c3" },
      { name: "Prettier", image: prettier, color: "#f7b93e" },
      { name: "Husky", image: husky, color: "#4a4a4a" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      {skillGroups.map((group) => (
        <div key={group.label} className="skill-group">
          <h3 className="skill-group-label">{group.label}</h3>
          <div className="skills">
            {group.skills.map((skill) => (
              <div
                className="lang"
                key={skill.name}
                style={{ "--skill-color": skill.color }}
              >
                <img loading="lazy" src={skill.image} alt={skill.name} />
                <h1>{skill.name}</h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

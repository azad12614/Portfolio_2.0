import "./Skills.css";

import awssqs from "../assets/Lang/aws_sqs.png";
import betterauth from "../assets/Lang/betterauth.svg";
import bun from "../assets/Lang/bun.svg";
import c from "../assets/Lang/c.svg";
import cp from "../assets/Lang/cp.svg";
import css from "../assets/Lang/css.svg";
import drizzle from "../assets/Lang/drizzle.svg";
import eslint from "../assets/Lang/eslint.svg";
import express from "../assets/Lang/express.svg";
import fastapi from "../assets/Lang/fastapi.svg";
import git from "../assets/Lang/git.png";
import hono from "../assets/Lang/hono.svg";
import html from "../assets/Lang/html.svg";
import javascript from "../assets/Lang/javascript.svg";
import jotai from "../assets/Lang/jotai.png";
import jwt from "../assets/Lang/jwt.png";
import mongodb from "../assets/Lang/mongodb.svg";
import nextjs from "../assets/Lang/nextjs.png";
import node from "../assets/Lang/node.svg";
import playwright from "../assets/Lang/playwright.svg";
import python from "../assets/Lang/python.png";
import rpc from "../assets/Lang/rpc.svg";
import docker from "../assets/Lang/docker.svg";
import postgresql from "../assets/Lang/postgresql.svg";
import restapi from "../assets/Lang/api.svg";
import prettier from "../assets/Lang/prettier.svg";
import react from "../assets/Lang/react.svg";
import sql from "../assets/Lang/sql.svg";
import tailwind from "../assets/Lang/tailwind.png";
import tanstack from "../assets/Lang/tanstack.svg";
import typescript from "../assets/Lang/typescript.png";
import vite from "../assets/Lang/vite.png";
import zod from "../assets/Lang/zod.svg";
import zustand from "../assets/Lang/zustand.png";
import github from "../assets/Social/Github.png";
import postman from "../assets/Lang/postman.png";
import render from "../assets/Lang/render.png";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "C", image: c, color: "#5c85d6" },
      { name: "C++", image: cp, color: "#1d4d80" },
      { name: "JavaScript", image: javascript, color: "#ffde37" },
      { name: "TypeScript", image: typescript, color: "#3496da" },
      { name: "Python", image: python, color: "#4b8bbe" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "HTML", image: html, color: "#e44d26" },
      { name: "CSS", image: css, color: "#264de4" },
      { name: "Tailwind", image: tailwind, color: "#38bdf8" },
      { name: "React", image: react, color: "#6bf0ff" },
      { name: "Next.js", image: nextjs, color: "#ffffff" },
      { name: "TanStack", image: tanstack, color: "#22c55e" },
      { name: "Jotai", image: jotai, color: "#ffffff" },
      { name: "Zustand", image: zustand, color: "#b5835a" },
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
      { name: "FastAPI", image: fastapi, color: "#009688" },
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
    label: "Auth & Security",
    skills: [
      { name: "Better Auth", image: betterauth, color: "#ffffff" },
      { name: "JWT", image: jwt, color: "#d63aff" },
      { name: "Zod", image: zod, color: "#3066b4" },
    ],
  },
  {
    label: "Tools & DevOps",
    skills: [
      { name: "Git", image: git, color: "#ff5820" },
      { name: "GitHub", image: github, color: "#646664" },
      { name: "Docker", image: docker, color: "#2496ed" },
      { name: "AWS SQS", image: awssqs, color: "#ff9900" },
      { name: "Postman", image: postman, color: "#ff6c37" },
      { name: "Render", image: render, color: "#46e3b7" },
      { name: "ESLint", image: eslint, color: "#4b32c3" },
      { name: "Prettier", image: prettier, color: "#f7b93e" },
      { name: "Playwright", image: playwright, color: "#2ead33" },
    ],
  },
  {
    label: "Others",
    chips: [
      "Data Structures & Algorithms",
      "OOP",
      "SQA",
      "Open Source Contribution",
      "Machine Learning",
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      {skillGroups.map((group) => (
        <div key={group.label} className="skill-group">
          <h3 className="skill-group-label">{group.label}</h3>
          {group.chips ? (
            <div className="skill-chips">
              {group.chips.map((chip) => (
                <span className="skill-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          ) : (
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
          )}
        </div>
      ))}
    </div>
  );
};

export default Skills;

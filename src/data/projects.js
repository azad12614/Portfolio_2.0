import ayahRtc from "../assets/Projects/Ayah_RTC.webp";
import cloudCampus from "../assets/Projects/Cloud_Campus.png";
import ghorBazar from "../assets/Projects/GhorBazar.webp";
import ladder from "../assets/Projects/Ladder.png";
import mtAcademy from "../assets/Projects/MTAcademy.webp";
import nasa from "../assets/Projects/NASA.jpeg";
import ticketPipeline from "../assets/Projects/Ticket_Pipeline.webp";

// The 7 project cards, in page order. `keyDecision` is the case study's first point.
export const projects = [
  {
    title: "MTAcademy",
    image: mtAcademy,
    category: "Full stack",
    kind: "Client",
    summary: "A production SaaS platform for corporate training sales, memberships, and quote requests.",
    keyDecision: "Certificate and PDF generation.",
    more: [
      "Fixed admin search and access-control gaps.",
      "Added Playwright end-to-end coverage for the main flows.",
      "Private repository: client work under contract.",
    ],
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Stripe", "Playwright"],
    live: "https://mtacademy.au/",
  },
  {
    title: "Ticket Pipeline",
    image: ticketPipeline,
    category: "Backend",
    kind: "Solo",
    summary: "An async, AI-powered support ticket pipeline with two AI phases: triage, then a draft reply.",
    keyDecision: "A queue-based worker on SQS, so the API never waits on the AI.",
    more: [
      "Retry per phase with exponential backoff, and a dead-letter queue for failures.",
      "Real-time updates through PostgreSQL LISTEN/NOTIFY and Socket.io.",
      "Request validation with Zod, everything in Docker.",
    ],
    tech: ["Node.js", "TypeScript", "Express 5", "PostgreSQL", "SQS", "Socket.io", "Zod"],
    source: "https://github.com/azad12614/Ticket_Pipeline",
  },
  {
    title: "Cloud Campus",
    image: cloudCampus,
    category: "Full stack",
    kind: "Team",
    summary: "An academic portal for the IIUC CSE department with dynamic course data.",
    keyDecision: "Built with an Agile process in a 3-member team.",
    more: ["REST API for course data.", "A modern design for department content."],
    tech: ["MongoDB", "Express", "React", "Node.js", "REST"],
    live: "https://cloud-campus.onrender.com/",
    source: "https://github.com/azad12614/Cloud_Campus",
  },
  {
    title: "GhorBazar",
    image: ghorBazar,
    category: "Full stack",
    kind: "Team",
    summary: "A building-materials marketplace for Bangladesh, linking buyers with verified vendors.",
    keyDecision: "Type-safe from database to UI with Drizzle, Hono RPC, and TanStack Start.",
    more: [
      "Authentication with Better Auth.",
      "Built as a team during MB52 training.",
      "Runs on Bun, with PostgreSQL in Docker.",
    ],
    tech: ["TanStack Start", "Hono", "Bun", "Drizzle ORM", "PostgreSQL", "Docker"],
    source: "https://github.com/azad12614/GhorBazar",
  },
  {
    title: "Ayah RTC",
    image: ayahRtc,
    category: "Frontend",
    kind: "Volunteer",
    summary:
      "The website of AYAH Research & Training Center, an education and research organization. In progress.",
    keyDecision: "One static build serves Bangla, English and Arabic, with full right-to-left layout for Arabic.",
    more: [
      "Light and dark themes.",
      "Phase 1 (landing page and Coming Soon pages) built solo, in a team of three developers and a lead.",
      "Planned next, not built yet: Next.js with Payload CMS on Cloudflare.",
    ],
    tech: ["HTML", "CSS", "TypeScript", "Bun", "Netlify", "i18n + RTL"],
    live: "https://ayahrtc.org/",
  },
  {
    title: "CF Ladder",
    image: ladder,
    category: "Full stack",
    kind: "Personal",
    summary: "A Codeforces training platform used by 100+ bootcamp students.",
    keyDecision: "Cut mentors' manual progress tracking by about 80%.",
    more: [
      "Admin controls to manage problem sets.",
      "Real-time progress tracking for each student.",
      "JWT authentication.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    live: "https://cf-ladder.onrender.com/",
    source: "https://github.com/azad12614/Ladder",
  },
  {
    title: "Learn4Climate",
    image: nasa,
    category: "Frontend",
    kind: "Team",
    summary: "A climate education platform built for the NASA International Space Apps Challenge.",
    keyDecision: "Built under hackathon time limits as a team.",
    more: [
      "Climate learning content for students.",
      "React frontend built with Vite, Tailwind CSS and daisyUI.",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "daisyUI"],
    live: "https://learn4climate.onrender.com/",
    source: "https://github.com/azad12614/NASA",
  },
];

// Smaller builds, one row each
export const archive = [
  {
    title: "Portfolio",
    summary: "This site. React, Vite.",
    live: "https://azad12614.me/",
    source: "https://github.com/azad12614/Portfolio_2.0/",
  },
  {
    title: "Task Tracker",
    summary: "A MERN task manager with a JWT-secured REST API.",
    live: "https://tasktracker12614.onrender.com/",
    source: "https://github.com/azad12614/TaskTracker",
  },
  {
    title: "Hacker News",
    summary: "A clone in vanilla TypeScript with paginated feeds.",
    source: "https://github.com/azad12614/HackerNews",
  },
  {
    title: "7GUIs",
    summary: "The 7GUIs benchmark in three React styles, including Jotai.",
    source: "https://github.com/azad12614/7GUIS",
  },
  {
    title: "VibeCast",
    summary: "A single-page app to discover trending movies and games.",
    live: "https://vibecast-entertainment.onrender.com/",
    source: "https://github.com/azad12614/Vibecast",
  },
  {
    title: "AV Global Path",
    summary: "A website for an international brokerage firm.",
    live: "https://azad12614.github.io/av-global-path/",
    source: "https://github.com/azad12614/av-global-path",
  },
  {
    title: "FlyHigh",
    summary: "A water-themed travel agency site.",
    live: "https://azad12614.github.io/FlyHigh/",
    source: "https://github.com/azad12614/FlyHigh",
  },
  {
    title: "Sleepy Heads",
    summary: "Sleep health prediction with machine learning. Team project.",
    source: "https://github.com/azad12614/SleepyHeads",
  },
  {
    title: "CF Rating",
    summary: "A Codeforces rating leaderboard for IIUC CSE students.",
    live: "https://azad12614.github.io/CF_Rating_IIUC/",
    source: "https://github.com/azad12614/CF_Rating_IIUC",
  },
  {
    title: "Color Picker",
    summary: "A Chrome extension to pick any color from the screen.",
    source: "https://github.com/azad12614/Color_Picker",
  },
];

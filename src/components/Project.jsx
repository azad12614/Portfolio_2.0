import AVGlobalPath from "../assets/Projects/AV_Global_Path.png";
import ClipOut from "../assets/Projects/ClipOut.png";
import Cloud_Campus from "../assets/Projects/Cloud_Campus.png";
import ColorPicker from "../assets/Projects/Color_Picker.png";
import FlyHigh from "../assets/Projects/FlyHigh.png";
import Gaming from "../assets/Projects/Gaming.png";
import InvoiceMaster from "../assets/Projects/Invoice_Master.png";
import Ladder from "../assets/Projects/Ladder.png";
import NASA from "../assets/Projects/NASA.jpeg";
import Portfolio from "../assets/Projects/Portfolio.png";
import Rating from "../assets/Projects/Rating.png";
import Sleepyheads from "../assets/Projects/Sleepyheads.png";
import StartUP from "../assets/Projects/StartUP.png";
import TaskTracker from "../assets/Projects/Task_Tracker.png";
import VibeCast from "../assets/Projects/VibeCast.png";
import "./Project.css";

const Project = () => {
  const ProjectList = [
    {
      imgSrc: Portfolio,
      title: "Portfolio",
      tech: "React JS, Node JS, CSS",
      description:
        "A portfolio that showcases my skills, achievements, and experiences in the software industry.",
      live: "https://azad12614.onrender.com/",
      github: "https://github.com/azad12614/Portfolio_2.0/",
      tag: "Featured",
      team: false,
      category: "Frontend",
    },
    {
      imgSrc: Cloud_Campus,
      title: "Cloud Campus",
      tech: "MERN Stack, REST APIs",
      description:
        "An academic website for the IIUC CSE department featuring modern design and dynamic course data.",
      live: "https://cloud-campus.onrender.com/",
      github: "https://github.com/azad12614/Cloud_Campus",
      tag: "Featured",
      team: true,
      category: "Full Stack",
    },
    {
      imgSrc: Ladder,
      title: "CF Ladder",
      tech: "MERN Stack, REST APIs, JWT, Axios, Mongoose",
      description:
        "A training platform based on Codeforces problem sets with admin controls and user progress tracking.",
      live: "https://cf-ladder.onrender.com/",
      github: "https://github.com/azad12614/Ladder",
      tag: "Featured",
      team: false,
      category: "Full Stack",
    },
    {
      imgSrc: TaskTracker,
      title: "Task Tracker",
      tech: "MERN STACK, REST APIs, JWT, Axios, Mongoose",
      description:
        "TaskTracker is a tool for managing tasks, boosting productivity, and staying on top of your deadlines.",
      live: "https://tasktracker12614.onrender.com/",
      github: "https://github.com/azad12614/TaskTracker",
      tag: "Internship Task",
      team: false,
      category: "Full Stack",
    },
    {
      imgSrc: VibeCast,
      title: "VibeCast",
      tech: "React JS, Node JS, Tailwind CSS, Public Apis",
      description:
        "Vibecast is a modern, single-page application (SPA) designed to help users discover trending movies and popular video games.",
      live: "https://vibecast-entertainment.onrender.com/",
      github: "https://github.com/azad12614/Vibecast",
      tag: "Learning Task",
      team: false,
      category: "Frontend",
    },
    {
      imgSrc: NASA,
      title: "Learn4Climate",
      tech: "React JS, Node JS, CSS",
      description:
        "A climate education platform developed for NASA's International Space Apps Challenge.",
      live: "https://learn4climate.onrender.com/",
      github: "https://github.com/azad12614/NASA",
      tag: "Hackathon Task",
      team: true,
      category: "Frontend",
    },
    {
      imgSrc: Sleepyheads,
      title: "Sleepy Heads",
      tech: "HTML, CSS, Python, ML",
      description:
        "A sleep health prediction tool that analyzes user input to suggest better sleep patterns.",
      live: null,
      github: "https://github.com/azad12614/SleepyHeads",
      tag: "Academic Task",
      team: true,
      category: "Machine Learning",
    },
    {
      imgSrc: FlyHigh,
      title: "FlyHigh",
      tech: "HTML, CSS",
      description:
        "FlyHigh is a water-themed travel agency specializing in curated aquatic escapes.",
      live: "https://azad12614.github.io/FlyHigh/",
      github: "https://github.com/azad12614/FlyHigh",
      tag: "Internship Task",
      team: false,
      category: "Frontend",
    },
    {
      imgSrc: AVGlobalPath,
      title: "AV Global Path",
      tech: "HTML, CSS, JavaScript",
      description:
        "AV Global Path is a global brokerage firm facilitating international trade of commodities and equipment. We connect buyers and suppliers across borders through transparent, efficient trade solutions.",
      live: "https://azad12614.github.io/av-global-path/",
      github: "https://github.com/azad12614/av-global-path",
      tag: "Internship Task",
      team: true,
      category: "Frontend",
    },
    {
      imgSrc: InvoiceMaster,
      title: "Invoice Master",
      tech: "Next.js, TypeScript, TailwindCSS, Prisma, ShadcnUI",
      description:
        "A platform for sending Invoice mail with Mailtrap, along with tracking them.",
      live: null,
      github: "https://github.com/azad12614/InvoiceMaster",
      tag: "Learning Task",
      team: false,
      category: "Full Stack",
    },
    {
      imgSrc: StartUP,
      title: "StartUP",
      tech: "Next.js, TypeScript, TailwindCSS, Sanity",
      description:
        "A blogging platform for submitting and exploring startup ideas with a modern CMS.",
      live: null,
      github: "https://github.com/azad12614/StartUP",
      tag: "Learning Task",
      team: false,
      category: "Frontend",
    },
    {
      imgSrc: Gaming,
      title: "Game Vault",
      tech: "HTML, CSS, JavaScript",
      description:
        "A collection of mini-games built as a beginner-friendly web game project.",
      live: "https://azad12614.github.io/Game-Vault/Index.html",
      github: "https://github.com/azad12614/Game-Vault",
      tag: "Learning Task",
      team: false,
      category: "Frontend",
    },
    {
      imgSrc: Rating,
      title: "CF Rating",
      tech: "HTML, CSS, JavaScript",
      description:
        "A leaderboard showcasing Codeforces ratings of IIUC CSE students.",
      live: "https://azad12614.github.io/CF_Rating_IIUC/",
      github: "https://github.com/azad12614/CF_Rating_IIUC",
      tag: "Learning Task",
      team: false,
      category: "Frontend",
    },
    {
      imgSrc: ClipOut,
      title: "BG-ClipOut",
      tech: "React.js, TailwindCSS, RestAPI",
      description:
        "A simple and intuitive tool for removing image backgrounds with a clean UI.",
      live: null,
      github: "https://github.com/azad12614/BG-ClipOut",
      tag: "Learning Task",
      team: false,
      category: "Frontend",
    },
    {
      imgSrc: ColorPicker,
      title: "Color_Picker",
      tech: "HTML, CSS, JavaScript",
      description:
        "A simple and intuitive Google Extension tool for picking color from screen.",
      live: null,
      github: "https://github.com/azad12614/Color_Picker",
      tag: "Learning Task",
      team: false,
      category: "Frontend",
    },
  ];

  function ProjectCard({
    imgSrc,
    title,
    tech,
    description,
    live,
    github,
    tag,
    team,
    category,
  }) {
    return (
      <div className={`project-card ${tag ? "tag" : ""}`}>
        <div className="card-glow"></div>

        <div className="project-image">
          <img src={imgSrc} alt={title} loading="lazy" />
          <div className="image-overlay">
            <div className="project-links">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                  title="Live Demo"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Live Demo</span>
                </a>
              )}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
                title="View Code"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>View Code</span>
              </a>
            </div>
          </div>
          <div className="tag-badge">{tag}</div>
          {team && <div className="team-badge">Team Work</div>}
        </div>

        <div className="project-content">
          <div className="project-header">
            <div className="category-tag">{category}</div>
            <h3 className="project-title">{title}</h3>
          </div>

          <p className="project-description">{description}</p>

          <div className="tech-stack">
            {tech.split(",").map((t, i) => (
              <span key={i} className="tech-badge">
                {t.trim()}
              </span>
            ))}
          </div>

          <div className="project-footer">
            <div className="project-actions">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Visit Live
                </a>
              )}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="project-section" id="Project">
      <h2 className="header">🚀 PROJECTS</h2>
      <p className="title">
        “My Projects keep expanding over time to better address even more
        challenges.”
      </p>

      <div className="project-grid">
        {ProjectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;

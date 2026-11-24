import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { archive, projects } from "../data/projects";
import { Icon } from "./Icon";
import "./Projects.css";
import SectionHead from "./SectionHead";

// Visit live and Source buttons, shared by the card face and its case-study panel
const ProjectLinks = ({ project }) => (
  <div className="links">
    {project.live && (
      <a className="btn solid" href={project.live} aria-label={`${project.title} live site`}>
        Visit live <Icon name="ext" size={14} />
      </a>
    )}
    {project.source && (
      <a className="btn" href={project.source} aria-label={`${project.title} source code`}>
        Source <Icon name="ext" size={14} />
      </a>
    )}
  </div>
);

// The case study opens on hover (CSS), on keyboard focus (CSS) or with the trigger (tap, Enter).
// Esc or the close button shuts it and returns focus to the trigger.
const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const moreRef = useRef(null);
  const closeRef = useRef(null);
  const panelId = `panel-${index}`;
  // MTAcademy is wide on 2 and 3 columns; the 4th card (GhorBazar) only on 3 columns
  const wide = index === 0 ? " wide-2 wide-3" : index === 3 ? " wide-3" : "";

  const show = () => {
    flushSync(() => setOpen(true)); // the panel must be visible before it can take focus
    closeRef.current.focus();
  };
  const hide = () => {
    setOpen(false);
    moreRef.current.focus();
  };

  return (
    <article
      className={`card glass hoverable${wide}${open ? " open" : ""}`}
      onKeyDown={(e) => e.key === "Escape" && open && hide()}
    >
      <div className="shot">
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        <span className="kinds">
          <span className="kind">{project.category}</span>
          <span className="kind type">{project.kind}</span>
        </span>
      </div>
      <div className="body">
        <h3>{project.title}</h3>
        <p className="one">{project.summary}</p>
        <ul className="chips">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="face-actions">
          <ProjectLinks project={project} />
          <button
            ref={moreRef}
            className="more"
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={show}
          >
            Case study ↑
          </button>
        </div>
      </div>
      <div className="panel" id={panelId} role="region" aria-label={`${project.title} case study`}>
        <button
          ref={closeRef}
          className="icon-btn close"
          type="button"
          aria-label={`Close ${project.title} case study`}
          onClick={hide}
        >
          <Icon name="x" />
        </button>
        <h4>{project.title.toUpperCase()} · CASE STUDY</h4>
        <p>{project.summary}</p>
        <ul>
          <li>{project.keyDecision}</li>
          {project.more.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="proj-h">
      <div className="wrap reveal">
        <SectionHead number="04" label="projects" title="Projects" id="proj-h" />
        <div className="cards">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="archive-head">
          <h3>Archive</h3>
          <span className="mono muted" style={{ fontSize: 13 }}>
            {archive.length} smaller builds
          </span>
        </div>
        <ul className="archive">
          {archive.map((a) => (
            <li key={a.title}>
              <span className="nm">{a.title}</span>
              <span className="ds">{a.summary}</span>
              <span className="lk">
                {a.live && (
                  <a className="icon-btn" href={a.live} aria-label={`${a.title} live site`}>
                    <Icon name="ext" />
                  </a>
                )}
                <a className="icon-btn" href={a.source} aria-label={`${a.title} source code`}>
                  <Icon name="gh" />
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

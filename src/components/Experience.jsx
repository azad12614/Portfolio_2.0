import { experience } from "../data/experience";
import "./Experience.css";
import SectionHead from "./SectionHead";

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="exp-h">
      <div className="wrap reveal">
        <SectionHead number="02" label="experience" title="Experience" id="exp-h" />
        <ol className="timeline">
          {experience.map((item) => (
            <li key={item.title} data-type={item.type}>
              <div className="t-meta">
                <span className={`tag ${item.type}`}>{item.type}</span>
                <span>{item.meta}</span>
              </div>
              <h3>{item.title}</h3>
              <div className="org">{item.org}</div>
              <p className="line">{item.line}</p>
              {item.details && (
                <details>
                  <summary>details</summary>
                  <ul>
                    {item.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

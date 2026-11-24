import { layers } from "../data/skills";
import "./Skills.css";
import SectionHead from "./SectionHead";

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-h">
      <div className="wrap reveal">
        <SectionHead number="03" label="skills" title="Skills" id="skills-h" />
        <div className="stack">
          <dl className="layers">
            {layers.map((layer) => (
              <div className="layer" key={layer.name}>
                <dt>{layer.name}</dt>
                <dd>
                  <ul className="skill-chips">
                    {layer.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Skills;

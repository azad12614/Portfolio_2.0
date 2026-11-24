import "./About.css";
import SectionHead from "./SectionHead";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="wrap reveal">
        <SectionHead number="01" label="about" title="About" id="about-h" />
        <div className="about-grid">
          <p className="story prose">
            I grew up in <abbr title="competitive programming">CP</abbr> and teaching at IIUC: four
            seasons of the ICPC Preliminary Contest, 1400+ problems, and a CP bootcamp where I went
            from trainer to coordinator. Now I ship: a UIAS internship, full-stack builds, and a paid
            client contract. Next, I want to grow as a full-stack engineer. I work remotely but will
            relocate, and I can join right away.
          </p>
          <div className="code glass" aria-label="Availability">
            <div className="code-bar" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <span style={{ marginLeft: 8 }}>availability.ts</span>
            </div>
            {/* Whitespace inside <pre> is part of the layout, so each line is written out */}
            <pre>
              <code>
                <span className="kw">export const</span> availability <span className="p">=</span>{" "}
                <span className="p">{"{"}</span>
                {"\n  "}
                <span className="k">location</span>
                <span className="p">:</span> <span className="s">&quot;Chattogram, Bangladesh&quot;</span>
                <span className="p">,</span>
                {"\n  "}
                <span className="k">relocate</span>
                <span className="p">:</span> <span className="kw">true</span>
                <span className="p">,</span>
                {"\n  "}
                <span className="k">workMode</span>
                <span className="p">:</span> <span className="p">[</span>
                <span className="s">&quot;remote&quot;</span>
                <span className="p">,</span> <span className="s">&quot;onsite&quot;</span>
                <span className="p">],</span>
                {"\n  "}
                <span className="k">notice</span>
                <span className="p">:</span> <span className="s">&quot;immediate&quot;</span>
                <span className="p">,</span>
                {"\n"}
                <span className="p">{"}"}</span> <span className="kw">as const</span>
                <span className="p">;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

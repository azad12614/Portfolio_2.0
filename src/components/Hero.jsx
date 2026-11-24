import portrait from "../assets/Abdullah_Al_Azad.webp";
import { profiles, resumeUrl } from "../data/profile";
import { Icon } from "./Icon";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="badge">
              <i aria-hidden="true"></i>Available for opportunities
            </span>
            <div className="name-row">
              {/* Decorative: the name is right next to it */}
              <img className="avatar" src={portrait} alt="" />
              <h1 id="hero-name">Abdullah Al Azad</h1>
            </div>
            <p className="roles">
              Full-Stack Developer <span>·</span> TypeScript &amp; Modern Web Stack <span>·</span>{" "}
              Competitive Programmer
            </p>
            <p className="lead">
              I build TypeScript products end to end, from Next.js frontends to queue-backed Node and
              FastAPI services. Years of competitive programming shape how I design them.
            </p>
            <div className="cta">
              <a className="btn solid" href="#projects">
                Explore Projects
              </a>
              <a className="btn" href={resumeUrl}>
                View Resume
              </a>
            </div>
          </div>
          <figure className="photo glass">
            <span className="corner c1" aria-hidden="true"></span>
            <span className="corner c2" aria-hidden="true"></span>
            <span className="corner c3" aria-hidden="true"></span>
            <span className="corner c4" aria-hidden="true"></span>
            <img src={portrait} alt="Portrait of Abdullah Al Azad" />
            <figcaption>
              <span>azad.webp</span>
              <span>Chattogram, BD</span>
            </figcaption>
          </figure>
          <div className="socials hero-socials" aria-label="Profiles">
            {profiles.map((p) => (
              <a key={p.icon} className="icon-btn" href={p.href} aria-label={p.label}>
                <Icon name={p.icon} />
              </a>
            ))}
          </div>
        </div>
        <ul className="proof" aria-label="Highlights">
          <li>
            <b>342</b>
            <span>commits on a paid client contract</span>
          </li>
          <li>
            <b>1400+</b>
            <span>problems solved on 4 platforms</span>
          </li>
          <li>
            <b>4×</b>
            <span>
              <abbr title="International Collegiate Programming Contest">ICPC</abbr> Preliminary
              Contest, 2021 to 2024
            </span>
          </li>
          <li>
            <b>2×</b>
            <span>Best Mentor Award, IIUCCPS</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;

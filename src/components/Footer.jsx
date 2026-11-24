import { profiles, sections } from "../data/profile";
import "./Footer.css";
import { Icon } from "./Icon";

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <p className="wordmark" aria-hidden="true">
          azad<span>12614</span>
        </p>
        <div className="foot-row">
          <p>© {new Date().getFullYear()} Abdullah Al Azad</p>
          <nav aria-label="Footer">
            <ul className="foot-links">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="socials">
            {profiles.map((p) => (
              <a key={p.icon} className="icon-btn" href={p.href} aria-label={p.label}>
                <Icon name={p.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

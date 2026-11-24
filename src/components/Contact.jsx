import { useEffect, useRef, useState } from "react";
import { contactRows, email } from "../data/profile";
import "./Contact.css";
import { Icon } from "./Icon";
import SectionHead from "./SectionHead";

const hiringInquiry = `mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - Abdullah Al Azad")}`;

const CopyButton = ({ row, onStatus }) => {
  const [done, setDone] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = () => {
    if (!navigator.clipboard?.writeText) {
      onStatus("Copy is not available in this browser");
      return;
    }
    navigator.clipboard.writeText(row.copy).then(
      () => {
        setDone(true);
        onStatus(`${row.label.toLowerCase()} copied`);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setDone(false), 1400);
      },
      () => onStatus("Copy failed"),
    );
  };

  return (
    <button
      className={done ? "icon-btn copy done" : "icon-btn copy"}
      type="button"
      aria-label={`Copy ${row.label.toLowerCase()}`}
      onClick={copy}
    >
      <Icon name="copy" />
    </button>
  );
};

const Contact = () => {
  const [status, setStatus] = useState("");

  return (
    <section id="contact" aria-labelledby="ct-h">
      <div className="wrap reveal">
        <SectionHead number="08" label="contact" title="Contact" id="ct-h" />
        <div className="contact-grid">
          <div>
            <h3>Let&apos;s build something.</h3>
            <p className="contact-lead muted prose">
              Open to full-stack roles, remote or onsite. I can join right away.
            </p>
            <a className="btn solid" href={hiringInquiry}>
              Send a hiring inquiry
            </a>
          </div>
          <ul className="rows glass" id="rows">
            {contactRows.map((r) => (
              <li key={r.label}>
                <span className="lab">{r.label}</span>
                <a href={r.href}>{r.value}</a>
                <CopyButton row={r} onStatus={setStatus} />
              </li>
            ))}
          </ul>
        </div>
        {/* Screen readers hear the copy result */}
        <p className="sr-only" aria-live="polite">
          {status}
        </p>
      </div>
    </section>
  );
};

export default Contact;

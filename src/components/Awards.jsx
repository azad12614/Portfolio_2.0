import { useRef, useState } from "react";
import { awards, certificates } from "../data/awards";
import "./Awards.css";
import { Icon } from "./Icon";
import SectionHead from "./SectionHead";

// A click opens the image full size in a modal dialog. Esc closes it (native), and focus
// returns to the item that opened it.
const Awards = () => {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const [viewing, setViewing] = useState(null);

  const open = (image, title, trigger) => {
    triggerRef.current = trigger;
    setViewing({ image, title });
    const dialog = dialogRef.current;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else window.open(image, "_blank");
  };

  return (
    <section id="awards" aria-labelledby="aw-h">
      <div className="wrap reveal">
        <SectionHead number="06" label="awards" title="Awards" id="aw-h" />
        <div className="awards">
          {awards.map((a) => (
            <button
              key={a.detail}
              className="award glass hoverable"
              type="button"
              aria-label={`View ${a.title}, ${a.detail} full size`}
              onClick={(e) => open(a.image, `${a.title}, ${a.detail}`, e.currentTarget)}
            >
              <img src={a.image} alt="" loading="lazy" />
              <div className="cap">
                <b>{a.title}</b>
                <span>{a.detail}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="certs-head">CERTIFICATES</div>
        <div className="certs">
          {certificates.map((c) => (
            <button
              key={c.title}
              className="cert glass hoverable"
              type="button"
              aria-label={`View certificate: ${c.title}, full size`}
              onClick={(e) => open(c.image, c.title, e.currentTarget)}
            >
              <img src={c.image} alt="" loading="lazy" />
              <span>{c.title}</span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="viewer"
        aria-labelledby="viewer-title"
        onClose={() => triggerRef.current?.focus()}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
      >
        <div className="v-bar">
          <span id="viewer-title">{viewing?.title}</span>
          <button className="icon-btn" type="button" aria-label="Close" onClick={() => dialogRef.current.close()}>
            <Icon name="x" />
          </button>
        </div>
        {viewing && <img src={viewing.image} alt={viewing.title} />}
      </dialog>
    </section>
  );
};

export default Awards;

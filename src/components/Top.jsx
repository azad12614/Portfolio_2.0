import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import "./Top.css";

// Back to top: shows after the visitor scrolls past the hero
const Top = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a className={show ? "to-top glass show" : "to-top glass"} href="#top" aria-label="Back to top">
      <span className="corner c1" aria-hidden="true"></span>
      <span className="corner c2" aria-hidden="true"></span>
      <span className="corner c3" aria-hidden="true"></span>
      <span className="corner c4" aria-hidden="true"></span>
      <Icon name="up" size={18} />
    </a>
  );
};

export default Top;

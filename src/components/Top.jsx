import React, { useState, useEffect } from "react";
import "./Top.css";

const Top = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust threshold for button visibility
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling
  };
  return (
    <div>
      <button
        onClick={goTop}
        id="Btn-top"
        title="Go to top"
        style={{ display: showButton ? "block" : "none" }}
      >
        <span class="material-symbols-outlined">stat_3</span>
      </button>
    </div>
  );
};

export default Top;

import React, { useEffect, useState } from "react";
import "../App.css";

// --- Helper Functions to Safely Interact with localStorage ---

// Tries to safely read from localStorage, defaults to null on error
const getSafeStorage = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    console.warn("SecurityError: Failed to read localStorage.", e);
    return null;
  }
};

// Tries to safely write to localStorage, logs warning on error
const setSafeStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    console.warn("SecurityError: Failed to write to localStorage.", e);
  }
};

// --- DarkMode Component ---

const DarkMode = () => {
  // Use state to manage the theme and initial checked status
  const [isLightMode, setIsLightMode] = useState(false);

  // Set the theme attribute on the body and safely store the preference
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setSafeStorage("theme", "dark");
    setIsLightMode(false);
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setSafeStorage("theme", "light");
    setIsLightMode(true);
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setLightMode();
    else setDarkMode();
  };

  // 1. Initial theme load (useEffect handles the saved theme)
  useEffect(() => {
    const savedTheme = getSafeStorage("theme");

    // Default to 'light' if no theme is saved or if storage failed
    const themeToApply = savedTheme || "light";

    document.querySelector("body").setAttribute("data-theme", themeToApply);

    // Set the initial checkbox state based on the applied theme
    setIsLightMode(themeToApply === "light");
  }, []); // Run only once on mount

  return (
    <div className="h-10 w-10 p-1 rounded-full drop-shadow pointer">
      <label className="swap swap-rotate" aria-label="Toggle theme">
        <input
          type="checkbox"
          className="theme-controller"
          value="synthwave"
          onChange={toggleTheme}
          // 2. Initial checkbox state is now handled by component state
          checked={isLightMode}
          readOnly // Use readOnly since state (checked) controls the input
        />
        {/* SVG icons */}
        <svg
          className="swap-on fill-current w-8 h-8 text-[#000]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
        <svg
          className="swap-off fill-current w-8 h-8 text-[#fff]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
      </label>
    </div>
  );
};

export default DarkMode;

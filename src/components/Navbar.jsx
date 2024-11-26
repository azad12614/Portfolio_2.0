import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkMode from "./DarkMode.jsx";
import "./Navbar.css";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <Link to='/'>
            AZAD
          </Link>
        </div>

        {/* 2nd Menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="#Hero" data-text="&nbsp;Home&nbsp;">&nbsp;Home&nbsp;</a>
            </li>
            <li>
              <a href="#About" data-text="&nbsp;About&nbsp;">&nbsp;About&nbsp;</a>
            </li>
            <li>
              <a href="#Resume" data-text="&nbsp;Resume&nbsp;">&nbsp;Resume&nbsp;</a>
            </li>
            <li>
              <a href="#Project" data-text="&nbsp;Project&nbsp;">&nbsp;Project&nbsp;</a>
            </li>
            <li>
              <a href="#Blog" data-text="&nbsp;Blog&nbsp;">&nbsp;Blog&nbsp;</a>
            </li>
            <li>
              <a href="#Contact" data-text="&nbsp;Contact&nbsp;">&nbsp;Contact&nbsp;</a>
            </li>
          </ul>
        </div>

        {/* 3rd Menu part */}
        <div className="menu-3">
          {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <div className="pointer" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </div>
          </div>

          {/* theme */}
          <div className="theme_box">
            <DarkMode></DarkMode>
          </div>
        </div>
      </nav >
    </>
  );
};

export default Navbar;
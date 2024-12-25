import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Resume from "../Resume";
import Project from "../../components/Project";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Top from "../../components/Top";
import Sidebar from "../../components/Sidebar";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Project></Project>
      <Blog></Blog>
      <Contact></Contact>
      <Sidebar></Sidebar>
      <Top></Top>
    </div>
  );
};

export default HomePage;

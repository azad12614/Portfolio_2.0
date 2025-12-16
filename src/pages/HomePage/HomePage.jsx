import About from "../../components/About";
import Awards from "../../components/Awards";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Project from "../../components/Project";
import Sidebar from "../../components/Sidebar";
import Top from "../../components/Top";
import Resume from "../Resume";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Project></Project>
      <Awards></Awards>
      <Blog></Blog>
      <Contact></Contact>
      <Sidebar></Sidebar>
      <Top></Top>
    </div>
  );
};

export default HomePage;

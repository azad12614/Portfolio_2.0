import React from 'react';
import "./HomePage.css"
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Resume from '../../components/Resume';
import Project from '../../components/Project';
import Blog from '../../components/Blog';
import Contact from '../../components/Contact';

const HomePage = () => {
    return (
        <div id="Home">
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Resume></Resume>
            <Project></Project>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    )
}

export default HomePage
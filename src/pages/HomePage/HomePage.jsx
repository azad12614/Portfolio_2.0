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
    // const particleContainer = document.querySelector('.particles');
    // const starBackground = document.querySelector('.star-background');

    // for (let i = 0; i < 100; i++) {
    //     const particle = document.createElement('div');
    //     particle.classList.add('particle');
    //     particle.style.top = `${Math.random() * 100}vh`;
    //     particle.style.left = `${Math.random() * 100}vw`;
    //     particle.style.animationDelay = `${Math.random() * 10}s`;
    //     particleContainer.appendChild(particle);
    // }

    // for (let i = 0; i < 300; i++) {
    //     const star = document.createElement('div');
    //     star.classList.add('star');
    //     star.style.top = `${Math.random() * 100}vh`;
    //     star.style.left = `${Math.random() * 100}vw`;
    //     starBackground.appendChild(star);
    // }

    return (
        <div id="Home">
            <div class="particles"></div>
            <div class="star-background"></div>
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
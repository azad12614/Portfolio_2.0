import React from 'react';
import "./Blog.css";
import Top from "../assets/10.png";
import AI from "../assets/AI.png";
import Copyleaks from "../assets/Copyleaks.png";
import ML from "../assets/ML.png";

const Blog = () => {
    return (
        <div class="blog" id="Blog">
            <h2 class="header">BLOG</h2>
            <p class="title">
                “Software is really about humanity, that it’s really about helping people
                by using computer technology”
            </p>
            <div class="info">
                <div class="items">
                    <div class="dis">
                        <a href="https://acoderbro.blogspot.com/2024/04/10programminglanguages.html" target="_blank">Programming</a>
                        <p>The Top 10 Programming Languages To Learn In 2024</p>
                    </div>
                    <img src={Top} alt="" />
                </div>
                <div class="items">
                    <div class="dis">
                        <a href="https://acoderbro.blogspot.com/2024/05/ai-for-coders.html" target="_blank">AI for Coders</a>
                        <p>Essential Tools and Libraries to Supercharge Your Workflow</p>
                    </div>
                    <img src={AI} alt="" />
                </div>
                <div class="items">
                    <div class="dis">
                        <a href="https://acoderbro.blogspot.com/2024/04/Copyleaks.html" target="_blank">The Mystery of Copyleaks</a>
                        <p>Copyleaks is a cutting-edge plagiarism detection software.</p>
                    </div>
                    <img src={Copyleaks} alt="" />
                </div>
                <div class="items">
                    <div class="dis">
                        <a href="https://acoderbro.blogspot.com/2024/05/machine-learning.html" target="_blank">Machine Learning</a>
                        <p>From Sci-Fi Fantasy to Superheroes of Everyday Life</p>
                    </div>
                    <img src={ML} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Blog;
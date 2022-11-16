import React from 'react';
import '../App.css';
import './HeroSection.css';
import Video from './video1.mp4';

function GuidelinesSection() {
    return (
        <div className='hero-container'>

            <video controls autostart autoPlay loop src={Video} type="video/mp4" />

            <h1>Project Guidelines</h1>

            <h2>The Mission:</h2>
            <h0>The goal of this project is to create an easily accessible platform to analyze </h0>
            <h0>the color scheme of other websites. Our algorithm will try to find colors that conflict,</h0>
            <h0> to ensure that a website is accessible for all types of color deficiency.</h0>
            <h1></h1>

            <h2>Milestones:</h2>
            <h3>Sprint 1 </h3>
            <h0>We discussed different project ideas and decided to create something that improved accessibility.</h0>

            <h3>Sprint 2 </h3>
            <h0>We laid out all of the functional and non functional requirements. </h0>

            <h3>Sprint 3 </h3>
            <h0>We used class diagrams and sequence diagrams with pseudocode to create an outline of the website.</h0>

            <h3>Sprint 4 </h3>
            <h0>We created the project on local servers, debugged the most important errors, and refactored our code.</h0>

            <h3>Sprint 5 </h3>
            <h0>We conducted software testing on all possible cases to prioritize our debugging. </h0>

        </div>
    );
}

export default GuidelinesSection;
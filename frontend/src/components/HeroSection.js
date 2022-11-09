//This is the hero of the website and its essentially the home page

import React from 'react';
import '../App.css';
import { SearchBar } from './SearchBar';
import './HeroSection.css';
//import logo from '/gif1.gif';

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <h1>Does your website utilize an accessible color scheme?</h1>
            <h2>Lets find out.</h2>

             <SearchBar/>

        </div>
    );
}

export default HeroSection;

//<video src='/videos/video-1.mp4' autoPlay loop muted />
//This is the hero of the website and its essentially the home page

import React from 'react';
import '../App.css';
import { SearchBar } from './SearchBar';
import './HeroSection.css';
import Video from './video1.mp4';
//import logo from '/gif1.gif';

function HeroSection(props) {
    return (
        <div className='hero-container'>
            
            <video controls autostart autoPlay loop src={Video} type="video/mp4" />

            <h1>Does your website utilize an accessible color scheme?</h1>
            <h2>Lets find out.</h2>

             <SearchBar setColors={props.setColors}/>

        </div>
    );
}

export default HeroSection;

//<video src='/videos/video-1.mp4' autoPlay loop muted />
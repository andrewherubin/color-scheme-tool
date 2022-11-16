import React from 'react';
import '../App.css';
import { SearchBar } from './SearchBar';
import './HeroSection.css';
import Video from './video1.mp4';
//import Colors from '../colors.txt';

function ResultsSection() {
    return (

        <div className='hero-container'>

            <video controls autostart autoPlay loop src={Video} type="video/mp4" />

            <SearchBar />

            <h1>Top 8 Colors:</h1>

        </div>
    );
}

export default ResultsSection;
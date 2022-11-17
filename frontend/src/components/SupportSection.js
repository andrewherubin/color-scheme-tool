import React from 'react';
import '../App.css';
import './HeroSection.css';
import Video from './video1.mp4';

function SupportSection() {
    return (
        <div className='hero-container'>

            <video controls autostart autoPlay loop src={Video} type="video/mp4" />

            <h1>Please email colorschemetoolunt@gmail.com for support!</h1>


            

        </div>
    );
}

export default SupportSection;

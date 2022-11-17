import React from 'react';
import '../App.css';
import { SearchBar } from './SearchBar';
import './HeroSection.css';
import Video from './video1.mp4';
//import Colors from '../colors.txt';

/*
** TODO: Conditional Color Rendering
** props.colors is an array contain 0-8 hex values
** create divs corresponding to props.colors.length
** use the corresponding hex values to display colors for those divs
**
** create 8 divs with corresponding css ids
** use a function to change the css values for each id based on the hex values in props.colors
**
** for release 2
** we can settle for just a prettier way of showing the hex values
*/

function ResultsSection(props) {
    return (

        <div className='hero-container'>

            <video controls autostart autoPlay loop src={Video} type="video/mp4" />

            <SearchBar setColors={props.setColors}/>

            <h1>Top 8 Colors:</h1>
            <h2>1) {props.colors[0]}</h2>
            <h2>2) {props.colors[1]}</h2>
            <h2>3) {props.colors[2]}</h2>
            <h2>4) {props.colors[3]}</h2>
            <h2>5) {props.colors[4]}</h2>
            <h2>6) {props.colors[5]}</h2>
            <h2>7) {props.colors[6]}</h2>
            <h2>8) {props.colors[7]}</h2>

        </div>
    );
}

export default ResultsSection;

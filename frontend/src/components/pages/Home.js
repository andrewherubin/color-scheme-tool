import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home(props) {
    return (
        <>
            <HeroSection setColors={props.setColors} />
            <Footer />
        </>
    );
}

export default Home;

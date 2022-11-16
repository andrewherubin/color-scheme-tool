import React from 'react';
import '../../App.css';
import ResultsSection from '../ResultsSection';
import Footer from '../Footer';

function Results(props) {
    return (
        <>
            <ResultsSection setColors={props.setColors} colors={props.colors} />
            <Footer />

        </>
    );
}

export default Results;

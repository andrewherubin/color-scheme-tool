import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Results from './components/pages/Results';
import Guidelines from './components/pages/Guidelines';
import Support from './components/pages/Support';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  // app state for colors
  const colors = []

  /*
  ** sets state
  ** colorsList is an array of colors
  ** setColors is a function used to change array
  */
  const [colorsList, setColors] = useState(colors)

  const newColors = (arr) => {
    setColors(arr)
  }

  return (
    <>
          <Router>
              <Navbar />

              <Routes>
                  <Route exact path="/" element={<Home setColors={newColors} />} />
                  <Route exact path="/project-guidlines" element={<Guidelines />} />
                  <Route exact path="/results" element={<Results setColors={newColors} colors={colorsList} />} />
                  <Route exact path="/support" element={<Support />} />
              </Routes>
          </Router>

    </>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Results from './components/pages/Results';
import Guidelines from './components/pages/Guidelines';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {


  return (
    <>
          <Router>
              <Navbar />

              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/project-guidlines" element={<Guidelines />} />
                  <Route exact path="/results" element={<Results />} />
              </Routes>

          </Router>

    </>
  );
}

export default App;

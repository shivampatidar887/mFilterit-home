import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Screens/Navbar";
import Content from './Screens/Content';
import Footer from './Screens/Footer';
import HeroContent from './Screens/HeroContent';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/hero-content" element={<HeroContent />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;

// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Statistics from './pages/Statistics';
import Khaled from './pages/Khaled';
import Hesham from './pages/Hesham';
import Nedal from './pages/Nedal';
import Omar from './pages/Omar';
import Ammar from './pages/Ammar';
import Hamas from './pages/Hamas';





function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/khaled" element={<Khaled />} />
            <Route path="/hesham" element={<Hesham />} />
            <Route path="/nedal" element={<Nedal />} />
            <Route path="/omar" element={<Omar />} />
            <Route path="/ammar" element={<Ammar />} />
            <Route path="/hamas" element={<Hamas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

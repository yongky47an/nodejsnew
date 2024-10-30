import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';




const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
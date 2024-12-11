// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';




import './index.css'; // Make sure to include your Tailwind CSS here



const App = () => {
  return (
    <div  className='overflow-hidden'>
    
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />

     
    </div>
  );
};

export default App;

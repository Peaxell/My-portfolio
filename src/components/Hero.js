// src/components/Hero.jsx
import React from 'react';
import image from './Image/proj12.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWebAwesome } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div id="home" className=" w-full bg-cover bg-center text-transparent text-center h-screen overflow-hidden  z-30" 
      style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image}) `}}>
        
      
      
  
      <div className="flex  flex-col  gap-14 items-center justify-center h-full bg-black bg-opacity-50">
      <h1 className="text-7xl text-orange-100 font-bold translate-y-36 -mb-5 "><FontAwesomeIcon icon={faWebAwesome}/></h1>
      <h1 className="md:text-7xl text-yellow-50 font-bold translate-y-40  text-4xl  font-mono ">TECHGAR</h1>
        <h1 className="md:text-7xl font-bold translate-y-40  text-yellow-50 font-mono  text-4xl ">Welcome to My Portfolio</h1>
        <a href="#project" className=" mx-auto  my-auto px-14 py-3 font-bold translate-y-10  hover:bg-yellow-50 hover:border-none  bg-transparent border hover:text-black text-white rounded transition-transform transform   hover:scale-105">
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;

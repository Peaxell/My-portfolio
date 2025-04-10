// src/components/ScrollToTop.jsx
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down 300 pixels
      if (window.scrollY > 300) {
        setVisible(true); // Show the button
      } else {
        setVisible(false); // Hide the button
      }
    };

    window.addEventListener('scroll', handleScroll); // Add event listener for scroll

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <Link to="home" smooth={true} duration={500} className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-opacity-80">
        <FontAwesomeIcon icon={faArrowUp}  className='cursor-pointer'/>
      </Link>
    </div>
  );
};

export default ScrollToTop;

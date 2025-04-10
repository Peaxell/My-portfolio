// Importing necessary icons from FontAwesome for navigation functionality
import { faHouseTsunami } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Importing React and useState for managing state within the component
import React, { useState } from 'react';

// Defining the sections of the website that the navbar will navigate to
const sections = ['home', 'about', 'skills', 'project', 'contact'];

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling to a specific section
  const handleScroller = (section) => {
    // Find the section by its ID
    const element = document.getElementById(section);
    if (element) {
      // Scroll to the section smoothly
      element.scrollIntoView({ behavior: 'smooth' });
      // Close the mobile menu after navigating
      setIsOpen(false);
    }
  };

  return (
    // Navigation bar container with fixed positioning and styling for a shadow effect
    <nav className="fixed text-white top-0 w-full bg-gray-800 shadow-md z-10">
      {/* Inner container for aligning the logo and menu items */}
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo section with FontAwesome icon and brand name */}
        <h1 className="text-2xl font-bold">
          <FontAwesomeIcon
            className="text-4xl translate-y-1 text-accent"
            icon={faHouseTsunami}
          />{' '}
          TECHGAR
        </h1>

        {/* Mobile menu toggle button (hamburger icon or close icon based on state) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Navigation menu (responsive: hidden by default on smaller screens) */}
        <ul
          className={`${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:bg-transparent  
          flex-col absolute top-full -right-3/4 p-4 md:w-auto md:right-0 w-full 
          md:relative md:top-0 md:rounded-none md:p-0 rounded-4xl rounded-tl-none bg-gray-800`}
        >
          {/* Dynamically rendering menu items based on the `sections` array */}
          {sections.map((section) => (
            <li className="text-new" key={section}>
              {/* Button to handle smooth scrolling to the respective section */}
              <button
                className="px-5 py-1 rounded-lg hover:bg-accent"
                onClick={() => handleScroller(section)}
              >
                {/* Capitalize the first letter of the section name */}
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

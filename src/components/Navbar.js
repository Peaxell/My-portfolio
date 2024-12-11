// src/components/Navbar.jsx
import { faHouseTsunami } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';

 const sections = ['home' , 'about',  'skills' ,  'project'  ,  'contact'];

  
const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);



    const handleScroller =(section)=>{


        const element = document.getElementById(section)
        if (element){

            element.scrollIntoView({behaviors:'smooth'});

            setIsOpen(false);
        }
    }



  return (
    <nav className="fixed   text-white top-0 w-full bg-gray-800 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold"> <FontAwesomeIcon  className='text-4xl translate-y-1 
          text-accent'  icon={faHouseTsunami}/> TECHGAR</h1>

          <div  className='md:hidden'> <button onClick={()=>{
            setIsOpen(!isOpen)
          }}> <FontAwesomeIcon   icon={isOpen ? faTimes : faBars}/></button>
          
          
          </div>
        <ul  className={`${isOpen? 'flex' : 'hidden'} md:flex md:flex-row  md:bg-transparent  
        flex-col absolute top-full -right-3/4 p-4  md:w-auto  md:right-0 w-full 
        md:relative  md:top-0 md:rounded-none  md:p-0 rounded-4xl rounded-tl-none bg-gray-800`}>


            {sections.map((section)=>(

                <li className='text-new  ' key={section}>


                    <button className='  px-5 py-1 rounded-lg  hover:bg-accent' onClick={()=>{
                        handleScroller(section)
                    }} >


                    {section.charAt(0).toUpperCase()  + section.slice(1)}
                    </button>

                </li>
            ))}
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

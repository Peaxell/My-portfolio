// src/components/Contact.jsx
import React from 'react';
import img from './Image/3.jpg';

const Contact = () => {
  return (
    <section id="contact" className="flex   h-full flex-col  justify-between pt-20  md:w-full  overflow-hidden text-primary">
      <h2 className="text-3xl pb-5 font-semibold text-grey-900 text-center mb-4">Contact Me</h2>

      <div className="contact md:h-h10 m-auto bg-gray-100  flex md:w-w95 flex-col md:flex-row rounded-lg p-10 w-full shadow-lg">
        
        <img className="h-full w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6" src={img} alt="Contact" />

        <div className="container  w-full">
          <form className="mt-2 ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border  rounded mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
              rows="8"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 bg-accent text-white rounded hover:bg-opacity-80 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="py-2 bg-gray-800 text-white text-center mt-4  mb-5">
        <p>&copy; 2024 TECH-GAR. All rights reserved.</p>
        <div className="mt-1">
          <a href="#home" className="text-white hover:underline">Back to Top</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

// src/components/Section.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      exit={{ opacity: 0, y: 50 }} // Fade out and move down when exiting
      transition={{ duration: 0.5 }} // Smooth transition
      className="py-20" // Space out sections vertically
      viewport={{ once: false }} // Allows re-animation if scrolled back up
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default Section;

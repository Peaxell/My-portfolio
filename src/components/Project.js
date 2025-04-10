// Importing React and image assets for the project cards
import React from 'react';
import image1 from './Image/proj1.jpg';
import image2 from './Image/proj2.jpg';
import image3 from './Image/proj3.jpg';

const Projects = () => {
  // Array containing project data, including title, description, and image
  const projects = [
    {
      title: "Creative Portfolio Showcase",
      description: "Developed this portfolio with smooth transitions, responsiveness, and navigation.",
      img: image1,
    },
    {
      title: "Institution Website Replica",
      description: "Recreated a school website frontpage with added simplicity, focusing on accessibility and usability.",
      img: image2,
    },
    {
      title: "Modern E-Commerce Redesign",
      description: "Redesigned an e-commerce demo site to improve usability, resulting in better rendition and accessibility.",
      img: image3,
    },
  ];

  return (
    // Projects section container with responsive padding and height
    <section id="project" className="py-20 h-full md:h-screen text-primary">
      {/* Container for consistent page width and alignment */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Section title */}
        <h2 className="text-3xl font-semibold text-center">My Projects</h2>

        {/* Grid layout for displaying project cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:h-h10">
          {/* Iterating through the projects array to dynamically generate project cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 group"
            >
              {/* Project image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-h10 object-cover"
              />

              {/* Overlay for project description, shown on hover */}
              <div className="absolute bottom-0 p-5 pb-10 items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white z-50 text-1xl font-bold">
                  {project.description}
                </h3>
              </div>

              {/* Overlay for project title, hidden on hover */}
              <p className="absolute top-0 left-0 transform pt-phalf h-full w-full py-10 text-center bg-black bg-opacity-70 text-white text-xl px-3 rounded-lg opacity-100 group-hover:opacity-0 transition-opacity">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

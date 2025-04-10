// Importing React and necessary components for a circular progress bar
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  // Array of skills with names and proficiency levels (in percentage)
  const skills = [
    { name: "HTML", level: 90 },
    { name: "Tailwind Css", level: 85 },
    { name: "React", level: 65 },
    { name: "React js", level: 80 },
    // Add more skills if needed
  ];

  return (
    // Skills section container with padding, height, and background styles
    <section
      id="skills"
      className="pt-20 h-full pb-32 lg:pt-28 md:h-screen w-full bg-gray-800 text-white flex items-center justify-center"
    >
      {/* Centralized container for alignment */}
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-4xl font-bold text-center lg:-translate-y-40 md:pt-14 md:-translate-y-20 text-gray-200">
          My Skills
        </h2>

        {/* Grid layout for displaying skills dynamically */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 -translate-y-10 maxx:translate-y-14 lg:grid-cols-4 gap-8">
          {/* Mapping over the skills array to render each skill */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
            >
              {/* Circular progress bar representing skill proficiency */}
              <div className="w-44 h-44 mb-4 relative">
                <CircularProgressbar
                  value={skill.level} // Skill level determines the progress
                  text={`${skill.level}%`} // Display percentage inside the circle
                  styles={buildStyles({
                    // Styling the circular progress bar
                    pathColor: `hsl(${index * 60}, 70%, 50%)`, // Unique color for each skill based on index
                    textColor: "#fff", // White text color
                    trailColor: "#1a1a1a", // Dark trail color behind progress
                    textSize: "16px", // Size of the percentage text
                  })}
                />
              </div>
              {/* Skill name below the progress bar */}
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// src/components/Skills.jsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const skills = [
 
    { name: "HTML", level: 90 },
    { name: "Tailwind Css", level: 85 },
    { name: "React", level: 65 },
    { name: "React js", level: 80 },
  
    // Add more skills if needed
  ];

  return (
    <section id="skills" className="pt-20 h-full pb-32 lg:pt-28 md:h-screen w-full bg-gray-800 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center lg:-translate-y-40 md:pt-14  text-gray-200   ">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 -translate-y-10  maxx:translate-y-14 lg:grid-cols-4 gap-8   ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-44 h-44 mb-4 relative">
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    pathColor: `hsl(${index * 60}, 70%, 50%)`, // Use unique colors for each skill
                    textColor: "#fff",
                    trailColor: "#1a1a1a",
                    textSize: "16px",
                  })}
                />
              </div>
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

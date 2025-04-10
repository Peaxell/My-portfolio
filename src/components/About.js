// Importing images to use in the About component
import img1 from './Image/proj4.jpg'; 
import img2 from './Image/proj10.jpg'; 
import img3 from './Image/proj6.jpg';

// The About component defines the "About Me" section of the website
const About = () => {
  return (
    // Main section for the About Me component with specific styling for layout and responsiveness
    <section
      id="about"
      className="pt-40 h-full justify-center text-center md:text-1xl md-min:h-full md:h-screen md:pb-56 m-auto bg-gray-900 text-orange-500 font-thin"
    >
      {/* Section title */}
      <h2 className="text-3xl font-semibold text-center -mt-20 pb-7">About Me</h2>

      {/* Container for the introductory paragraph */}
      <div className="container mx-auto px-2 md:px-2">
        <p className="text-1xl leading-relaxed text-center md:w-w4 m-auto">
          Hi, I'm <span className="font-semibold">Olajide Michael</span>, a Frontend web developer with a passion for crafting interactive, 
          user-centered experiences. I possess about <span className="font-semibold">two years</span> of expertise in Website creation, using skills like HTML, CSS, React, React JS, and Tailwind CSS.
        </p>
      </div>

      {/* Section for displaying images and additional descriptive paragraphs */}
      <div className="flex flex-col md-min:w-w10 gap-8 md:flex-row md-min:m-auto md:m-auto md-min:gap-48 md:gap-0 mx-auto md-min:-translate-y-10 md-min:justify-center">
        
        {/* First card: Personal design philosophy */}
        <div className="w-72 m-auto mt-8 mx-auto text-center">
          <img
            src={img1} 
            alt="Design-focused image" 
            className="md-min:w-w6 md-min:h-h6 mx-auto w-w10s h-h10s object-cover rounded-full"
          />
          <p className="w-64 mt-3 text-center mx-auto">
            I believe in blending creativity with precision, making every project a unique journey towards impactful design.
          </p>
        </div>

        {/* Second card: Inspiration from nature */}
        <div>
          <div className="w-72 m-auto md:-translate-x-7 md:translate-y-52 md-min:translate-y-40">
            <img
              src={img3}
              alt="Nature-inspired design"
              className="object-cover mx-auto rounded-full md-min:w-w6 md-min:h-h6 w-w10s h-h10s"
            />
            <p className="text-center mt-3">
              I’m an avid designer and explorer, constantly inspired by nature’s beauty to bring fresh ideas to my work.
            </p>
          </div>
        </div>

        {/* Third card: Personal achievements and skills */}
        <div className="w-72 text-center max-md:-translate-x-12 maxx:translate-x-0 m-auto mt-8 pb-10">
          <img
            src={img2}
            alt="Personal achievements"
            className="object-cover mx-auto rounded-full md-min:w-w6 md-min:h-h6 w-w10s h-h10s"
          />
          <p className="w-64 mt-3 mx-auto text-center">
            Outside of coding, I am a <span className="font-semibold">first-class graduate of electrical and electronic engineering,</span> 
            an AutoCAD advanced user, and a versatile technical report writer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

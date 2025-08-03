import React from "react";
import logo5 from "../../assets/logo5.png";
import htmllogo from "../../assets/htmllogo.png";
import cssimg from "../../assets/cssimg.png";
import js_logo from "../../assets/js_logo.png";
import react_logo from "../../assets/react_logo.png";
import bootstrap from "../../assets/bootstrap.png";
import git_github from "../../assets/git_github.png";
import vslogo from "../../assets/vslogo.png";
import tailwind from "../../assets/tailwind.png";
import node_logo from "../../assets/node.png";
import mongo_logo from "../../assets/mongodb (1).png";
import express_logo from "../../assets/express (2).png";
import Marquee from "react-fast-marquee";

const skills = [
  { name: "HTML", logo: htmllogo },
  { name: "CSS", logo: cssimg },
  { name: "JavaScript", logo: js_logo },
  { name: "React", logo: react_logo },
  { name: "Bootstrap", logo: bootstrap },
  { name: "Tailwind", logo: tailwind },
  { name: "Git & GitHub", logo: git_github },
  { name: "Node", logo: node_logo },
  { name: "Express", logo: express_logo },
  { name: "MongoDB", logo: mongo_logo },
];

const About = () => {
  return (
    <div className="about bg-black text-white py-20 px-6 md:px-16" id="aboutme">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          ABOUT ME
        </h1>
      </div>

      <div className="about-para max-w-4xl mx-auto text-center text-lg leading-relaxed text-gray-300 mb-12 animate-slide-up">
        <p>
          I’m an aspiring MERN stack developer with hands-on experience in HTML,
          CSS, JavaScript, and DOM manipulation. I’m currently learning modern
          technologies like React, Node.js, Express, and MongoDB to build
          dynamic and responsive full-stack web applications.
        </p>
        <br />
        <p>
          I'm passionate about continuous learning, solving real-world problems,
          and bringing ideas to life through code. I enjoy working in
          collaborative environments, learning from others, and contributing to
          meaningful digital solutions.
        </p>
        <br />
        <p>
          I'm passionate about continuous learning, solving problems & My goal
          is to grow every day as a developer and make a positive impact through
          technology
        </p>
      </div>

      <div className="skills text-center mb-8 animate-fade-in">
        <h3 className="text-3xl font-semibold mb-2 text-teal-400">MY SKILLS</h3>
      </div>

      <div className="marquee py-4 rounded-xl mb-12 shadow-inner animate-slide-in">
        <Marquee
          gradient
          gradientColor="#0f0f0f"
          gradientWidth="50px"
          speed={60}
          pauseOnHover
        >
          {[
            htmllogo,
            cssimg,
            js_logo,
            react_logo,
            bootstrap,
            git_github,
            vslogo,
            htmllogo,
            cssimg,
            js_logo,
            react_logo,
            bootstrap,
            git_github,
            vslogo,
          ].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="skill logo"
              className="mx-6 h-12 md:h-16 hover:scale-110 transition-transform duration-300"
              style={img === js_logo ? { height: "40px" } : {}}
            />
          ))}
        </Marquee>
      </div>

      <div className="about-skills max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center animate-fade-in">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="about-skills-item bg-[#1a1a1a] py-4 px-2 rounded-lg shadow-md hover:shadow-purple-500/40 transition-all duration-300 flex flex-col items-center"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 mb-3 object-contain"
            />
            <p className="text-teal-300 font-medium text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

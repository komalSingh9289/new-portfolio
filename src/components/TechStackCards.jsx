import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiHtml5, SiCss3, SiJavascript,  } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact size={40} />, color: "rgb(97,218,251)" },
  { name: "Node.js", icon: <FaNodeJs size={40} />, color: "rgb(83,181,72)" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, color: "rgb(0,128,0)" },
  { name: "Express", icon: <SiExpress size={40} />, color: "rgb(111,111,111)" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, color: "rgb(56,189,248)" },
  { name: "HTML5", icon: <SiHtml5 size={40} />, color: "rgb(227,76,38)" },
  { name: "CSS3", icon: <SiCss3 size={40} />, color: "rgb(38,77,228)" },
  { name: "JavaScript", icon: <SiJavascript size={40} />, color: "rgb(240,219,79)" },
  { name: "Git", icon: <FaGitAlt size={40} />, color: "rgb(240,80,51)" },

];

const TechStackCards = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute"
        style={{
          '--w': '120px',
          '--h': '120px',
          '--translateZ': '250px',
          '--rotateX': '-15deg',
          '--perspective': '1000px',
          width: 'var(--w)',
          height: 'var(--h)',
          top: '25%',
          left: 'calc(50% - (var(--w)/2) - 2.5px)',
          transformStyle: 'preserve-3d',
          animation: 'rotating 20s linear infinite',
        }}
      >
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="absolute rounded-xl border flex items-center justify-center overflow-hidden shadow-lg"
            style={{
              '--index': index,
              '--quantity': techStack.length,
              inset: 0,
              borderColor: tech.color,
              transform: `rotateY(calc((360deg / ${techStack.length}) * ${index})) translateZ(var(--translateZ))`,
            }}
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes rotating {
          from {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
          }
          to {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TechStackCards;

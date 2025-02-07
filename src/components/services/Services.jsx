import { useRef, useState } from "react";
import "./services.scss";
import { motion, useScroll, useTransform } from "framer-motion";

// Initial Tech Stack
const techStack = [
  { name: "HTML", description: "Structuring and organizing web content", img: "/html1.png" },
  { name: "CSS", description: "Styling and designing web pages", img: "/CSS.png" },
  { name: "JAVASCRIPT", description: "Adding interactivity to websites", img: "/js.png" },
  { name: "TAILWIND CSS", description: "Utility-first CSS framework", img: "/tailwind.png" },
  { name: "TYPESCRIPT", description: "JavaScript with static types", img: "/ts.png" },
  { name: "REACT", description: "Creating dynamic user experiences", img: "/react.png" },
  { name: "FIGMA", description: "Designing and prototyping user interfaces", img: "/figma.webp" },
  { name: "NODEJS", description: "Building scalable backend services", img: "/nodejs.png" },
  { name: "MONGODB", description: "NoSQL database for modern applications", img: "/mongodb.png" },  
  { name: "Firebase", description: "Backend services for mobile & web", img: "/firebase.png" },
];

const Services = () => {
  const ref = useRef();
  const [hoveredTech, setHoveredTech] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: ref });

  const yPositions = techStack.map((_, index) =>
    useTransform(scrollYProgress, [0, 1], [`${index * 50}px`, "0px"])
  );

  const handleMouseMove = (e, tech) => {
    setHoveredTech(tech);
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <div className="services" ref={ref}>
      <div className="left">
        <h1>FRONTEND & <br />BACKEND TECH</h1>
        <p>
          Craft seamless, engaging experiences that captivate users,
          leveraging top-notch tools to bring your vision to reality.
        </p>
      </div>

      <div className="right">
        <div className="tech-list">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-item"
              style={{ y: yPositions[index] }}
              onMouseMove={(e) => handleMouseMove(e, tech)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="tech-info">
                <span className="tech-name">{tech.name}</span>
                <span className="separator">_</span>
                <span className="tech-desc">{tech.description}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {hoveredTech && (
          <motion.img
            src={hoveredTech.img}
            alt={hoveredTech.name}
            className="floating-logo"
            style={{
              left: cursorPosition.x + 10 + "px",
              top: cursorPosition.y + 10 + "px",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </div>
    </div>
  );
};

export default Services;

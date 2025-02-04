import { useRef, useState } from "react";
import "./services.scss";
import { motion, useScroll, useTransform } from "framer-motion";

// Initial Tech Stack
const initialTechStack = [
  { name: "React", description: "Creating dynamic user experiences", img: "/react.png" },
  { name: "Next.js", description: "Server-side rendering & static site generation", img: "/nextjs.png" },
  { name: "Node.js", description: "Building scalable backend services", img: "/nodejs.png" },
  { name: "Express.js", description: "Minimal and flexible backend framework", img: "/express.png" },
  { name: "MongoDB", description: "NoSQL database for modern applications", img: "/mongodb.png" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework", img: "/tailwind.png" },
  { name: "Framer Motion", description: "Smooth animations for React", img: "/framer.png" },
];

// Additional Tech Stack (Revealed on Button Click)
const moreTechStack = [
  { name: "Redux", description: "State management for scalable apps", img: "/redux.png" },
  { name: "TypeScript", description: "JavaScript with static types", img: "/typescript.png" },
  { name: "GraphQL", description: "Efficient data fetching", img: "/graphql.png" },
  { name: "Docker", description: "Containerizing applications", img: "/docker.png" },
  { name: "Kubernetes", description: "Automating deployment & scaling", img: "/kubernetes.png" },
  { name: "Firebase", description: "Backend services for mobile & web", img: "/firebase.png" },
];

const Services = () => {
  const ref = useRef();
  const [showMore, setShowMore] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: ref });

  // Full list of techs
  const techStack = showMore ? [...initialTechStack, ...moreTechStack] : initialTechStack;

  // Smooth scroll animation for tech items
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
      {/* Left Side - Text Content (1/3 of screen) */}
      <div className="left">
        <h1>FRONTEND & <br />BACKEND TECH</h1>
        <p>
          Design smooth, interactive experiences that captivate users, using the
          best tools to bring your vision to life.
        </p>
      </div>

      {/* Right Side - Tech Stack List (2/3 of screen) */}
      <div className="right">
        <div className="tech-list">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-box"
              style={{ y: yPositions[index] }}
              onMouseMove={(e) => handleMouseMove(e, tech)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="tech-info">
                <span className="tech-name">{tech.name}</span>
                <span className="separator">-</span>
                <span className="tech-desc">{tech.description}</span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Floating Tech Logo */}
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

        {/* Button to Show More Tech Stack */}
        {!showMore && (
          <motion.button
            className="show-more-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMore(true)}
          >
            More Tech Stack
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Services;

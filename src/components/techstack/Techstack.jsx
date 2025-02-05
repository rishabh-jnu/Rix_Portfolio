import { useRef, useState, useEffect } from "react";
import "./techstack.scss";
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
  { name: "Redux", description: "State management for scalable apps", img: "/redux.png" },
];

// Additional Tech Stack
const moreTechStack = [
  { name: "TypeScript", description: "JavaScript with static types", img: "/typescript.png" },
  { name: "GraphQL", description: "Efficient data fetching", img: "/graphql.png" },
  { name: "Docker", description: "Containerizing applications", img: "/docker.png" },
  { name: "Kubernetes", description: "Automating deployment & scaling", img: "/kubernetes.png" },
  { name: "Firebase", description: "Backend services for mobile & web", img: "/firebase.png" },
];

const TechStack = () => {
  const ref = useRef();
  const [showMore, setShowMore] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Prevent page scrolling until the user reaches the end of the TechStack section
  useEffect(() => {
    const handleWheel = (e) => {
      const bottomOfTechStack = ref.current.scrollHeight <= ref.current.scrollTop + ref.current.clientHeight;

      if (!bottomOfTechStack) {
        e.preventDefault();
      }
    };

    ref.current.addEventListener("wheel", handleWheel, { passive: false });
    return () => ref.current.removeEventListener("wheel", handleWheel);
  }, []);

  const yPositions = initialTechStack.map((_, index) =>
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
    <div className="techstack" ref={ref}>
      <div className="left">
        <h1>FRONTEND & <br />BACKEND TECH</h1>
        <p>
          Design smooth, interactive experiences that captivate users, using the
          best tools to bring your vision to life.
        </p>
      </div>

      <div className="right">
        <div className="tech-list">
          {initialTechStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-item"
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

        {showMore && (
          <div className="tech-list">
            {moreTechStack.map((tech) => (
              <motion.div
                key={tech.name}
                className="tech-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
        )}

        <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "More Tech Stack"}
        </button>

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

export default TechStack;

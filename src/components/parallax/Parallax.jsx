import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Apply smooth scrolling effect
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  // Adjusted yText transformation to prevent excessive downward movement
  const yText = useTransform(smoothScroll, [0, 1], ["0%", "80%"]);
  const yBg = useTransform(smoothScroll, [0, 1], ["0%", "40%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132,rgb(0, 0, 0))",
      }}
    >
      <motion.div className="text-container" style={{ y: yText }}>
        {type === "services" ? (
          <>
            <span className="elevate">Elevate.</span>
            <span className="subtext">From Code to Creation</span>
            <span className="tech-stack">TECHSTACK</span>
          </>
        ) : (
          <>
          <h1 className="elevate2">The <br/> Visionary <br />WorkSpace.</h1>
          <p className="subtext2">A space for groundbreaking ideas and showcase brilliance.</p>
          </>
          
        )}
      </motion.div>

      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "techstack" ? "/planet.png" : "/sunn.png"})`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;

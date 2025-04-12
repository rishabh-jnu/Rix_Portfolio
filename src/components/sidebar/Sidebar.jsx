import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const Sidebar = ({ isPlaying, toggleMusic, audioRef }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <Links />

        <motion.div className="sidebar-social">
          <a href="https://www.linkedin.com/in/rishabh-yadav-999112230/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://x.com/rishabhyad19" target="_blank" rel="noopener noreferrer">
            <img src="/x.png" alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/@jnuwalaengineer" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="YouTube" />
          </a>
          <a href="https://github.com/rishabh-jnu" target="_blank" rel="noopener noreferrer">
            <img src="/github.jpeg" alt="GitHub" />
          </a>
          <div className={`music-icon ${isPlaying ? "playing" : ""}`} onClick={toggleMusic}>
            <img src="/music1.png" alt="Music" />
          </div>
          <audio ref={audioRef} src="/spotifyOr.mp3"></audio>
        </motion.div>
      </motion.div>

      <ToggleButton open={open} setOpen={setOpen} />
    </>
  );
};

export default Sidebar;

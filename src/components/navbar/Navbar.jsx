import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMusic = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className={`navbar ${visible ? "visible" : "hidden"}`}
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <Sidebar isPlaying={isPlaying} toggleMusic={toggleMusic} audioRef={audioRef} />
      <div className="wrapper">
        <div className="name-container">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="name"
          >
            <span className="highlight">R</span>ISHABH
            <span className="superscript">
              <span className="highlight2">D</span>EV
            </span>
          </motion.span>

          <motion.span
            className="portfolio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            PORTFOLIO
          </motion.span>
        </div>

        {/* Social Media Links: only visible on desktop */}
        <div className="social">
          <a href="https://www.linkedin.com/in/rishabh-yadav-999112230/" target="_blank" rel="noopener noreferrer">
            <img className="github" src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://x.com/rishabhyad19" target="_blank" rel="noopener noreferrer">
            <img src="/x.png" alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/@jnuwalaengineer" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="YouTube" />
          </a>
          <a href="https://github.com/rishabh-jnu" target="_blank" rel="noopener noreferrer">
            <img className="github" src="/github.jpeg" alt="GitHub" />
          </a>
          <div className={`music-icon ${isPlaying ? "playing" : ""}`} onClick={toggleMusic}>
            <img src="/music1.png" alt="Music" />
          </div>
          <audio ref={audioRef} src="/spotifyOr.mp3"></audio>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

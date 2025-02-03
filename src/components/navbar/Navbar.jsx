import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  // State to track if music is playing
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Reference to the audio element
  const audioRef = useRef(null);

  // Function to toggle music playback
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
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
            <br />
          </motion.span>

          {/* Moving Portfolio */}
          <motion.span
            className="portfolio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            PORTFOLIO
          </motion.span>
        </div>

        {/* Social Icons */}
        <div className="social">
          <a href="https://x.com/rishabhyad19" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/@jnuwalaengineer" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="YouTube" />
          </a>
          <a href="https://github.com/rishabh-jnu" target="_blank" rel="noopener noreferrer">
            <img className="github" src="/github.jpeg" alt="GitHub" />
          </a>

          {/* Music Icon - Plays Music on Click */}
          <div className="music-icon" onClick={toggleMusic}>
            <img src="/music1.png" alt="Music" />
          </div>

          {/* Hidden Audio Player */}
          <audio ref={audioRef} src="/audio.mp3"></audio>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

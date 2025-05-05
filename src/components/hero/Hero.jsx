import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div className="text">
            <motion.h2 variants={textVariants}>
              <span className="highlight">H</span>EY,
              <span className="highlight">I</span>'m
              <span className="highlight">R</span>ISHABH
              <span className="superscript">
                <span className="highlight2">D</span>EV
              </span>
            </motion.h2>
            <motion.h1 variants={textVariants} className="developer-text">
              A YOUNG <span>DEVELOPER</span>
            </motion.h1>
          </div>


          {/* Updated Buttons */}
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              variants={textVariants}
              href="https://github.com/rishabh-jnu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button variants={textVariants} className="primary-btn">
                See the Latest Works
              </motion.button>
            </motion.a>


            {/* Anchor tag wrapping the button */}
            <motion.a
              variants={textVariants}
              className="secondary-btn"
              href="/Rishabh_Resume.pdf"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security enhancement
            >
              Download Resume
            </motion.a>
          </motion.div>



          {/* Scroll Image and Text */}
          <div className="scrollContainer">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/newscroll.png"
              alt=""
            />
            <span className="dive">Scroll to Dive</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Make It Work, Make It Right, Make It Fast
      </motion.div>
    </div>
  );
};

export default Hero;

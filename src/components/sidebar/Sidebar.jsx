import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";

const sidebarVariants = {
  open: {
    x: 0, // Slides in from the left
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  closed: {
    x: "-100%", // Moves out of the screen
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✖
        </button>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </>
  );
};

export default Sidebar;

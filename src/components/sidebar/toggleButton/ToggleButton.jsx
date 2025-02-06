import { motion } from "framer-motion";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <motion.button
      className="menu-toggle"
      onClick={() => setOpen((prev) => !prev)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg width="30" height="30" viewBox="0 0 23 23">
        {/* Top Line */}
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          animate={open ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 2 2.5 L 20 2.5" }}
        />

        {/* Middle Line - Disappears when sidebar is open */}
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          d="M 2 9.423 L 20 9.423"
        />

        {/* Bottom Line */}
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          animate={open ? { d: "M 3 2.5 L 17 16.346" } : { d: "M 2 16.346 L 20 16.346" }}
        />
      </svg>
    </motion.button>
  );
};

export default ToggleButton;

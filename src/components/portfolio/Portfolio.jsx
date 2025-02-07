import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "HEALTH MANAGEMENT",
    img: "marvel1.jpg",
    desc: " MERN Application for managing health records of patients and doctors.",
  },
  {
    id: 2,
    title: "BLOGAPP",
    img: "marvel2.jpg",
    desc: "BlogApp is a full stack application where users can create, read, update and delete blogs.",
  },
  {
    id: 3,
    title: "GYMVITEAPP",
    img: "marvel3.jpg",
    desc: "GymViteApp is a MERN application where Gymrates can take refrence for gym workouts.",
  },
  {
    id: 4,
    title: "CARBONFOOTPRINT",
    img: "thor.jpg",
    desc: "CarbonFootprint is a Front-End application where users can calculate their carbon footprint.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Take Tour</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Project Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import { FaSearch } from "react-icons/fa"; 
import avatar from "../assets/image/avatar.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/hero.css";

const slogans = [
  {
    heading: "Code Your Future, Today.",
    text: "Join us and unlock the doors to countless career possibilities. Our programs are designed to help you build job-ready skills that are in high demand. Whether you're starting from scratch or switching careers, coding gives you a powerful edge. It's not just about writing code; it's about shaping your future and staying ahead in a tech-driven world. Start your journey with us and become the coder you've always wanted to be."
  },
  {
    heading: "From Basics to Brilliance in Code.",
    text: "We believe that great coders are built, not born. That’s why our courses begin with the fundamentals and progress toward advanced topics at a comfortable pace. Every module is crafted with care and supported by real-world exercises, so you truly understand the 'why' behind the 'how'. Our instructors are always available to guide you, helping turn beginners into confident developers with a strong problem-solving mindset."
  },
  {
    heading: "Where Coding Meets Career.",
    text: "We don’t just teach you how to code — we prepare you for real tech jobs. From building professional portfolios to working on real-world projects, we bridge the gap between learning and employment. We collaborate with companies, host industry sessions, and simulate actual coding interviews. Our curriculum evolves with market needs, ensuring you’re not just learning — you’re growing toward your ideal career path."
  },
  {
    heading: "Coding from Scratch with Expert Guidance.",
    text: "You don’t need a tech background to begin. Our learning paths are beginner-friendly and designed to gradually introduce complex concepts in simple terms. You’ll receive step-by-step instruction, 1-on-1 mentorship, and plenty of hands-on practice. By the end of your journey, you'll not only understand code but be able to build full-fledged applications from the ground up — all with expert support at every turn."
  },
  {
    heading: "Build Real Skills for Real Jobs.",
    text: "Learning to code is only half the battle — applying those skills is what matters most. That’s why we focus on practical, job-ready outcomes. From APIs to databases, UI/UX to backend logic — you’ll work on projects that mirror actual company challenges. By the time you complete the program, you’ll have built apps, solved algorithm problems, and gained the confidence to take on technical roles in any organization."
  },
];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  const [expanded, setExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-container">
      <motion.div
        className="slogan-carousel"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Slider {...settings}>
          {slogans.map(({ heading, text }, idx) => (
            <div key={idx} className="slogan-slide">
              <h2 className="slogan-heading">{heading}</h2>
              <p className="slogan-text">{text}</p>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Responsive Search Box */}
      <motion.div
        className="search-box"
        initial={{ width: 40 }}
        animate={{
          width:
            windowWidth > 1024
              ? expanded
                ? 420
                : 40
              : expanded
                ? windowWidth - 40  // leave 20px margin on both sides
              : 40,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ display: "flex", alignItems: "center", overflow: "hidden" }}
      >
        <AnimatePresence>
          {expanded && (
            <motion.input
              key="input"
              type="text"
              placeholder="Search courses..."
              className="search-input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ flex: 1, marginRight: 10, borderRadius: "13px 0 0 13px" }}
            />
          )}
        </AnimatePresence>

        <motion.button
          className="search-button"
          aria-label="Search"
          initial={{ rotate: 0 }}
          animate={{ rotate: expanded ? 360 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ borderRadius: "0 13px 13px 0" }}
        >
          <FaSearch size={18} />
        </motion.button>
      </motion.div>
      <motion.div className="image-wrapper">
        <motion.img
          src={avatar}
          alt="Avatar"
          className="hero-image"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
}

export default Hero;
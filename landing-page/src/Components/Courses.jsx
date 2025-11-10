import React from "react";
import { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CourseContext } from "../Context/CourseContext";
import "../css//courses.css";

const CourseCard = ({ course }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="course-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 2 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1], // cubic-bezier spline
      }}
    >
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-name">{course.title}</div>
    </motion.div>
  );
};

function Courses() {
  const {courses} = useContext(CourseContext)
  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Top Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
